import { Link, useParams } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { usePageMeta } from '../hooks/usePageMeta'
import { useResource } from '../hooks/useResource'
import { ButtonLink, ErrorState, SlowNotice, Skeleton } from '../components/ui'
import type { Service as ServiceType } from '../types'

export default function Service() {
  const { id } = useParams()
  const { data, loading, error, slow, retry } = useResource<ServiceType[]>('/services')
  const service = Array.isArray(data) ? data.find((s) => s._id === id) : undefined

  usePageMeta(service?.title ?? 'Service', service?.desc?.slice(0, 155) ?? 'Tang Tech & Engineering service details.')

  return (
    <div className="wrap page-in py-10 sm:py-14">
      <Link to="/services" className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-700 hover:underline">
        <ArrowLeft className="size-4" aria-hidden /> All services
      </Link>

      {slow && <div className="mt-6"><SlowNotice /></div>}
      {loading && (
        <div className="mt-8 grid gap-10 lg:grid-cols-2" role="status" aria-label="Loading">
          <div className="space-y-4">
            <Skeleton className="h-9 w-2/3" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
          </div>
          <Skeleton className="aspect-[4/3]" />
        </div>
      )}
      {error && <div className="mt-8"><ErrorState onRetry={retry} /></div>}

      {!loading && !error && !service && (
        <div className="card mx-auto mt-10 max-w-lg p-8 text-center">
          <h1 className="text-xl font-semibold">Service not found</h1>
          <p className="mt-1 text-sm text-ink-600">It may have been removed or the link is incorrect.</p>
          <ButtonLink to="/services" className="mt-5">View all services</ButtonLink>
        </div>
      )}

      {service && (
        <article className="mt-8 grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            {service.category && <p className="eyebrow">{service.category}</p>}
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-balance sm:text-4xl">{service.title}</h1>
            <p className="mt-5 whitespace-pre-line leading-relaxed text-ink-600">{service.desc}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink to="/contact-us" variant="accent" size="lg">Contact us</ButtonLink>
              <ButtonLink to="/contact-us" variant="outline" size="lg">Locate our office</ButtonLink>
            </div>
          </div>
          <img src={service.img} alt={service.title} fetchPriority="high" decoding="async" className="aspect-[4/3] w-full rounded-xl object-cover shadow-card" />
        </article>
      )}
    </div>
  )
}
