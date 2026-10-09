import { useState } from 'react'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import { ArrowLeft, Check, Heart, ShoppingCart } from 'lucide-react'
import { usePageMeta } from '../hooks/usePageMeta'
import { useResource } from '../hooks/useResource'
import { useStore } from '../store/StoreContext'
import { formatTsh } from '../lib/format'
import { Button, ButtonLink, ErrorState, Skeleton, SlowNotice } from '../components/ui'
import type { Product as ProductType } from '../types'

export default function Product() {
  const { id } = useParams()
  const navigate = useNavigate()
  const location = useLocation()
  const { user, dispatch, wishlist } = useStore()
  const { data, loading, error, slow, retry } = useResource<ProductType[]>('/products')
  const [quantity, setQuantity] = useState(1)
  const [notice, setNotice] = useState('')

  const product = Array.isArray(data) ? data.find((p) => p._id === id) : undefined
  usePageMeta(product?.title ?? 'Product', product?.desc?.slice(0, 155) ?? 'Electrical and automation product details.')

  const requireLogin = () => navigate('/login', { state: { from: location.pathname } })

  const addToCart = () => {
    if (!user) return requireLogin()
    if (!product) return
    dispatch({ type: 'cart/add', product, quantity })
    setNotice('Added to your cart.')
  }
  const addToWishlist = () => {
    if (!user) return requireLogin()
    if (!product) return
    dispatch({ type: 'wishlist/add', product })
    setNotice('Saved to your wishlist.')
  }
  const inWishlist = !!product && wishlist.some((p) => p._id === product._id)

  return (
    <div className="wrap page-in py-10 sm:py-14">
      <Link to="/products" className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-700 hover:underline">
        <ArrowLeft className="size-4" aria-hidden /> All products
      </Link>

      {slow && <div className="mt-6"><SlowNotice /></div>}
      {loading && (
        <div className="mt-8 grid gap-10 lg:grid-cols-2" role="status" aria-label="Loading">
          <Skeleton className="aspect-square" />
          <div className="space-y-4"><Skeleton className="h-9 w-2/3" /><Skeleton className="h-4 w-1/3" /><Skeleton className="h-24 w-full" /></div>
        </div>
      )}
      {error && <div className="mt-8"><ErrorState onRetry={retry} /></div>}
      {!loading && !error && !product && (
        <div className="card mx-auto mt-10 max-w-lg p-8 text-center">
          <h1 className="text-xl font-semibold">Product not found</h1>
          <p className="mt-1 text-sm text-ink-600">It may have been removed or the link is incorrect.</p>
          <ButtonLink to="/products" className="mt-5">Browse products</ButtonLink>
        </div>
      )}

      {product && (
        <article className="mt-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="card flex aspect-square items-center justify-center bg-white p-6">
              <img src={product.img} alt={product.title} fetchPriority="high" decoding="async" className="max-h-full max-w-full object-contain" />
            </div>

            <div>
              {product.brand && <p className="eyebrow">{product.brand}</p>}
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-balance">{product.title}</h1>
              {product.type && <p className="mt-1 text-sm text-ink-600">{product.type}</p>}
              <p className="mt-5 text-2xl font-bold">{formatTsh(product.price)}</p>

              <div className="mt-6 flex flex-wrap items-end gap-4">
                <label className="block">
                  <span className="text-sm font-medium">Quantity</span>
                  <input
                    type="number"
                    min={1}
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, Math.floor(Number(e.target.value)) || 1))}
                    className="field mt-1 w-24"
                  />
                </label>
                <Button size="lg" onClick={addToCart}><ShoppingCart className="size-4" aria-hidden /> Add to cart</Button>
                <Button size="lg" variant="outline" onClick={addToWishlist} aria-pressed={inWishlist}>
                  <Heart className={`size-4 ${inWishlist ? 'fill-brand-500 text-brand-600' : ''}`} aria-hidden /> {inWishlist ? 'In wishlist' : 'Add to wishlist'}
                </Button>
              </div>
              <p className="mt-3 min-h-5 text-sm font-medium text-brand-700" role="status">{notice}</p>
              {!user && <p className="mt-1 text-sm text-ink-600">You&rsquo;ll be asked to log in before adding items.</p>}

              <p className="mt-6 flex items-start gap-2 rounded-lg bg-brand-50 p-3 text-sm text-ink-700">
                <Check className="mt-0.5 size-4 shrink-0 text-brand-700" aria-hidden />
                Get FREE shipping. Confirmed orders might take 1&ndash;2 days for processing.
              </p>
            </div>
          </div>

          <section className="mt-12 max-w-3xl">
            <h2 className="text-xl font-semibold">Description</h2>
            <p className="mt-3 whitespace-pre-line leading-relaxed text-ink-600">{product.desc}</p>
          </section>
        </article>
      )}
    </div>
  )
}
