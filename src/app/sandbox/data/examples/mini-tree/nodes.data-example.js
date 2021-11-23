import {
  PORTS_GROUPS
} from '@/sandbox/helpers/tree/ports';

import {
  NODE_SHAPE_CIRCLE,
  NODE_SHAPE_RECTANGLE,
  CLS_CIRCLE,
  CLS_SQUARE,
  NODE_TEST_CHILDREN_ID,
} from './constants.data-example';

import {
  buildCentralNode,
  buildParentNode as configParentBuilder,
  buildChildNode as configChildBuilder,
} from '@/sandbox/helpers/tree/nodes';

// Модель, узлы
const getNodes = (options = {}) => {

  // Опции: общие опции для узлов
  const { commonOptions = {} } = options;
  const {
    showMotherPorts = false,
    showPortLabels = false,
    useOnlyReactShape = false,
    useOnlyReactCircle = false,
  } = commonOptions;

  // Опции: конфигурация общего потомка с матерью ребенка (для отладки связей)
  const { lastChildOptions = {} } = options;
  const {
    childrenGroup = 1,
    useGroupStyledPort = false,
  } = lastChildOptions;

  // Вспомогательные функции для построения объектов узлов
  const nodeBuilders = {

    // Билдер узлов: 1-й уровень (круг)
    L1C: configParentBuilder({
      layer: 1,
      customShape: useOnlyReactShape
        ? null
        : NODE_SHAPE_CIRCLE
    }),

    // Билдер узлов: 1-й уровень (квадрат)
    L1R: configParentBuilder({
      layer: 1,
      customShape: useOnlyReactShape
        ? null
        : NODE_SHAPE_RECTANGLE
    }),

    // Билдер узлов: 2-й уровень
    L2: configParentBuilder({
      layer: 2
    }),

    // Билдер узлов: 4-й уровень
    L4: configChildBuilder({
      showPortLabels
    }),
  };

  return [

    /*
    Уровень 1: Дедушка и бабушка.
    Пример: узлы со стандартной формой (круг)
    */
    nodeBuilders.L1C({
      id: 'id1',
      label: 'Дедушка'
    }),
    nodeBuilders.L1C({
      id: 'id2',
      label: 'Бабушка'
    }),

    /*
    Уровень 1: Дедушка и бабушка.
    Пример: узлы со стандартной формой (квадрат)
    */
    nodeBuilders.L1R({
      id: 'id3',
      label: 'Дедушка'
    }),
    nodeBuilders.L1R({
      id: 'id4',
      label: 'Бабушка'
    }),

    /*
    Уровень 2: Отец и мать.
    Пример: узлы с react-формой
    */
    nodeBuilders.L2({
      id: 'id5',
      label: 'Отец'
    }),
    nodeBuilders.L2({
      id: 'id6',
      label: 'Мать'
    }),

    // Уровень 3: Жена
    {
      id: 'id7',
      label: 'Жена',
      layer: 3
    },

    // Уровень 3: Центральная персона
    buildCentralNode({
      label: 'Это я',
      showPortLabels,
      useOnlyReactCircle
    }),

    // Уровень 3: Мать ребенка
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

    // Уровень 4: Потомки (от жены)
    nodeBuilders.L4({
      id: 'id10',
      label: 'Сын',
    }),

    nodeBuilders.L4({
      id: 'id11',
      label: 'Сын',
    }),

    nodeBuilders.L4({
      id: 'id12',
      label: 'Сын',
    }),

    nodeBuilders.L4({
      id: 'id13',
      label: 'Сын',
    }),

    // Уровень 4: Потомок для отладки связей (от матери ребенка)
    nodeBuilders.L4({
      id: NODE_TEST_CHILDREN_ID,
      label: 'Сын',
      cls: (useOnlyReactCircle
        ? CLS_CIRCLE
        : CLS_SQUARE),
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