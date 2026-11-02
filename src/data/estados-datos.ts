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
  tamaulipas: {
    intro:
      'En Tamaulipas la licencia se tramita en las Oficinas Fiscales y hay dos vigencias: 2 años o permanente. La permanente sigue pidiendo una visita: cada 5 años toca un examen de valoración integral en la Oficina Fiscal, pagando solo el costo de reposición. Las personas adultas mayores, jubiladas o pensionadas con domicilio en el estado pagan 50 % en la licencia, y también en refrendo y placas una vez al año. Finanzas suele publicar descuentos por acuerdo durante el año, así que revísalos antes de pagar.',
    costos: [
      { tramite: 'Licencia de automovilista', detalle: '≈ $938 (2 años) · $1,642 (permanente)' },
      { tramite: 'Licencia de chofer particular', detalle: '≈ $1,173 (2 años) · $1,994 (permanente)' },
      { tramite: 'Licencia de motociclista', detalle: '≈ $938 (2 años) · $1,642 (permanente), calculado con la UMA de 2026' },
      { tramite: 'Refrendo anual del vehículo', detalle: '≈ $2,346 de base (20 UMA); pueden sumarse otros conceptos' },
      { tramite: 'Placas (expedición, reposición o canje)', detalle: '≈ $587 de base (5 UMA)' },
    ],
    portales: [
      { nombre: 'Secretaría de Finanzas de Tamaulipas', url: 'https://finanzas.tamaulipas.gob.mx/' },
      { nombre: 'Costos de licencia: comunicado de octubre de 2026', url: 'https://tamaulipas.gob.mx/2026/10/aprovechan-conductores-50-de-descuento-en-licencias-durante-la-feria-tamaulipas-2026/' },
      { nombre: 'Ley de Hacienda de Tamaulipas', url: 'https://po.tamaulipas.gob.mx/wp-content/uploads/2026/01/Ley_Hacienda.pdf' },
      { nombre: 'Actas del Registro Civil', url: 'https://www.gob.mx/actas' },
    ],
  },
  hidalgo: {
    intro:
      'En Hidalgo la licencia la expide la Secretaría de Seguridad Pública, de forma presencial, en Pachuca y en delegaciones como Tula, Tulancingo, Huejutla e Ixmiquilpan. Se paga en banco con el formato F-7. La primera vez pide certificado médico de una institución pública de salud de Hidalgo y examen teórico-práctico; el canje sale más barato que una licencia nueva. Si el subtotal de la factura de tu auto es menor de $200,000 no pagas tenencia, siempre que esté inscrito en el estado y cubras el refrendo.',
    costos: [
      { tramite: 'Licencia de automovilista (tipo B), nueva', detalle: '≈ $610 (2 años) · $1,197 (4 años)' },
      { tramite: 'Canje de licencia de automovilista', detalle: '≈ $458 (2 años) · $880 (4 años)' },
      { tramite: 'Licencia de motociclista (tipo C), nueva', detalle: '≈ $458 (2 años) · $880 (4 años)' },
      { tramite: 'Reposición por robo o extravío', detalle: '≈ $305 (2 años) · $587 (4 años)' },
      { tramite: 'Refrendo 2026 con Circula Seguro', detalle: '≈ $1,177 · $1,050 con verificación del primer semestre · $821 (moto). Programa vigente hasta el 30 de junio; confirma el monto actual' },
    ],
    portales: [
      { nombre: 'Licencia para conducir — RUTS Hidalgo', url: 'https://ruts.hidalgo.gob.mx/ver/10614' },
      { nombre: 'Tenencia y refrendo 2026 — Portal Tributario', url: 'https://portaltributario.hidalgo.gob.mx/informacion-sobre-tenencia-y-refrendo-2026.html' },
      { nombre: 'Portal Tributario de Hidalgo', url: 'https://portaltributario.hidalgo.gob.mx/' },
      { nombre: 'Actas del Registro Civil', url: 'https://www.gob.mx/actas' },
    ],
  },
  'san-luis-potosi': {
    intro:
      'En San Luis Potosí la licencia de servicio particular es gratuita y permanente para automovilistas, choferes particulares y motociclistas. Se tramita en persona en las Oficinas Recaudadoras; la primera vez pide carta compromiso de Finanzas, identificación y dos comprobantes de domicilio en el estado, uno de hace un año y otro de los últimos 3 meses. Antes de salir, valida tu licencia en el sitio de Finanzas. En 2026 no se cobra tarjeta de circulación: la de 2025 dura tres años.',
    costos: [
      { tramite: 'Licencia de servicio particular', detalle: 'Gratis y permanente' },
      { tramite: 'Permiso para menores (primera vez)', detalle: '≈ $824' },
      { tramite: 'Reposición de licencia', detalle: 'Tiene costo; la página de Finanzas muestra cifras distintas, así que confírmalo en la Oficina Recaudadora' },
      { tramite: 'Control vehicular 2026', detalle: '≈ $1,400 anunciados en enero · $1,451 en el catálogo estatal, actualizado en junio' },
    ],
    portales: [
      { nombre: 'Licencia de conducir — Secretaría de Finanzas', url: 'https://finanzas.slp.gob.mx/licencia-de-conducir/' },
      { nombre: 'Licencia por primera vez — Catálogo estatal', url: 'https://tramites.slp.gob.mx/detalles/SF-2022-8404-001-A' },
      { nombre: 'Refrendo anual — Catálogo estatal', url: 'https://tramites.slp.gob.mx/detalles/SF-2024-8404-006-A' },
      { nombre: 'Requisitos de control vehicular — Enlace SIPEL', url: 'https://enlacesipel.slp.gob.mx/RequisitosCV' },
      { nombre: 'Actas del Registro Civil', url: 'https://www.gob.mx/actas' },
    ],
  },
  'quintana-roo': {
    intro:
      'En Quintana Roo el costo de la licencia depende del municipio, y la diferencia es grande: la de automovilista a 2 años cuesta ≈ $1,897 en Cancún y ≈ $608 en Chetumal. Las tablas oficiales de estos cuatro municipios marcan 50 % de descuento para personas adultas mayores con credencial del INAPAM. Para el vehículo, desde 2026 hay que inscribirse en el Registro Estatal de Contribuyentes del SATQ antes de cualquier trámite. Las placas tienen vigencia de tres años.',
    costos: [
      { tramite: 'Licencia de automovilista en Benito Juárez (Cancún)', detalle: '≈ $1,897 (2 años) · $2,846 (3) · $3,794 (4) · $4,743 (5)' },
      { tramite: 'Licencia de automovilista en Playa del Carmen', detalle: '≈ $1,373 (2 años) · $1,695 (3) · $1,922 (4) · $2,191 (5)' },
      { tramite: 'Licencia de automovilista en Tulum', detalle: '≈ $1,466 (2 años) · $1,818 (3) · $2,405 (4) · $2,874 (5)' },
      { tramite: 'Licencia de automovilista en Othón P. Blanco (Chetumal)', detalle: '≈ $608 (2 años) · $911 (3) · $1,215 (4) · $1,519 (5)' },
      { tramite: 'Canje de placas 2026', detalle: '≈ $1,527 + $141 (auto) · $509 + $141 (moto). Montos de enero; confirma el actual' },
    ],
    portales: [
      { nombre: 'Costos de licencia 2026 en Benito Juárez', url: 'https://imoveqroo.qroo.gob.mx/wp-content/uploads/2026/01/COSTOS-LICENCIAS-2026-BENITO-JUAREZ.pdf' },
      { nombre: 'Costos de licencia 2026 en Playa del Carmen', url: 'https://imoveqroo.qroo.gob.mx/wp-content/uploads/2026/01/COSTOS-LICENCIAS-2026-PLAYA-DEL-CARMEN.pdf' },
      { nombre: 'Instituto de Movilidad de Quintana Roo', url: 'https://imoveqroo.qroo.gob.mx/' },
      { nombre: 'Canje de placas 2026 y Registro Estatal de Contribuyentes', url: 'https://cgc.qroo.gob.mx/quintana-roo-inicia-canje-de-placas-2026-y-activa-el-registro-estatal-de-contribuyentes-como-requisito-para-tramites-vehiculares/' },
      { nombre: 'Servicio de Administración Tributaria de Quintana Roo', url: 'https://satq.qroo.gob.mx/' },
      { nombre: 'Actas del Registro Civil', url: 'https://www.gob.mx/actas' },
    ],
  },
  chiapas: {
    intro:
      'En Chiapas la licencia nueva se paga en las oficinas de Finanzas, y solo después de aprobar el examen de conducir ante el personal de tránsito. Hay vigencias de 2 a 5 años, y el canje sale más barato que una licencia nueva. Si tienes de 16 a 18 años existe una licencia de automovilista por 1 año, de ≈ $864. La tabla oficial lista aparte el examen.',
    costos: [
      { tramite: 'Licencia de automovilista, nueva', detalle: '≈ $1,272 (2 años) · $1,330 (3) · $1,738 (4) · $2,088 (5)' },
      { tramite: 'Canje de licencia de automovilista', detalle: '≈ $922 (2 años) · $1,214 (3) · $1,330 (4) · $1,738 (5)' },
      { tramite: 'Licencia de motociclista, nueva', detalle: '≈ $747 (2 años) · $864 (3) · $922 (4) · $1,214 (5)' },
      { tramite: 'Reposición de licencia', detalle: '≈ $456 (2 a 5 años) · $981 (automovilista permanente)' },
      { tramite: 'Examen para licencia', detalle: '≈ $159' },
    ],
    portales: [
      { nombre: 'Costos de licencia 2026 — Subsecretaría de Ingresos', url: 'http://www.ingresos.haciendachiapas.gob.mx/servicios/licencia-costos.asp' },
      { nombre: 'Requisitos de licencia', url: 'http://www.ingresos.haciendachiapas.gob.mx/servicios/licencia-req.asp' },
      { nombre: 'Requisitos y costos vehiculares', url: 'http://www.ingresos.haciendachiapas.gob.mx/servicios/req-costos-vehic.asp' },
      { nombre: 'Actas del Registro Civil', url: 'https://www.gob.mx/actas' },
    ],
  },
  aguascalientes: {
    intro:
      'En Aguascalientes la licencia se tramita en la Secretaría de Seguridad Pública, en la Avenida Aguascalientes, Ejido Ojocaliente, y solo puede entrar quien hace el trámite: sin niños ni acompañantes. La primera vez lleva curso de vialidad y examen teórico y práctico. El control vehicular cuesta lo mismo para auto y moto, y se paga de enero a marzo. Hay vigencias de 2, 4 y 6 años.',
    costos: [
      { tramite: 'Licencia de automovilista o motociclista', detalle: '≈ $484 (2 años) · $784 (4 años) · $1,104 (6 años)' },
      { tramite: 'Licencia de operador A a E', detalle: '≈ $605 (2 años) · $980 (4 años) · $1,380 (6 años)' },
      { tramite: 'Permiso para menor de edad', detalle: '≈ $615 (1 año) · $865 (2 años)' },
      { tramite: 'Reposición de licencia', detalle: '≈ $415' },
      { tramite: 'Control vehicular 2026', detalle: '≈ $960 (auto o moto)' },
      { tramite: 'Canje de placas', detalle: '≈ $1,710 (auto) · $1,355 (moto), con control vehicular incluido y sin adeudos' },
    ],
    portales: [
      { nombre: 'Licencia de automovilista — Trámites Aguascalientes', url: 'https://www.aguascalientes.gob.mx/tramites/tramite/EDO-SSP-2' },
      { nombre: 'Costos de licencia 2026: boletín oficial', url: 'https://eservicios2.aguascalientes.gob.mx/ssi/vnoticia.aspx?b=9292' },
      { nombre: 'Pago de control vehicular', url: 'https://epagos.aguascalientes.gob.mx/controlvehicular' },
      { nombre: 'Canje de placas', url: 'https://www.aguascalientes.gob.mx/tramites/tramite/EDO-SEFI-18' },
      { nombre: 'Actas del Registro Civil', url: 'https://www.gob.mx/actas' },
    ],
  },
  durango: {
    intro:
      'En Durango la licencia de automovilista o motociclista dura 3 años. Antes de pagarla hay que cubrir en cajas municipales la constancia de no infracción y el derecho a examen, cuyo monto fija la Dirección Municipal de Vialidad. En el refrendo, las personas con discapacidad, jubiladas, pensionadas o de la tercera edad tienen 50 % de subsidio en un vehículo durante 2026, si están al corriente y registradas en el padrón. Las placas se cambian cada seis años.',
    costos: [
      { tramite: 'Licencia de automovilista (3 años)', detalle: '≈ $985' },
      { tramite: 'Licencia de motociclista (3 años)', detalle: '≈ $657' },
      { tramite: 'Refrendo de auto particular', detalle: '≈ $1,877 de base (16 UMA); pueden sumarse otros conceptos' },
      { tramite: 'Refrendo de moto', detalle: '≈ $704 de base (6 UMA); pueden sumarse otros conceptos' },
      { tramite: 'Canje o replaqueo de auto particular', detalle: '≈ $938 de base (8 UMA), cada seis años' },
    ],
    portales: [
      { nombre: 'Trámites de la Secretaría de Finanzas y de Administración', url: 'https://www.durango.gob.mx/tramites-y-servicios/secretarias/secretaria_de_finanzas__y_de_administracion' },
      { nombre: 'Ley de Hacienda de Durango', url: 'https://congresodurango.gob.mx/Archivos/legislacion/LEY%20DE%20HACIENDA%20DEL%20ESTADO%20DE%20DURANGO.pdf' },
      { nombre: 'Ley de Ingresos de Durango 2026: subsidios', url: 'https://congresodurango.gob.mx/Archivos/LXX/LEYES-INGRESOS/2026/INGRESOS%20ESTADO%20DE%20DURANGO%202026.pdf' },
      { nombre: 'Actas del Registro Civil', url: 'https://www.gob.mx/actas' },
    ],
  },
  zacatecas: {
    intro:
      'En Zacatecas la licencia se paga en los módulos de Recaudación de Rentas, en efectivo o con tarjeta. Necesitas 18 años cumplidos, y la primera vez toca un examen de 10 preguntas con al menos 60 % de aciertos. El control vehicular debe pagarse en los primeros tres meses del año, pero la Ley de Ingresos mantiene un estímulo hasta diciembre para autos modelo 2021 y anteriores. El porcentaje depende del modelo y del mes de pago.',
    costos: [
      { tramite: 'Licencia de automovilista', detalle: '≈ $452 (2 años) · $821 (4) · $986 (6) en la ley; el catálogo estatal marca ≈ $497, $903 y $1,085' },
      { tramite: 'Licencia de motociclista', detalle: '≈ $300 (2 años) · $500 (4) · $660 (6) en la ley' },
      { tramite: 'Reposición de licencia', detalle: '≈ $183' },
      { tramite: 'Control vehicular 2026', detalle: '≈ $2,350 de cuota de ley; pueden sumarse otros conceptos' },
      { tramite: 'Estímulo de abril a diciembre', detalle: '≈ 15 % (modelos 2017 a 2021) · 30 % más 10 % (2016 y anteriores) · 55 % (motos)' },
    ],
    portales: [
      { nombre: 'Licencia de automovilista — Catálogo estatal', url: 'https://catalogoestatal.zacatecas.gob.mx/tramites/152' },
      { nombre: 'Secretaría de Finanzas de Zacatecas', url: 'https://sefin.zacatecas.gob.mx/' },
      { nombre: 'Ley de Ingresos de Zacatecas 2026: estímulos', url: 'https://www.congresozac.gob.mx/65/ley&cual=337&tipo=pdf' },
      { nombre: 'Ley de Hacienda de Zacatecas', url: 'https://www.congresozac.gob.mx/65/ley&cual=57' },
      { nombre: 'Actas del Registro Civil', url: 'https://www.gob.mx/actas' },
    ],
  },
  'baja-california-sur': {
    intro:
      'En Baja California Sur las licencias cambiaron de costo y vigencia con una reforma publicada el 14 de mayo de 2026: ahora hay opciones de 1, 3 y 6 años. Se pagan en el portal del gobierno estatal, en kioscos de servicios o en las 25 oficinas de recaudación de los cinco municipios. Si te roban o pierdes una licencia de 3 o 6 años, la reposición tiene 50 % de descuento al inicio de la vigencia y 30 % después. La de 1 año no tiene reposición.',
    costos: [
      { tramite: 'Licencia de automovilista', detalle: '≈ $500 (1 año) · $901 (3 años) · $1,622 (6 años)' },
      { tramite: 'Licencia de motociclista', detalle: '≈ $300 (1 año) · $732 (3 años) · $1,318 (6 años)' },
      { tramite: 'Licencia de chofer', detalle: '≈ $700 (1 año) · $1,502 (3 años) · $2,702 (6 años)' },
    ],
    portales: [
      { nombre: 'Costos y vigencias de licencias — Secretaría de Finanzas', url: 'https://finanzas.bcs.gob.mx/actualiza-gobierno-del-estado-costos-y-vigencias-de-licencias-de-conducir-en-bcs/' },
      { nombre: 'Trámites del Gobierno de Baja California Sur', url: 'https://tramites.bcs.gob.mx/' },
      { nombre: 'Dotación y reposición de placas', url: 'https://tramites.bcs.gob.mx/catX/la-dotacion-y-o-reposicion-de-placas-de-identificacion-del-servicio-de-control-vehicular/' },
      { nombre: 'Actas del Registro Civil', url: 'https://www.gob.mx/actas' },
    ],
  },
};

export function getDatosEstado(slug: string): DatosEstado | undefined {
  return DATOS_ESTADO[slug];
}
