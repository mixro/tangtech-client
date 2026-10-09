import { createContext, useContext, useEffect } from "react";
import { site } from "../data/site";

// On the server the prerender script passes a collector object; on the client
// the component updates <head> after navigation.
export const SeoContext = createContext(null);

const DEFAULT_DESC =
  "Tang Tech & Engineering Ltd is a Class V registered electrical contractor in Dar es Salaam delivering MV/HV lines, substations, transformers, switchgear, testing and commissioning, automation and ICT systems across Tanzania.";

export function buildMeta({ title, description, path = "/" }) {
  const fullTitle = title ? `${title} | Tang Tech & Engineering` : "Tang Tech & Engineering Ltd | MV/HV Electrical Contractor, Tanzania";
  return {
    title: fullTitle,
    description: description || DEFAULT_DESC,
    canonical: site.url + (path === "/" ? "/" : path.replace(/\/$/, "")),
  };
}

function setMeta(selector, attr, value, create) {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement(create.tag);
    Object.entries(create.attrs).forEach(([k, v]) => el.setAttribute(k, v));
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
}

export default function Seo(props) {
  const collector = useContext(SeoContext);
  const meta = buildMeta(props);
  if (collector) Object.assign(collector, meta, { noindex: !!props.noindex });

  useEffect(() => {
    document.title = meta.title;
    setMeta('meta[name="description"]', "content", meta.description, { tag: "meta", attrs: { name: "description" } });
    setMeta('link[rel="canonical"]', "href", meta.canonical, { tag: "link", attrs: { rel: "canonical" } });
    setMeta('meta[property="og:title"]', "content", meta.title, { tag: "meta", attrs: { property: "og:title" } });
    setMeta('meta[property="og:description"]', "content", meta.description, { tag: "meta", attrs: { property: "og:description" } });
    setMeta('meta[property="og:url"]', "content", meta.canonical, { tag: "meta", attrs: { property: "og:url" } });
  }, [meta.title, meta.description, meta.canonical]);

  return null;
}
