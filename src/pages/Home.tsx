import { Link } from 'react-router-dom'
import { ArrowRight, BadgeCheck, Clock, Cpu, GraduationCap, Lightbulb, Mail, Network, Phone, ShieldCheck, Wrench, Zap } from 'lucide-react'
import { usePageMeta } from '../hooks/usePageMeta'
import { Reveal } from '../components/Reveal'
import { ButtonLink, SectionHeading } from '../components/ui'
import { CONTACT, companyServices, customersLogo, partnersLogo, swiperProducts, TrainingsList } from '../data/content'

const serviceIcons = [Zap, Network, ShieldCheck, Cpu]

const stats = [
  { value: '4', label: 'Engineering service lines' },
  { value: '5', label: 'Technical training programmes' },
  { value: '5', label: 'Industry partners' },
  { value: '2023', label: 'Established in Dar es Salaam' },
]

const reasons = [
  { icon: Wrench, title: 'Expertise', text: 'Extensive expertise in electrical engineering and ICT solutions, delivered by qualified engineers and technicians.' },
  { icon: Lightbulb, title: 'Innovation', text: 'We keep pace with the latest technological advancements to provide modern, sustainable solutions.' },
  { icon: BadgeCheck, title: 'Quality assurance', text: 'We adhere to industry standards and best practices, ensuring high-quality service delivery.' },
]

export default function Home() {
  usePageMeta(
    '',
    'Tang Tech & Engineering Ltd delivers electrical installations, ICT, security and automation solutions, electrical products and technical training in Dar es Salaam, Tanzania.',
  )

  return (
    <div className="page-in">
      {/* HERO */}
      <section className="grid-bg relative overflow-hidden bg-ink-900 text-white">
        <div className="wrap grid items-center gap-10 py-14 sm:py-20 lg:grid-cols-[1.1fr_1fr] lg:py-24">
          <div>
            <p className="hero-in eyebrow !text-brand-500">Electrical &middot; ICT &middot; Security &middot; Automation</p>
            <h1 className="hero-in mt-4 text-4xl font-bold leading-[1.1] tracking-tight text-balance sm:text-5xl" style={{ ['--d' as string]: '80ms' }}>
              Engineering solutions you can rely on.
            </h1>
            <p className="hero-in mt-5 max-w-xl text-lg leading-relaxed text-ink-200" style={{ ['--d' as string]: '160ms' }}>
              Tang Tech &amp; Engineering Ltd delivers cutting-edge electrical, ICT, security and automation solutions &ndash; trusted for
              innovation, reliability and sustainable technology.
            </p>
            <div className="hero-in mt-8 flex flex-wrap gap-3" style={{ ['--d' as string]: '240ms' }}>
              <ButtonLink to="/contact-us" variant="accent" size="lg">
                Request a quote <ArrowRight className="size-4" aria-hidden />
              </ButtonLink>
              <ButtonLink to="/services" variant="outline-light" size="lg">
                Explore services
              </ButtonLink>
            </div>
            <div className="hero-in mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-200" style={{ ['--d' as string]: '320ms' }}>
              <a href={`tel:${CONTACT.phone}`} className="flex items-center gap-2 hover:text-white">
                <Phone className="size-4 text-brand-500" aria-hidden /> {CONTACT.phone}
              </a>
              <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-2 hover:text-white">
                <Mail className="size-4 text-brand-500" aria-hidden /> {CONTACT.email}
              </a>
            </div>
          </div>

          <div className="hero-in relative" style={{ ['--d' as string]: '200ms' }}>
            <img
              src="/images/back-1.webp"
              alt="Electrical installation and high-voltage works"
              width={863}
              height={425}
              fetchPriority="high"
              decoding="async"
              className="aspect-[4/3] w-full rounded-xl object-cover shadow-lift ring-1 ring-white/10"
            />
            <div className="absolute -bottom-5 left-4 right-4 rounded-lg bg-white p-4 text-ink-900 shadow-lift sm:left-auto sm:right-6 sm:max-w-xs">
              <p className="text-xs font-semibold uppercase tracking-wider text-brand-700">Technical services</p>
              <p className="mt-1 text-sm text-ink-600">Installations, high-voltage works, testing, commissioning, maintenance and repair.</p>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section aria-label="Company at a glance" className="border-b border-ink-100 bg-white">
        <dl className="wrap grid grid-cols-2 gap-y-6 py-10 pt-14 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="px-2 text-center sm:border-r sm:border-ink-100 sm:last:border-0">
              <dt className="sr-only">{s.label}</dt>
              <dd className="text-3xl font-bold text-ink-900">{s.value}</dd>
              <dd className="mt-1 text-sm text-ink-600" aria-hidden>
                {s.label}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* SERVICES */}
      <section className="section">
        <div className="wrap">
          <Reveal>
            <SectionHeading
              eyebrow="What we do"
              title="Four engineering disciplines, one accountable partner"
              description="From power distribution to digital connectivity and site security, we design, install and maintain the systems your operations depend on."
            />
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {companyServices.map((s, i) => {
              const Icon = serviceIcons[i] ?? Zap
              return (
                <Reveal key={s.id} delay={i * 70}>
                  <Link to="/services" className="card group flex h-full flex-col overflow-hidden transition-shadow duration-200 hover:shadow-lift">
                    <div className="aspect-[16/10] overflow-hidden bg-ink-100">
                      <img
                        src={s.image}
                        alt={s.title}
                        width={600}
                        height={375}
                        loading="lazy"
                        decoding="async"
                        className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <span className="grid size-10 place-items-center rounded-lg bg-brand-50 text-brand-700">
                        <Icon className="size-5" aria-hidden />
                      </span>
                      <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-600">{s.desc}</p>
                      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700">
                        View services <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="section bg-ink-50">
        <div className="wrap">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <SectionHeading
                eyebrow="Electrical products"
                title="Power equipment from trusted manufacturers"
                description="Transformers, switchgear, circuit breakers, transmission cables and surge arresters for efficient power distribution and system protection."
              />
              <ButtonLink to="/products" variant="outline">
                Browse all products
              </ButtonLink>
            </div>
          </Reveal>
          <ul className="-mx-4 mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-4 sm:mx-0 sm:px-0 lg:grid lg:grid-cols-5 lg:overflow-visible">
            {swiperProducts.map((p) => (
              <li key={p.id} className="w-64 shrink-0 snap-start lg:w-auto">
                <Link to="/products" className="card group flex h-full flex-col overflow-hidden transition-shadow duration-200 hover:shadow-lift">
                  <div className="relative aspect-square bg-white">
                    <img src={p.image} alt={p.name} width={300} height={300} loading="lazy" decoding="async" className="absolute inset-0 size-full object-contain p-3" />
                  </div>
                  <div className="flex flex-1 flex-col border-t border-ink-100 p-4">
                    <p className="text-xs font-semibold uppercase tracking-wide text-brand-700">{p.brand}</p>
                    <h3 className="mt-1 text-sm font-semibold leading-snug">{p.name}</h3>
                    <p className="mt-2 line-clamp-3 text-xs leading-relaxed text-ink-600">{p.desc}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* WHY US */}
      <section className="section">
        <div className="wrap grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:items-center">
          <Reveal>
            <SectionHeading
              eyebrow="Why Tang Tech"
              title="Built on technical competence and dependable delivery"
              description="Our mission is to empower businesses and communities with superior services, advanced solutions and a commitment to continuous growth and efficiency."
            />
            <ButtonLink to="/about-us" variant="primary" className="mt-6">
              About our company
            </ButtonLink>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-3">
            {reasons.map((r, i) => (
              <Reveal key={r.title} delay={i * 80}>
                <div className="card h-full p-5">
                  <r.icon className="size-7 text-brand-600" aria-hidden />
                  <h3 className="mt-4 font-semibold">{r.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-600">{r.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TRAINING */}
      <section className="section bg-ink-900 text-white">
        <div className="wrap grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <p className="eyebrow !text-brand-500">Technical training</p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-balance sm:text-3xl">Develop skills that move your career forward</h2>
            <p className="mt-3 leading-relaxed text-ink-200">
              Practical, industry-focused programmes for professionals in switchgear assembly, AutoCAD, automation, testing and commissioning, and security systems.
            </p>
            <ButtonLink to="/trainings" variant="accent" className="mt-6">
              <GraduationCap className="size-4" aria-hidden /> View training programmes
            </ButtonLink>
          </Reveal>
          <ul className="divide-y divide-white/10 rounded-xl border border-white/10 bg-white/[0.03]">
            {TrainingsList.map((t) => (
              <li key={t.id} className="flex items-center justify-between gap-4 px-5 py-4">
                <span className="font-medium">{t.title}</span>
                <span className="flex shrink-0 items-center gap-1.5 text-sm text-ink-200">
                  <Clock className="size-3.5" aria-hidden /> {t.duration}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* TRUST */}
      <section className="section">
        <div className="wrap">
          <Reveal>
            <SectionHeading center eyebrow="Trusted by" title="Partners and customers across industry" />
          </Reveal>
          <ul className="mt-10 grid grid-cols-2 items-center gap-4 sm:grid-cols-4 lg:grid-cols-6">
            {[...partnersLogo.map((p) => ({ id: `p${p.id}`, img: p.img, name: p.company })), ...customersLogo.slice(0, 7).map((c) => ({ id: `c${c.id}`, img: c.img, name: c.name }))]
              .slice(0, 12)
              .map((l) => (
                <li key={l.id} className="card flex h-20 items-center justify-center p-3">
                  <img src={l.img} alt={l.name} loading="lazy" decoding="async" className="max-h-full max-w-full object-contain" />
                </li>
              ))}
          </ul>
          <div className="mt-8 flex justify-center gap-5 text-sm font-semibold text-brand-700">
            <Link to="/partners" className="hover:underline">
              Our partners
            </Link>
            <Link to="/customers" className="hover:underline">
              Our customers
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-16 sm:pb-20">
        <div className="wrap">
          <div className="grid-bg overflow-hidden rounded-2xl bg-ink-800 px-6 py-12 text-center text-white sm:px-12">
            <h2 className="text-2xl font-bold tracking-tight text-balance sm:text-3xl">Planning an electrical, ICT or security project?</h2>
            <p className="mx-auto mt-3 max-w-xl text-ink-200">Tell us what you need and our engineers will get back to you.</p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <ButtonLink to="/contact-us" variant="accent" size="lg">
                Request a quote
              </ButtonLink>
              <a href={`tel:${CONTACT.phone}`} className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-6 py-3 font-semibold hover:bg-white/10">
                <Phone className="size-4" aria-hidden /> Call {CONTACT.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
