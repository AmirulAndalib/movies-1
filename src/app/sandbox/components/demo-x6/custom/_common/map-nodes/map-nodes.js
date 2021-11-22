import {
  NODE_SHAPES,
} from '@/sandbox/components/demo-x6/custom/_common/elements';

// Обрабатывает список epkjd
function processNodes({
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

export {
  processNodes
};