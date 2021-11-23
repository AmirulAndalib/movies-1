import NODE_SHAPES from './markup.nodes';

// Обрабатывает список узлов
function buildNodesModel({
  data
}) {
  return data.map(
    (item) => {
      const { id, label, layer, customShape, ports, cls = 'node-circle', customParams } = item;

      const nodeEl = NODE_SHAPES[customShape || 'react'];

      const labelValue = customShape
        ? `${id} \n (${label})`
        : label;

      return {
        id,
        label: labelValue,
        layer,
        ports,
        cls,
        customParams,
        ...nodeEl
      };
    }
  );
}

export default buildNodesModel;