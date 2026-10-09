import { useRef, useState, type FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Trash2, X } from 'lucide-react'
import { usePageMeta } from '../hooks/usePageMeta'
import { useStore } from '../store/StoreContext'
import { formatTsh } from '../lib/format'
import { Field } from '../components/Field'
import { Button, ButtonLink } from '../components/ui'
import type { CheckoutDetails } from '../types'

export function LoginRequired({ what }: { what: string }) {
  return (
    <div className="card mx-auto max-w-md p-8 text-center">
      <p className="text-ink-700">Register or log in to view your {what}.</p>
      <div className="mt-5 flex justify-center gap-3">
        <ButtonLink to="/login" variant="primary">Login</ButtonLink>
        <ButtonLink to="/register" variant="outline">Register</ButtonLink>
      </div>
    </div>
  )
}

export default function Cart() {
  usePageMeta('My Cart', 'Review the products in your cart.')
  const { user, cart, cartTotal, cartCount, dispatch } = useStore()
  const navigate = useNavigate()
  const dialog = useRef<HTMLDialogElement>(null)
  const [details, setDetails] = useState<CheckoutDetails>({ name: '', email: '', phoneNumber: '', address: '' })

  const set = (k: keyof CheckoutDetails) => (e: { target: { value: string } }) => setDetails((d) => ({ ...d, [k]: e.target.value }))

  const submit = (e: FormEvent) => {
    e.preventDefault()
    if (cartTotal <= 0) return
    navigate('/success', { state: { checkout: { details, items: cart, total: cartTotal } } })
  }

  return (
    <div className="wrap page-in py-10 sm:py-14">
      <h1 className="text-3xl font-bold tracking-tight">My cart</h1>

      <div className="mt-8">
        {!user ? (
          <LoginRequired what="cart" />
        ) : cart.length === 0 ? (
          <div className="card mx-auto max-w-md p-8 text-center">
            <p className="text-ink-700">Your cart is empty.</p>
            <ButtonLink to="/products" className="mt-5">Browse products</ButtonLink>
          </div>
        ) : (
          <div className="grid gap-8 lg:grid-cols-[1fr_22rem]">
            <ul className="space-y-4">
              {cart.map((item) => (
                <li key={item._id} className="card flex gap-4 p-4">
                  <Link to={`/product/${item._id}`} className="grid size-24 shrink-0 place-items-center overflow-hidden rounded-lg bg-white sm:size-28">
                    <img src={item.img} alt={item.title} loading="lazy" className="max-h-full max-w-full object-contain" />
                  </Link>
                  <div className="min-w-0 flex-1">
                    <h2 className="font-semibold leading-snug">{item.title}</h2>
                    <p className="mt-1 text-sm text-ink-600">{[item.brand, item.type].filter(Boolean).join(' · ')}</p>
                    <p className="mt-2 text-sm text-ink-600">Quantity: {item.quantity}</p>
                    <p className="mt-1 font-bold">{formatTsh(Number(item.price) * item.quantity)}</p>
                  </div>
                  <button
                    onClick={() => dispatch({ type: 'cart/remove', id: item._id })}
                    aria-label={`Remove ${item.title} from cart`}
                    className="h-fit rounded-lg p-2 text-ink-500 hover:bg-red-50 hover:text-red-700"
                  >
                    <Trash2 className="size-5" aria-hidden />
                  </button>
                </li>
              ))}
            </ul>

            <aside className="card h-fit p-6 lg:sticky lg:top-32">
              <h2 className="font-semibold">Order summary</h2>
              <dl className="mt-4 space-y-2 text-sm">
                <div className="flex justify-between"><dt className="text-ink-600">Total products</dt><dd>{cartCount}</dd></div>
                <div className="flex justify-between"><dt className="text-ink-600">Subtotal</dt><dd>{formatTsh(cartTotal)}</dd></div>
                <div className="flex justify-between"><dt className="text-ink-600">Estimated shipping</dt><dd>Free</dd></div>
                <div className="flex justify-between"><dt className="text-ink-600">Estimated tax</dt><dd>Free</dd></div>
                <div className="flex justify-between border-t border-ink-100 pt-3 text-base font-bold"><dt>Total</dt><dd>{formatTsh(cartTotal)}</dd></div>
              </dl>
              <Button size="lg" className="mt-6 w-full" onClick={() => dialog.current?.showModal()}>
                Checkout now
              </Button>
            </aside>
          </div>
        )}
      </div>

      <dialog
        ref={dialog}
        aria-labelledby="checkout-title"
        className="m-auto w-[min(92vw,26rem)] rounded-xl p-0 shadow-lift backdrop:bg-ink-950/60"
        onClick={(e) => e.target === dialog.current && dialog.current?.close()}
      >
        <form onSubmit={submit} className="space-y-4 p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 id="checkout-title" className="text-lg font-semibold">Tang Tech Shop</h2>
              <p className="text-sm text-ink-600">Your total is {formatTsh(cartTotal)}</p>
            </div>
            <button type="button" aria-label="Close" onClick={() => dialog.current?.close()} className="rounded-lg p-1.5 hover:bg-ink-50">
              <X className="size-5" />
            </button>
          </div>
          <Field label="Phone number" type="tel" required value={details.phoneNumber} onChange={set('phoneNumber')} placeholder="+255 …" autoComplete="tel" />
          <Field label="Full name" required value={details.name} onChange={set('name')} placeholder="John Doe" autoComplete="name" />
          <Field label="Email" type="email" required value={details.email} onChange={set('email')} placeholder="johndoe@gmail.com" autoComplete="email" />
          <Field label="Delivery address" required value={details.address} onChange={set('address')} placeholder="e.g. Ubungo, Dar es Salaam" autoComplete="street-address" />
          <Button type="submit" size="lg" className="w-full" disabled={cartTotal <= 0}>Submit order</Button>
        </form>
      </dialog>
    </div>
  )
}
