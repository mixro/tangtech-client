import { Clock } from 'lucide-react'
import { usePageMeta } from '../hooks/usePageMeta'
import { Reveal } from '../components/Reveal'
import { ButtonLink, PageHero } from '../components/ui'
import { TrainingsList } from '../data/content'

export default function Trainings() {
  usePageMeta('Technical Training', 'Practical engineering training in switchgear assembly, AutoCAD, automation, testing and commissioning, and security systems from Tang Tech & Engineering Ltd.')
  return (
    <div className="page-in">
      <PageHero
        eyebrow="Training"
        title="Develop skills that move your career forward"
        description="Gain practical engineering and technical skills with industry-focused training in switchgear assembly, AutoCAD, automation, testing and security systems."
      >
        <div className="mt-7 flex flex-wrap gap-3">
          <ButtonLink to="/contact-us" variant="accent" size="lg">Enquire about training</ButtonLink>
        </div>
      </PageHero>

      <section className="section">
        <div className="wrap">
          <h2 className="text-2xl font-bold tracking-tight">Explore trainings</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {TrainingsList.map((t, i) => (
              <Reveal key={t.id} delay={(i % 3) * 70}>
                <article className="card flex h-full flex-col overflow-hidden">
                  <img src={t.image} alt={t.title} width={600} height={340} loading="lazy" decoding="async" className="aspect-[16/9] w-full object-cover" />
                  <div className="flex flex-1 flex-col p-5">
                    <p className="text-xs font-semibold uppercase tracking-wide text-brand-700">{t.field}</p>
                    <h3 className="mt-1 text-lg font-semibold">{t.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-600">{t.desc}</p>
                    <p className="mt-4 flex items-center gap-1.5 text-sm font-medium text-ink-700">
                      <Clock className="size-4 text-brand-600" aria-hidden /> {t.duration}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
