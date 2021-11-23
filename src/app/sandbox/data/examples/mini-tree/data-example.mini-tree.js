/* eslint-disable */

import PORTS_GROUPS from '@/sandbox/helpers/tree/ports-groups/ports-groups';

// custom nodes shapes
const NODE_SHAPE_CIRCLE = 'circle';
const NODE_SHAPE_RECTANGLE = 'rectangle';

// custom CSS classes
const CLS_CIRCLE = 'node-circle';
const CLS_SQUARE = 'node-square';

// custom router types
const MANHATTAN_BT = 'manhattan-bt';

const NODE_CP_ID = 'id8';
const NODE_CP_PORT_1 = `${NODE_CP_ID}-p1`;
const NODE_CP_PORT_2 = `${NODE_CP_ID}-p2`;

const NODE_TEST_CHILDREN_ID = 'id14'
const NODE_TEST_CHILDREN_PORT = `${NODE_TEST_CHILDREN_ID}-p1`;

// central person
const getNodeCP = ({
  showPortLabels = false,
  useOnlyReactCircle = false
}) => {
  return {
    id: NODE_CP_ID,
    label: 'Это я',
    layer: 3,
    cls: (useOnlyReactCircle
      ? CLS_CIRCLE
      : CLS_SQUARE),
    // portMarkup: [Markup.getForeignObjectMarkup()],
    ports: {
      groups: {
        group_custom: PORTS_GROUPS.SHAPES_FOREIGN.getDefaultGroup({
          portPosition: 'bottom',
          labelPosition: 'bottom'
        })
      },
      items: [
        {
          id: NODE_CP_PORT_1,
          group: 'group_custom',
          attrs: {
            text: {
              text: showPortLabels
                ? NODE_CP_PORT_1
                : ''
            },
          },
        },
        {
          id: NODE_CP_PORT_2,
          group: 'group_custom',
          attrs: {
            text: {
              text: showPortLabels
                ? NODE_CP_PORT_2
                : ''
            },
          },
        }
      ]
    }
  };
}

// central person's  ports
const PORTS_CP = {
  left: {
    cell: NODE_CP_ID,
    port: NODE_CP_PORT_1
  },
  right: {
    cell: NODE_CP_ID,
    port: NODE_CP_PORT_2
  }
};

const createChildNode = ({
  showPortLabels = false,
  id,
  label = 'Сын',
  layer = 4,
  cls = CLS_CIRCLE,
  customParams = {
    childrenGroup: 1
  },
  portsGroups
}) => {

  const childrenPorts = portsGroups
    ? portsGroups
    : PORTS_GROUPS.SHAPES_FOREIGN.getDefaultGroup({
      portPosition: 'top',
      labelPosition: 'top',
    }, customParams);

  return {
    id,
    label,
    layer,
    cls,
    customParams,
    ports: {
      groups: {
        childrenPorts
      },
      items: [
        {
          id: `${id}-p1`,
          group: 'childrenPorts',
          attrs: {
            text: {
              text: showPortLabels
                ? `${id}-p1`
                : ''
            },
          },
        }
      ]
    }
  }
};

const createEdge = ({
  source,
  target,
  labelPos,
  routerType = MANHATTAN_BT
}) => ({
  source,
  target,
  routerType,
  labelPos: labelPos || 0.75,
});

// Модель, узлы
const getNodes = (options = {}) => {

  const { commonOptions = {} } = options;
  const {
    showMotherPorts = false,
    showPortLabels = false,
    useOnlyReactShape = false,
    useOnlyReactCircle = false,
  } = commonOptions;

  // опции потомка для отладки связей
  const { lastChildOptions = {} } = options;
  const {
    childrenGroup = 1,
    useGroupStyledPort = false,
  } = lastChildOptions;

  return [
    // узлы со стандартной формой (circle)
    {
      id: 'id1',
      label: 'Дедушка',
      layer: 1,
      customShape: useOnlyReactShape
        ? null
        : NODE_SHAPE_CIRCLE,
    },
    {
      id: 'id2',
      label: 'Бабушка',
      layer: 1,
      customShape: useOnlyReactShape
        ? null
        : NODE_SHAPE_CIRCLE,
    },

    // узлы со стандартной формой (rectangle)
    {
      id: 'id3',
      label: 'Дедушка',
      layer: 1,
      customShape: useOnlyReactShape
        ? null
        : NODE_SHAPE_RECTANGLE,
    },
    {
      id: 'id4',
      label: 'Бабушка',
      layer: 1,
      customShape: useOnlyReactShape
        ? null
        : NODE_SHAPE_RECTANGLE,
    },

    // узлы с react-формой
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

    // Жена
    {
      id: 'id7',
      label: 'Жена',
      layer: 3
    },

    // Центральная персона
    getNodeCP({ showPortLabels, useOnlyReactCircle }),

    // Мать ребенка
    {
      id: 'id9',
      label: 'Мать \n ребенка',
      layer: 3,
      cls: (useOnlyReactCircle
        ? CLS_CIRCLE
        : CLS_SQUARE),
      ports: showMotherPorts
        ? {
          groups: {
            motherPorts: PORTS_GROUPS.SHAPES_BUILT_IN.getRectangleCustomGroup({
              portPosition: 'bottom',
              labelPosition: 'bottom'
            })
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
        : null
    },

    // Потомки
    createChildNode({ id: 'id10', showPortLabels }),
    createChildNode({ id: 'id11', showPortLabels }),
    createChildNode({ id: 'id12', showPortLabels }),
    createChildNode({ id: 'id13', showPortLabels }),

    // Потомок для отладки связей
    createChildNode({
      id: NODE_TEST_CHILDREN_ID,
      cls: (useOnlyReactCircle
        ? CLS_CIRCLE
        : CLS_SQUARE),
      showPortLabels,
      customParams: {
        childrenGroup
      },
      portsGroups: PORTS_GROUPS.SHAPES_FOREIGN.getDefaultGroup(
        useGroupStyledPort
          ? {
            portPosition: 'top',
            labelPosition: 'top',
            width: 1,
            height: 15,
            x: '0',
            y: '-15'
          }
          : {
            portPosition: 'top',
            labelPosition: 'top'
          }
      )
    })
  ];
};


// Модель, базовые связи
const getEdgesBasic = (options = {}) => {

  // опции потомка для отладки связей
  const { lastChildOptions = {} } = options;
  const {
    useTargetPort = false,
    useEmptyRouterType = false
  } = lastChildOptions;

  return [
    // дедушка и бабушка -> отец ЦП
    createEdge({
      source: 'id1',
      target: 'id5'
    }),
    createEdge({
      source: 'id2',
      target: 'id5'
    }),

    // дедушка и бабушка -> мать ЦП
    createEdge({
      source: 'id3',
      target: 'id6'
    }),
    createEdge({
      source: 'id4',
      target: 'id6'
    }),

    // отец ЦП и мать ЦП -> ЦП
    createEdge({
      source: 'id5',
      target: NODE_CP_ID
    }),
    createEdge({
      source: 'id6',
      target: NODE_CP_ID
    }),

    // ЦП -> потомки
    createEdge({
      source: PORTS_CP.left,
      target: 'id10'
    }),
    createEdge({
      source: PORTS_CP.left,
      target: 'id11'
    }),
    createEdge({
      source: PORTS_CP.left,
      target: 'id12'
    }),
    createEdge({
      source: PORTS_CP.left,
      target: 'id13'
    }),

    // потомок для отладки связей
    createEdge({
      source: PORTS_CP.right,
      target: (useTargetPort
        ? {
          cell: NODE_TEST_CHILDREN_ID,
          port: NODE_TEST_CHILDREN_PORT
        }
        : NODE_TEST_CHILDREN_ID),
      routerType: (useEmptyRouterType
        ? ''
        : MANHATTAN_BT)
    }),
  ];
};

// model, edges (additional)
const EDGES_ADDITIONAL = [
  {
    source: NODE_CP_ID,
    target: 'id7',
  },
  {
    source: NODE_CP_ID,
    target: 'id9',
  },
  /*   {
      source: {
        cell: 'id9',
        port: 'portMother'
      },
      target: {
        cell: NODE_TEST_CHILDREN_ID,
        port: NODE_TEST_CHILDREN_PORT
      },
    } */
];

export {
  getNodes,
  getEdgesBasic,
  EDGES_ADDITIONAL
};