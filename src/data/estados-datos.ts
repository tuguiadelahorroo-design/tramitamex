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
  guanajuato: {
    intro:
      'En Guanajuato las licencias de conducir las emite la Secretaría de Seguridad y Paz con vigencia a elegir de 2, 3 o 5 años, y el refrendo se paga en línea en el portal de Finanzas. El estado no cobra tenencia general: solo aplica un impuesto a "vehículos de lujo" cuya factura supera los $522,000, y la verificación de emisiones es obligatoria cada semestre.',
    costos: [
      { tramite: 'Licencia de conducir (Tipo A, automovilista)', detalle: '$936 por 2 años · $1,189 por 3 años · $1,420 por 5 años' },
      { tramite: 'Verificación vehicular', detalle: 'Obligatoria cada semestre · ≈ $375 constancia usual · $610 hologramas 00/0/1/2' },
      { tramite: 'Tenencia y refrendo', detalle: 'Sin tenencia general; solo pagan autos con factura mayor a $522,000 (impuesto a vehículos de lujo) · refrendo ≈ $940 antes del 31 de marzo' },
      { tramite: 'Acta de nacimiento (en línea)', detalle: '$130 adultos · $40 menores y adultos mayores' },
    ],
    portales: [
      { nombre: 'Licencias de conducir — Seguridad y Paz Guanajuato', url: 'https://seguridad.guanajuato.gob.mx/licencias_conducir/' },
      { nombre: 'Refrendo y tenencia — Finanzas Guanajuato', url: 'https://refrendo.guanajuato.gob.mx/' },
      { nombre: 'Verificación vehicular — SAMA (citas y calendario)', url: 'https://sama.guanajuato.gob.mx/verificacion-vehicular' },
      { nombre: 'Actas del Registro Civil', url: 'https://www.gob.mx/actas' },
    ],
  },
  queretaro: {
    intro:
      'En Querétaro la licencia de conducir se tramita con cita en los módulos de la Secretaría de Seguridad Ciudadana y los pagos vehiculares se hacen en el portal tributario estatal (Recaudanet). El estado mantiene la "Tenencia Cero": si pagas el refrendo entre enero y marzo y tu auto no rebasa los $800,000 de valor, quedas exento del impuesto; la verificación vehicular es obligatoria dos veces al año.',
    costos: [
      { tramite: 'Licencia de conducir (Tipo A, automovilista)', detalle: '≈ $1,408 · vigencia de 5 años (50% de descuento con INAPAM, pensión o discapacidad)' },
      { tramite: 'Verificación vehicular', detalle: 'Obligatoria cada semestre · ≈ $431 hologramas 1 y 2 · ≈ $735 holograma 0 · exentos eléctricos e híbridos' },
      { tramite: 'Tenencia y refrendo', detalle: 'Tenencia subsidiada (Tenencia Cero) si pagas el refrendo (9 UMA, ≈ $1,020 – $1,056) de enero a marzo y el valor del auto no rebasa $800,000' },
      { tramite: 'Acta de nacimiento (en línea)', detalle: '≈ $141 – $143' },
    ],
    portales: [
      { nombre: 'Licencias de conducir — citas SSC Querétaro', url: 'https://citaslicencias.sscqro.gob.mx/' },
      { nombre: 'Refrendo y tenencia — Portal Tributario (Recaudanet)', url: 'https://portal-tributario.queretaro.gob.mx/app/ingresos' },
      { nombre: 'Verificación vehicular — SEDESU (calendario)', url: 'https://queretaro.gob.mx/web/sedesu/calendario' },
      { nombre: 'Actas del Registro Civil', url: 'https://www.gob.mx/actas' },
    ],
  },
  puebla: {
    intro:
      'En Puebla las licencias las expide la Secretaría de Movilidad y Transporte (SMT) y los pagos vehiculares se concentran en los portales del gobierno estatal. El estado no expide licencia permanente nueva (solo vigencias de 3 o 5 años), la verificación es obligatoria dos veces al año y la tenencia queda exenta al 100% si pagas a tiempo el Control Vehicular anual.',
    costos: [
      { tramite: 'Licencia de conducir (automovilista)', detalle: '≈ $895 por 3 años · $1,385 por 5 años · permiso de 6 meses $560' },
      { tramite: 'Verificación vehicular', detalle: '≈ $628 por semestre (obligatoria 2 veces al año) · híbridos y eléctricos ≈ $245' },
      { tramite: 'Tenencia', detalle: 'Subsidio del 100% si pagas el Control Vehicular (≈ $700) a inicios de año (en 2026: hasta el 31 de marzo, con prórroga al 30 de abril) y no tienes adeudos' },
      { tramite: 'Acta de nacimiento (en línea)', detalle: '≈ $170' },
    ],
    portales: [
      { nombre: 'Licencia de conducir — SMT', url: 'https://smt.puebla.gob.mx/' },
      { nombre: 'Control Vehicular y tenencia (pago en línea)', url: 'https://rl.puebla.gob.mx/AdeudoVehicular/' },
      { nombre: 'Verificación vehicular (citas)', url: 'https://verificacionvehicular.puebla.gob.mx/' },
      { nombre: 'Actas del Registro Civil', url: 'https://www.gob.mx/actas' },
    ],
  },
  veracruz: {
    intro:
      'En Veracruz la licencia la expide la Secretaría de Seguridad Pública (se pide constancia de no ser deudor alimentario) y los pagos vehiculares se hacen en la Oficina Virtual de Hacienda (OVH). Las tarifas se ajustan con la UMA en febrero, la licencia permanente solo aplica a mayores de 50 años y en 2026 corre el reemplacamiento "Año Nuevo, Placas Nuevas".',
    costos: [
      { tramite: 'Licencia de conducir (Tipo C, automovilista)', detalle: '≈ $2,003 primera vez · $1,001 canje/renovación · $1,716 permanente (solo mayores de 50 años)' },
      { tramite: 'Verificación vehicular', detalle: '≈ $493 por semestre (obligatoria; subió de $476 con la UMA en febrero de 2026)' },
      { tramite: 'Tenencia', detalle: 'Subsidio del 100% si pagas los derechos vehiculares (≈ $1,239) entre enero y marzo, estás al corriente y cumpliste la verificación' },
      { tramite: 'Acta de nacimiento (en línea)', detalle: '≈ $199' },
    ],
    portales: [
      { nombre: 'Licencia de conducir — SSP Veracruz', url: 'https://www.veracruz.gob.mx/seguridad/licencias-de-conducir/' },
      { nombre: 'Tenencia y pagos vehiculares — OVH', url: 'https://www.ovh.gob.mx/' },
      { nombre: 'Verificación vehicular — SEDEMA', url: 'https://www.veracruz.gob.mx/medioambiente/' },
      { nombre: 'Actas del Registro Civil', url: 'https://www.gob.mx/actas' },
    ],
  },
};

export function getDatosEstado(slug: string): DatosEstado | undefined {
  return DATOS_ESTADO[slug];
}
