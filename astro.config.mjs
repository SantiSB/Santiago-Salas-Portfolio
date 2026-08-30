import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  // Canonical host — must stay in sync with SITE.url in src/data/site.js.
  site: "https://www.santiagosalas.com",
  integrations: [tailwind(), react()]
});
