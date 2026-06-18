// Las 32 entidades federativas de México.
// `slug` define la URL: /por-estado/<slug>/

export interface Estado {
  slug: string;
  nombre: string;
  capital: string;
}

export const ESTADOS: Estado[] = [
  { slug: 'aguascalientes', nombre: 'Aguascalientes', capital: 'Aguascalientes' },
  { slug: 'baja-california', nombre: 'Baja California', capital: 'Mexicali' },
  { slug: 'baja-california-sur', nombre: 'Baja California Sur', capital: 'La Paz' },
  { slug: 'campeche', nombre: 'Campeche', capital: 'San Francisco de Campeche' },
  { slug: 'chiapas', nombre: 'Chiapas', capital: 'Tuxtla Gutiérrez' },
  { slug: 'chihuahua', nombre: 'Chihuahua', capital: 'Chihuahua' },
  { slug: 'cdmx', nombre: 'Ciudad de México', capital: 'Ciudad de México' },
  { slug: 'coahuila', nombre: 'Coahuila', capital: 'Saltillo' },
  { slug: 'colima', nombre: 'Colima', capital: 'Colima' },
  { slug: 'durango', nombre: 'Durango', capital: 'Victoria de Durango' },
  { slug: 'estado-de-mexico', nombre: 'Estado de México', capital: 'Toluca' },
  { slug: 'guanajuato', nombre: 'Guanajuato', capital: 'Guanajuato' },
  { slug: 'guerrero', nombre: 'Guerrero', capital: 'Chilpancingo' },
  { slug: 'hidalgo', nombre: 'Hidalgo', capital: 'Pachuca' },
  { slug: 'jalisco', nombre: 'Jalisco', capital: 'Guadalajara' },
  { slug: 'michoacan', nombre: 'Michoacán', capital: 'Morelia' },
  { slug: 'morelos', nombre: 'Morelos', capital: 'Cuernavaca' },
  { slug: 'nayarit', nombre: 'Nayarit', capital: 'Tepic' },
  { slug: 'nuevo-leon', nombre: 'Nuevo León', capital: 'Monterrey' },
  { slug: 'oaxaca', nombre: 'Oaxaca', capital: 'Oaxaca de Juárez' },
  { slug: 'puebla', nombre: 'Puebla', capital: 'Puebla de Zaragoza' },
  { slug: 'queretaro', nombre: 'Querétaro', capital: 'Santiago de Querétaro' },
  { slug: 'quintana-roo', nombre: 'Quintana Roo', capital: 'Chetumal' },
  { slug: 'san-luis-potosi', nombre: 'San Luis Potosí', capital: 'San Luis Potosí' },
  { slug: 'sinaloa', nombre: 'Sinaloa', capital: 'Culiacán' },
  { slug: 'sonora', nombre: 'Sonora', capital: 'Hermosillo' },
  { slug: 'tabasco', nombre: 'Tabasco', capital: 'Villahermosa' },
  { slug: 'tamaulipas', nombre: 'Tamaulipas', capital: 'Ciudad Victoria' },
  { slug: 'tlaxcala', nombre: 'Tlaxcala', capital: 'Tlaxcala de Xicohténcatl' },
  { slug: 'veracruz', nombre: 'Veracruz', capital: 'Xalapa' },
  { slug: 'yucatan', nombre: 'Yucatán', capital: 'Mérida' },
  { slug: 'zacatecas', nombre: 'Zacatecas', capital: 'Zacatecas' },
];

export function getEstado(slug: string): Estado | undefined {
  return ESTADOS.find((e) => e.slug === slug);
}
