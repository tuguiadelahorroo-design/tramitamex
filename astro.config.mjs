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

// Páginas que agrupan contenido (una institución, un estado): su fecha es la
// del elemento más reciente que muestran, no la del último despliegue.
const fechaAgrupada = new Map();
function anotarFechaAgrupada(ruta, fecha) {
  if (fecha > (fechaAgrupada.get(ruta) ?? '')) fechaAgrupada.set(ruta, fecha);
}
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
    // La página de una institución cambia cuando cambia uno de sus trámites.
    const inst = fm.match(/^institucion:\s*['"]?([a-z0-9-]+)/m);
    if (inst) anotarFechaAgrupada(`/instituciones/${inst[1]}/`, m[1]);
  }
} catch {
  // Sin contenido legible: se usará la fecha global de respaldo.
}
// Páginas trámite × estado: src/content/tramites-estado/<tramite>/<estado>.yaml
// -> "/<tramite>/<estado>/", con el mismo campo `actualizado`.
try {
  const dirEstado = fileURLToPath(new URL('./src/content/tramites-estado', import.meta.url));
  for (const tramite of readdirSync(dirEstado)) {
    for (const archivo of readdirSync(`${dirEstado}/${tramite}`)) {
      if (!archivo.endsWith('.yaml')) continue;
      const datos = readFileSync(`${dirEstado}/${tramite}/${archivo}`, 'utf8');
      const m = datos.match(/^actualizado:\s*['"]?(\d{4}-\d{2}-\d{2})/m);
      if (!m) continue;
      const estado = archivo.replace(/\.yaml$/, '');
      lastmodPorRuta.set(
        `/${tramite}/${estado}/`,
        new Date(`${m[1]}T00:00:00Z`).toISOString()
      );
      // La página del estado enlaza sus guías locales.
      anotarFechaAgrupada(`/por-estado/${estado}/`, m[1]);
    }
  }
} catch {
  // Aún no hay páginas por estado.
}
const lastmodGlobal = new Date(`${fechaMasReciente}T00:00:00Z`).toISOString();

// Solo la portada y el índice de trámites cambian con cada artículo nuevo.
const RUTAS_CON_FECHA_GLOBAL = new Set(['/', '/tramites/']);

/**
 * Fecha de última modificación de una ruta, o undefined si no se conoce.
 * Una fecha que cambia en cada despliegue sin que cambie la página hace que
 * Google deje de fiarse del <lastmod> de todo el sitemap.
 * @param {string} pathname
 * @returns {string | undefined}
 */
function lastmodDe(pathname) {
  const propia = lastmodPorRuta.get(pathname);
  if (propia) return propia;
  const agrupada = fechaAgrupada.get(pathname);
  if (agrupada) return new Date(`${agrupada}T00:00:00Z`).toISOString();
  return RUTAS_CON_FECHA_GLOBAL.has(pathname) ? lastmodGlobal : undefined;
}

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
        const lastmod = lastmodDe(pathname);
        if (lastmod) item.lastmod = lastmod;
        else delete item.lastmod;
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
