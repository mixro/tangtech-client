import { Link } from 'react-router-dom'
import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { CONTACT, NAV_LINKS, productsLinks, servicesLinks } from '../data/content'

export function Footer() {
  return (
    <footer className="bg-ink-900 text-ink-200">
      <div className="wrap grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <img src="/images/tangtech-logo.webp" alt="Tang Tech Engineering Ltd" width={240} height={217} className="h-20 w-auto" loading="lazy" />
          <p className="mt-4 max-w-sm text-sm leading-relaxed">
            Electrical, ICT, security and automation solutions &ndash; installation, maintenance, products and technical training.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-white">Services</h2>
          <ul className="mt-3 text-sm [&_a]:inline-block [&_a]:py-1.5">
            {servicesLinks.map((l) => (
              <li key={l.id}>
                <Link to="/services" className="hover:text-white">
                  {l.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-white">Products</h2>
          <ul className="mt-3 text-sm [&_a]:inline-block [&_a]:py-1.5">
            {productsLinks.map((l) => (
              <li key={l.id}>
                <Link to="/products" className="hover:text-white">
                  {l.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-white">Contact</h2>
          <ul className="mt-3 space-y-1 text-sm [&_a]:py-1.5">
            <li>
              <a href={`tel:${CONTACT.phone}`} className="flex items-center gap-2 hover:text-white">
                <Phone className="size-4 shrink-0" aria-hidden /> {CONTACT.phone}
              </a>
            </li>
            <li>
              <a href={CONTACT.whatsapp} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-white">
                <MessageCircle className="size-4 shrink-0" aria-hidden /> WhatsApp
              </a>
            </li>
            <li>
              <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-2 break-all hover:text-white">
                <Mail className="size-4 shrink-0" aria-hidden /> {CONTACT.email}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="size-4 shrink-0" aria-hidden /> {CONTACT.location}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="wrap flex flex-col gap-3 py-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Tang Tech &amp; Engineering Ltd. All rights reserved.</p>
          <nav aria-label="Footer" className="flex flex-wrap gap-x-5">
            {NAV_LINKS.map((l) => (
              <Link key={l.to} to={l.to} className="inline-block py-2 hover:text-white">
                {l.label}
              </Link>
            ))}
            <Link to="/contact-us" className="inline-block py-2 hover:text-white">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
