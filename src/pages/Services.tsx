import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { Search } from 'lucide-react'
import { usePageMeta } from '../hooks/usePageMeta'
import { useResource } from '../hooks/useResource'
import { CardGridSkeleton, EmptyState, ErrorState, PageHero, SlowNotice } from '../components/ui'
import type { Service } from '../types'

export default function Services() {
  usePageMeta(
    'Services',
    'Electrical installations, high-voltage systems, testing and commissioning, ICT solutions, CCTV and access control, and automation services from Tang Tech & Engineering Ltd.',
  )
  const { data, loading, error, slow, retry } = useResource<Service[]>('/services')
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All')

  const services = Array.isArray(data) ? data : []
  const categories = useMemo(() => ['All', ...new Set(services.map((s) => s.category).filter(Boolean))], [services])
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return services
      .filter((s) => (category === 'All' || s.category === category) && s.title.toLowerCase().includes(q))
      .sort((a, b) => a.title.localeCompare(b.title))
  }, [services, query, category])

  return (
    <div className="page-in">
      <PageHero
        eyebrow="Services"
        title="Tang Tech & Engineering services"
        description="Electrical installations, high-voltage systems, testing, commissioning and maintenance for safe, efficient power distribution. ICT solutions including network design, structured cabling and telecommunication systems. Security solutions such as CCTV, access control and electric fencing."
      />

      <section className="section">
        <div className="wrap">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div role="group" aria-label="Filter by category" className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setCategory(c)}
                  aria-pressed={category === c}
                  className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
                    category === c ? 'border-ink-900 bg-ink-900 text-white' : 'border-ink-200 bg-white text-ink-700 hover:border-ink-900'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
            <label className="relative block sm:w-72">
              <span className="sr-only">Search services</span>
              <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-ink-500" aria-hidden />
              <input value={query} onChange={(e) => setQuery(e.target.value)} type="search" placeholder="Search services" className="field pl-9" />
            </label>
          </div>

          <p className="mt-6 text-sm text-ink-600" aria-live="polite">
            {!loading && !error && `${filtered.length} ${filtered.length === 1 ? 'result' : 'results'}`}
          </p>

          <div className="mt-4">
            {slow && <SlowNotice />}
            {loading && <CardGridSkeleton />}
            {error && <ErrorState onRetry={retry} />}
            {!loading && !error && (
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {filtered.length === 0 ? (
                  <EmptyState title="No services found" hint="Try a different search or category." />
                ) : (
                  filtered.map((s) => (
                    <Link key={s._id} to={`/service/${s._id}`} className="card group overflow-hidden transition-shadow duration-200 hover:shadow-lift">
                      <div className="aspect-[4/3] overflow-hidden bg-ink-100">
                        <img src={s.img} alt={s.title} loading="lazy" decoding="async" className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.04]" />
                      </div>
                      <div className="p-4">
                        {s.category && <p className="text-xs font-semibold uppercase tracking-wide text-brand-700">{s.category}</p>}
                        <h2 className="mt-1 font-semibold leading-snug">{s.title}</h2>
                      </div>
                    </Link>
                  ))
                )}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
