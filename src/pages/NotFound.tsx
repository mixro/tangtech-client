import { usePageMeta } from '../hooks/usePageMeta'
import { ButtonLink } from '../components/ui'

export default function NotFound() {
  usePageMeta('Page not found', 'The page you are looking for could not be found.')
  return (
    <div className="wrap page-in py-24 text-center">
      <p className="eyebrow">404</p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight">Page not found</h1>
      <p className="mt-3 text-ink-600">The page you&rsquo;re looking for doesn&rsquo;t exist or has moved.</p>
      <div className="mt-7 flex justify-center gap-3">
        <ButtonLink to="/">Back to home</ButtonLink>
        <ButtonLink to="/contact-us" variant="outline">Contact us</ButtonLink>
      </div>
    </div>
  )
}
