# Tang Tech & Engineering Ltd – Website (client)

Corporate website and online catalogue for **Tang Tech & Engineering Ltd** – electrical, ICT, security and automation
solutions, electrical products and technical training (Dar es Salaam, Tanzania).

**Stack:** React 19 · Vite · TypeScript · React Router 7 · Tailwind CSS 4 · lucide-react icons · Inter (variable, Latin subset)

## Getting started

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # type-check + production build into dist/
npm run preview    # serve the production build locally
npm run lint       # type-check only (tsc --noEmit)
```

Requires Node 20.19+ (22 recommended).

### Configuration

| Variable | Default | Purpose |
| --- | --- | --- |
| `VITE_API_URL` | `https://tangtech-server.onrender.com/api` | Backend REST API base URL |

Copy `.env.example` to `.env.local` to override.

## Project structure

```
src/
  main.tsx            entry: providers, router, idle-time data prefetch
  App.tsx             route table (every page except Home is lazy-loaded)
  types.ts            shared API/domain types
  components/         Layout, Header (responsive nav), Footer, ui primitives, Field, Reveal (scroll animation)
  pages/              one file per route
  hooks/              useResource (cached data fetching), usePageMeta (title/description/canonical/OG)
  lib/                api (fetch client), storage (persistence + legacy migration), format
  store/              StoreContext – user session, cart, wishlist (useReducer + localStorage)
  data/content.ts     static business content: services, trainings, partners, customers, team, contact details
  styles/index.css    Tailwind theme (brand colours sampled from the logo) + motion rules
public/
  images/             optimised WebP assets
  _redirects          SPA fallback (Netlify)
  _headers            caching + security headers (Netlify)
```

## Routes

`/` · `/services` · `/service/:id` · `/products` · `/product/:id` · `/trainings` · `/partners` · `/customers` ·
`/about-us` · `/contact-us` · `/cart` · `/wishlist` · `/success` · `/login` · `/register` · `*` → 404

## How data and state work

- **Content** (company info, training list, partners…) lives in `src/data/content.ts` – edit text there.
- **Services/products** come from the REST API (`GET /services`, `GET /products`). `useResource` de-duplicates requests,
  keeps the last good response in memory + `localStorage`, renders it instantly on reload and refreshes it in the background
  when older than 5 minutes. Pages show skeletons, a "server is waking up" notice on slow responses, and a retry on failure.
- **Auth/cart/wishlist** are stored in `localStorage` (`tt:state:v1`). A signed-in session and cart from the previous
  Redux-persist build are migrated automatically on first load.
- **API contract** (unchanged): `POST /auth/login`, `POST /auth/register`, `POST /messages`, `POST /orders` (sends the
  `token: Bearer …` header read at request time).

## Deployment

Static SPA – deploy `dist/` to Netlify, Vercel, Firebase Hosting, etc.

- **Netlify:** `netlify.toml` sets the build and Node version; `public/_redirects` provides the SPA fallback so direct
  URLs and refreshes work; `public/_headers` sets long-lived immutable caching for hashed `/assets/*`.
- **Other hosts:** configure an SPA fallback (all unknown paths → `/index.html`) and cache `/assets/*` for a year.
