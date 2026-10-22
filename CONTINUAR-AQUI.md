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

**75 trámites · 148 páginas · 23 instituciones · sitemap con 145 URLs.**

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

> El mega-menú (`Header.astro`) solo muestra los **primeros 7** de cada categoría: los artículos nuevos se agregan **al final** de su categoría para no desplazar a los existentes.

### Últimos artículos publicados (22/10/2026)

`pension-viudez-orfandad-imss` (69) · `cambio-de-domicilio-fiscal-sat` (70) · `mejoravit` (71) · `constancia-no-deudor-alimentario` (72, institución nueva `dif`) · `cita-consulado-mexicano` (73) · `modalidad-40-imss` (74) · `constancia-de-no-inhabilitacion` (75, institución nueva `buen-gobierno`).

---

## 4. Diagnóstico de Search Console (base de las decisiones)

- 89 clics · 18,400 impresiones · CTR 0.5% · **posición media 52.3**.
- Es un **problema de posición**, no de títulos ni de CTR.
- Query top: **"consultar constancia de situación fiscal en cdmx"** → valida la estrategia de **contenido local (estado × trámite)**.
- Durante el apagón hubo impresiones constantes: el redirect impidió **rankear y re-indexar**, no volvió el sitio invisible del todo.

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

### Que tiene que hacer el usuario en Search Console

- [ ] Reenviar el sitemap.
- [ ] Pedir indexación de ~10 URLs principales.

### Contenido

- [x] ~~Cita en consulado mexicano~~ — publicado (73). El backlog original quedó **vacío**.
- [ ] Ideas para el siguiente lote (no hay cobertura hoy): suspensión de actividades en el SAT, Seguro de Salud para la Familia (IMSS), crédito Fovissste, retiro de Afore por matrimonio, registro de marca (IMPI).
- [x] ~~Duplicado de tarjeta de circulación~~ — **descartado a propósito** para no canibalizar `tarjeta-de-circulacion.md`.

### Segundo sitio: `tuguiadelahorro.com` (WordPress/AIOSEO en SiteGround — NO es TramitaMex)

- [x] Anti-Bot de SiteGround bloqueaba robots.txt y sitemap.xml → **el usuario ya lo arregló**, ambos devuelven contenido real.
- [ ] H1 vacío en la home.
- [ ] Muy poco contenido.

---

## 7. Trampas técnicas ya conocidas

- **`grep -oc` cuenta líneas, no coincidencias.** Usar `grep -o ... | wc -l`. Esto ya provocó una falsa alarma de "el sitio perdió su contenido".
- **Heredoc de Python con emoji en `print()`** truena con `UnicodeEncodeError` (cp1252) en Windows. Quitar emojis de los prints.
- **`sleep` largo en Bash** lo bloquea el harness. Usar `until <check>; do sleep N; done`.
- **El operador `site:` en búsqueda web no se respeta** — no sirve para comprobar indexación.
- **Pestaña de Cloudflare en segundo plano** → se congela (timeout de `Page.captureScreenshot`). Mantenerla al frente.
- **Heredoc de Bash muy largo con tablas y backticks** puede fallar en Git Bash/Windows; escribir el archivo con la herramienta de escritura.
- **Los sitios `consulmex.sre.gob.mx` tienen anti-bot (Radware/perfdrive)**: WebFetch suele rebotar. La página de tarifas del Consulado de Miami sí carga; para el resto, usar resultados de búsqueda y no seguir el redirect de validación.
- **PDFs de leyes (diputados.gob.mx)**: WebFetch no los lee, pero guarda el binario; extraer con `python -I` + `pypdf`. Las tablas de los transitorios vienen como **imagen**: sacarlas con `page.images` y leerlas.
- **Fotos de Pexels**: buscar en el navegador integrado (`pexels.com/search/...`), sacar los IDs con JS y descargar `images.pexels.com/photos/<id>/pexels-photo-<id>.jpeg?auto=compress&cs=tinysrgb&w=900`.
