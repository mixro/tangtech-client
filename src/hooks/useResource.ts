import { useCallback, useEffect, useState } from 'react'
import { api } from '../lib/api'

/**
 * Tiny stale-while-revalidate data layer.
 *  - one in-flight request per URL (no duplicate calls across components)
 *  - last good response is kept in memory + localStorage so pages render instantly on reload
 *  - cached data is revalidated silently when older than STALE_MS
 */
const STALE_MS = 5 * 60_000
const PREFIX = 'tt:cache:'

interface Entry {
  data: unknown
  at: number
}
const memory = new Map<string, Entry>()
const inflight = new Map<string, Promise<unknown>>()

function readCache(path: string): Entry | undefined {
  const hit = memory.get(path)
  if (hit) return hit
  try {
    const raw = localStorage.getItem(PREFIX + path)
    if (raw) {
      const entry = JSON.parse(raw) as Entry
      memory.set(path, entry)
      return entry
    }
  } catch {
    /* ignore */
  }
  return undefined
}

function writeCache(path: string, data: unknown) {
  const entry = { data, at: Date.now() }
  memory.set(path, entry)
  try {
    localStorage.setItem(PREFIX + path, JSON.stringify(entry))
  } catch {
    /* ignore */
  }
}

export function load<T>(path: string, force = false): Promise<T> {
  const cached = readCache(path)
  if (cached && !force && Date.now() - cached.at < STALE_MS) return Promise.resolve(cached.data as T)
  const running = inflight.get(path)
  if (running) return running as Promise<T>
  const p = api
    .get<T>(path)
    .then((data) => {
      writeCache(path, data)
      return data
    })
    .finally(() => inflight.delete(path))
  inflight.set(path, p)
  return p
}

/** Warm the cache (and wake the API host) without blocking anything. */
export function prefetch(...paths: string[]) {
  paths.forEach((p) => load(p).catch(() => undefined))
}

export function useResource<T>(path: string) {
  const cached = readCache(path)
  const [data, setData] = useState<T | undefined>(cached?.data as T | undefined)
  const [error, setError] = useState<Error | null>(null)
  const [loading, setLoading] = useState(true)
  const [slow, setSlow] = useState(false)
  const [attempt, setAttempt] = useState(0)

  useEffect(() => {
    let alive = true
    setLoading(true)
    setError(null)
    setSlow(false)
    const timer = setTimeout(() => alive && setSlow(true), 3500)
    load<T>(path, attempt > 0)
      .then((d) => alive && setData(d))
      .catch((e: Error) => alive && setError(e))
      .finally(() => alive && setLoading(false))
    return () => {
      alive = false
      clearTimeout(timer)
    }
  }, [path, attempt])

  const retry = useCallback(() => setAttempt((n) => n + 1), [])

  return {
    data,
    // only "loading" if we have nothing to show; cached data renders immediately
    loading: loading && data === undefined,
    error: data === undefined ? error : null,
    slow: slow && data === undefined,
    retry,
  }
}
