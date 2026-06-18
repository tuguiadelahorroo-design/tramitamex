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
    tramites: ['rfc', 'constancia-de-situacion-fiscal'],
  },
  {
    slug: 'imss',
    nombre: 'IMSS',
    nombreCompleto: 'Instituto Mexicano del Seguro Social',
    descripcion:
      'Brinda seguridad social a los trabajadores: NSS, atención médica, semanas cotizadas, pensiones e incapacidades.',
    sitioOficial: 'https://www.imss.gob.mx/',
    tramites: ['nss'],
  },
  {
    slug: 'renapo',
    nombre: 'RENAPO',
    nombreCompleto: 'Registro Nacional de Población',
    descripcion:
      'Dependiente de la Secretaría de Gobernación, administra la CURP y el registro de identidad de la población.',
    sitioOficial: 'https://www.gob.mx/segob',
    tramites: ['curp'],
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
];

export function getInstitucion(slug: string): Institucion | undefined {
  return INSTITUCIONES.find((i) => i.slug === slug);
}
