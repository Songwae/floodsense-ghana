# FloodSense Ghana — Website

Marketing and information site for **FloodSense Ghana**, an IoT-based
multi-hazard early-warning system targeting deployment in Accra — Ghana's most
heavily flooded area — and developed from the Upper East Region.

The system pairs solar-powered sensor nodes (water level, rainfall, air
quality) transmitting over GSM, an LSTM flood-prediction model, and SMS-based
community alerting, with a planned spatial risk map and authority dashboard for
NADMO and local officials.

> **Honest status:** the site labels every subsystem with its real state —
> *in development*, *designed · not yet built*, or *presented in the field*.
> Please keep these accurate as the project progresses (see `src/data/site.ts`).

## Tech stack

- **[Astro](https://astro.build)** — static-first, component-based, ships zero
  JS by default. Chosen so a live sensor **map / dashboard** can be added later
  as an interactive island without rebuilding the site.
- Self-hosted fonts (Space Grotesk + Inter) via `@fontsource` — no external
  font requests.
- `@astrojs/sitemap` for `sitemap.xml`.

## Local development

Requires Node.js ≥ 22.

```sh
npm install       # install dependencies
npm run dev       # dev server at http://localhost:4321
npm run build     # production build to ./dist/
npm run preview   # preview the production build
```

## Project structure

```text
src/
├── components/     # Nav, Footer, Logo, StatusBadge, diagrams…
├── data/site.ts    # SINGLE SOURCE OF TRUTH: system status, partners, contact
├── layouts/        # BaseLayout (shared shell)
├── pages/          # index, technology, partnerships, about, contact, thanks
├── assets/         # optimized images (Astro <Image>)
└── styles/         # global.css design system (Upper East palette)
```

To update system status, partners, recognition, or the contact email, edit
**`src/data/site.ts`** — it flows to every page.

## Deployment

The site is a static build (`./dist/`) and deploys to any static host:

- **Netlify** — build `npm run build`, publish `dist`. The contact form uses
  **Netlify Forms** (`data-netlify` attributes) and activates automatically.
- **Vercel** — auto-detects Astro. For the contact form, connect a form service
  (e.g. Formspree) or use the direct email routes.
- **GitHub Pages** — set `site` + `base` in `astro.config.mjs` accordingly.

Update `site` in `astro.config.mjs` to the final domain before production
(affects canonical URLs and the sitemap).

## Media

- Home hero: project introduction video (`public/media/floodsense-home.mp4`),
  provided by the founder.

All graphics (logo, system diagrams, illustrations) are original to this
project.
