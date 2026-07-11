// Instituciones que emiten trámites. Cada una tiene su propia página:
// /instituciones/<slug>/

export interface Institucion {
  slug: string;
  nombre: string;
  nombreCompleto: string;
  descripcion: string;
  sitioOficial: string;
  /** Slugs de trámites relacionados (deben existir en la colección o taxonomía). */
  tramites: string[];
}

export const INSTITUCIONES: Institucion[] = [
  {
    slug: 'sat',
    nombre: 'SAT',
    nombreCompleto: 'Servicio de Administración Tributaria',
    descripcion:
      'Autoridad fiscal de México. Administra el RFC, la facturación electrónica, la e.firma y las declaraciones de impuestos.',
    sitioOficial: 'https://www.sat.gob.mx/',
    tramites: ['rfc', 'constancia-de-situacion-fiscal', 'firma-electronica', 'opinion-de-cumplimiento', 'declaracion-anual', 'buzon-tributario', 'devolucion-impuestos-sat', 'facturar-cfdi', 'resico-sat', 'rfc-menores-de-edad', 'cfdi-nomina'],
  },
  {
    slug: 'imss',
    nombre: 'IMSS',
    nombreCompleto: 'Instituto Mexicano del Seguro Social',
    descripcion:
      'Brinda seguridad social a los trabajadores: NSS, atención médica, semanas cotizadas, pensiones e incapacidades.',
    sitioOficial: 'https://www.imss.gob.mx/',
    tramites: ['nss', 'semanas-cotizadas-imss', 'vigencia-de-derechos-imss', 'cita-medica-imss', 'pension-imss', 'incapacidad-imss', 'alta-patronal-imss', 'cambio-clinica-imss'],
  },
  {
    slug: 'renapo',
    nombre: 'RENAPO',
    nombreCompleto: 'Registro Nacional de Población',
    descripcion:
      'Dependiente de la Secretaría de Gobernación, administra la CURP, las actas del registro civil y el registro de identidad de la población.',
    sitioOficial: 'https://www.gob.mx/segob',
    tramites: ['curp', 'acta-de-nacimiento', 'acta-de-matrimonio', 'acta-de-defuncion', 'acta-de-divorcio', 'correccion-de-actas'],
  },
  {
    slug: 'sre',
    nombre: 'SRE',
    nombreCompleto: 'Secretaría de Relaciones Exteriores',
    descripcion: 'Emite el pasaporte mexicano y atiende trámites para mexicanos en el extranjero.',
    sitioOficial: 'https://www.gob.mx/sre',
    tramites: ['pasaporte', 'pasaporte-menores', 'doble-nacionalidad'],
  },
  {
    slug: 'ine',
    nombre: 'INE',
    nombreCompleto: 'Instituto Nacional Electoral',
    descripcion: 'Emite la credencial para votar (INE), la identificación oficial más usada en México.',
    sitioOficial: 'https://www.ine.mx/',
    tramites: ['ine'],
  },
  {
    slug: 'sep',
    nombre: 'SEP',
    nombreCompleto: 'Secretaría de Educación Pública',
    descripcion: 'Atiende cédulas profesionales, certificados de estudios y revalidaciones.',
    sitioOficial: 'https://www.gob.mx/sep',
    tramites: ['cedula-profesional', 'revalidacion-estudios-sep'],
  },
  {
    slug: 'consar',
    nombre: 'CONSAR',
    nombreCompleto: 'Comisión Nacional del Sistema de Ahorro para el Retiro',
    descripcion:
      'Regula el sistema de ahorro para el retiro (Afores). Permite localizar tu Afore y consultar tu cuenta individual.',
    sitioOficial: 'https://www.gob.mx/consar',
    tramites: ['afore', 'retiro-afore-desempleo'],
  },
  {
    slug: 'infonavit',
    nombre: 'Infonavit',
    nombreCompleto: 'Instituto del Fondo Nacional de la Vivienda para los Trabajadores',
    descripcion:
      'Administra el ahorro para vivienda de los trabajadores y otorga créditos hipotecarios. Aquí consultas tu saldo, puntos y precalificación.',
    sitioOficial: 'https://www.infonavit.org.mx/',
    tramites: ['infonavit', 'devolucion-saldo-infonavit', 'precalificacion-infonavit', 'infonavit-vs-credito-bancario'],
  },
  {
    slug: 'sspc',
    nombre: 'SSPC',
    nombreCompleto: 'Secretaría de Seguridad y Protección Ciudadana',
    descripcion:
      'A través del OADPRS emite la constancia federal de antecedentes penales y coordina la prevención y reinserción social a nivel federal.',
    sitioOficial: 'https://www.gob.mx/sspc',
    tramites: ['antecedentes-no-penales', 'repuve'],
  },
  {
    slug: 'gobiernos-estatales',
    nombre: 'Gobiernos estatales',
    nombreCompleto: 'Gobiernos de las entidades federativas',
    descripcion:
      'Emiten trámites locales: licencia de conducir, placas, tenencia, verificación y predial. Cada estado tiene su propia autoridad y tarifas.',
    sitioOficial: 'https://www.gob.mx/tramites',
    tramites: ['licencia-de-conducir', 'licencia-digital', 'placas', 'tarjeta-de-circulacion', 'tenencia', 'verificacion-vehicular', 'holograma-00', 'pagar-multa-transito', 'baja-de-placas', 'apostilla-de-documentos', 'testamento', 'predial', 'cambio-de-propietario-vehicular', 'pension-alimenticia', 'escrituracion', 'divorcio'],
  },
  {
    slug: 'sedena',
    nombre: 'SEDENA',
    nombreCompleto: 'Secretaría de la Defensa Nacional',
    descripcion:
      'Administra el Servicio Militar Nacional y, a través de las Juntas Municipales de Reclutamiento, la emisión de la cartilla militar.',
    sitioOficial: 'https://www.gob.mx/sedena',
    tramites: ['cartilla-militar'],
  },
  {
    slug: 'bienestar',
    nombre: 'Bienestar',
    nombreCompleto: 'Secretaría del Bienestar',
    descripcion:
      'Opera los programas sociales del Gobierno de México, como la Pensión para el Bienestar de las Personas Adultas Mayores.',
    sitioOficial: 'https://www.gob.mx/bienestar',
    tramites: ['pension-bienestar', 'mujeres-con-bienestar'],
  },
  {
    slug: 'becas-bienestar',
    nombre: 'Becas Bienestar',
    nombreCompleto: 'Coordinación Nacional de Becas para el Bienestar Benito Juárez',
    descripcion:
      'Coordina las Becas para el Bienestar Benito Juárez: educación básica (Rita Cetina), media superior y superior.',
    sitioOficial: 'https://www.gob.mx/becasbenitojuarez',
    tramites: ['becas-benito-juarez'],
  },
  {
    slug: 'stps',
    nombre: 'STPS',
    nombreCompleto: 'Secretaría del Trabajo y Previsión Social',
    descripcion:
      'Rectora de la política laboral en México. Opera el programa Jóvenes Construyendo el Futuro y atiende temas de trabajo y previsión social.',
    sitioOficial: 'https://www.gob.mx/stps',
    tramites: ['jovenes-construyendo-el-futuro', 'finiquito-liquidacion'],
  },
  {
    slug: 'fonacot',
    nombre: 'Fonacot',
    nombreCompleto: 'Instituto del Fondo Nacional para el Consumo de los Trabajadores',
    descripcion:
      'Otorga créditos en efectivo a las personas que trabajan formalmente en empresas afiliadas, con descuento vía nómina.',
    sitioOficial: 'https://www.fonacot.gob.mx/',
    tramites: ['fonacot'],
  },
  {
    slug: 'embajada-eua',
    nombre: 'Embajada de EE. UU.',
    nombreCompleto: 'Embajada y Consulados de Estados Unidos en México',
    descripcion:
      'Tramita las visas estadounidenses (como la B1/B2) para quienes viajan desde México a Estados Unidos.',
    sitioOficial: 'https://mx.usembassy.gov/',
    tramites: ['visa-americana'],
  },
  {
    slug: 'inapam',
    nombre: 'INAPAM',
    nombreCompleto: 'Instituto Nacional de las Personas Adultas Mayores',
    descripcion:
      'Emite la credencial INAPAM y promueve los derechos y beneficios de las personas adultas mayores.',
    sitioOficial: 'https://www.gob.mx/inapam',
    tramites: ['inapam'],
  },
  {
    slug: 'issste',
    nombre: 'ISSSTE',
    nombreCompleto: 'Instituto de Seguridad y Servicios Sociales de los Trabajadores del Estado',
    descripcion:
      'Brinda seguridad social a los trabajadores del Estado: atención médica, citas, derechohabiencia y pensiones.',
    sitioOficial: 'https://www.gob.mx/issste',
    tramites: ['issste'],
  },
  {
    slug: 'salud',
    nombre: 'Secretaría de Salud',
    nombreCompleto: 'Secretaría de Salud (federal y estatales)',
    descripcion:
      'Coordina la salud pública en México. Junto con las secretarías estatales, el IMSS y el IMSS-Bienestar brinda servicios como la interrupción legal del embarazo.',
    sitioOficial: 'https://www.gob.mx/salud',
    tramites: ['aborto-legal'],
  },
  {
    slug: 'sict',
    nombre: 'SICT',
    nombreCompleto: 'Secretaría de Infraestructura, Comunicaciones y Transportes',
    descripcion:
      'Rectora del autotransporte federal. Emite la licencia federal de conducir (hoy digital) para operadores de carga, pasaje y turismo en carreteras federales.',
    sitioOficial: 'https://www.gob.mx/sict',
    tramites: ['licencia-federal-de-conducir'],
  },
  {
    slug: 'inm',
    nombre: 'INM',
    nombreCompleto: 'Instituto Nacional de Migración',
    descripcion:
      'Autoridad migratoria de México. Emite las tarjetas de residente temporal y permanente, y atiende los trámites migratorios de las personas extranjeras en el país.',
    sitioOficial: 'https://www.gob.mx/inm',
    tramites: ['residencia-temporal-mexico'],
  },
];

export function getInstitucion(slug: string): Institucion | undefined {
  return INSTITUCIONES.find((i) => i.slug === slug);
}
