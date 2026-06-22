// Plugin remark mínimo (sin dependencias) que convierte blockquotes con
// sintaxis estilo GitHub en recuadros de aviso (callouts):
//
//   > [!IMPORTANTE]
//   > La CURP es gratis en el portal oficial.
//
// Se transforma en <aside class="callout callout-importante"> con su título.
// Tipos soportados (ES e inglés): TIP/CONSEJO, NOTE/NOTA, IMPORTANT/IMPORTANTE,
// WARNING/AVISO, DATO.

const TIPOS = {
  TIP: { clase: 'tip', titulo: 'Consejo' },
  CONSEJO: { clase: 'tip', titulo: 'Consejo' },
  NOTE: { clase: 'nota', titulo: 'Nota' },
  NOTA: { clase: 'nota', titulo: 'Nota' },
  IMPORTANT: { clase: 'importante', titulo: 'Importante' },
  IMPORTANTE: { clase: 'importante', titulo: 'Importante' },
  WARNING: { clase: 'aviso', titulo: 'Aviso' },
  AVISO: { clase: 'aviso', titulo: 'Aviso' },
  DATO: { clase: 'dato', titulo: 'Dato clave' },
};

export default function remarkCallouts() {
  return (tree) => walk(tree);
}

function walk(node) {
  if (!node || !Array.isArray(node.children)) return;
  for (const child of node.children) {
    if (child.type === 'blockquote') transform(child);
    walk(child);
  }
}

function transform(bq) {
  const first = bq.children && bq.children[0];
  if (!first || first.type !== 'paragraph') return;
  const firstText = first.children && first.children[0];
  if (!firstText || firstText.type !== 'text') return;

  const match = firstText.value.match(/^\[!(\w+)\]\s*([\s\S]*)$/);
  if (!match) return;

  const def = TIPOS[match[1].toUpperCase()];
  if (!def) return;

  // Quita el marcador [!TIPO] del primer nodo de texto.
  firstText.value = match[2].replace(/^\r?\n/, '');

  // Limpia nodos vacíos o saltos de línea iniciales que queden sueltos.
  while (
    first.children.length &&
    ((first.children[0].type === 'text' && first.children[0].value === '') ||
      first.children[0].type === 'break')
  ) {
    first.children.shift();
  }

  // Renderiza el blockquote como <aside class="callout callout-...">.
  bq.data = bq.data || {};
  bq.data.hName = 'aside';
  bq.data.hProperties = {
    className: ['callout', `callout-${def.clase}`],
    role: 'note',
  };

  // Inserta el título del recuadro al inicio.
  bq.children.unshift({
    type: 'paragraph',
    data: { hProperties: { className: ['callout-title'] } },
    children: [{ type: 'text', value: def.titulo }],
  });
}
