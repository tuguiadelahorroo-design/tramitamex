# TramitaMex — Punto de continuación

> **Actualizado:** 2026-10-22 (tarde) · 75 trámites
>
> **Para retomar en un chat nuevo:** abre Claude Code en la carpeta del proyecto y escribe:
> `lee CONTINUAR-AQUI.md y continuemos`

---

## 1. Lo esencial (leer siempre primero)

| Dato | Valor |
|---|---|
| **Repo real (usar SIEMPRE)** | `C:\Users\morde\proyectos-web\tramitamex.com.mx` |
| ⚠️ Carpeta a **evitar** | `I:\Mi unidad\proyectos web\1.-TRAMITES\tramitamex.com.mx` — copia vieja de Google Drive, **no es repo git** |
| Stack | Astro 5.18.2 estático · content collections · `astro:assets` |
| Hosting | **Cloudflare Pages**, proyecto `tramitamex` |
| Dominio | https://tramitamex.com.mx (activo con SSL) |
| Node | 22 (`.nvmrc`) |
| Comandos | `npm run build` · `npm run dev` |

### Las dos cuentas de Cloudflare (causa del apagón de 3 meses)

- **`Tuguiadelahorroo@gmail.com`** → acct `3c12be41da67cbf966ac482f9e4967d4` → tiene el **proyecto Pages** `tramitamex` (+ 16 proyectos, 7 dominios).
- **`Aguacatefelix132@gmail.com`** → acct `b98cebf684a02f88e6bf3a8f9b57aad4` → tiene la **zona DNS** de `tramitamex.com.mx`.

Los CNAME de raíz y www apuntaban por error a `tramitamex-pasaporte.pages.dev` (otro proyecto a medias), lo que servía un `meta refresh` a `/pasaporte/` en todas las rutas. **Arreglado el 22/10/2026.**

---

## 2. Reglas editoriales del sitio (no negociables)

1. **Sitio informativo independiente.** Nunca se insinúa que es gobierno. Siempre se enlaza el portal oficial.
2. **Nunca inventar pesos, fechas ni URLs.** Montos siempre con `≈` y con aviso de "verifica en el portal". Si las fuentes se contradicen, **no se publica** (ver §5).
3. **Sin asesoría personalizada** legal, financiera o migratoria.
4. El usuario hace **todos los logins y autorizaciones** (Google, Cloudflare, GitHub, SiteGround). Claude puede guiar o manejar la UI con supervisión, nunca credenciales.
5. **Verificar las fotos leyéndolas** antes de publicar (ya pasó una vez que una foto "de remodelación" era un sauna).
6. El usuario cuida el costo: **chat nuevo por tarea**, mínima dispersión de agentes.

---

## 3. Estado actual

**87 trámites · 164 páginas · 27 instituciones · sitemap con 161 URLs.**

### Estructura clave

```
src/content/tramites/*.md       → /<slug>/         (75 artículos)
src/content.config.ts           → validación zod del frontmatter (incluye tituloSeo, max 49)
src/data/instituciones.ts       → 23 instituciones → /instituciones/<slug>/
src/data/estados.ts             → los 32 estados
src/data/estados-datos.ts       → ⭐ datos locales por estado (SOLO 8 de 32)
src/data/card-images.ts         → foto por slug desde src/assets/cards/<slug>.jpg
src/data/navigation.ts          → menú + mega-menú
src/data/estado-siluetas.ts     → 32 siluetas SVG (CC-BY-4.0, crédito al pie de /por-estado/)
src/layouts/TramiteLayout.astro → hero a 2 columnas + og:image generada por artículo
src/components/Header.astro     → mega-menú con hover-intent (220 ms de gracia)
```

### Al crear un artículo nuevo, hay que tocar 4 cosas

1. `src/content/tramites/<slug>.md` — frontmatter completo + ~10 H2 + callouts + 8 FAQ + 4 fuentes.
2. `src/assets/cards/<slug>.jpg` — foto propia (Pexels, licencia libre). **Leer la imagen para verificarla.**
3. `src/data/navigation.ts` — registrar en el menú.
4. `src/data/instituciones.ts` — agregar el slug al array `tramites` de su institución.
5. **Después del push:** agregar la URL a la **cola de indexación** (§4) y pedirla en Search Console.

> El mega-menú (`Header.astro`) solo muestra los **primeros 7** de cada categoría: los artículos nuevos se agregan **al final** de su categoría para no desplazar a los existentes.

### Últimos artículos publicados (22/10/2026)

`pension-viudez-orfandad-imss` (69) · `cambio-de-domicilio-fiscal-sat` (70) · `mejoravit` (71) · `constancia-no-deudor-alimentario` (72, institución nueva `dif`) · `cita-consulado-mexicano` (73) · `modalidad-40-imss` (74) · `constancia-de-no-inhabilitacion` (75, institución nueva `buen-gobierno`) · `aguinaldo` (76) · `llave-mx` (77, institución nueva `atdt`) · `suspension-de-actividades-sat` (78) · `retiro-afore-por-matrimonio` (79) · `registro-de-marca-impi` (80, institución nueva `impi`) · `seguro-de-salud-para-la-familia` (81) · `contrasena-sat` (82) · `registro-de-nacimiento` (83) · `pension-bienestar-discapacidad` (84) · `visa-canadiense` (85, institución nueva `gobierno-canada`) · `cambio-de-afore` (86) · `imss-bienestar` (87, institución nueva `imss-bienestar`).

---

## 4. Diagnóstico de Search Console (base de las decisiones)

- 89 clics · 18,400 impresiones · CTR 0.5% · **posición media 52.3**.
- Es un **problema de posición**, no de títulos ni de CTR.
- Query top: **"consultar constancia de situación fiscal en cdmx"** → valida la estrategia de **contenido local (estado × trámite)**.
- Durante el apagón hubo impresiones constantes: el redirect impidió **rankear y re-indexar**, no volvió el sitio invisible del todo.

### Limpieza del 22/10/2026 (hecha)

- **Validaciones iniciadas** en Indexación → Páginas: "Página con redirección" (95), "Bloqueada por robots.txt" (14) y "No se ha encontrado (404)" (13). Google tarda **2–4 semanas** en cerrarlas.
- **Sitemaps reenviados** (`sitemap-index.xml` y `sitemap-0.xml`): llevaban **sin leerse desde el 10/07/2026** porque durante el apagón también servían el redirect. Ahora detectan 145 URLs.
- **`public/_redirects`** con 12 redirecciones 301 de URLs del sitio anterior (`/tramite-*.html`, `/lander`, `/seccion/*`, `/categoria/*`) a sus equivalentes actuales.
- **Pendiente de decidir con el usuario:** borrar 3 sitemaps muertos del sitio viejo (`www.../sitemap_index.xml`, `www.../sitemap.xml`, `www.../sitemap.rss`, enviados en 2025). Es reversible, pero requiere su autorización.
- Lo que **no** es un problema: "Página alternativa con canónica" (5) y "noindex" (4: 404, aviso legal, privacidad) son correctas. Las redirecciones de `www` → raíz y de URLs sin barra final → con barra seguirán apareciendo como "Página con redirección" para siempre, y está bien.

### Cola de indexación (protocolo para cada página nueva)

Google **no ofrece** una forma automática y permitida de pedir indexación de páginas normales (la Indexing API es solo para empleos y transmisiones en vivo; el "ping" de sitemaps se eliminó en 2023). Lo que sí funciona:

1. **Automático:** el sitemap lleva `<lastmod>` real por página (sale del campo `actualizado`), así que Google detecta lo nuevo al releerlo.
2. **Manual, el empujón:** Search Console → barra de inspección → pegar la URL → si dice **"La URL no está en Google"**, pulsar **Solicitar indexación**. Si dice "La URL está en Google", **no pedirla** (gasta cuota).
3. **Cuota: ~10 solicitudes por día** por propiedad. Al superarla sale "Cuota superada" y hay que esperar al día siguiente.

La cuenta de Google con la propiedad `tramitamex.com.mx` está en el **Chrome "Browser 1"** (el "Browser 2" tiene otra cuenta con tuguiadelahorro.com y mimejoramigo.mx).

**Cola actual** (mover a "hecho" al pedirla; borrar si ya aparece indexada):

| URL | Estado |
|---|---|
| `/mejoravit/` | ✅ Ya indexada (22/10) |
| `/pension-viudez-orfandad-imss/` | ⏳ "Descubierta: sin indexar" — pedir (la cuota del 22/10 ya estaba agotada) |
| `/cambio-de-domicilio-fiscal-sat/` | ⏳ Sin revisar |
| `/constancia-no-deudor-alimentario/` | ⏳ Sin revisar |
| `/cita-consulado-mexicano/` | ⏳ Sin revisar |
| `/modalidad-40-imss/` | ⏳ Sin revisar |
| `/constancia-de-no-inhabilitacion/` | ⏳ Sin revisar |
| `/aguinaldo/` | ⏳ Nueva (22/10) — **prioridad**: pico de búsqueda en nov–dic |
| `/llave-mx/` | ⏳ Nueva (22/10) |
| `/suspension-de-actividades-sat/` | ⏳ Nueva (22/10) |
| `/retiro-afore-por-matrimonio/` | ⏳ Nueva (22/10) |
| `/registro-de-marca-impi/` | ⏳ Nueva (22/10) |
| `/seguro-de-salud-para-la-familia/` | ⏳ Nueva (22/10) |
| `/contrasena-sat/` | ⏳ Nueva (22/10) — **prioridad**: búsqueda enorme |
| `/registro-de-nacimiento/` | ⏳ Nueva (22/10) |
| `/pension-bienestar-discapacidad/` | ⏳ Nueva (22/10) |
| `/visa-canadiense/` | ⏳ Nueva (22/10) |
| `/cambio-de-afore/` | ⏳ Nueva (22/10) |
| `/imss-bienestar/` | ⏳ Nueva (22/10) |

---

## 5. ⭐ Tarea en curso: completar `estados-datos.ts` (8 → 32)

Es la palanca de mayor impacto del plan SEO.

**Forma del dato:**

```ts
export interface PortalEstado { nombre: string; url: string; }
export interface CostoEstado  { tramite: string; detalle: string; }
export interface DatosEstado  { intro: string; costos: CostoEstado[]; portales: PortalEstado[]; }
export const DATOS_ESTADO: Record<string, DatosEstado> = { ... };
```

Cada entrada: un `intro`, 3–4 `costos` con `≈`, y 3–4 `portales` oficiales. Copiar la forma de `cdmx` / `jalisco`.

**Ya tienen datos (8):** `cdmx`, `estado-de-mexico`, `jalisco`, `nuevo-leon`, `guanajuato`, `queretaro`, `puebla`, `veracruz`.

**Faltan (24):** aguascalientes, baja-california, baja-california-sur, campeche, chiapas, chihuahua, coahuila, colima, durango, guerrero, hidalgo, michoacan, morelos, nayarit, oaxaca, quintana-roo, san-luis-potosi, sinaloa, sonora, tabasco, tamaulipas, tlaxcala, yucatan, zacatecas.

### ⚠️ Aprendizaje importante: NO sirve la búsqueda web general

Se intentó con Baja California y Chihuahua y **las fuentes se contradicen**:

| Estado | Conflicto encontrado |
|---|---|
| **Baja California** | Una reforma (mayo 2026) da vigencias de hasta 6 años con $500 / $901 / $1,622; otra nota (junio 2026) da 3 o 5 años con $1,120.10 / $1,493.46. Incompatibles. |
| **Chihuahua** | Las cifras que circulan ($1,279 por 6 años) son **con 30% de descuento** del programa "Borrón y Cuenta Nueva" de enero 2026, probablemente ya vencido. Otra fuente da $2,933. |

**Método correcto:** ir **estado por estado** a la fuente primaria —la **Ley de Ingresos / Ley de Derechos** del estado, o el portal de **Secretaría de Movilidad / Recaudación de Rentas**— y sacar la tarifa de ahí. Si no se puede verificar, **se publican solo los portales oficiales (que sí son estables) y se omiten los costos**.

Portales de Chihuahua que sí se confirmaron: `ipagos.chihuahua.gob.mx` (pagos) y `citassspe.chihuahua.gob.mx` (citas).

---

## 6. Otros pendientes

### Técnicos / infraestructura

- [x] ~~`www.tramitamex.com.mx` daba 403 / error 1014~~ — **resuelto el 22/10/2026** con una regla de redirección única en la zona (cuenta Aguacatefelix132 → Reglas → Reglas de redireccionamiento): `http*://www.*` → `https://${2}`, 301, conserva la cadena de consulta. No hizo falta agregar www al proyecto Pages; así hay una sola versión canónica (la raíz).
- [ ] **Mover la zona DNS** de `tramitamex.com.mx` de la cuenta `Aguacatefelix132` a `Tuguiadelahorroo`, donde vive todo lo demás. Evita que vuelva a pasar lo del apagón.
- [x] ~~Instalar analítica~~ — **Cloudflare Web Analytics ya estaba activo** en la cuenta Aguacatefelix132 (configuración automática, el beacon se inyecta en el borde). Al 22/10/2026: 58 vistas / 45 visitas en 24 h.

### Search Console

- [x] ~~Reenviar el sitemap~~ — hecho el 22/10/2026.
- [x] ~~Validar las correcciones~~ — iniciadas el 22/10/2026 (ver §4).
- [ ] Vaciar la **cola de indexación** (§4), ~10 URLs por día.
- [ ] Decidir si se borran los 3 sitemaps muertos del sitio viejo.

### Contenido

- [x] ~~Cita en consulado mexicano~~ — publicado (73). El backlog original quedó **vacío**.
- [ ] Ideas para el siguiente lote: crédito Fovissste (**ojo**: sus esquemas cambiaron en 2025; verificar todo en fovissste.gob.mx antes de escribir).
- [ ] **Refresh anual de `aguinaldo`** cada octubre: actualizar salario mínimo, UMA (vigente desde febrero), el día de la semana del 20 de diciembre y el estado de las iniciativas de 30 días.
- [x] ~~Duplicado de tarjeta de circulación~~ — **descartado a propósito** para no canibalizar `tarjeta-de-circulacion.md`.

### Segundo sitio: `tuguiadelahorro.com` (WordPress/AIOSEO en SiteGround — NO es TramitaMex)

- [x] Anti-Bot de SiteGround bloqueaba robots.txt y sitemap.xml → **el usuario ya lo arregló**, ambos devuelven contenido real.
- [ ] H1 vacío en la home.
- [ ] Muy poco contenido.

---

## 7. Trampas técnicas ya conocidas

- **Las fichas viejas del SAT (`sat.gob.mx/gobmx/Paginas/ficha_*.html`) pueden estar desactualizadas.** Manda el texto de la RMF vigente en el DOF (anexos publicados cada diciembre). Ejemplo: la ficha 7/CFF decía que la Contraseña se tramita presencial "sin cita" para cualquiera; la RMF 2026 lo limita a extranjeros, adultos mayores, gestantes y personas con discapacidad.
- **Los PDF oficiales grandes (DOF, leyes) se leen mejor bajándolos con `curl` y pasándolos por `pdftotext`** (está instalado) y luego `grep`; `WebFetch` los devuelve como binario. Los textos salen en latin1: convertir con `iconv -f latin1 -t utf-8`.

- **`grep -oc` cuenta líneas, no coincidencias.** Usar `grep -o ... | wc -l`. Esto ya provocó una falsa alarma de "el sitio perdió su contenido".
- **Heredoc de Python con emoji en `print()`** truena con `UnicodeEncodeError` (cp1252) en Windows. Quitar emojis de los prints.
- **`sleep` largo en Bash** lo bloquea el harness. Usar `until <check>; do sleep N; done`.
- **El operador `site:` en búsqueda web no se respeta** — no sirve para comprobar indexación.
- **Pestaña de Cloudflare en segundo plano** → se congela (timeout de `Page.captureScreenshot`). Mantenerla al frente.
- **Heredoc de Bash muy largo con tablas y backticks** puede fallar en Git Bash/Windows; escribir el archivo con la herramienta de escritura.
- **Los sitios `consulmex.sre.gob.mx` tienen anti-bot (Radware/perfdrive)**: WebFetch suele rebotar. La página de tarifas del Consulado de Miami sí carga; para el resto, usar resultados de búsqueda y no seguir el redirect de validación.
- **PDFs de leyes (diputados.gob.mx)**: WebFetch no los lee, pero guarda el binario; extraer con `python -I` + `pypdf`. Las tablas de los transitorios vienen como **imagen**: sacarlas con `page.images` y leerlas.
- **Fotos de Pexels**: buscar en el navegador integrado (`pexels.com/search/...`), sacar los IDs con JS y descargar `images.pexels.com/photos/<id>/pexels-photo-<id>.jpeg?auto=compress&cs=tinysrgb&w=900`.
