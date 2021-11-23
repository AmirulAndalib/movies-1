import getEdgeMarkup from './markup.edges';
import switchRouter from './routing.edges';

import { isString } from '@/utils/common';

// Возвращает текст точки
const getPoint = (val) => (
  isString(val)
    ? val
    : `${val.cell}/${val.port}`
);

// Возвращает опции метки
const getLabelOptions = ({ text, labelPos }) => ({
  position: {
    distance: labelPos || 0.15
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

// Обрабатывает список связей
function processEdges(options = {}) {

  // Опции для списка связей
  const { edgesListOptions = {} } = options;
  const {
    data,
    showLabels = false
  } = edgesListOptions;

  // Опции для элементов связей
  const { edgeElementOptions = {} } = options;

  return data.map(
    (item) => {
      const { source, target, routerType } = item;

      const edge = {
        source,
        target,
        router: switchRouter(routerType),
        ...getEdgeMarkup(edgeElementOptions)
      };

      if (showLabels) {
        edge.label = getLabelOptions({
          text: `${getPoint(source)}->${getPoint(target)}`,
          labelPos: item.labelPos
        });
      }

      return edge;
    }
  );
}

export default processEdges;