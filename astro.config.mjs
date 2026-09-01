import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  // Canonical host — must stay in sync with SITE.url in src/data/site.js.
  site: "https://www.santiagosalas.com",
  build: {
    // The whole site's Tailwind output is ~30 kB (~6.5 kB brotli) — smaller
    // than the 4 kB threshold rule of thumb would suggest keeping external,
    // once you count the extra round trip it costs on a cold mobile
    // connection. Inlining removes the only render-blocking request left.
    inlineStylesheets: "always",
  },
  integrations: [tailwind(), react()]
});
