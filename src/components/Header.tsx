import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { Heart, LogOut, Mail, Menu, Phone, ShoppingCart, User as UserIcon, X } from 'lucide-react'
import { CONTACT, NAV_LINKS } from '../data/content'
import { useStore } from '../store/StoreContext'
import { ButtonLink } from './ui'

const linkClass = ({ isActive }: { isActive: boolean }) =>
  `relative px-1 py-2 text-sm font-medium transition-colors after:absolute after:inset-x-0 after:-bottom-px after:h-0.5 after:origin-left after:rounded after:bg-brand-500 after:transition-transform ${
    isActive ? 'text-ink-900 after:scale-x-100' : 'text-ink-600 after:scale-x-0 hover:text-ink-900 hover:after:scale-x-100'
  }`

function Badge({ count }: { count: number }) {
  if (!count) return null
  return (
    <span className="absolute -right-1.5 -top-1.5 grid min-w-4.5 place-items-center rounded-full bg-brand-500 px-1 text-[10px] font-bold leading-4.5 text-ink-950">
      {count}
    </span>
  )
}

export function Header() {
  const [open, setOpen] = useState(false)
  const { user, cartCount, wishlist, dispatch } = useStore()
  const { pathname } = useLocation()
  const navigate = useNavigate()

  useEffect(() => setOpen(false), [pathname])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  const logout = () => {
    dispatch({ type: 'logout' })
    navigate('/')
  }

  return (
    <header className="sticky top-0 z-40 border-b border-ink-100 bg-white">
      {/* utility bar */}
      <div className="hidden bg-ink-900 text-xs text-ink-200 md:block">
        <div className="wrap flex h-9 items-center justify-between">
          <div className="flex items-center gap-5">
            <a href={`tel:${CONTACT.phone}`} className="flex items-center gap-1.5 hover:text-white">
              <Phone className="size-3.5" aria-hidden /> {CONTACT.phone}
            </a>
            <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-1.5 hover:text-white">
              <Mail className="size-3.5" aria-hidden /> {CONTACT.email}
            </a>
          </div>
          <div className="flex items-center gap-4">
            {user ? (
              <>
                <span className="flex items-center gap-1.5">
                  <UserIcon className="size-3.5" aria-hidden /> {user.username ?? user.email ?? 'Account'}
                </span>
                <button onClick={logout} className="flex items-center gap-1.5 hover:text-white">
                  <LogOut className="size-3.5" aria-hidden /> Log out
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="hover:text-white">
                  Login
                </Link>
                <Link to="/register" className="hover:text-white">
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </div>

      {/* main bar */}
      <div className="wrap flex h-16 items-center justify-between gap-4">
        <Link to="/" aria-label="Tang Tech & Engineering Ltd – home" className="shrink-0">
          <img src="/images/logo.webp" alt="Tang Tech Engineering Ltd" width={260} height={226} className="h-11 w-auto" fetchPriority="high" />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-6 lg:flex">
          {NAV_LINKS.map((l) => (
            <NavLink key={l.to} to={l.to} className={linkClass}>
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-1 sm:gap-2">
          <Link to="/wishlist" aria-label={`Wishlist, ${wishlist.length} items`} className="relative rounded-lg p-2 text-ink-700 hover:bg-ink-50">
            <Heart className="size-5" aria-hidden />
            <Badge count={wishlist.length} />
          </Link>
          <Link to="/cart" aria-label={`Cart, ${cartCount} items`} className="relative rounded-lg p-2 text-ink-700 hover:bg-ink-50">
            <ShoppingCart className="size-5" aria-hidden />
            <Badge count={cartCount} />
          </Link>
          <ButtonLink to="/contact-us" variant="accent" className="ml-1 hidden sm:inline-flex">
            Request a quote
          </ButtonLink>
          <button
            className="rounded-lg p-2 text-ink-900 hover:bg-ink-50 lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {/* mobile menu */}
      <div
        id="mobile-menu"
        hidden={!open}
        className="fixed inset-x-0 bottom-0 top-16 overflow-y-auto overscroll-contain bg-white lg:hidden"
      >
        <nav aria-label="Mobile" className="wrap flex flex-col py-4">
          {[{ to: '/', label: 'Home' }, ...NAV_LINKS, { to: '/contact-us', label: 'Contact' }].map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `border-b border-ink-100 py-3.5 text-base font-medium ${isActive ? 'text-brand-700' : 'text-ink-900'}`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <div className="mt-5 grid grid-cols-2 gap-3">
            {user ? (
              <button onClick={logout} className="col-span-2 rounded-lg border border-ink-200 py-3 text-sm font-semibold">
                Log out ({user.username ?? user.email})
              </button>
            ) : (
              <>
                <ButtonLink to="/login" variant="outline">
                  Login
                </ButtonLink>
                <ButtonLink to="/register" variant="primary">
                  Register
                </ButtonLink>
              </>
            )}
          </div>
          <div className="mt-6 space-y-2 text-sm text-ink-600">
            <a href={`tel:${CONTACT.phone}`} className="flex items-center gap-2">
              <Phone className="size-4" aria-hidden /> {CONTACT.phone}
            </a>
            <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-2">
              <Mail className="size-4" aria-hidden /> {CONTACT.email}
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}
