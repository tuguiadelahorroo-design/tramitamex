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

// Imagen principal de una página ya generada (la foto del encabezado), para
// declararla en el sitemap con su texto alternativo.
const DIST = fileURLToPath(new URL('./dist', import.meta.url));
const ENTIDADES = { '&amp;': '&', '&quot;': '"', '&#34;': '"', '&#39;': "'", '&lt;': '<', '&gt;': '>' };
function imagenPrincipal(pathname) {
  try {
    const html = readFileSync(`${DIST}${pathname}index.html`, 'utf8');
    const figura = html.match(/class="hero-figure"[^>]*>\s*<img[^>]*>/);
    if (!figura) return undefined;
    const src = figura[0].match(/\ssrc="([^"]+)"/);
    const alt = figura[0].match(/\salt="([^"]*)"/);
    if (!src) return undefined;
    const texto = (alt?.[1] ?? '').replace(/&(amp|quot|lt|gt|#34|#39);/g, (e) => ENTIDADES[e]);
    return { url: new URL(src[1], SITE_URL).href, caption: texto || undefined };
  } catch {
    return undefined;
  }
}

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
        const imagen = lastmodPorRuta.has(pathname) ? imagenPrincipal(pathname) : undefined;
        if (imagen) item.img = [imagen];
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
