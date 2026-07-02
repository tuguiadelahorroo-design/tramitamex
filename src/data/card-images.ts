// Fotos de las tarjetas de trámite. Pool de 3 fotos por categoría
// (Pexels, licencia libre para uso comercial sin atribución), asignadas de
// forma determinista por slug: fichas vecinas de una misma categoría rotan
// el pool para no repetir imagen lado a lado.

import type { ImageMetadata } from 'astro';
import { CATEGORIAS } from './navigation';

import identidad1 from '../assets/cards/identidad-1.jpg';
import identidad2 from '../assets/cards/identidad-2.jpg';
import identidad3 from '../assets/cards/identidad-3.jpg';
import registroCivil1 from '../assets/cards/registro-civil-1.jpg';
import registroCivil2 from '../assets/cards/registro-civil-2.jpg';
import registroCivil3 from '../assets/cards/registro-civil-3.jpg';
import sat1 from '../assets/cards/sat-1.jpg';
import sat2 from '../assets/cards/sat-2.jpg';
import sat3 from '../assets/cards/sat-3.jpg';
import imssSalud1 from '../assets/cards/imss-salud-1.jpg';
import imssSalud2 from '../assets/cards/imss-salud-2.jpg';
import imssSalud3 from '../assets/cards/imss-salud-3.jpg';
import vehiculares1 from '../assets/cards/vehiculares-1.jpg';
import vehiculares2 from '../assets/cards/vehiculares-2.jpg';
import vehiculares3 from '../assets/cards/vehiculares-3.jpg';
import trabajo1 from '../assets/cards/trabajo-1.jpg';
import trabajo2 from '../assets/cards/trabajo-2.jpg';
import trabajo3 from '../assets/cards/trabajo-3.jpg';
import programasSociales1 from '../assets/cards/programas-sociales-1.jpg';
import programasSociales2 from '../assets/cards/programas-sociales-2.jpg';
import programasSociales3 from '../assets/cards/programas-sociales-3.jpg';
import patrimonio1 from '../assets/cards/patrimonio-1.jpg';
import patrimonio2 from '../assets/cards/patrimonio-2.jpg';
import patrimonio3 from '../assets/cards/patrimonio-3.jpg';

const POOLS: Record<string, ImageMetadata[]> = {
  identidad: [identidad1, identidad2, identidad3],
  'registro-civil': [registroCivil1, registroCivil2, registroCivil3],
  sat: [sat1, sat2, sat3],
  'imss-salud': [imssSalud1, imssSalud2, imssSalud3],
  vehiculares: [vehiculares1, vehiculares2, vehiculares3],
  trabajo: [trabajo1, trabajo2, trabajo3],
  'programas-sociales': [programasSociales1, programasSociales2, programasSociales3],
  patrimonio: [patrimonio1, patrimonio2, patrimonio3],
};

const TODAS: ImageMetadata[] = Object.values(POOLS).flat();

function hashSlug(slug: string): number {
  let h = 0;
  for (const c of slug) h = (h * 31 + c.charCodeAt(0)) >>> 0;
  return h;
}

/** Foto estable para la tarjeta de un trámite, según su categoría en el menú. */
export function getCardImage(slug: string): ImageMetadata {
  for (const cat of CATEGORIAS) {
    const i = cat.items.findIndex((it) => it.slug === slug);
    if (i !== -1) {
      const pool = POOLS[cat.id] ?? TODAS;
      return pool[i % pool.length];
    }
  }
  return TODAS[hashSlug(slug) % TODAS.length];
}
