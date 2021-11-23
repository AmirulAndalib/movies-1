import {
  PORTS_GROUPS
} from '@/sandbox/helpers/tree/ports';

import {
  CLS_CIRCLE,
  CLS_SQUARE,
  NODE_CP_ID,
  NODE_CP_PORT_1,
  NODE_CP_PORT_2,
} from '@/sandbox/data/examples/mini-tree/constants.data-example';

// Строит объект узла для центральной персоны
const buildCentralNode = ({
  label = '',
  showPortLabels = false,
  useOnlyReactCircle = false
}) => ({
  id: NODE_CP_ID,
  label,
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
});

// Строит объект узла для родителя
const buildParentNode = ({
  layer,
  customShape
}) => (
  ({
    id,
    label = ''
  }) => ({
    id,
    label,
    layer,
    customShape
  })
);

// Строит объект узла для потомка
const buildChildNode = ({
  showPortLabels = false
}) => (
  ({
    id,
    label = '',
    layer = 4,
    cls = CLS_CIRCLE,
    customParams = {
      childrenGroup: 1
    },
    portsGroups
  }) => {

    const childrenPorts = portsGroups || PORTS_GROUPS.SHAPES_FOREIGN.getDefaultGroup({
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
    };
  }
);

export {
  buildCentralNode,
  buildParentNode,
  buildChildNode,
};