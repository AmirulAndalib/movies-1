const NODE_CP = {
  id: 'id8',
  label: 'Это я',
  layer: 3,
  customShape: 'rect',
  ports: {
    groups: {
      childrenPortsGroup: {
        position: 'bottom',
        attrs: {
          circle: {
            r: 4,
            magnet: true,
            fill: '#fff',
          },
        },
      }
    },
    items: [
      {
        id: 'port1',
        group: 'childrenPortsGroup'
      },
      {
        id: 'port2',
        group: 'childrenPortsGroup'
      }
    ]
  }
};

const NODES = [
  {
    id: 'id1',
    label: 'Дедушка',
    layer: 1
  },
  {
    id: 'id2',
    label: 'Бабушка',
    layer: 1
  },
  {
    id: 'id3',
    label: 'Дедушка',
    layer: 1
  },
  {
    id: 'id4',
    label: 'Бабушка',
    layer: 1
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
    layer: 3
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
    customShape: 'rect',
  },
];

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

const EDGES_BASIC = [
  {
    source: 'id1',
    target: 'id5'
  },
  {
    source: 'id2',
    target: 'id5'
  },
  {
    source: 'id3',
    target: 'id6'
  },
  {
    source: 'id4',
    target: 'id6'
  },
  {
    source: 'id5',
    target: NODE_CP.id
  },
  {
    source: 'id6',
    target: NODE_CP.id
  },
  {
    source: PORTS_CP.left,
    target: 'id10',
    routerType: 'manhattan-bt'
  },
  {
    source: PORTS_CP.left,
    target: 'id11',
    routerType: 'manhattan-bt'
  },
  {
    source: PORTS_CP.left,
    target: 'id12',
    routerType: 'manhattan-bt'
  },
  {
    source: PORTS_CP.left,
    target: 'id13',
    routerType: 'manhattan-bt'
  },
  {
    source: PORTS_CP.right,
    target: 'id14',
  },
];

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
    source: 'id9',
    target: 'id14',
  }
];

export {
  NODE_CP,
  NODES,
  EDGES_BASIC,
  EDGES_ADDITIONAL
};