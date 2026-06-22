// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { readFileSync, readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import remarkCallouts from './src/lib/remark-callouts.mjs';

// Dominio canónico del sitio. Se usa para sitemap, canonical y Open Graph.
export const SITE_URL = 'https://tramitamex.com.mx';

// Mapa "/slug/" -> fecha de actualización (frontmatter `actualizado`) para
// emitir un <lastmod> real y por página en el sitemap.
const lastmodPorRuta = new Map();
let fechaMasReciente = '2026-01-01';
try {
  const dir = fileURLToPath(new URL('./src/content/tramites', import.meta.url));
  for (const archivo of readdirSync(dir)) {
    if (!archivo.endsWith('.md')) continue;
    const fm = readFileSync(`${dir}/${archivo}`, 'utf8');
    const m = fm.match(/^actualizado:\s*['"]?(\d{4}-\d{2}-\d{2})/m);
    if (!m) continue;
    lastmodPorRuta.set(
      `/${archivo.replace(/\.md$/, '')}/`,
      new Date(`${m[1]}T00:00:00Z`).toISOString()
    );
    if (m[1] > fechaMasReciente) fechaMasReciente = m[1];
  }
} catch {
  // Sin contenido legible: se usará la fecha global de respaldo.
}
const lastmodGlobal = new Date(`${fechaMasReciente}T00:00:00Z`).toISOString();

// Páginas sin valor de búsqueda: fuera del sitemap.
const EXCLUIR_DEL_SITEMAP = ['/aviso-legal/', '/privacidad/'];

export default defineConfig({
  site: SITE_URL,
  trailingSlash: 'always',
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      filter: (page) => !EXCLUIR_DEL_SITEMAP.some((ruta) => page.endsWith(ruta)),
      serialize(item) {
        const { pathname } = new URL(item.url);
        item.lastmod = lastmodPorRuta.get(pathname) ?? lastmodGlobal;
        return item;
      },
    }),
  ],
  build: {
    // URLs limpias: /curp/ en vez de /curp.html
    format: 'directory',
  },
  markdown: {
    // Convierte blockquotes `> [!IMPORTANTE]` en recuadros de aviso.
    remarkPlugins: [remarkCallouts],
  },
});
