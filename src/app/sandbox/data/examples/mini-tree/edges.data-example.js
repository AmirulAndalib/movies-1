/* eslint-disable */

import {
  MANHATTAN_BT,
  NODE_CP_ID,
  NODE_TEST_CHILDREN_ID,
  NODE_TEST_CHILDREN_PORT,
  PORTS_CP,
} from './constants.data-example';

import {
  buildEdge as configEdgeBuilder,
} from '@/sandbox/helpers/tree/edges';

// Модель, базовые связи (фаза 1)
const getEdgesBasic = (options = {}) => {

  // Опции: общие опции для связей
  const { commonOptions = {} } = options;
  const {
    showLabels = false
  } = commonOptions;

  // Опции: конфигурация общего потомка с матерью ребенка (для отладки связей)
  const { lastChildOptions = {} } = options;
  const {
    useTargetPort = false,
    useDefaultRouter = false
  } = lastChildOptions;

  // Вспомогательная функция билдер для создания объектов связей
  const buildEdge = configEdgeBuilder({
    showLabels
  });

  return [
    // дедушка и бабушка -> отец ЦП
    { source: 'id1', target: 'id5' },
    { source: 'id2', target: 'id5' },

    // дедушка и бабушка -> мать ЦП
    { source: 'id3', target: 'id6' },
    { source: 'id4', target: 'id6' },

    // отец ЦП и мать ЦП -> ЦП
    { source: 'id5', target: NODE_CP_ID },
    { source: 'id6', target: NODE_CP_ID },

    // ЦП -> потомки
    { source: PORTS_CP.left, target: 'id10' },
    { source: PORTS_CP.left, target: 'id11' },
    { source: PORTS_CP.left, target: 'id12' },
    { source: PORTS_CP.left, target: 'id13' },

    // потомок для отладки связей
    {
      source: PORTS_CP.right,
      target: (useTargetPort
        ? {
          cell: NODE_TEST_CHILDREN_ID,
          port: NODE_TEST_CHILDREN_PORT
        }
        : NODE_TEST_CHILDREN_ID),
      routerType: (useDefaultRouter
        ? ''
        : MANHATTAN_BT)
    }
  ].map(i => buildEdge(i));
};

// Модель, доаолнительные связи (фаза 2)
const getEdgesAdditional = () => ([
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
]);

export {
  getEdgesBasic,
  getEdgesAdditional
};