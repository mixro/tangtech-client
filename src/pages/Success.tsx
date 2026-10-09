import { useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { CheckCircle2, Loader2 } from 'lucide-react'
import { api } from '../lib/api'
import { usePageMeta } from '../hooks/usePageMeta'
import { useStore } from '../store/StoreContext'
import { formatTsh } from '../lib/format'
import { ButtonLink, Button } from '../components/ui'
import { LoginRequired } from './Cart'
import type { CartItem, CheckoutDetails, Order } from '../types'

interface NavState {
  order?: Order
  checkout?: { details: CheckoutDetails; items: CartItem[]; total: number }
}

export default function Success() {
  usePageMeta('Order', 'Your order details.')
  const { state } = useLocation() as { state: NavState | null }
  const navigate = useNavigate()
  const { user, dispatch } = useStore()
  const [order, setOrder] = useState<Order | null>(state?.order ?? null)
  const [failed, setFailed] = useState(false)
  const [attempt, setAttempt] = useState(0)
  const started = useRef(false)
  const checkout = state?.checkout

  useEffect(() => {
    if (order || !checkout || !user || started.current) return
    started.current = true // guard against double-submit (StrictMode / re-renders)
    api
      .post<Order>(
        '/orders',
        {
          userId: user._id,
          products: checkout.items.map((i) => ({
            productId: i._id,
            title: i.title,
            desc: i.desc,
            price: i.price,
            brand: i.brand,
            type: i.type,
            status: i.status,
            quantity: i.quantity,
            inStock: i.inStock,
            img: i.img,
          })),
          amount: checkout.total,
          email: checkout.details.email,
          address: checkout.details.address,
          name: checkout.details.name,
          phoneNumber: checkout.details.phoneNumber,
        },
        true,
      )
      .then((o) => {
        setOrder(o)
        dispatch({ type: 'cart/clear' })
        // replace history state so a refresh shows the order instead of re-submitting it
        navigate('/success', { replace: true, state: { order: o } })
      })
      .catch(() => {
        started.current = false
        setFailed(true)
      })
  }, [order, checkout, user, dispatch, navigate, attempt])

  const retry = () => {
    setFailed(false)
    started.current = false
    setAttempt((n) => n + 1) // re-runs the effect
  }

  return (
    <div className="wrap page-in py-10 sm:py-14">
      {!order && <h1 className="sr-only">Your order</h1>}
      {!user ? (
        <LoginRequired what="order progress" />
      ) : order ? (
        <div className="mx-auto max-w-3xl">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="size-8 text-brand-600" aria-hidden />
            <h1 className="text-3xl font-bold tracking-tight">Order received</h1>
          </div>
          <p className="mt-2 text-ink-600">Thank you. Confirmed orders might take 1&ndash;2 days for processing.</p>

          <section className="card mt-8 p-6">
            <h2 className="font-semibold">Order details</h2>
            <dl className="mt-4 grid gap-x-8 gap-y-3 text-sm sm:grid-cols-2">
              {[
                ['Name', order.name],
                ['Email', order.email],
                ['Phone', order.phoneNumber],
                ['Address', order.address],
                ['Status', order.status],
                ['Placed', order.createdAt ? new Date(order.createdAt).toLocaleString() : '—'],
                ['Amount', formatTsh(order.amount)],
              ].map(([k, v]) => (
                <div key={k}>
                  <dt className="text-ink-500">{k}</dt>
                  <dd className="font-medium">{v}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section className="card mt-6 p-6">
            <h2 className="font-semibold">Ordered products</h2>
            <ul className="mt-4 divide-y divide-ink-100">
              {order.products.map((p, i) => (
                <li key={p._id ?? i} className="flex items-center gap-4 py-3">
                  {p.img && <img src={p.img} alt="" className="size-14 rounded-lg bg-white object-contain" loading="lazy" />}
                  <div className="min-w-0 flex-1">
                    <p className="font-medium leading-snug">{p.title}</p>
                    <p className="text-sm text-ink-600">{[p.brand, p.type].filter(Boolean).join(' · ')} · Qty {p.quantity}</p>
                  </div>
                  <p className="font-semibold">{formatTsh(Number(p.price) * p.quantity)}</p>
                </li>
              ))}
            </ul>
          </section>

          <ButtonLink to="/products" variant="primary" className="mt-8">Continue shopping</ButtonLink>
        </div>
      ) : failed ? (
        <div className="card mx-auto max-w-md p-8 text-center" role="alert">
          <h1 className="text-xl font-semibold">We couldn&rsquo;t place your order</h1>
          <p className="mt-1 text-sm text-ink-600">Your cart is unchanged. Please try again.</p>
          <div className="mt-5 flex justify-center gap-3">
            <Button onClick={retry}>Try again</Button>
            <ButtonLink to="/cart" variant="outline">Back to cart</ButtonLink>
          </div>
        </div>
      ) : checkout ? (
        <div className="mx-auto max-w-md py-16 text-center" role="status">
          <Loader2 className="mx-auto size-8 animate-spin text-brand-600" aria-hidden />
          <p className="mt-4 font-medium">Your order is being created…</p>
        </div>
      ) : (
        <div className="card mx-auto max-w-md p-8 text-center">
          <p className="text-ink-700">There is no recent order to show.</p>
          <ButtonLink to="/products" className="mt-5">Browse products</ButtonLink>
        </div>
      )}
    </div>
  )
}
