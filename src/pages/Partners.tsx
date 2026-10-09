import { usePageMeta } from '../hooks/usePageMeta'
import { Reveal } from '../components/Reveal'
import { PageHero } from '../components/ui'
import { partnersLogo } from '../data/content'

export default function Partners() {
  usePageMeta('Partners', 'Tang Tech collaborates with Schneider Electric, ABB, TELA Technology, Africab and the DIT Teaching Factory to deliver quality electrical and ICT solutions.')
  return (
    <div className="page-in">
      <PageHero
        eyebrow="Partners"
        title="Working with industry-leading partners"
        description="Since its establishment, Tang Tech has collaborated with Schneider Electric, ABB, TELA Technology, Dar es Salaam Institute of Technology Teaching Factory, and Africab. These partnerships enhance our ability to deliver cutting-edge electrical and ICT solutions, ensuring quality, innovation and efficiency in every project."
      />
      <section className="section">
        <div className="wrap grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {partnersLogo.map((p, i) => (
            <Reveal key={p.id} delay={(i % 3) * 70}>
              <article className="card flex h-full flex-col p-6">
                <div className="flex h-28 items-center justify-center rounded-lg bg-white">
                  <img src={p.img} alt={`${p.company} logo`} loading="lazy" decoding="async" className="max-h-24 max-w-[70%] object-contain" />
                </div>
                <h2 className="mt-5 text-lg font-semibold">{p.company}</h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">{p.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  )
}
