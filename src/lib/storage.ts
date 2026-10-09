import type { CartItem, Product, User } from '../types'

export interface PersistedState {
  user: User | null
  cart: CartItem[]
  wishlist: Product[]
}

const KEY = 'tt:state:v1'
const LEGACY_KEY = 'persist:root' // redux-persist key used by the previous CRA build

const empty: PersistedState = { user: null, cart: [], wishlist: [] }

function parseLegacy(): PersistedState | null {
  try {
    const raw = localStorage.getItem(LEGACY_KEY)
    if (!raw) return null
    const root = JSON.parse(raw)
    const user = root.client ? JSON.parse(root.client).currentUser : null
    const cart = root.clientCart ? JSON.parse(root.clientCart).products : []
    const wishlist = root.clientWishlist ? JSON.parse(root.clientWishlist).products : []
    return {
      user: user ?? null,
      cart: (cart ?? []).map((p: CartItem) => ({ ...p, quantity: Number(p.quantity) || 1 })),
      wishlist: wishlist ?? [],
    }
  } catch {
    return null
  }
}

/** Load persisted state; transparently carries over a signed-in session / cart from the old site. */
export function loadState(): PersistedState {
  try {
    const raw = localStorage.getItem(KEY)
    if (raw) return { ...empty, ...JSON.parse(raw) }
  } catch {
    /* storage unavailable or corrupt – fall through */
  }
  return parseLegacy() ?? empty
}

export function saveState(state: PersistedState) {
  try {
    localStorage.setItem(KEY, JSON.stringify(state))
  } catch {
    /* ignore quota / private-mode errors */
  }
}

/** Read at request time so a token obtained after login is always used. */
export function getToken(): string | undefined {
  return loadState().user?.accessToken
}
