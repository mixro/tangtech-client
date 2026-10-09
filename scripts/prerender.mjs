// Turns the client build in dist/ into one static HTML file per route,
// with real content, <title>, description and canonical in each file.
// Run after `vite build` and `vite build --ssr src/entry-server.jsx --outDir dist-ssr`.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const ssrDir = path.join(root, "dist-ssr");
const SITE = "https://www.tangtecheng.com";

const entry = fs.readdirSync(ssrDir).find((f) => /^entry-server\.(m?js)$/.test(f));
const { render, allRoutes } = await import(pathToFileURL(path.join(ssrDir, entry)).href);
const template = fs.readFileSync(path.join(dist, "index.html"), "utf8");

// Preload each page's JS chunk so hydration starts sooner.
const manifestPath = [path.join(dist, ".vite", "manifest.json"), path.join(dist, "manifest.json")].find((p) => fs.existsSync(p));
const manifest = manifestPath ? JSON.parse(fs.readFileSync(manifestPath, "utf8")) : {};
const pageModule = (url) => {
  if (url === "/") return null;
  const seg = url.split("/")[1];
  const map = {
    services: "src/pages/Services.jsx",
    products: "src/pages/Products.jsx",
    projects: "src/pages/Projects.jsx",
    trainings: "src/pages/Trainings.jsx",
    partners: "src/pages/Partners.jsx",
    "about-us": "src/pages/About.jsx",
    "contact-us": "src/pages/Contact.jsx",
    "image-credits": "src/pages/ImageCredits.jsx",
  };
  return map[seg] ?? "src/pages/NotFound.jsx";
};
const preloadsFor = (url) => {
  const key = pageModule(url);
  const chunk = key && manifest[key];
  if (!chunk) return "";
  const files = new Set([chunk.file]);
  for (const imp of chunk.imports ?? []) if (manifest[imp]) files.add(manifest[imp].file);
  return [...files].map((f) => `<link rel="modulepreload" crossorigin href="/${f}">`).join("\n    ");
};

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

function headTags(meta, url) {
  return [
    `<title>${esc(meta.title)}</title>`,
    `<meta name="description" content="${esc(meta.description)}">`,
    meta.noindex ? `<meta name="robots" content="noindex">` : `<link rel="canonical" href="${esc(meta.canonical)}">`,
    `<meta property="og:type" content="website">`,
    `<meta property="og:site_name" content="Tang Tech &amp; Engineering Ltd">`,
    `<meta property="og:title" content="${esc(meta.title)}">`,
    `<meta property="og:description" content="${esc(meta.description)}">`,
    `<meta property="og:url" content="${esc(meta.canonical)}">`,
    `<meta property="og:image" content="${SITE}/icon-512.png">`,
    `<meta name="twitter:card" content="summary">`,
    preloadsFor(url),
  ]
    .filter(Boolean)
    .join("\n    ");
}

async function write(url, outFile) {
  const { html, meta } = await render(url);
  const page = template.replace("<!--app-head-->", headTags(meta, url)).replace("<!--app-html-->", html);
  fs.mkdirSync(path.dirname(outFile), { recursive: true });
  fs.writeFileSync(outFile, page);
  return meta;
}

for (const url of allRoutes) {
  const out = url === "/" ? path.join(dist, "index.html") : path.join(dist, url, "index.html");
  const meta = await write(url, out);
  console.log(`  ${url.padEnd(56)} ${meta.title}`);
}
await write("/404", path.join(dist, "404.html"));
console.log("  /404.html");

const today = new Date().toISOString().slice(0, 10);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes
  .filter((u) => u !== "/image-credits")
  .map((u) => `  <url><loc>${SITE}${u === "/" ? "/" : u}</loc><lastmod>${today}</lastmod></url>`)
  .join("\n")}
</urlset>
`;
fs.writeFileSync(path.join(dist, "sitemap.xml"), sitemap);
fs.rmSync(ssrDir, { recursive: true, force: true });
console.log(`Prerendered ${allRoutes.length + 1} pages and sitemap.xml`);
