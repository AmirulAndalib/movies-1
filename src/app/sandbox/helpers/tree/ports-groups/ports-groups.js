/* eslint-disable */
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
    getRectangleCustomGroup: (options = {}) => {
      const {
        portPosition = 'bottom',
        labelPosition = 'bottom'
      } = options;

      const fillColor = '#BA55D3';

      return {
        position: {
          name: portPosition
        },
        label: {
          position: labelPosition,
          markup: [
            {
              tagName: 'text',
              className: 'port-shapes--built-in__rectangle-label-el',
              attrs: {
                fill: fillColor,
                fontSize: 10
              }
            },
          ],
        },
        markup: {
          tagName: 'rect',
          attrs: {
            width: 10,
            height: 10,
            fill: '#fff',
            stroke: fillColor,
            strokeWidth: 1,
            magnet: true,
            x: -5,
            y: -5,
          },
        },
      }
    }
  },

  // Port groups with custom shapes
  SHAPES_FOREIGN: {
    getDefaultGroup: function (options = { }) {
      const {
        portPosition = 'bottom',
        labelPosition = 'bottom',
        x = '-5',
        y = '-5',
        width = 10,
        height = 10,
      } = options;

      const fillColor = '#FF6347';

      return {
        position: {
          name: portPosition
        },
        label: {
          position: labelPosition,
          markup: {
            tagName: 'text',
            attrs: {
              fill: fillColor,
              fontSize: 10
            }
          },
        },
        markup: [Markup.getForeignObjectMarkup()],
        attrs: {
          fo: {
            width,
            height,
            x,
            y,
            magnet: 'true'
          },
        },
        zIndex: 100
      }
    }
  }
};

export default PORTS_GROUPS;