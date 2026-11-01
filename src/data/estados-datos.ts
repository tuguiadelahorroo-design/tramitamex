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
  'baja-california': {
    intro:
      'En Baja California la licencia se tramita en la Recaudación de Rentas de tu municipio, con examen teórico y práctico, y eliges 3 o 5 años de vigencia. El estado ajusta sus cuotas cada mes, así que el importe cambia un poco según cuándo pagues; tu fecha de cumpleaños también puede moverlo.',
    costos: [
      { tramite: 'Licencia de automovilista (primera vez)', detalle: '≈ $1,127 (3 años) · ≈ $1,503 (5 años), cuota de noviembre de 2026' },
      { tramite: 'Revalidación de licencia', detalle: '≈ $1,000 (3 años) · ≈ $1,335 (5 años)' },
      { tramite: 'Reposición de licencia', detalle: '≈ $837 de base en la Ley de Ingresos 2026 (se actualiza)' },
      { tramite: 'Refrendo de tarjeta de circulación (auto particular)', detalle: '≈ $1,167 de base en la Ley de Ingresos 2026 (se actualiza)' },
    ],
    portales: [
      { nombre: 'Licencia de conducir: requisitos y costo del mes', url: 'https://retys.bajacalifornia.gob.mx/Portal/TyS/661' },
      { nombre: 'Citas en línea — Gobierno de Baja California', url: 'https://citas.ebajacalifornia.gob.mx/' },
      { nombre: 'Pagos digitales — Secretaría de Hacienda', url: 'https://www.bajacalifornia.gob.mx/hacienda/pagosdigitales' },
      { nombre: 'Actas del Registro Civil', url: 'https://www.gob.mx/actas' },
    ],
  },
  sonora: {
    intro:
      'En Sonora la licencia se saca en cualquier Agencia o Subagencia Fiscal de la Secretaría de Hacienda, y puedes elegir de 1 a 5 años. Primero necesitas aprobar el examen teórico y práctico de tu municipio y una valoración médica. Las personas de 60 años o más, jubiladas, pensionadas o con discapacidad pagan bastante menos.',
    costos: [
      { tramite: 'Licencia de automovilista', detalle: '≈ $765 (1 año) · $1,573 (3 años) · $2,763 (5 años)' },
      { tramite: 'Licencia con descuento (1 año)', detalle: '≈ $377 (60 años o más, jubilados y pensionados) · $225 (personas con discapacidad)' },
      { tramite: 'Revalidación de placas 2026 (auto)', detalle: '≈ $1,909 · $897 (jubilados y pensionados) · $750 (personas con discapacidad)' },
    ],
    portales: [
      { nombre: 'Expedición de licencia de automovilista', url: 'https://www.sonora.gob.mx/servicios-y-tramites/121.146-expedicion-de-licencia-de-automovilista' },
      { nombre: 'Requisitos de licencia — Secretaría de Hacienda', url: 'https://hacienda.sonora.gob.mx/expedicion-licencia-conducir' },
      { nombre: 'Padrón vehicular — Secretaría de Hacienda', url: 'https://hacienda.sonora.gob.mx/contribuyentes/padron-vehicular' },
      { nombre: 'Pagos en línea — Secretaría de Hacienda', url: 'https://pagos.sonora.gob.mx/pagos-hacienda/' },
      { nombre: 'Actas del Registro Civil', url: 'https://www.gob.mx/actas' },
    ],
  },
  chihuahua: {
    intro:
      'En Chihuahua las licencias las atiende la Secretaría de Seguridad Pública del Estado (SSPE); la primera vez lleva curso y evaluaciones, y hay que sacar cita. La revalidación vehicular se paga en línea o en Recaudación de Rentas, y a principios de año suele tener descuento por pronto pago.',
    costos: [
      { tramite: 'Licencia de conducir (tarifa publicada en octubre de 2025)', detalle: '≈ $550 (1 año) · $1,401 (3 años) · $1,881 (6 años). Confirma la de 2026' },
      { tramite: 'Revalidación vehicular 2026', detalle: '≈ $1,507 a $2,529, según el modelo y el mes de pago' },
      { tramite: 'Programa preventivo de placas', detalle: '≈ $500, si vendiste el auto sin cambio de propietario o ya no circula' },
    ],
    portales: [
      { nombre: 'Licencias — Secretaría de Seguridad Pública del Estado', url: 'https://sspe.chihuahua.gob.mx/licencias/' },
      { nombre: 'Citas de licencias — SSPE', url: 'https://citassspe.chihuahua.gob.mx/' },
      { nombre: 'Pagos en línea — Gobierno de Chihuahua', url: 'https://ipagos.chihuahua.gob.mx/' },
      { nombre: 'Actas del Registro Civil', url: 'https://www.gob.mx/actas' },
    ],
  },
  coahuila: {
    intro:
      'En Coahuila la licencia de auto particular es la Tipo A, de chofer particular. La primera vez se tramita en un módulo; para renovar en Paga Fácil, la licencia debe estar vencida o a 30 días o menos de vencer. La ley fija aparte el examen teórico, el médico y la fotografía. El refrendo baja con la edad del auto, y adultos mayores y personas pensionadas tienen un estímulo de 25 % (modelos 2021 a 2026) o 50 % (modelos anteriores) en un vehículo. Estos estímulos vencen el 31 de diciembre de 2026.',
    costos: [
      { tramite: 'Licencia Tipo A, chofer particular', detalle: '≈ $684 (2 años) · $972 (4 años)' },
      { tramite: 'Licencia Tipo C, motociclista', detalle: '≈ $187 (2 años) · $265 (4 años)' },
      { tramite: 'Exámenes y fotografía de la licencia', detalle: '≈ $84 (teórico) · $73 (médico) · $70 (fotografía)' },
      { tramite: 'Reposición por robo o extravío', detalle: '≈ $485 (Tipo A) · $133 (motociclista)' },
      { tramite: 'Refrendo anual 2026', detalle: '≈ $2,441 de cuota de ley. Con estímulo: $1,792 (auto de más de 10 y hasta 20 años) · $1,320 (más de 20 años) · $410 (moto). Se suman fomentos' },
    ],
    portales: [
      { nombre: 'Control vehicular — Paga Fácil', url: 'https://www.pagafacil.gob.mx/pagafacilV2/epago/cv/cv.php' },
      { nombre: 'Requisitos para renovar licencia — Paga Fácil', url: 'https://www.pagafacil.gob.mx/pagafacilv2/epago/licencias/requisitos.html' },
      { nombre: 'Estímulos fiscales 2026 de control vehicular', url: 'https://www.pagafacil.gob.mx/pagafacilv2/Estimulos%20Fiscales%202026.pdf' },
      { nombre: 'Ley de Hacienda de Coahuila: cuotas', url: 'https://www.congresocoahuila.gob.mx/transparencia/03/Leyes_Coahuila/coa25.pdf' },
      { nombre: 'Actas del Registro Civil', url: 'https://www.gob.mx/actas' },
    ],
  },
  michoacan: {
    intro:
      'En Michoacán la licencia se tramita en las Oficinas de Rentas y pide examen médico, examen de manejo y el Certificado de No Inscripción del RNOA, que es gratuito. Además de 2, 4 y 5 años hay licencia permanente para automovilistas y motociclistas. El refrendo se paga en los primeros cuatro meses del año; después se cobra multa. Puedes pagarlo en línea con tarjeta.',
    costos: [
      { tramite: 'Licencia de automovilista', detalle: '≈ $1,216 (2 años) · $1,780 (4 años) · $2,059 (5 años) · $2,887 (permanente)' },
      { tramite: 'Licencia de motociclista', detalle: '≈ $735 (2 años) · $966 (4 años) · $1,291 (5 años) · $2,138 (permanente)' },
      { tramite: 'Refrendo anual 2026', detalle: '≈ $1,256 (auto) · $626 (vehículo adaptado para persona con discapacidad) · $401 (moto)' },
      { tramite: 'Juego de placas de auto', detalle: '≈ $2,260, con tarjeta de circulación' },
    ],
    portales: [
      { nombre: 'Licencias de conducir — SATMICH', url: 'https://satmich.michoacan.gob.mx/tramites/vehicular/licencias' },
      { nombre: 'Refrendo digital — Gobierno de Michoacán', url: 'https://refrendodigital.michoacan.gob.mx/' },
      { nombre: 'Refrendo anual: cuotas y plazo', url: 'https://michoacan.gob.mx/tramites/refrendo-anual/' },
      { nombre: 'Directorio de recaudadoras — SATMICH', url: 'https://satmich.michoacan.gob.mx/directorio/recaudadoras' },
      { nombre: 'Certificado de No Inscripción — RNOA', url: 'https://rnoa.dif.gob.mx/' },
      { nombre: 'Actas del Registro Civil', url: 'https://www.gob.mx/actas' },
    ],
  },
  yucatan: {
    intro:
      'En Yucatán la licencia se saca en el Centro de Servicios Yucatán, en Mérida, o en Valladolid, con cita y tres exámenes: conocimientos, pericia y médico. Antes de pagar revisa el trámite de descuentos: baja 50 % la licencia de 2 años a personas trabajadoras, jubiladas o pensionadas con ingreso diario promedio de hasta 4.5 salarios mínimos, y exenta a amas de casa sin remuneración, estudiantes con beca y personas desempleadas que buscan trabajo. La renovación tiene ficha en línea, pero la propia página avisa que por ahora no está disponible.',
    costos: [
      { tramite: 'Licencia de automovilista (nueva o renovación)', detalle: '≈ $845 (2 años) · $1,267 (3 años) · $2,252 (5 años)' },
      { tramite: 'Licencia de motociclista', detalle: '≈ $422 (2 años) · $607 (3 años) · $1,010 (5 años)' },
      { tramite: 'Duplicado de licencia de automovilista', detalle: '≈ $422 (2 años) · $634 (3 años) · $1,126 (5 años)' },
      { tramite: 'Placas de auto particular (vehículo nuevo)', detalle: '≈ $3,027, con engomado y tarjeta de circulación' },
    ],
    portales: [
      { nombre: 'Licencia de conducir — Trámites Yucatán', url: 'https://tramites.yucatan.gob.mx/tramite/2c75119d' },
      { nombre: 'Renovación de licencia', url: 'https://tramites.yucatan.gob.mx/tramite/5c419b4a' },
      { nombre: 'Descuentos de licencias de conducir', url: 'https://tramites.yucatan.gob.mx/tramite/20f4297a' },
      { nombre: 'Agenda de citas para licencia', url: 'https://agendapolicia.yucatan.gob.mx' },
      { nombre: 'Actas del Registro Civil', url: 'https://www.gob.mx/actas' },
    ],
  },
};

export function getDatosEstado(slug: string): DatosEstado | undefined {
  return DATOS_ESTADO[slug];
}
