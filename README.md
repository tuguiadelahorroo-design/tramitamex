# TramitaMex — tramitamex.com.mx

**La guía nacional de trámites en México.** Sitio informativo independiente (no oficial)
que explica los trámites más buscados del país: requisitos, costos, paso a paso y enlace
directo al portal oficial.

Construido con [Astro](https://astro.build) → genera HTML estático ultra-rápido, ideal para
SEO y Core Web Vitals.

---

## 🚀 Comandos

```bash
npm install        # instala dependencias (solo la primera vez)
npm run dev        # servidor de desarrollo en http://localhost:4321
npm run build      # genera el sitio estático en dist/
npm run preview    # sirve dist/ localmente para revisar el build
```

> ⚠️ **Importante — no pongas este proyecto en Google Drive / OneDrive.**
> El sistema de archivos virtual de Google Drive ("Mi unidad") corrompe `node_modules`
> durante `npm install` (`ERR_INVALID_PACKAGE_CONFIG`) y no admite junctions. Por eso el
> proyecto vive en disco local. Para respaldo y versionado, usa **GitHub** (ver abajo),
> no Drive.

---

## 📁 Estructura

```
src/
├── content/
│   ├── tramites/              # 1 archivo .md por trámite  → genera /<slug>/
│   │   ├── curp.md
│   │   ├── rfc.md
│   │   ├── constancia-de-situacion-fiscal.md
│   │   └── nss.md
├── content.config.ts         # esquema (frontmatter) de los trámites
├── data/
│   ├── estados.ts            # las 32 entidades
│   ├── instituciones.ts      # SAT, IMSS, RENAPO, ...
│   └── navigation.ts         # taxonomía del mega-menú (live / próximamente)
├── components/               # Header (mega-menú), Footer, SEO, Breadcrumbs, Faq, ...
├── layouts/
│   ├── BaseLayout.astro      # shell HTML, fuentes, header/footer, SEO
│   └── TramiteLayout.astro   # plantilla de cada trámite (hero, ficha, FAQ, fuentes)
├── pages/
│   ├── index.astro           # home
│   ├── [tramite].astro       # páginas de trámite (desde content/tramites/)
│   ├── tramites/index.astro  # directorio con buscador
│   ├── por-estado/[estado].astro
│   ├── instituciones/[institucion].astro
│   └── ...                   # guias, acerca-de, contacto, aviso-legal, privacidad, 404
└── styles/
    ├── tokens.css            # sistema de diseño (color OKLCH, tipografía, espaciado)
    ├── global.css            # base + utilidades
    └── prose.css             # estilos del contenido Markdown
```

### Rutas SEO (estrategia de 3 ángulos)

```
/curp/                              → el trámite
/por-estado/jalisco/                → por ubicación
/instituciones/sat/                 → por institución
```

---

## ✍️ Cómo agregar un trámite nuevo

1. Crea `src/content/tramites/<slug>.md` (el nombre del archivo es la URL).
2. Copia el frontmatter de un trámite existente (ej. `curp.md`) y rellena los campos.
3. En `src/data/navigation.ts`, cambia ese trámite a `live: true` (o agrégalo) para que
   aparezca enlazado en el mega-menú y los listados.
4. `npm run dev` y listo: la página `/<slug>/` se genera sola, con su ficha rápida,
   FAQ (acordeón + schema), fuentes y datos estructurados.

Campos del frontmatter: `titulo`, `tituloLargo`, `descripcion`, `resumen`, `categoria`,
`institucion`, `costo`, `modalidad`, `tiempo`, `vigencia`, `urlOficial`, `urlOficialTexto`,
`actualizado`, `faq[]`, `fuentes[]`.

---

## 🔍 SEO incluido

- Meta tags, canonical, Open Graph y Twitter Card por página.
- Datos estructurados JSON-LD: `Organization`, `Article`, `BreadcrumbList`, `FAQPage`.
- Migas de pan (breadcrumbs) en todas las páginas internas.
- `sitemap-index.xml` automático + `robots.txt`.
- Fecha de actualización y fuentes oficiales visibles (E-E-A-T).
- Aviso de "sitio informativo independiente / no oficial".

---

## ☁️ Deploy

El sitio es estático: cualquier host de sitios estáticos sirve. Build = `npm run build`,
carpeta a publicar = `dist`.

### Opción recomendada: GitHub + Netlify/Vercel/Cloudflare Pages

1. Sube el proyecto a GitHub (ver más abajo).
2. En [Netlify](https://netlify.com) / [Vercel](https://vercel.com) /
   [Cloudflare Pages](https://pages.cloudflare.com): *Add new project* → conecta el repo.
3. El build se detecta solo (`npm run build`, output `dist`). Incluye `netlify.toml`.
4. **Dominio:** en el panel del host, agrega `tramitamex.com.mx` y apunta los DNS de tu
   dominio según sus instrucciones (registro A/CNAME). El SSL es automático y gratuito.

---

## 📦 Subir a GitHub (primera vez)

`gh` (GitHub CLI) no está instalado. Instálalo y autentícate:

```bash
winget install GitHub.cli      # luego cierra y reabre la terminal
gh auth login                  # sigue los pasos en el navegador
```

Después, desde la carpeta del proyecto:

```bash
gh repo create tramitamex --private --source=. --remote=origin --push
```

O bien crea el repo manualmente en github.com y:

```bash
git remote add origin https://github.com/<tu-usuario>/tramitamex.git
git push -u origin main
```

---

## ⚖️ Aviso

TramitaMex es un sitio **informativo e independiente**. No es una página oficial del
Gobierno de México ni está afiliado a ninguna dependencia. Verifica siempre requisitos y
costos en el portal oficial de cada trámite.
