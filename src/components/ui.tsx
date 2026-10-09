import { Link, type LinkProps } from 'react-router-dom'
import { AlertTriangle, Loader2 } from 'lucide-react'
import type { ButtonHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'accent' | 'outline' | 'outline-light' | 'ghost'
type Size = 'md' | 'lg'

const base =
  'inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-colors duration-150 disabled:cursor-not-allowed disabled:opacity-60'
const variants: Record<Variant, string> = {
  primary: 'bg-ink-900 text-white hover:bg-ink-700',
  accent: 'bg-brand-500 text-ink-950 hover:bg-brand-300',
  outline: 'border border-ink-200 bg-white text-ink-900 hover:border-ink-900',
  'outline-light': 'border border-white/30 text-white hover:bg-white/10',
  ghost: 'text-ink-900 hover:bg-ink-50',
}
const sizes: Record<Size, string> = { md: 'px-4 py-2.5 text-sm', lg: 'px-6 py-3 text-base' }

export const btn = (variant: Variant = 'primary', size: Size = 'md', extra = '') =>
  `${base} ${variants[variant]} ${sizes[size]} ${extra}`

export function ButtonLink({
  variant,
  size,
  className,
  ...props
}: LinkProps & { variant?: Variant; size?: Size }) {
  return <Link {...props} className={btn(variant, size, className)} />
}

export function Button({
  variant,
  size,
  className,
  loading,
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant; size?: Size; loading?: boolean }) {
  return (
    <button {...props} disabled={props.disabled || loading} className={btn(variant, size, className)}>
      {loading && <Loader2 className="size-4 animate-spin" aria-hidden />}
      {children}
    </button>
  )
}

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string
  title: string
  description?: string
  children?: ReactNode
}) {
  return (
    <header className="grid-bg relative overflow-hidden bg-ink-900 text-white">
      <div className="wrap py-12 sm:py-16">
        <p className="eyebrow !text-brand-500">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl text-3xl font-bold tracking-tight text-balance sm:text-4xl">{title}</h1>
        {description && <p className="mt-4 max-w-3xl text-base leading-relaxed text-ink-200 sm:text-lg">{description}</p>}
        {children}
      </div>
    </header>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  center,
}: {
  eyebrow?: string
  title: string
  description?: string
  center?: boolean
}) {
  return (
    <div className={center ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="mt-2 text-2xl font-bold tracking-tight text-balance sm:text-3xl">{title}</h2>
      {description && <p className="mt-3 leading-relaxed text-ink-600">{description}</p>}
    </div>
  )
}

export function Skeleton({ className = '' }: { className?: string }) {
  return <div className={`animate-pulse rounded-lg bg-ink-100 ${className}`} aria-hidden />
}

export function CardGridSkeleton({ count = 6 }: { count?: number }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3" role="status" aria-label="Loading">
      {Array.from({ length: count }, (_, i) => (
        <div key={i} className="card overflow-hidden">
          <Skeleton className="aspect-[4/3] rounded-none" />
          <div className="space-y-2 p-4">
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-3 w-1/2" />
          </div>
        </div>
      ))}
    </div>
  )
}

export function ErrorState({ message, onRetry, slow }: { message?: string; onRetry?: () => void; slow?: boolean }) {
  return (
    <div className="card mx-auto max-w-lg p-8 text-center" role="alert">
      <AlertTriangle className="mx-auto size-8 text-amber-600" aria-hidden />
      <h2 className="mt-3 text-lg font-semibold">We couldn&rsquo;t load this right now</h2>
      <p className="mt-1 text-sm text-ink-600">{message ?? 'Please check your connection and try again.'}</p>
      {slow && <p className="mt-1 text-sm text-ink-600">The server may be waking up – this can take a moment.</p>}
      {onRetry && (
        <Button className="mt-5" onClick={onRetry}>
          Try again
        </Button>
      )}
    </div>
  )
}

export function EmptyState({ title, hint, action }: { title: string; hint?: string; action?: ReactNode }) {
  return (
    <div className="card col-span-full p-10 text-center">
      <h2 className="text-lg font-semibold">{title}</h2>
      {hint && <p className="mt-1 text-sm text-ink-600">{hint}</p>}
      {action && <div className="mt-5 flex justify-center">{action}</div>}
    </div>
  )
}

/** Shown while a slow API host wakes up so the page never looks frozen. */
export function SlowNotice() {
  return (
    <p className="mb-4 flex items-center gap-2 rounded-lg bg-brand-50 px-4 py-3 text-sm text-ink-700" role="status">
      <Loader2 className="size-4 animate-spin text-brand-700" aria-hidden />
      Connecting to our server – this can take a few seconds on first visit.
    </p>
  )
}
