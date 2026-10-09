# Tang Tech & Engineering — website

Static company website for **Tang Tech & Engineering Ltd**: a Class V electrical works contractor in Dar es Salaam (MV/HV lines, substations, switchgear, testing, automation, ICT).

It is built with **React 19 + Vite**, has **no backend**, and every page is **prerendered to static HTML** at build time. That gives fast first paint and full indexing by search engines.

## Quick start

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build + prerender → dist/
npm run preview    # serve dist/ locally
```

Requires Node 20.19+ (Node 22 recommended).

## How it's built

| Concern | Approach |
|---|---|
| Framework | React 19, React Router 7 (declarative mode), Vite 7 |
| Content | Plain JS data files in `src/data/` (no API, no database) |
| Rendering | `vite build` → SSR build of `src/entry-server.jsx` → `scripts/prerender.mjs` writes `dist/<route>/index.html` for every route, plus `404.html` and `sitemap.xml` |
| Code splitting | Home is in the main bundle; every other page is lazy-loaded and its chunk is `modulepreload`ed on its own HTML page |
| Styling | One CSS file with design tokens (`src/styles/global.css`); no UI framework |
| Icons | Inline SVG (`src/components/Icon.jsx`) |
| Images | Responsive `srcset` from the Unsplash CDN (auto WebP/AVIF), lazy-loaded, fixed aspect ratio, branded fallback if an image fails |
| Forms | Web3Forms emails each quote request straight to info@tangtecheng.com (works on any host), plus a WhatsApp fallback |
| SEO | Per-page title/description/canonical/Open Graph, JSON-LD `ElectricalContractor`, sitemap, 301s for old URLs |

## Editing content

Everything visible on the site lives in `src/data/`:

| File | What it holds |
|---|---|
| `site.js` | Phone, email, address, stats, licences (CRB/EWURA/BRELA/TRA), MD quote, milestones, mission/vision |
| `services.js` | The 7 services and their detail pages |
| `products.js` | Product categories and the 25 equipment/instrument entries (specs, highlights, example brands) |
| `projects.js` | Featured case study + project list |
| `organisations.js` | Partners, client logos/names, training courses |
| `images.js` | Every photo used on the site (alt text + credit) |

Add a product or service by adding an object to the array. Its page, sitemap entry and prerendered HTML are created automatically on the next build.

### Replacing placeholder photos with your own

The current photos are placeholders from Unsplash (free under the Unsplash License, credited on `/image-credits`). To use your own project photos:

1. Put the file in `public/images/projects/` (WebP or JPG, about 1600 px wide).
2. In `src/data/images.js`, give the entry a `src`. For example:
   ```js
   substation: { src: "/images/projects/800kva-substation.webp", alt: "800 kVA ground-mounted substation we commissioned" },
   ```
3. Remove the Unsplash fields (`id`, `page`) from that entry so it no longer appears in the credits.

## Deployment (Netlify)

`netlify.toml` is included: build command `npm run build`, publish directory `dist`.

After the first deploy:

1. **Old URLs:** `public/_redirects` sends `/product/*`, `/service/*`, `/login`, `/register`, `/cart`, `/wishlist`, `/success` and `/customers` to their new pages with 301s.
2. **Search Console:** submit `https://www.tangtecheng.com/sitemap.xml`.

Other hosts work too (Cloudflare Pages, Vercel, any static host). Nothing in the site depends on Netlify.

## Quote form → email (Web3Forms)

The contact form posts to `https://api.web3forms.com/submit`, which emails the request to the inbox linked to the access key.

1. At https://web3forms.com, create an access key using **info@tangtecheng.com** and confirm it from your inbox.
2. Paste the key into `src/data/site.js` → `web3formsKey`. Alternatively, set `VITE_WEB3FORMS_KEY` in your host's environment variables; it overrides the file.
3. Rebuild and deploy, then send a test request from `/contact-us`.

The key is public by design. It only identifies which inbox receives the email, so it is safe in frontend code. The free plan allows 250 submissions a month. Replying to a notification email replies to the customer.

## Project structure

```
src/
  main.jsx            client entry (hydrates prerendered HTML)
  entry-server.jsx    render(url) used by the prerender script
  App.jsx             routes (lazy-loaded pages)
  routes.js           list of URLs to prerender
  components/         Layout (header/footer), Blocks, Img, Icon
  pages/              Home, Services, Projects, Products, Trainings, Partners, About, Contact, ImageCredits, NotFound
  data/               all site content
  lib/seo.jsx         per-page <head> tags (server + client)
  styles/global.css   design tokens and all styles
scripts/prerender.mjs
public/               logos, icons, robots.txt, _redirects
```
