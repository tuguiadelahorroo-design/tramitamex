// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Dominio canónico del sitio. Se usa para sitemap, canonical y Open Graph.
export const SITE_URL = 'https://tramitamex.com.mx';

export default defineConfig({
  site: SITE_URL,
  trailingSlash: 'always',
  integrations: [
    sitemap({
      i18n: undefined,
      changefreq: 'weekly',
      priority: 0.7,
    }),
  ],
  build: {
    // URLs limpias: /curp/ en vez de /curp.html
    format: 'directory',
  },
});
