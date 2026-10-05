# Santiago Salas — Portfolio

Source of [www.santiagosalas.com](https://www.santiagosalas.com).

I'm **Santiago Salas**, a **Senior Frontend Engineer** with 7 years of
experience in frontend architecture, state management, performance and product
experience. I work on enterprise SaaS, data-heavy tools and a ticketing product I
co-founded, and I use AI both inside products and in my engineering work.

**Senior Frontend Engineer · 7 years of experience**

## Stack

- **Astro** — static output, one HTML file per route, per language
- **React 19** — only where interactivity earns it (a single `client:visible` island)
- **Tailwind CSS** — class-based dark mode, custom neutral + cyan palette
- Animations are plain CSS; no animation library ships to the browser

## Structure

```
src/
  data/          content: site, work, experience, capabilities
  i18n/          bilingual resolver t(), routes, UI strings
  layouts/       Layout.astro — SEO, hreflang, JSON-LD, theme boot
  views/         one file per page, shared between /en and /es
  components/    hero, home, work, experience, ai, media, ui
  pages/         thin per-language route shims + sitemap.xml
```

Content is data, not markup: every page is rendered from `src/data/*.js`, and
every value is either a plain string or a `{ en, es }` pair resolved by `t()`.

## Conventions

- **Never invent evidence.** Project imagery follows one order: a real,
  publishable screenshot → an own conceptual drawing (`components/media/visuals`)
  → a neutral placeholder. No stock photography, no fabricated interfaces, no
  confidential material.
- **Content follows the CVs.** Titles and dates in `src/data/experience.js` and
  `src/data/work.js` mirror the PDFs in `public/files`. Change one, change the
  other. When a CV is replaced, change the file name too (the CDN caches PDFs by
  path) and update `SITE.cv` and `SITE.cvDownloadName` in `src/data/site.js`.
- **Canonical host is `https://www.santiagosalas.com`.** It is set once, in
  `SITE.url` and `astro.config.mjs`, and everything absolute derives from it.
- **Light mode is the default** for a first-time visitor; dark is remembered
  once chosen.

## Commands

```bash
npm install
npm run dev      # local dev server
npm run build    # astro check + static build to ./dist
npm run preview  # serve the build
```

Pushing to `master` builds and deploys to S3 + CloudFront via GitHub Actions.

## Contact

- Email — [a.santiago.salas.b@gmail.com](mailto:a.santiago.salas.b@gmail.com)
- LinkedIn — [santiagosalasbolaños](https://www.linkedin.com/in/santiagosalasbola%C3%B1os)
- GitHub — [SantiSB](https://github.com/SantiSB)
