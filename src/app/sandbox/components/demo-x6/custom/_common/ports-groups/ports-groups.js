import { Markup } from '@antv/x6';

// Port groups (examples with different shapes)
const PORTS_GROUPS = {

  // Port groups with built in shapes
  SHAPES_BUILT_IN: {

    // default - circle
    circleDefault: {
      position: { name: 'bottom' },
      label: { position: 'bottom' },
      attrs: {
        circle: {
          r: 4,
          magnet: true,
          fill: '#fff',
        },
      },
    },

    // custom - rectangle
    rectangleCustom: {
      position: { name: 'bottom' },
      label: { position: 'bottom' },
      markup: {
        tagName: 'rect',
        // selector: 'rect',
        attrs: {
          width: 10,
          height: 10,
          fill: '#fff',
          stroke: '#000',
          magnet: true,
          x: -5,
          y: -5,
        },
      },
    }
  },

  // Port groups with custom shapes
  SHAPES_FOREIGN: {
    nodePort: {
      position: { name: 'bottom' },
      label: { position: 'bottom' },
      markup: Markup.getForeignObjectMarkup(),
      attrs: {
        fo: {
          width: 12,
          height: 12,
          x: -5,
          y: -5,
          magnet: 'true'
        },
      },
      zIndex: 100
    }
  }
};

export default PORTS_GROUPS;