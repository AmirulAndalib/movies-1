/* eslint-disable */

import {
  PORTS_GROUPS
} from '@/sandbox/helpers/tree/ports';

import {
  NODE_SHAPE_CIRCLE,
  NODE_SHAPE_RECTANGLE,
  CLS_CIRCLE,
  CLS_SQUARE,
  NODE_CP_ID,
  NODE_CP_PORT_1,
  NODE_CP_PORT_2,
  NODE_TEST_CHILDREN_ID,
} from './constants.data-example';

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

export default getNodes;