/* eslint-disable */

import {
  MANHATTAN_BT,
  NODE_CP_ID,
  NODE_TEST_CHILDREN_ID,
  NODE_TEST_CHILDREN_PORT,
  PORTS_CP,
} from './constants.data-example';

import {
  buildEdge,
} from '@/sandbox/helpers/tree/edges';

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
      routerType: (useEmptyRouterType
        ? ''
        : MANHATTAN_BT)
    }
  ].map(i => buildEdge(i));
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