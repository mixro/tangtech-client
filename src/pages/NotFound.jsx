import { Link } from "react-router";
import Seo from "../lib/seo";
import { nav } from "../components/Layout";

export default function NotFound() {
  return (
    <>
      <Seo title="Page not found" path="/404" noindex />
      <section className="section not-found">
        <div className="wrap">
          <h1 className="display">
            Page not found<span className="display-accent">404</span>
          </h1>
          <p className="lead">This page has moved or no longer exists. Try one of these instead:</p>
          <ul className="aside-links">
            {nav.map((n) => (
              <li key={n.to}>
                <Link to={n.to}>{n.label}</Link>
              </li>
            ))}
            <li>
              <Link to="/contact-us">Contact us</Link>
            </li>
          </ul>
          <Link to="/" className="btn btn-primary">
            Go to the home page
          </Link>
        </div>
      </section>
    </>
  );
}
