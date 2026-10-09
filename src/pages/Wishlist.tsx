import { Link } from 'react-router-dom'
import { ShoppingCart, Trash2 } from 'lucide-react'
import { usePageMeta } from '../hooks/usePageMeta'
import { useStore } from '../store/StoreContext'
import { formatTsh } from '../lib/format'
import { Button, ButtonLink } from '../components/ui'
import { LoginRequired } from './Cart'

export default function Wishlist() {
  usePageMeta('My Wishlist', 'Products you have saved for later.')
  const { user, wishlist, wishlistTotal, dispatch } = useStore()

  const moveToCart = (id: string) => {
    const product = wishlist.find((p) => p._id === id)
    if (!product) return
    dispatch({ type: 'cart/add', product, quantity: 1 })
    dispatch({ type: 'wishlist/remove', id })
  }

  return (
    <div className="wrap page-in py-10 sm:py-14">
      <h1 className="text-3xl font-bold tracking-tight">My wishlist</h1>
      <div className="mt-8">
        {!user ? (
          <LoginRequired what="wishlist" />
        ) : wishlist.length === 0 ? (
          <div className="card mx-auto max-w-md p-8 text-center">
            <p className="text-ink-700">Your wishlist is empty.</p>
            <ButtonLink to="/products" className="mt-5">Browse products</ButtonLink>
          </div>
        ) : (
          <>
            <ul className="space-y-4">
              {wishlist.map((p) => (
                <li key={p._id} className="card flex flex-wrap gap-4 p-4 sm:flex-nowrap sm:items-center">
                  <Link to={`/product/${p._id}`} className="grid size-24 shrink-0 place-items-center overflow-hidden rounded-lg bg-white">
                    <img src={p.img} alt={p.title} loading="lazy" className="max-h-full max-w-full object-contain" />
                  </Link>
                  <div className="min-w-0 flex-1">
                    <h2 className="font-semibold leading-snug">{p.title}</h2>
                    <p className="mt-1 text-sm text-ink-600">{[p.brand, p.type].filter(Boolean).join(' · ')}</p>
                    <p className="mt-1 font-bold">{formatTsh(p.price)}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" onClick={() => moveToCart(p._id)}><ShoppingCart className="size-4" aria-hidden /> Add to cart</Button>
                    <button
                      onClick={() => dispatch({ type: 'wishlist/remove', id: p._id })}
                      aria-label={`Remove ${p.title} from wishlist`}
                      className="rounded-lg p-2 text-ink-500 hover:bg-red-50 hover:text-red-700"
                    >
                      <Trash2 className="size-5" aria-hidden />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-right text-sm text-ink-600">Saved items value: <strong className="text-ink-900">{formatTsh(wishlistTotal)}</strong></p>
          </>
        )}
      </div>
    </div>
  )
}
