import PORTS_GROUPS from '../_common/ports-groups/ports-groups';

// custom nodes shapes
const NODE_SHAPE_CIRCLE = 'circle';
const NODE_SHAPE_RECTANGLE = 'rectangle';

// custom CSS classes
const CLS_SQUARE = 'node-square';

// custom router types
const MANHATTAN_BT = 'manhattan-bt';

// central person
const NODE_CP = {
  id: 'id8',
  label: 'Это я',
  layer: 3,
  cls: CLS_SQUARE,
  // portMarkup: [Markup.getForeignObjectMarkup()],
  ports: {
    groups: {
      group_built_in: PORTS_GROUPS.SHAPES_BUILT_IN.rectangleCustom,
      group_custom: PORTS_GROUPS.SHAPES_FOREIGN.nodePort
    },
    items: [
      {
        id: 'port1',
        // group: 'group_built_in',
        group: 'group_custom',
        attrs: {
          text: { text: 'port1' },
        },
      },
      {
        id: 'port2',
        // group: 'group_built_in',
        group: 'group_custom',
        attrs: {
          text: { text: 'port2' },
        },
      }
    ]
  }
};

// central person's  ports
const PORTS_CP = {
  left: {
    cell: NODE_CP.id,
    port: 'port1'
  },
  right: {
    cell: NODE_CP.id,
    port: 'port2'
  }
};

// model, nodes
const NODES = [
  {
    id: 'id1',
    label: 'Дедушка',
    layer: 1,
    customShape: NODE_SHAPE_CIRCLE,
  },
  {
    id: 'id2',
    label: 'Бабушка',
    layer: 1,
    customShape: NODE_SHAPE_CIRCLE,
  },
  {
    id: 'id3',
    label: 'Дедушка',
    layer: 1,
    customShape: NODE_SHAPE_RECTANGLE,
  },
  {
    id: 'id4',
    label: 'Бабушка',
    layer: 1,
    customShape: NODE_SHAPE_RECTANGLE,
  },
  {
    id: 'id5',
    label: 'Отец',
    layer: 2
  },
  {
    id: 'id6',
    label: 'Мать',
    layer: 2
  },
  {
    id: 'id7',
    label: 'Жена',
    layer: 3
  },
  NODE_CP,
  {
    id: 'id9',
    label: 'Мать \n ребенка',
    layer: 3,
    cls: CLS_SQUARE,
    ports: {
      groups: {
        motherPorts: PORTS_GROUPS.SHAPES_BUILT_IN.rectangleCustom
      },
      items: [
        {
          id: 'portMother',
          group: 'motherPorts',
          attrs: {
            text: { text: 'portMother' },
          },
        }
      ]
    }
  },
  {
    id: 'id10',
    label: 'Сын',
    layer: 4
  },
  {
    id: 'id11',
    label: 'Сын',
    layer: 4
  },
  {
    id: 'id12',
    label: 'Сын',
    layer: 4
  },
  {
    id: 'id13',
    label: 'Сын',
    layer: 4
  },
  {
    id: 'id14',
    label: 'Сын',
    layer: 4,
    cls: CLS_SQUARE
  },
];

// model, edges (basic)
const EDGES_BASIC = [
  {
    source: 'id1',
    target: 'id5',
    routerType: MANHATTAN_BT,
  },
  {
    source: 'id2',
    target: 'id5',
    routerType: MANHATTAN_BT,
  },
  {
    source: 'id3',
    target: 'id6',
    routerType: MANHATTAN_BT,
  },
  {
    source: 'id4',
    target: 'id6',
    routerType: MANHATTAN_BT,
  },
  {
    source: 'id5',
    target: NODE_CP.id,
    routerType: MANHATTAN_BT,
  },
  {
    source: 'id6',
    target: NODE_CP.id,
    routerType: MANHATTAN_BT,
  },
  {
    source: PORTS_CP.left,
    target: 'id10',
    routerType: MANHATTAN_BT,
    labelPos: 0.9,
  },
  {
    source: PORTS_CP.left,
    target: 'id11',
    routerType: MANHATTAN_BT,
    labelPos: 0.9,
  },
  {
    source: PORTS_CP.left,
    target: 'id12',
    routerType: MANHATTAN_BT,
    labelPos: 0.9,
  },
  {
    source: PORTS_CP.left,
    target: 'id13',
    routerType: MANHATTAN_BT,
    labelPos: 0.9,
  },
  {
    source: PORTS_CP.right,
    target: 'id14',
    labelPos: 0.9,
    // routerType: MANHATTAN_BT,
  },
];

// model, edges (additional)
const EDGES_ADDITIONAL = [
  {
    source: NODE_CP.id,
    target: 'id7',
  },
  {
    source: NODE_CP.id,
    target: 'id9',
  },
  {
    source: {
      cell: 'id9',
      port: 'portMother'
    },
    target: 'id14',
  }
];

export {
  NODE_CP,
  NODES,
  EDGES_BASIC,
  EDGES_ADDITIONAL
};