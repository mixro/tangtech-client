import { usePageMeta } from '../hooks/usePageMeta'
import { Reveal } from '../components/Reveal'
import { PageHero } from '../components/ui'
import { customersLogo } from '../data/content'

export default function Customers() {
  usePageMeta('Our Customers', 'Tang Tech has partnered with private companies, government institutions and industrial sectors to deliver electrical and ICT solutions.')
  return (
    <div className="page-in">
      <PageHero
        eyebrow="Customers"
        title="Trusted by businesses and institutions"
        description="Since its inception, Tang Tech has partnered with private companies, government institutions and industrial sectors. We specialise in high-voltage installations, system maintenance, automation and security solutions, ensuring efficiency, reliability and technological advancement in every project."
      />
      <section className="section">
        <ul className="wrap grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
          {customersLogo.map((c, i) => (
            <li key={c.id}>
              <Reveal delay={(i % 4) * 60}>
                <div className="card flex h-32 items-center justify-center p-5">
                  <img src={c.img} alt={c.name} loading="lazy" decoding="async" className="max-h-full max-w-full object-contain" />
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
