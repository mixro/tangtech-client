import { getToken } from './storage'

const BASE_URL = import.meta.env.VITE_API_URL ?? 'https://tangtech-server.onrender.com/api'
const TIMEOUT_MS = 60_000 // the API host can take a while to wake from idle

export class ApiError extends Error {
  status: number
  constructor(message: string, status = 0) {
    super(message)
    this.status = status
  }
}

interface Options {
  method?: 'GET' | 'POST'
  body?: unknown
  auth?: boolean
  retries?: number
}

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms))

export async function request<T>(path: string, { method = 'GET', body, auth, retries = 0 }: Options = {}): Promise<T> {
  const headers: Record<string, string> = {}
  if (body !== undefined) headers['Content-Type'] = 'application/json'
  if (auth) {
    const token = getToken()
    if (token) headers.token = `Bearer ${token}`
  }

  for (let attempt = 0; ; attempt++) {
    const ctrl = new AbortController()
    const timer = setTimeout(() => ctrl.abort(), TIMEOUT_MS)
    try {
      const res = await fetch(BASE_URL + path, {
        method,
        headers,
        body: body !== undefined ? JSON.stringify(body) : undefined,
        signal: ctrl.signal,
      })
      if (!res.ok) {
        // 5xx while the host is waking is worth retrying; 4xx is not
        if (res.status >= 500 && attempt < retries) {
          await sleep(1500 * (attempt + 1))
          continue
        }
        throw new ApiError(`Request failed (${res.status})`, res.status)
      }
      return (await res.json()) as T
    } catch (err) {
      if (err instanceof ApiError) throw err
      if (attempt < retries) {
        await sleep(1500 * (attempt + 1))
        continue
      }
      throw new ApiError('Network error – please check your connection and try again.')
    } finally {
      clearTimeout(timer)
    }
  }
}

export const api = {
  get: <T,>(path: string) => request<T>(path, { retries: 2 }),
  post: <T,>(path: string, body: unknown, auth = false) => request<T>(path, { method: 'POST', body, auth }),
}
