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
    tramites: ['rfc', 'constancia-de-situacion-fiscal', 'firma-electronica', 'opinion-de-cumplimiento', 'declaracion-anual', 'buzon-tributario'],
  },
  {
    slug: 'imss',
    nombre: 'IMSS',
    nombreCompleto: 'Instituto Mexicano del Seguro Social',
    descripcion:
      'Brinda seguridad social a los trabajadores: NSS, atención médica, semanas cotizadas, pensiones e incapacidades.',
    sitioOficial: 'https://www.imss.gob.mx/',
    tramites: ['nss', 'semanas-cotizadas-imss', 'vigencia-de-derechos-imss', 'cita-medica-imss', 'pension-imss'],
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
    tramites: ['pasaporte'],
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
    tramites: ['cedula-profesional'],
  },
  {
    slug: 'consar',
    nombre: 'CONSAR',
    nombreCompleto: 'Comisión Nacional del Sistema de Ahorro para el Retiro',
    descripcion:
      'Regula el sistema de ahorro para el retiro (Afores). Permite localizar tu Afore y consultar tu cuenta individual.',
    sitioOficial: 'https://www.gob.mx/consar',
    tramites: ['afore'],
  },
  {
    slug: 'infonavit',
    nombre: 'Infonavit',
    nombreCompleto: 'Instituto del Fondo Nacional de la Vivienda para los Trabajadores',
    descripcion:
      'Administra el ahorro para vivienda de los trabajadores y otorga créditos hipotecarios. Aquí consultas tu saldo, puntos y precalificación.',
    sitioOficial: 'https://www.infonavit.org.mx/',
    tramites: ['infonavit'],
  },
  {
    slug: 'sspc',
    nombre: 'SSPC',
    nombreCompleto: 'Secretaría de Seguridad y Protección Ciudadana',
    descripcion:
      'A través del OADPRS emite la constancia federal de antecedentes penales y coordina la prevención y reinserción social a nivel federal.',
    sitioOficial: 'https://www.gob.mx/sspc',
    tramites: ['antecedentes-no-penales'],
  },
  {
    slug: 'gobiernos-estatales',
    nombre: 'Gobiernos estatales',
    nombreCompleto: 'Gobiernos de las entidades federativas',
    descripcion:
      'Emiten trámites locales como la licencia de conducir, placas, tenencia, verificación vehicular y predial. Cada estado tiene su propia autoridad, requisitos y tarifas.',
    sitioOficial: 'https://www.gob.mx/tramites',
    tramites: ['licencia-de-conducir', 'placas', 'tarjeta-de-circulacion'],
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
    tramites: ['jovenes-construyendo-el-futuro'],
  },
];

export function getInstitucion(slug: string): Institucion | undefined {
  return INSTITUCIONES.find((i) => i.slug === slug);
}
