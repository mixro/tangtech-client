import { Link } from "react-router";
import Seo from "../lib/seo";
import Img from "../components/Img";
import Icon from "../components/Icon";
import { ClientWall, CredentialStrip, CtaBand, LeaderQuote, ProductCard, ServiceCard } from "../components/Blocks";
import { images } from "../data/images";
import { services } from "../data/services";
import { products, categories } from "../data/products";
import { featuredProject } from "../data/projects";
import { stats } from "../data/site";
import { trainings } from "../data/organisations";

const catName = Object.fromEntries(categories.map((c) => [c.id, c.name]));
const featuredProducts = ["pole-mounted-auto-reclosers", "sf6-free-ring-main-units", "relay-test-sets-ct-analysers"].map((s) =>
  products.find((p) => p.slug === s)
);

export default function Home() {
  const power = services.filter((s) => s.group === "power");
  const building = services.filter((s) => s.group === "building");

  return (
    <>
      <Seo path="/" />

      <section className="hero">
        <div className="hero-media">
          <Img image={images.substation} ratio="16/10" sizes="(max-width: 900px) 100vw, 62vw" max={2000} priority />
        </div>
        <div className="wrap hero-grid">
          <div className="hero-panel">
            <p className="hero-tag">Class V registered electrical contractor · Dar es Salaam</p>
            <h1>Power infrastructure for Tanzania, built and tested to standard.</h1>
            <p className="hero-lead">
              We build 11 kV and 33 kV lines, substations and switchgear, test and commission HV equipment, and install the
              automation, ICT and security systems that run on them.
            </p>
            <div className="hero-actions">
              <Link to="/contact-us" className="btn btn-primary">
                Request a quote
              </Link>
              <Link to="/projects" className="btn btn-ghost-light">
                See our projects
              </Link>
            </div>
          </div>
        </div>
        <div className="wrap hero-creds">
          <CredentialStrip compact />
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <h2>Core power services</h2>
            <p>Medium and high-voltage work, from the first pole to the commissioning certificate.</p>
          </div>
          <div className="card-grid cols-4">
            {power.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>

          <div className="also">
            <h3>Also for buildings and industry</h3>
            <ul>
              {building.map((s) => (
                <li key={s.slug}>
                  <Link to={`/services/${s.slug}`}>
                    <strong>{s.title}</strong>
                    <span>{s.short}</span>
                    <Icon name="arrow" size={18} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="proof">
        <div className="wrap">
          <ul className="stats">
            {stats.map((s) => (
              <li key={s.label}>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </li>
            ))}
          </ul>

          <article className="case">
            <div className="case-media">
              <Img image={featuredProject.image} ratio="4/3" sizes="(max-width: 900px) 100vw, 45vw" max={1600} />
            </div>
            <div className="case-body">
              <p className="case-label">Featured project</p>
              <h2>{featuredProject.title}</h2>
              <p>{featuredProject.summary}</p>
              <ul className="ticks">
                {featuredProject.scope.map((s) => (
                  <li key={s}>
                    <Icon name="check" size={18} /> {s}
                  </li>
                ))}
              </ul>
              <p className="case-outcome">{featuredProject.outcome}</p>
              <Link to="/projects" className="btn btn-primary">
                View all projects
              </Link>
            </div>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head with-link">
            <div>
              <h2>Equipment we supply, install and test</h2>
              <p>Current-generation MV equipment and the diagnostic instruments our engineers use on site.</p>
            </div>
            <Link to="/products" className="text-link">
              Browse all products <Icon name="arrow" size={16} />
            </Link>
          </div>
          <div className="card-grid cols-3">
            {featuredProducts.map((p) => (
              <ProductCard key={p.slug} product={p} categoryName={catName[p.category]} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section-tint">
        <div className="wrap quote-split">
          <LeaderQuote />
          <div className="quote-side">
            <h2>Trusted by industry, hospitality and institutions</h2>
            <ClientWall showNames={false} />
            <Link to="/partners" className="text-link">
              Clients and partners <Icon name="arrow" size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap training-teaser">
          <div>
            <h2>Technical training</h2>
            <p>
              Practical courses for technicians and engineers in switchgear, testing, automation, design and security
              systems, taught by the people who do the work.
            </p>
            <Link to="/trainings" className="btn btn-outline">
              View training programmes
            </Link>
          </div>
          <ul className="training-list">
            {trainings.map((t) => (
              <li key={t.slug}>
                <Link to={`/trainings#${t.slug}`}>
                  <span>{t.title}</span>
                  <small>{t.duration}</small>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
