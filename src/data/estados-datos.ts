// Datos específicos para los estados de mayor tráfico. Costos aproximados 2026
// (verificados en fuentes oficiales y notas de prensa) — siempre se muestran como
// "aproximados, verifica en el portal". Los estados sin entrada aquí usan la
// plantilla general en [estado].astro.

export interface PortalEstado {
  nombre: string;
  url: string;
}
export interface CostoEstado {
  tramite: string;
  detalle: string;
}
export interface DatosEstado {
  intro: string;
  costos: CostoEstado[];
  portales: PortalEstado[];
}

export const DATOS_ESTADO: Record<string, DatosEstado> = {
  cdmx: {
    intro:
      'En la Ciudad de México los trámites vehiculares y el Registro Civil se gestionan en los portales del gobierno capitalino. La CDMX reintrodujo la licencia permanente y exenta la tenencia si pagas el refrendo a tiempo y tu auto no rebasa el tope de valor.',
    costos: [
      { tramite: 'Licencia de conducir (Tipo A)', detalle: '≈ $1,142 primera vez · $1,500 permanente (pago único)' },
      { tramite: 'Verificación vehicular', detalle: '≈ $750 por verificación' },
      { tramite: 'Tenencia', detalle: 'Subsidio si pagas el refrendo (~$760) a tiempo y el auto no rebasa el tope de valor' },
      { tramite: 'Acta de nacimiento (en línea)', detalle: '≈ $98 – $110' },
    ],
    portales: [
      { nombre: 'Licencia de conducir — SEMOVI', url: 'https://www.semovi.cdmx.gob.mx/' },
      { nombre: 'Tenencia y refrendo — Finanzas CDMX', url: 'https://www.finanzas.cdmx.gob.mx/' },
      { nombre: 'Verificación vehicular (citas)', url: 'https://citasverificentros.cdmx.gob.mx' },
      { nombre: 'Actas del Registro Civil', url: 'https://www.gob.mx/actas' },
    ],
  },
  'estado-de-mexico': {
    intro:
      'En el Estado de México los trámites vehiculares se hacen en las secretarías de Finanzas y de Movilidad. El Edomex ofrece subsidio del 100% en tenencia para placas recientes y autos por debajo de cierto valor, con fecha límite en el primer trimestre del año.',
    costos: [
      { tramite: 'Licencia de conducir (automovilista)', detalle: '≈ $777 (1 año) · $1,848 (4 años)' },
      { tramite: 'Verificación vehicular', detalle: '≈ $580 – $720 según el municipio' },
      { tramite: 'Tenencia', detalle: 'Subsidio 100% para placas 2021+ y autos hasta ~$638,000 (fecha límite en el 1er trimestre)' },
      { tramite: 'Acta de nacimiento (en línea)', detalle: '≈ $86' },
    ],
    portales: [
      { nombre: 'Licencia de conducir — Movilidad Edomex', url: 'https://smovilidad.edomex.gob.mx/' },
      { nombre: 'Tenencia, refrendo y placas — Finanzas Edomex', url: 'https://finanzas.edomex.gob.mx/' },
      { nombre: 'Verificación vehicular (citas)', url: 'https://citaverificacion.edomex.gob.mx/RegistroCitas' },
      { nombre: 'Actas del Registro Civil', url: 'https://www.gob.mx/actas' },
    ],
  },
  jalisco: {
    intro:
      'En Jalisco los servicios vehiculares y el refrendo se hacen en los portales del Gobierno de Jalisco; la Secretaría de Movilidad atiende las licencias. En 2026 el refrendo vehicular incluye la verificación sin costo adicional.',
    costos: [
      { tramite: 'Licencia de conducir (automovilista)', detalle: '≈ $913 nueva · $766 refrendo (50% de descuento a 65+ y personas con discapacidad)' },
      { tramite: 'Refrendo vehicular', detalle: '≈ $1,100 por auto (incluye la verificación sin costo en 2026)' },
      { tramite: 'Acta de nacimiento (en línea)', detalle: '≈ $98 – $121' },
    ],
    portales: [
      { nombre: 'Licencia de conducir (citas) — Movilidad', url: 'https://citas.jalisco.gob.mx/citas/secretaria-de-transporte/ubicaciones' },
      { nombre: 'Refrendo y servicios vehiculares', url: 'https://refrendo.jalisco.gob.mx/' },
      { nombre: 'Trámites y servicios — Gobierno de Jalisco', url: 'https://www.jalisco.gob.mx/tramites-y-servicios' },
      { nombre: 'Actas del Registro Civil', url: 'https://www.gob.mx/actas' },
    ],
  },
  'nuevo-leon': {
    intro:
      'En Nuevo León el Instituto de Control Vehicular (ICVNL) concentra licencias, refrendo y control vehicular. Para la licencia por primera vez se requieren tres exámenes: teórico, médico y práctico.',
    costos: [
      { tramite: 'Licencia de conducir (automovilista)', detalle: '≈ $938 (3 años) · $1,408 (5 años)' },
      { tramite: 'Licencia primera vez', detalle: 'Requiere 3 exámenes: teórico, médico y práctico' },
      { tramite: 'Acta de nacimiento (en línea)', detalle: '≈ $70 – $144' },
    ],
    portales: [
      { nombre: 'Licencia y control vehicular — ICVNL', url: 'https://www.icvnl.gob.mx/' },
      { nombre: 'Refrendo vehicular — Gobierno de NL', url: 'https://www.nl.gob.mx/es/refrendo' },
      { nombre: 'Control vehicular — Gobierno de NL', url: 'https://www.nl.gob.mx/es/controlvehicular' },
      { nombre: 'Actas del Registro Civil', url: 'https://www.gob.mx/actas' },
    ],
  },
};

export function getDatosEstado(slug: string): DatosEstado | undefined {
  return DATOS_ESTADO[slug];
}
