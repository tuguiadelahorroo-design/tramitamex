// Fotos de las tarjetas de trámite: una foto única y temática por trámite,
// nombrada por slug en src/assets/cards/<slug>.jpg (Pexels, licencia libre
// para uso comercial sin atribución). `default.jpg` cubre trámites futuros
// que aún no tengan foto propia.

import type { ImageMetadata } from 'astro';

const mods = import.meta.glob<{ default: ImageMetadata }>('../assets/cards/*.jpg', {
  eager: true,
});

const BY_SLUG: Record<string, ImageMetadata> = {};
for (const [path, mod] of Object.entries(mods)) {
  const slug = path.split('/').pop()!.replace(/\.jpg$/, '');
  BY_SLUG[slug] = mod.default;
}

/** Foto de la tarjeta de un trámite; si no existe una propia, usa la genérica. */
export function getCardImage(slug: string): ImageMetadata {
  return BY_SLUG[slug] ?? BY_SLUG['default'];
}
