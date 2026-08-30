/**
 * Hand-rolled sitemap: no extra integration, and it stays in sync because it
 * is generated from the same ROUTES/WORK data the site renders from.
 * Every URL is absolute and uses SITE.url — the single canonical host.
 */
import { ROUTES, workUrl } from "../i18n";
import { WORK } from "../data/work";
import { SITE } from "../data/site";

const abs = (path) => new URL(path, SITE.url).href;

/** One <url> per page, with both language variants declared as alternates. */
function entry(enPath, esPath) {
  return [enPath, esPath]
    .map(
      (path) => `  <url>
    <loc>${abs(path)}</loc>
    <xhtml:link rel="alternate" hreflang="en" href="${abs(enPath)}"/>
    <xhtml:link rel="alternate" hreflang="es" href="${abs(esPath)}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${abs(enPath)}"/>
    <changefreq>monthly</changefreq>
    <priority>${path === ROUTES.home.en ? "1.0" : "0.8"}</priority>
  </url>`
    )
    .join("\n");
}

export function GET() {
  const views = Object.values(ROUTES).map((paths) => entry(paths.en, paths.es));
  const projects = WORK.map((work) =>
    entry(workUrl(work.slug, "en"), workUrl(work.slug, "es"))
  );

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${[...views, ...projects].join("\n")}
</urlset>
`;

  return new Response(body, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}
