import { usePageMeta } from '../hooks/usePageMeta'
import { Reveal } from '../components/Reveal'
import { ButtonLink, PageHero } from '../components/ui'
import { TeamMembers } from '../data/content'

const initials = (name: string) =>
  name
    .replace(/^Eng\.\s*/i, '')
    .split(' ')
    .map((w) => w[0])
    .slice(0, 2)
    .join('')

export default function About() {
  usePageMeta('About Us', 'Tang Tech & Engineering Ltd, established in 2023, provides comprehensive electrical and ICT solutions through a team of skilled engineers and technicians.')
  return (
    <div className="page-in">
      <PageHero
        eyebrow="About us"
        title="A dynamic firm for electrical and ICT solutions"
        description="Tang Tech & Engineering Ltd specialises in comprehensive Electrical and Information Communication Technology (ICT) solutions. Established in 2023, we have grown into a trusted partner for a diverse range of clients, with a commitment to excellence, reliability and technological expertise."
      />

      <section className="section">
        <div className="wrap grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="card h-full p-7">
              <h2 className="text-xl font-semibold">Our mission</h2>
              <p className="mt-3 leading-relaxed text-ink-600">
                To deliver comprehensive electrical and ICT solutions that enhance the operational efficiency, connectivity and safety of our clients. We strive to provide innovative and sustainable technologies, exceptional customer service and a commitment to excellence in every project we undertake.
              </p>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="card h-full p-7">
              <h2 className="text-xl font-semibold">Our vision</h2>
              <p className="mt-3 leading-relaxed text-ink-600">
                To be the foremost provider of integrated electrical and ICT solutions, recognised for our innovation, reliability and dedication to sustainability. We aspire to lead the industry by setting new standards in technology and service, driving progress and improving lives through our expertise.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section bg-ink-50 !pt-14">
        <div className="wrap">
          <h2 className="text-2xl font-bold tracking-tight">Our team</h2>
          <p className="mt-3 max-w-3xl leading-relaxed text-ink-600">
            Our team consists of highly skilled engineers, technicians and industry experts committed to delivering excellence in electrical and ICT solutions. Below are some of the key members of our team.
          </p>
          <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {TeamMembers.map((m, i) => (
              <li key={m.id}>
                <Reveal delay={(i % 4) * 60}>
                  <div className="card flex h-full flex-col p-5">
                    <span className="grid size-12 place-items-center rounded-full bg-ink-900 text-sm font-bold text-brand-500" aria-hidden>
                      {initials(m.name)}
                    </span>
                    <h3 className="mt-4 font-semibold">{m.name}</h3>
                    <p className="mt-0.5 text-sm font-medium text-brand-700">{m.position}</p>
                    <p className="mt-2 text-sm text-ink-600">{m.qualification}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <ButtonLink to="/contact-us" variant="primary">Work with us</ButtonLink>
          </div>
        </div>
      </section>
    </div>
  )
}
