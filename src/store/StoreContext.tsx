import { createContext, useContext, useEffect, useMemo, useReducer, type ReactNode } from 'react'
import { loadState, saveState, type PersistedState } from '../lib/storage'
import type { CartItem, Product, User } from '../types'

type Action =
  | { type: 'login'; user: User }
  | { type: 'logout' }
  | { type: 'cart/add'; product: Product; quantity: number }
  | { type: 'cart/remove'; id: string }
  | { type: 'cart/clear' }
  | { type: 'wishlist/add'; product: Product }
  | { type: 'wishlist/remove'; id: string }

function reducer(state: PersistedState, action: Action): PersistedState {
  switch (action.type) {
    case 'login':
      return { ...state, user: action.user }
    case 'logout':
      return { ...state, user: null }
    case 'cart/add': {
      const qty = Math.max(1, Math.floor(action.quantity) || 1)
      const existing = state.cart.find((i) => i._id === action.product._id)
      const cart: CartItem[] = existing
        ? state.cart.map((i) => (i._id === existing._id ? { ...i, quantity: i.quantity + qty } : i))
        : [...state.cart, { ...action.product, quantity: qty }]
      return { ...state, cart }
    }
    case 'cart/remove':
      return { ...state, cart: state.cart.filter((i) => i._id !== action.id) }
    case 'cart/clear':
      return { ...state, cart: [] }
    case 'wishlist/add':
      return state.wishlist.some((p) => p._id === action.product._id)
        ? state
        : { ...state, wishlist: [...state.wishlist, action.product] }
    case 'wishlist/remove':
      return { ...state, wishlist: state.wishlist.filter((p) => p._id !== action.id) }
  }
}

interface StoreValue extends PersistedState {
  dispatch: React.Dispatch<Action>
  cartCount: number
  cartTotal: number
  wishlistTotal: number
}

const StoreContext = createContext<StoreValue | null>(null)

export function StoreProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, undefined, loadState)

  useEffect(() => saveState(state), [state])

  const value = useMemo<StoreValue>(
    () => ({
      ...state,
      dispatch,
      cartCount: state.cart.length,
      cartTotal: state.cart.reduce((sum, i) => sum + Number(i.price) * i.quantity, 0),
      wishlistTotal: state.wishlist.reduce((sum, p) => sum + Number(p.price), 0),
    }),
    [state],
  )

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
}

export function useStore() {
  const ctx = useContext(StoreContext)
  if (!ctx) throw new Error('useStore must be used inside <StoreProvider>')
  return ctx
}
