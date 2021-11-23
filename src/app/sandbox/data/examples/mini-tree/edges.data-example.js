/* eslint-disable */

import {
  MANHATTAN_BT,
  NODE_CP_ID,
  NODE_TEST_CHILDREN_ID,
  NODE_TEST_CHILDREN_PORT,
  PORTS_CP,
} from './constants.data-example';

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