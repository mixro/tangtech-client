import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const SITE = 'https://www.tangtecheng.com'
const SUFFIX = 'Tang Tech & Engineering Ltd'

function setMeta(selector: string, attr: 'content' | 'href', value: string) {
  document.head.querySelector(selector)?.setAttribute(attr, value)
}

/** Per-route title, description, canonical and Open Graph tags (no extra dependency needed). */
export function usePageMeta(title: string, description: string) {
  const { pathname } = useLocation()
  useEffect(() => {
    const full = title ? `${title} | ${SUFFIX}` : `${SUFFIX} | Electrical, ICT, Security & Automation Solutions`
    document.title = full
    setMeta('meta[name="description"]', 'content', description)
    setMeta('meta[property="og:title"]', 'content', full)
    setMeta('meta[property="og:description"]', 'content', description)
    setMeta('meta[property="og:url"]', 'content', SITE + pathname)
    setMeta('link[rel="canonical"]', 'href', SITE + (pathname === '/' ? '/' : pathname))
  }, [title, description, pathname])
}
