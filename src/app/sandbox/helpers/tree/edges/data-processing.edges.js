import {
  MANHATTAN_BT,
} from '@/sandbox/data/examples/mini-tree/constants.data-example';

import { isString } from '@/utils/common';

// Возвращает текст точки
const getPointText = (val) => (
  isString(val)
    ? val
    : `${val.cell}/${val.port}`
);

// Возвращает опции метки
const getLabelParams = ({ text, labelPos }) => ({
  position: {
    distance: labelPos
  },
  attrs: {
    label: {
      text,
      fill: 'gray',
      fontSize: 10
    },
    body: {
      stroke: 'lightgray',
    }
  },
});

// Строит объект связи
const buildEdge = (options = {}) => {
  const { showLabels } = options;

  return (
    ({
      source,
      target,
      routerType = MANHATTAN_BT,
      labelPos = 0.75,
    }) => {
      const edge = {
        source,
        target,
        routerType
      };

      if (showLabels) {
        edge.label = getLabelParams({
          text: `${getPointText(source)}->${getPointText(target)}`,
          labelPos
        });
      }

      return edge;
    }
  );
};

export {
  buildEdge,
};