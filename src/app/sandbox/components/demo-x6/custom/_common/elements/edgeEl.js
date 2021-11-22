const switchTargetMarker = (val) => {
  switch (val) {
    case 'arrow':
      return {
        name: 'block',
        size: 6,
      };

    case 'path':
      return {
        name: 'path',
        d: 'H 3'
      };

    case 'rect':
      return {
        tagName: 'rect',
        width: 10,
        height: 10,
        fill: '#73d13d',
        stroke: '#237804',
        offset: 50
      };

    default:
      return {
        name: ''
      };
  }
};

const getEdgeElement = (options = {}) => {
  const {
    useRondedConnectors = false,
    targetMarkerType = '',
  } = options;

  return {

    // Коннекторы
    connector: (useRondedConnectors
      ? {
        name: 'rounded',
        args: {
          radius: 5,
        },
      }
      : 'normal'),

    // Маркеры
    attrs: {
      line: {
        stroke: '#769AF7',
        strokeWidth: 1,
        targetMarker: switchTargetMarker(targetMarkerType),
      },
    }
  };
};

export default getEdgeElement;