import { Link, useParams } from "react-router";
import Seo from "../lib/seo";
import Img from "../components/Img";
import Icon from "../components/Icon";
import { CtaBand, PageHero, ServiceCard } from "../components/Blocks";
import { getService, services } from "../data/services";
import { projects, projectTypes } from "../data/projects";
import NotFound from "./NotFound";

export function Services() {
  const power = services.filter((s) => s.group === "power");
  const building = services.filter((s) => s.group === "building");
  return (
    <>
      <Seo
        title="Services"
        path="/services"
        description="MV/HV overhead lines, substations and transformers, switchgear and metering, testing and commissioning, standby power, ICT, security and automation services across Tanzania."
      />
      <PageHero
        title="Our"
        accent="services"
        kicker="Turnkey electrical power engineering, from 33 kV lines and substations to the building systems, networks and controls that depend on them."
      />
      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <h2>Power &amp; high voltage</h2>
            <p>Our core work, delivered by EWURA Class A licensed personnel to TANESCO standards.</p>
          </div>
          <div className="card-grid cols-2">
            {power.map((s) => (
              <ServiceCard key={s.slug} service={s} headingLevel={3} />
            ))}
          </div>
        </div>
      </section>
      <section className="section section-tint">
        <div className="wrap">
          <div className="section-head">
            <h2>Buildings, enterprise &amp; industry</h2>
            <p>Installation, standby power, ICT, security and automation for commercial and industrial sites.</p>
          </div>
          <div className="card-grid cols-3">
            {building.map((s) => (
              <ServiceCard key={s.slug} service={s} headingLevel={3} />
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}

// Which project types count as evidence for each service
const evidence = {
  "mv-hv-overhead-lines": ["substations"],
  "substations-transformers": ["substations", "testing"],
  "switchgear-metering": ["testing", "substations"],
  "testing-commissioning": ["testing", "installation"],
  "electrical-installation-standby-power": ["standby", "solar", "installation"],
  "ict-security": ["ict"],
  "automation-control": ["standby"],
};

export function ServiceDetail() {
  const { slug } = useParams();
  const service = getService(slug);
  if (!service) return <NotFound />;

  const related = projects.filter((p) => evidence[service.slug]?.includes(p.type)).slice(0, 4);
  const others = services.filter((s) => s.slug !== service.slug);
  const typeName = Object.fromEntries(projectTypes.map((t) => [t.id, t.name]));

  return (
    <>
      <Seo title={service.title} path={`/services/${service.slug}`} description={service.short} />
      <PageHero title={service.title} crumbs={[{ label: "Services", to: "/services" }, { label: service.title }]} kicker={service.intro} />

      <section className="section">
        <div className="wrap detail-grid">
          <div className="detail-main">
            <Img image={service.image} ratio="16/9" sizes="(max-width: 900px) 100vw, 60vw" max={1600} priority />
            <h2>What's included</h2>
            <ul className="ticks two-col">
              {service.scope.map((s) => (
                <li key={s}>
                  <Icon name="check" size={18} /> {s}
                </li>
              ))}
            </ul>
            <h2>What you receive</h2>
            <ul className="deliverables">
              {service.deliverables.map((d) => (
                <li key={d}>
                  <Icon name="file" size={18} /> {d}
                </li>
              ))}
            </ul>

            {related.length > 0 && (
              <>
                <h2>Recent related work</h2>
                <ul className="project-rows">
                  {related.map((p) => (
                    <li key={p.client + p.title}>
                      <span className="project-client">{p.client}</span>
                      <span>{p.title}</span>
                      <span className="project-meta">
                        {typeName[p.type]} · <span className={`status ${p.status === "Completed" ? "is-done" : "is-live"}`}>{p.status}</span>
                      </span>
                    </li>
                  ))}
                </ul>
                <Link to="/projects" className="text-link">
                  All projects <Icon name="arrow" size={16} />
                </Link>
              </>
            )}
          </div>

          <aside className="detail-aside">
            <div className="aside-card">
              <h2>Discuss your site</h2>
              <p>Share your load, location and drawings. We'll advise on scope and send a quotation.</p>
              <Link to={`/contact-us?service=${service.slug}`} className="btn btn-primary btn-block">
                Request a quote
              </Link>
            </div>
            <nav className="aside-card" aria-label="Other services">
              <h2>Other services</h2>
              <ul className="aside-links">
                {others.map((s) => (
                  <li key={s.slug}>
                    <Link to={`/services/${s.slug}`}>{s.title}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
