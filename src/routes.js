import { services } from "./data/services";
import { products } from "./data/products";

// Every URL that gets a prerendered HTML file (and a sitemap entry).
export const staticRoutes = ["/", "/services", "/projects", "/products", "/trainings", "/partners", "/about-us", "/contact-us", "/image-credits"];

export const allRoutes = [
  ...staticRoutes,
  ...services.map((s) => `/services/${s.slug}`),
  ...products.map((p) => `/products/${p.slug}`),
];
