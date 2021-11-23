import getEdgeMarkup from './markup.edges';
import switchRouter from './routing.edges';

// Обрабатывает список связей
function buildEdgesModel(options = {}) {

  const {
    data = [],
    edgesMarkupOptions = {}
  } = options;

  return data.map(
    (item) => {
      const {
        source,
        target,
        label = null,
        routerType
      } = item;

      const edge = {
        source,
        target,
        label,
        router: switchRouter(routerType),
        ...getEdgeMarkup(edgesMarkupOptions)
      };

      return edge;
    }
  );
}

export default buildEdgesModel;