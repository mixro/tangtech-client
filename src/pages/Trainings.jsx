import { Link } from "react-router";
import Seo from "../lib/seo";
import Img from "../components/Img";
import Icon from "../components/Icon";
import { CtaBand, PageHero } from "../components/Blocks";
import { trainings } from "../data/organisations";

export default function Trainings() {
  return (
    <>
      <Seo
        title="Technical training"
        path="/trainings"
        description="Practical engineering training in Dar es Salaam: switchgear assembly, testing and commissioning, industrial automation, AutoCAD for electrical design and security systems."
      />
      <PageHero
        title="Technical"
        accent="training"
        kicker="Hands-on courses for technicians, engineers and students, built around the equipment and procedures we use on live projects."
      />
      <section className="section">
        <div className="wrap training-grid">
          {trainings.map((t) => (
            <article key={t.slug} id={t.slug} className="training">
              <Img image={t.image} ratio="3/2" sizes="(max-width: 760px) 100vw, 40vw" max={1200} />
              <div className="training-body">
                <h2>{t.title}</h2>
                <p className="training-meta">
                  <span>
                    <Icon name="clock" size={16} /> {t.duration}
                  </span>
                  <span>{t.field}</span>
                </p>
                <p>{t.summary}</p>
                <h3>You will cover</h3>
                <ul className="ticks">
                  {t.topics.map((x) => (
                    <li key={x}>
                      <Icon name="check" size={16} /> {x}
                    </li>
                  ))}
                </ul>
                <Link to={`/contact-us?training=${t.slug}`} className="btn btn-outline">
                  Enquire about this course
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
      <CtaBand title="Training a team?" text="We run courses for company teams and can tailor content to your equipment and site procedures." />
    </>
  );
}
