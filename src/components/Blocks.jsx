import { Link } from "react-router";
import Icon from "./Icon";
import Img from "./Img";
import { credentials, leadershipQuote, site } from "../data/site";
import { clientLogos, clientNames } from "../data/organisations";

/** Page title band used on inner pages. Two-line title echoes the company profile. */
export function PageHero({ kicker, title, accent, children, crumbs }) {
  return (
    <section className="page-hero">
      <div className="wrap">
        {crumbs && (
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            {crumbs.map((c) =>
              c.to ? (
                <Link key={c.label} to={c.to}>
                  {c.label}
                </Link>
              ) : (
                <span key={c.label} aria-current="page">
                  {c.label}
                </span>
              )
            )}
          </nav>
        )}
        <h1 className="display">
          {title}
          {accent && <span className="display-accent">{accent}</span>}
        </h1>
        {kicker && <p className="page-hero-lead">{kicker}</p>}
        {children}
      </div>
    </section>
  );
}

export function CredentialStrip({ compact = false }) {
  const list = compact ? credentials.slice(0, 3) : credentials;
  return (
    <ul className={`cred-strip ${compact ? "is-compact" : ""}`}>
      {list.map((c) => (
        <li key={c.body}>
          <strong>{c.body}</strong>
          <span>{c.title}</span>
          {!compact && <small>{c.ref}</small>}
        </li>
      ))}
    </ul>
  );
}

export function LeaderQuote() {
  const q = leadershipQuote;
  return (
    <figure className="leader-quote">
      <blockquote>
        <p>{q.text}</p>
      </blockquote>
      <figcaption>
        <strong>{q.name}</strong>
        <span>
          {q.role}, {site.name}
        </span>
      </figcaption>
    </figure>
  );
}

export function ClientWall({ showNames = true }) {
  return (
    <div className="client-wall">
      <ul className="logo-grid">
        {clientLogos.map((c) => (
          <li key={c.name}>
            <img src={c.logo} alt={c.name} width={c.w} height={c.h} loading="lazy" decoding="async" />
          </li>
        ))}
      </ul>
      {showNames && (
        <ul className="name-grid" aria-label="More clients">
          {clientNames.map((n) => (
            <li key={n}>{n}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export function CtaBand({ title = "Planning a substation, line or upgrade?", text = "Send us your site details and drawings. An engineer will review them and come back with a scope and quotation." }) {
  return (
    <section className="cta-band">
      <div className="wrap cta-inner">
        <div>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <div className="cta-actions">
          <Link to="/contact-us" className="btn btn-light">
            Request a quote
          </Link>
          <a href={`tel:${site.phone.tel}`} className="btn btn-ghost-light">
            <Icon name="phone" size={18} /> {site.phone.display}
          </a>
        </div>
      </div>
    </section>
  );
}

export function ServiceCard({ service, headingLevel = 3 }) {
  const H = `h${headingLevel}`;
  return (
    <article className="service-card">
      <Img image={service.image} ratio="3/2" sizes="(max-width: 760px) 100vw, (max-width: 1100px) 50vw, 33vw" max={1200} />
      <div className="service-card-body">
        <H>
          <Link to={`/services/${service.slug}`} className="stretched">
            {service.title}
          </Link>
        </H>
        <p>{service.short}</p>
        <span className="more" aria-hidden="true">
          Service details <Icon name="arrow" size={16} />
        </span>
      </div>
    </article>
  );
}

export function ProductCard({ product, categoryName }) {
  return (
    <article className="product-card">
      <Img image={product.image} ratio="4/3" sizes="(max-width: 600px) 100vw, (max-width: 1100px) 50vw, 33vw" max={1200} />
      <div className="product-card-body">
        <p className="product-cat">
          {categoryName}
          {product.tags?.map((t) => (
            <span key={t} className={`tag tag-${t.toLowerCase()}`}>
              {t}
            </span>
          ))}
        </p>
        <h3>
          <Link to={`/products/${product.slug}`} className="stretched">
            {product.name}
          </Link>
        </h3>
        <p className="product-rating">{product.rating}</p>
        <p>{product.summary}</p>
      </div>
    </article>
  );
}
