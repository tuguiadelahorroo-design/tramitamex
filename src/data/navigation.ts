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
      { nombre: 'INE', slug: 'ine', live: true },
      { nombre: 'Pasaporte', slug: 'pasaporte', live: true },
      { nombre: 'Pasaporte para menores', slug: 'pasaporte-menores', live: true },
      { nombre: 'Cartilla militar (SMN)', slug: 'cartilla-militar', live: true },
      { nombre: 'Visa americana', slug: 'visa-americana', live: true },
      { nombre: 'Apostilla de documentos', slug: 'apostilla-de-documentos', live: true },
      { nombre: 'Doble nacionalidad', slug: 'doble-nacionalidad', live: true },
      { nombre: 'Residencia temporal (INM)', slug: 'residencia-temporal-mexico', live: true },
      { nombre: 'Cita en el consulado (MiConsulado)', slug: 'cita-consulado-mexicano', live: true },
      { nombre: 'Llave MX (cuenta del gobierno)', slug: 'llave-mx', live: true },
      { nombre: 'Visa canadiense o eTA', slug: 'visa-canadiense', live: true },
      { nombre: 'ETIAS y viajar a Europa', slug: 'etias-viajar-a-europa', live: true },
      { nombre: 'Registro de línea celular (CURP)', slug: 'registro-linea-celular', live: true },
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
      { nombre: 'Registro de nacimiento', slug: 'registro-de-nacimiento', live: true },
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
      { nombre: 'Devolución de impuestos', slug: 'devolucion-impuestos-sat', live: true },
      { nombre: 'Facturar (CFDI 4.0)', slug: 'facturar-cfdi', live: true },
      { nombre: 'RESICO', slug: 'resico-sat', live: true },
      { nombre: 'RFC para menores de edad', slug: 'rfc-menores-de-edad', live: true },
      { nombre: 'Recibo de nómina (CFDI)', slug: 'cfdi-nomina', live: true },
      { nombre: 'Cambio de domicilio fiscal', slug: 'cambio-de-domicilio-fiscal-sat', live: true },
      { nombre: 'Suspensión de actividades', slug: 'suspension-de-actividades-sat', live: true },
      { nombre: 'Contraseña del SAT', slug: 'contrasena-sat', live: true },
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
      { nombre: 'Incapacidad (IMSS)', slug: 'incapacidad-imss', live: true },
      { nombre: 'Alta patronal (IMSS)', slug: 'alta-patronal-imss', live: true },
      { nombre: 'ISSSTE', slug: 'issste', live: true },
      { nombre: 'Aborto legal (ILE)', slug: 'aborto-legal', live: true },
      { nombre: 'Cambio de clínica (UMF)', slug: 'cambio-clinica-imss', live: true },
      { nombre: 'Pensión de viudez y orfandad', slug: 'pension-viudez-orfandad-imss', live: true },
      { nombre: 'Modalidad 40 (continuación voluntaria)', slug: 'modalidad-40-imss', live: true },
      { nombre: 'Seguro de Salud para la Familia', slug: 'seguro-de-salud-para-la-familia', live: true },
      { nombre: 'IMSS-Bienestar (sin seguridad social)', slug: 'imss-bienestar', live: true },
    ],
  },
  {
    id: 'vehiculares',
    titulo: 'Vehiculares',
    icono: '🚗',
    items: [
      { nombre: 'Licencia de conducir', slug: 'licencia-de-conducir', live: true },
      { nombre: 'Licencia digital', slug: 'licencia-digital', live: true },
      { nombre: 'Placas (emplacamiento)', slug: 'placas', live: true },
      { nombre: 'Tarjeta de circulación', slug: 'tarjeta-de-circulacion', live: true },
      { nombre: 'Tenencia', slug: 'tenencia', live: true },
      { nombre: 'Verificación vehicular', slug: 'verificacion-vehicular', live: true },
      { nombre: 'REPUVE (consulta vehicular)', slug: 'repuve', live: true },
      { nombre: 'Holograma 00 y exención', slug: 'holograma-00', live: true },
      { nombre: 'Multas y fotomultas', slug: 'pagar-multa-transito', live: true },
      { nombre: 'Baja de placas', slug: 'baja-de-placas', live: true },
      { nombre: 'Cambio de propietario', slug: 'cambio-de-propietario-vehicular', live: true },
      { nombre: 'Licencia federal de conducir', slug: 'licencia-federal-de-conducir', live: true },
    ],
  },
  {
    id: 'trabajo',
    titulo: 'Trabajo y antecedentes',
    icono: '💼',
    items: [
      { nombre: 'Antecedentes no penales', slug: 'antecedentes-no-penales', live: true },
      { nombre: 'Afore', slug: 'afore', live: true },
      { nombre: 'Retiro Afore por desempleo', slug: 'retiro-afore-desempleo', live: true },
      { nombre: 'Infonavit', slug: 'infonavit', live: true },
      { nombre: 'Devolución de saldo Infonavit', slug: 'devolucion-saldo-infonavit', live: true },
      { nombre: 'Mejoravit (remodelar)', slug: 'mejoravit', live: true },
      { nombre: 'Fonacot', slug: 'fonacot', live: true },
      { nombre: 'Cédula profesional', slug: 'cedula-profesional', live: true },
      { nombre: 'Finiquito y liquidación', slug: 'finiquito-liquidacion', live: true },
      { nombre: 'Precalificación Infonavit', slug: 'precalificacion-infonavit', live: true },
      { nombre: 'Revalidación de estudios (SEP)', slug: 'revalidacion-estudios-sep', live: true },
      { nombre: '¿Infonavit o crédito bancario?', slug: 'infonavit-vs-credito-bancario', live: true },
      { nombre: 'Constancia de no inhabilitación', slug: 'constancia-de-no-inhabilitacion', live: true },
      { nombre: 'Aguinaldo', slug: 'aguinaldo', live: true },
      { nombre: 'Retiro Afore por matrimonio', slug: 'retiro-afore-por-matrimonio', live: true },
      { nombre: 'Cambio de Afore (traspaso)', slug: 'cambio-de-afore', live: true },
      { nombre: 'Crédito Fovissste', slug: 'credito-fovissste', live: true },
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
      { nombre: 'Credencial INAPAM', slug: 'inapam', live: true },
      { nombre: 'Pensión para personas con discapacidad', slug: 'pension-bienestar-discapacidad', live: true },
      { nombre: 'Vivienda para el Bienestar (Conavi)', slug: 'vivienda-para-el-bienestar', live: true },
    ],
  },
  {
    id: 'patrimonio',
    titulo: 'Patrimonio y legal',
    icono: '⚖️',
    items: [
      { nombre: 'Predial (impuesto predial)', slug: 'predial', live: true },
      { nombre: 'Escrituración de una casa', slug: 'escrituracion', live: true },
      { nombre: 'Testamento', slug: 'testamento', live: true },
      { nombre: 'Pensión alimenticia', slug: 'pension-alimenticia', live: true },
      { nombre: 'Constancia de no deudor alimentario', slug: 'constancia-no-deudor-alimentario', live: true },
      { nombre: 'Divorcio', slug: 'divorcio', live: true },
      { nombre: 'Registro de marca (IMPI)', slug: 'registro-de-marca-impi', live: true },
      { nombre: 'Queja en Profeco', slug: 'queja-profeco', live: true },
      { nombre: 'Reporte de Buró de Crédito', slug: 'reporte-buro-de-credito', live: true },
    ],
  },
];

/** Trámites destacados para el footer / accesos rápidos. */
export const TRAMITES_DESTACADOS: TramiteLink[] = [
  { nombre: 'Registro de celular', slug: 'registro-linea-celular', live: true },
  { nombre: 'CURP', slug: 'curp', live: true },
  { nombre: 'RFC', slug: 'rfc', live: true },
  { nombre: 'Constancia de Situación Fiscal', slug: 'constancia-de-situacion-fiscal', live: true },
  { nombre: 'NSS', slug: 'nss', live: true },
  { nombre: 'Acta de nacimiento', slug: 'acta-de-nacimiento', live: true },
  { nombre: 'Pasaporte', slug: 'pasaporte', live: true },
  { nombre: 'Licencia de conducir', slug: 'licencia-de-conducir', live: true },
  { nombre: 'Antecedentes no penales', slug: 'antecedentes-no-penales', live: true },
  { nombre: 'Pensión del Bienestar', slug: 'pension-bienestar', live: true },
  { nombre: 'Predial', slug: 'predial', live: true },
];

/** Navegación principal (barra superior). */
export const NAV_PRINCIPAL = [
  { nombre: 'Trámites', href: '/tramites/' },
  { nombre: 'Por estado', href: '/por-estado/' },
  { nombre: 'Instituciones', href: '/instituciones/' },
  { nombre: 'Guías', href: '/guias/' },
];
