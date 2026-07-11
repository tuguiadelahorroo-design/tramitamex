import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Colección de trámites. Cada archivo Markdown en src/content/tramites/
// genera una página en /<slug>/ (slug = nombre del archivo).
const tramites = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/tramites' }),
  schema: z.object({
    titulo: z.string(),
    // Título largo opcional para el <title> y el H1 (más rico en keywords).
    tituloLargo: z.string().optional(),
    // Título corto opcional SOLO para el <title>/SERP (<=49 chars para que con
    // " | TramitaMex" no pase de ~62 y Google no lo trunque). El H1 sigue
    // usando tituloLargo.
    tituloSeo: z.string().max(49).optional(),
    descripcion: z.string().max(165),
    resumen: z.string(),
    categoria: z.string(),
    institucion: z.string(), // slug de la institución
    nivel: z.string().default('Federal'),
    // Ficha rápida
    costo: z.string(),
    modalidad: z.string(),
    tiempo: z.string(),
    vigencia: z.string().optional(),
    urlOficial: z.string().url(),
    urlOficialTexto: z.string(),
    actualizado: z.coerce.date(),
    // Fecha de PRIMERA publicación (datePublished en el schema). Si falta, usa `actualizado`.
    publicado: z.coerce.date().optional(),
    destacado: z.boolean().default(false),
    orden: z.number().default(99),
    // Quién revisó editorialmente el contenido (señal E-E-A-T).
    revisadoPor: z.string().optional(),
    // Pasos del "Paso a paso": alimentan el componente diseñado y el schema HowTo.
    pasos: z
      .array(
        z.object({
          titulo: z.string(),
          detalle: z.string(),
        })
      )
      .optional(),
    // Slugs de trámites relacionados (enlazado interno).
    // Si se omite, se infieren automáticamente por categoría.
    relacionados: z.array(z.string()).optional(),
    // Preguntas frecuentes (alimentan el schema FAQPage y el acordeón)
    faq: z
      .array(
        z.object({
          pregunta: z.string(),
          respuesta: z.string(),
        })
      )
      .default([]),
    // Fuentes oficiales (E-E-A-T)
    fuentes: z
      .array(
        z.object({
          titulo: z.string(),
          url: z.string().url(),
        })
      )
      .default([]),
  }),
});

export const collections = { tramites };
