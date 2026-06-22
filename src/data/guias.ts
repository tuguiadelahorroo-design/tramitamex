// Guías por situación de vida. Cada guía agrupa trámites (que ya existen en la
// colección) en un orden lógico y enlaza a cada uno. El título, resumen y costo
// de cada paso se leen en tiempo de build desde la colección de trámites.

export interface GuiaPaso {
  /** Slug de un trámite existente en src/content/tramites/. */
  slug: string;
  /** Por qué / cuándo aplica este trámite dentro de la guía. */
  nota: string;
}

export interface Guia {
  slug: string;
  titulo: string;
  tituloLargo?: string;
  /** Meta description (<=165 caracteres). */
  descripcion: string;
  /** Intro de la guía. */
  resumen: string;
  /** Clave de ícono en GuiaIcon.astro. */
  icono: string;
  pasos: GuiaPaso[];
  consejo?: string;
}

export const GUIAS: Guia[] = [
  {
    slug: 'empezar-a-trabajar',
    titulo: 'Trámites para tu primer empleo',
    tituloLargo: 'Trámites para empezar a trabajar en México (en orden)',
    descripcion:
      'Los trámites para empezar a trabajar en México y en qué orden hacerlos: CURP, RFC, NSS y Constancia de Situación Fiscal.',
    resumen:
      'Cuando entras a tu primer trabajo formal te piden varios documentos. Esta es la ruta, en orden, para tenerlos listos sin vueltas.',
    icono: 'trabajo',
    pasos: [
      { slug: 'curp', nota: 'Es la base de todo: la necesitas para tu RFC, tu NSS y casi cualquier trámite.' },
      { slug: 'acta-de-nacimiento', nota: 'Tenla a la mano (copia certificada reciente); te la pueden pedir al contratarte.' },
      { slug: 'rfc', nota: 'Tu clave fiscal. Es requisito para tu alta en nómina; lo sacas en línea con tu CURP.' },
      { slug: 'nss', nota: 'Tu número ante el IMSS, para tu alta y atención médica. Gratis con tu CURP.' },
      { slug: 'constancia-de-situacion-fiscal', nota: 'Recursos Humanos suele pedirla para registrarte correctamente en nómina.' },
    ],
    consejo: 'Hazlo en este orden: primero la CURP, luego el RFC y el NSS. Con la CURP lista, los demás son en línea y gratis.',
  },
  {
    slug: 'viajar-al-extranjero',
    titulo: 'Trámites para viajar al extranjero',
    descripcion:
      'Lo que necesitas antes de salir de México: pasaporte, acta de nacimiento, CURP y, para algunas visas, la constancia de antecedentes no penales.',
    resumen:
      'Antes de comprar boletos, asegúrate de tener tu documentación de viaje en regla. Esta es la lista y el orden recomendado.',
    icono: 'viaje',
    pasos: [
      { slug: 'acta-de-nacimiento', nota: 'Es requisito para tramitar el pasaporte por primera vez; consíguela reciente.' },
      { slug: 'curp', nota: 'Te la piden en la cita del pasaporte y en varios formatos de viaje.' },
      { slug: 'pasaporte', nota: 'Tu documento de viaje e identidad. Cita gratuita y trámite personal en la SRE.' },
      { slug: 'antecedentes-no-penales', nota: 'Algunas visas y trámites migratorios la solicitan; confirma cuál te piden.' },
    ],
    consejo: 'Saca primero el acta y la CURP; con ellas agendas la cita del pasaporte sin contratiempos.',
  },
  {
    slug: 'comprar-auto-usado',
    titulo: 'Trámites al comprar un auto usado',
    descripcion:
      'Qué hacer al comprar un auto usado: cambio de placas, tarjeta de circulación a tu nombre, tenencia al corriente y verificación vehicular.',
    resumen:
      'Comprar un auto usado no termina con el pago: hay que ponerlo a tu nombre y al corriente. Esta es la ruta.',
    icono: 'auto',
    pasos: [
      { slug: 'placas', nota: 'Haz el cambio de propietario para que el vehículo quede a tu nombre.' },
      { slug: 'tarjeta-de-circulacion', nota: 'Se reexpide a tu nombre junto con el emplacamiento.' },
      { slug: 'tenencia', nota: 'Verifica que no haya adeudos y ponte al corriente del año.' },
      { slug: 'verificacion-vehicular', nota: 'Si tu estado la exige, mantenla vigente según tu engomado.' },
      { slug: 'licencia-de-conducir', nota: 'Y, por supuesto, tu licencia vigente para conducir.' },
    ],
    consejo: 'Antes de pagar el auto, revisa que no tenga adeudos de tenencia, multas ni verificación pendiente: esos se heredan al nuevo dueño.',
  },
  {
    slug: 'documentos-basicos',
    titulo: 'Documentos básicos que todo adulto debe tener',
    descripcion:
      'Los documentos esenciales que todo adulto en México debería tener en regla: acta de nacimiento, CURP, INE, RFC y NSS.',
    resumen:
      'Si tienes estos cinco documentos vigentes y a la mano, resuelves la mayoría de los trámites del día a día.',
    icono: 'documentos',
    pasos: [
      { slug: 'acta-de-nacimiento', nota: 'El documento de origen; de él se derivan casi todos los demás.' },
      { slug: 'curp', nota: 'Tu clave única; te la piden en prácticamente cualquier trámite.' },
      { slug: 'ine', nota: 'Tu identificación oficial más aceptada y, además, para votar.' },
      { slug: 'rfc', nota: 'Tu clave fiscal, necesaria para trabajar, facturar o abrir cuentas.' },
      { slug: 'nss', nota: 'Tu número de seguridad social ante el IMSS.' },
    ],
    consejo: 'Guárdalos también en digital (PDF): varios se descargan en línea y así los tienes siempre disponibles.',
  },
  {
    slug: 'tramites-estudiantes',
    titulo: 'Trámites para estudiantes',
    descripcion:
      'Trámites útiles para estudiantes en México: CURP, acta de nacimiento, becas Benito Juárez y la cédula profesional al titularte.',
    resumen:
      'Del registro escolar a la titulación, estos son los trámites que te acompañan como estudiante.',
    icono: 'estudios',
    pasos: [
      { slug: 'curp', nota: 'Te la piden para inscribirte y para casi cualquier trámite escolar.' },
      { slug: 'acta-de-nacimiento', nota: 'Requisito común de inscripción y para solicitar becas.' },
      { slug: 'becas-benito-juarez', nota: 'Apoyos económicos para estudiantes de escuela pública, por nivel.' },
      { slug: 'cedula-profesional', nota: 'Al concluir tu carrera, tramítala para ejercer tu profesión.' },
    ],
    consejo: 'Si estudias en escuela pública, revisa si te toca la beca de tu nivel: el registro abre por periodos.',
  },
  {
    slug: 'adultos-mayores',
    titulo: 'Trámites y apoyos para adultos mayores',
    descripcion:
      'Apoyos y trámites para adultos mayores en México: Pensión del Bienestar, Pensión Mujeres Bienestar y servicios del IMSS.',
    resumen:
      'Estos son los principales apoyos y trámites pensados para las personas adultas mayores y cómo acceder a ellos.',
    icono: 'mayores',
    pasos: [
      { slug: 'pension-bienestar', nota: 'El apoyo universal para personas de 65 años o más.' },
      { slug: 'mujeres-con-bienestar', nota: 'Para mujeres de 60 a 64 años, como puente a la pensión universal.' },
      { slug: 'vigencia-de-derechos-imss', nota: 'Comprueba tu derecho a atención médica en el IMSS.' },
      { slug: 'pension-imss', nota: 'Si cotizaste al IMSS, revisa tu régimen y semanas para tu pensión.' },
    ],
    consejo: 'Ten a la mano tu CURP, acta e identificación vigentes: son la base de todos estos registros. Pregunta también por la credencial del INAPAM.',
  },
];

export function getGuia(slug: string): Guia | undefined {
  return GUIAS.find((g) => g.slug === slug);
}
