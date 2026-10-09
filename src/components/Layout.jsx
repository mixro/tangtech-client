import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router";
import Icon from "./Icon";
import { site } from "../data/site";
import { services } from "../data/services";

export const nav = [
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/products", label: "Products" },
  { to: "/trainings", label: "Trainings" },
  { to: "/partners", label: "Clients & partners" },
  { to: "/about-us", label: "About" },
];

function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.classList.add("menu-open");
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.classList.remove("menu-open");
    };
  }, [open]);

  return (
    <header className="site-header">
      <div className="topline">
        <div className="wrap topline-inner">
          <a href={`tel:${site.phone.tel}`}>
            <Icon name="phone" size={15} /> {site.phone.display}
          </a>
          <a href={`mailto:${site.email}`}>
            <Icon name="mail" size={15} /> {site.email}
          </a>
          <span className="topline-addr">
            <Icon name="pin" size={15} /> {site.address.line1}, Dar es Salaam
          </span>
        </div>
      </div>
      <div className="wrap header-bar">
        <Link to="/" className="brand" aria-label="Tang Tech & Engineering, home">
          <img src="/images/brand/mark.webp" width="96" height="96" alt="" />
          <span className="brand-text">
            <strong>Tang Tech</strong>
            <span>&amp; Engineering Ltd</span>
          </span>
        </Link>

        <nav className={`main-nav ${open ? "is-open" : ""}`} id="main-nav" aria-label="Main">
          <ul>
            {nav.map((n) => (
              <li key={n.to}>
                <NavLink to={n.to}>{n.label}</NavLink>
              </li>
            ))}
          </ul>
          <div className="mobile-contact">
            <a href={`tel:${site.phone.tel}`}>
              <Icon name="phone" size={18} /> {site.phone.display}
            </a>
            <a href={`mailto:${site.email}`}>
              <Icon name="mail" size={18} /> {site.email}
            </a>
          </div>
        </nav>

        <Link to="/contact-us" className="btn btn-primary header-cta">
          Request a quote
        </Link>
        <button
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="main-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((o) => !o)}
        >
          <Icon name={open ? "close" : "menu"} size={24} />
        </button>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div className="footer-brand">
          <img src="/images/brand/logo-full-white.webp" width="88" height="80" alt="Tang Tech & Engineering Ltd" loading="lazy" />
          <p>{site.tagline}</p>
          <p className="footer-reg">CRB Class V · EWURA Class A · BRELA 168901461</p>
        </div>
        <div>
          <h2>Services</h2>
          <ul>
            {services.map((s) => (
              <li key={s.slug}>
                <Link to={`/services/${s.slug}`}>{s.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2>Company</h2>
          <ul>
            {nav.slice(1).map((n) => (
              <li key={n.to}>
                <Link to={n.to}>{n.label}</Link>
              </li>
            ))}
            <li>
              <Link to="/contact-us">Contact</Link>
            </li>
          </ul>
        </div>
        <div>
          <h2>Contact</h2>
          <ul className="footer-contact">
            <li>
              <Icon name="pin" size={16} />
              <span>
                {site.address.line1}
                <br />
                {site.address.city}
              </span>
            </li>
            <li>
              <Icon name="phone" size={16} />
              <span>
                <a href={`tel:${site.phone.tel}`}>{site.phone.display}</a>
                <br />
                <a href={`tel:${site.phoneAlt.tel}`}>{site.phoneAlt.display}</a>
              </span>
            </li>
            <li>
              <Icon name="mail" size={16} />
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="wrap footer-base">
        <span>© {new Date().getFullYear()} Tang Tech &amp; Engineering Ltd</span>
        <Link to="/image-credits">Image credits</Link>
      </div>
    </footer>
  );
}

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView();
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
}

export default function Layout({ children }) {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <ScrollToTop />
      <Header />
      <main id="main" tabIndex={-1}>
        {children}
      </main>
      <a
        className="wa-float"
        href={`https://wa.me/${site.whatsapp}?text=Hello%20Tang%20Tech%20,%20I%20would%20like%20to%20inquire%20about%20your%20electrical%20services.`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Tang Tech on WhatsApp"
      >
        <Icon name="whatsapp" size={28} />
      </a>
      <Footer />
    </>
  );
}
