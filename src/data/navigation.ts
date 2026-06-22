// Taxonomía del mega-menú de Trámites.
// `live: true`  -> existe una página publicada en /<slug>/
// `live: false` -> está planeada; se muestra en el menú pero sin enlace (sin 404).

export interface TramiteLink {
  nombre: string;
  slug: string;
  live: boolean;
}

export interface TramiteCategoria {
  id: string;
  titulo: string;
  /** Emoji decorativo (aria-hidden en el render). */
  icono: string;
  items: TramiteLink[];
}

export const CATEGORIAS: TramiteCategoria[] = [
  {
    id: 'identidad',
    titulo: 'Identidad y documentos',
    icono: '🪪',
    items: [
      { nombre: 'CURP', slug: 'curp', live: true },
      { nombre: 'RFC', slug: 'rfc', live: true },
      { nombre: 'Constancia de Situación Fiscal', slug: 'constancia-de-situacion-fiscal', live: true },
      { nombre: 'NSS', slug: 'nss', live: true },
      { nombre: 'Acta de nacimiento', slug: 'acta-de-nacimiento', live: true },
      { nombre: 'INE', slug: 'ine', live: true },
      { nombre: 'Pasaporte', slug: 'pasaporte', live: true },
      { nombre: 'Cartilla militar (SMN)', slug: 'cartilla-militar', live: true },
    ],
  },
  {
    id: 'registro-civil',
    titulo: 'Registro Civil',
    icono: '📜',
    items: [
      { nombre: 'Acta de nacimiento', slug: 'acta-de-nacimiento', live: true },
      { nombre: 'Acta de matrimonio', slug: 'acta-de-matrimonio', live: true },
      { nombre: 'Acta de defunción', slug: 'acta-de-defuncion', live: true },
      { nombre: 'Acta de divorcio', slug: 'acta-de-divorcio', live: true },
      { nombre: 'Corrección de actas', slug: 'correccion-de-actas', live: true },
    ],
  },
  {
    id: 'sat',
    titulo: 'SAT e impuestos',
    icono: '🧾',
    items: [
      { nombre: 'RFC', slug: 'rfc', live: true },
      { nombre: 'Constancia de Situación Fiscal', slug: 'constancia-de-situacion-fiscal', live: true },
      { nombre: 'Firma electrónica (e.firma)', slug: 'firma-electronica', live: true },
      { nombre: 'Declaración anual', slug: 'declaracion-anual', live: true },
      { nombre: 'Opinión de cumplimiento', slug: 'opinion-de-cumplimiento', live: true },
      { nombre: 'Buzón tributario', slug: 'buzon-tributario', live: true },
    ],
  },
  {
    id: 'imss-salud',
    titulo: 'IMSS, ISSSTE y salud',
    icono: '🏥',
    items: [
      { nombre: 'Número de Seguro Social (NSS)', slug: 'nss', live: true },
      { nombre: 'Semanas cotizadas', slug: 'semanas-cotizadas-imss', live: true },
      { nombre: 'Vigencia de derechos', slug: 'vigencia-de-derechos-imss', live: true },
      { nombre: 'Cita médica IMSS', slug: 'cita-medica-imss', live: true },
      { nombre: 'Pensión IMSS', slug: 'pension-imss', live: true },
    ],
  },
  {
    id: 'vehiculares',
    titulo: 'Vehiculares',
    icono: '🚗',
    items: [
      { nombre: 'Licencia de conducir', slug: 'licencia-de-conducir', live: true },
      { nombre: 'Placas (emplacamiento)', slug: 'placas', live: true },
      { nombre: 'Tarjeta de circulación', slug: 'tarjeta-de-circulacion', live: true },
      { nombre: 'Tenencia', slug: 'tenencia', live: true },
      { nombre: 'Verificación vehicular', slug: 'verificacion-vehicular', live: true },
    ],
  },
  {
    id: 'trabajo',
    titulo: 'Trabajo y antecedentes',
    icono: '💼',
    items: [
      { nombre: 'Antecedentes no penales', slug: 'antecedentes-no-penales', live: true },
      { nombre: 'Afore', slug: 'afore', live: true },
      { nombre: 'Infonavit', slug: 'infonavit', live: true },
      { nombre: 'Fonacot', slug: 'fonacot', live: true },
      { nombre: 'Cédula profesional', slug: 'cedula-profesional', live: true },
    ],
  },
  {
    id: 'programas-sociales',
    titulo: 'Programas sociales',
    icono: '🤝',
    items: [
      { nombre: 'Pensión del Bienestar', slug: 'pension-bienestar', live: true },
      { nombre: 'Becas Benito Juárez', slug: 'becas-benito-juarez', live: true },
      { nombre: 'Pensión Mujeres Bienestar', slug: 'mujeres-con-bienestar', live: true },
      { nombre: 'Jóvenes Construyendo el Futuro', slug: 'jovenes-construyendo-el-futuro', live: true },
    ],
  },
];

/** Trámites destacados para el footer / accesos rápidos. */
export const TRAMITES_DESTACADOS: TramiteLink[] = [
  { nombre: 'CURP', slug: 'curp', live: true },
  { nombre: 'RFC', slug: 'rfc', live: true },
  { nombre: 'Constancia de Situación Fiscal', slug: 'constancia-de-situacion-fiscal', live: true },
  { nombre: 'NSS', slug: 'nss', live: true },
  { nombre: 'Acta de nacimiento', slug: 'acta-de-nacimiento', live: true },
  { nombre: 'Pasaporte', slug: 'pasaporte', live: true },
  { nombre: 'Licencia de conducir', slug: 'licencia-de-conducir', live: true },
  { nombre: 'Antecedentes no penales', slug: 'antecedentes-no-penales', live: true },
];

/** Navegación principal (barra superior). */
export const NAV_PRINCIPAL = [
  { nombre: 'Trámites', href: '/tramites/' },
  { nombre: 'Por estado', href: '/por-estado/' },
  { nombre: 'Instituciones', href: '/instituciones/' },
  { nombre: 'Guías', href: '/guias/' },
];
