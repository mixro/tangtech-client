import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { Search, SlidersHorizontal } from 'lucide-react'
import { usePageMeta } from '../hooks/usePageMeta'
import { useResource } from '../hooks/useResource'
import { CardGridSkeleton, EmptyState, ErrorState, PageHero, SlowNotice } from '../components/ui'
import type { Product } from '../types'

function toggle(list: string[], value: string) {
  return list.includes(value) ? list.filter((v) => v !== value) : [...list, value]
}

function FilterGroup({ title, options, selected, onToggle }: { title: string; options: string[]; selected: string[]; onToggle: (v: string) => void }) {
  if (options.length === 0) return null
  return (
    <fieldset>
      <legend className="text-sm font-semibold">{title}</legend>
      <div className="mt-2 space-y-1.5">
        {options.map((o) => (
          <label key={o} className="flex cursor-pointer items-center gap-2.5 text-sm text-ink-700">
            <input type="checkbox" checked={selected.includes(o)} onChange={() => onToggle(o)} className="size-4 rounded border-ink-200 accent-brand-600" />
            {o}
          </label>
        ))}
      </div>
    </fieldset>
  )
}

export default function Products() {
  usePageMeta(
    'Electrical Products',
    'Transformers, switchgear, circuit breakers, cables, surge arresters, protection, testing and control equipment from leading manufacturers – available from Tang Tech & Engineering Ltd.',
  )
  const { data, loading, error, slow, retry } = useResource<Product[]>('/products')
  const [query, setQuery] = useState('')
  const [types, setTypes] = useState<string[]>([])
  const [brands, setBrands] = useState<string[]>([])

  const products = Array.isArray(data) ? data : []
  const allTypes = useMemo(() => [...new Set(products.map((p) => p.type).filter(Boolean))].sort(), [products])
  const allBrands = useMemo(() => [...new Set(products.map((p) => p.brand).filter(Boolean))].sort(), [products])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return products.filter(
      (p) =>
        p.title.toLowerCase().includes(q) &&
        (types.length === 0 || types.includes(p.type)) &&
        (brands.length === 0 || brands.map((b) => b.toLowerCase()).includes((p.brand ?? '').toLowerCase())),
    )
  }, [products, query, types, brands])

  const filters = (
    <div className="space-y-6">
      <FilterGroup title="Categories" options={allTypes} selected={types} onToggle={(v) => setTypes((s) => toggle(s, v))} />
      <FilterGroup title="Brands" options={allBrands} selected={brands} onToggle={(v) => setBrands((s) => toggle(s, v))} />
      {(types.length > 0 || brands.length > 0) && (
        <button onClick={() => { setTypes([]); setBrands([]) }} className="text-sm font-medium text-brand-700 hover:underline">
          Clear filters
        </button>
      )}
    </div>
  )

  return (
    <div className="page-in">
      <PageHero
        eyebrow="Products"
        title="Electrical & automation equipment"
        description="Power equipment, protection and safety devices, testing and monitoring equipment, and control and automation products."
      />

      <section className="section">
        <div className="wrap grid gap-8 lg:grid-cols-[16rem_1fr]">
          <aside className="hidden lg:block">
            <div className="card sticky top-32 p-5">{filters}</div>
          </aside>

          <div>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <label className="relative block sm:w-80">
                <span className="sr-only">Search products</span>
                <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-ink-500" aria-hidden />
                <input value={query} onChange={(e) => setQuery(e.target.value)} type="search" placeholder="Search products" className="field pl-9" />
              </label>
              <p className="text-sm text-ink-600" aria-live="polite">
                {!loading && !error && `${filtered.length} ${filtered.length === 1 ? 'product' : 'products'}`}
              </p>
            </div>

            <details className="card mt-4 p-4 lg:hidden">
              <summary className="flex cursor-pointer items-center gap-2 text-sm font-semibold">
                <SlidersHorizontal className="size-4" aria-hidden /> Filters
                {types.length + brands.length > 0 && <span className="rounded-full bg-brand-100 px-2 text-xs text-brand-700">{types.length + brands.length}</span>}
              </summary>
              <div className="mt-4">{filters}</div>
            </details>

            <div className="mt-5">
              {slow && <SlowNotice />}
              {loading && <CardGridSkeleton count={6} />}
              {error && <ErrorState onRetry={retry} />}
              {!loading && !error && (
                <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                  {filtered.length === 0 ? (
                    <EmptyState title="No products found" hint="Try adjusting your search or filters." />
                  ) : (
                    filtered.map((p) => (
                      <Link key={p._id} to={`/product/${p._id}`} className="card group flex flex-col overflow-hidden transition-shadow duration-200 hover:shadow-lift">
                        <div className="relative aspect-[4/3] bg-white">
                          <img src={p.img} alt={p.title} loading="lazy" decoding="async" className="absolute inset-0 size-full object-contain p-4 transition-transform duration-500 group-hover:scale-[1.04]" />
                        </div>
                        <div className="flex flex-1 flex-col border-t border-ink-100 p-4">
                          <div className="flex items-center justify-between gap-2 text-xs">
                            <span className="font-semibold uppercase tracking-wide text-brand-700">{p.type}</span>
                            {p.brand && <span className="rounded-full bg-ink-50 px-2.5 py-0.5 font-medium text-ink-700">{p.brand}</span>}
                          </div>
                          <h2 className="mt-2 font-semibold leading-snug">{p.title}</h2>
                          <p className="mt-1.5 line-clamp-2 text-sm text-ink-600">{p.desc}</p>
                        </div>
                      </Link>
                    ))
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
