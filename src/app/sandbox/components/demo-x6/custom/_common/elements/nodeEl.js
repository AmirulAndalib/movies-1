/* eslint-disable */

const nodeDefaults = {
  width: 75,
  height: 75,
  attrs: {
    body: {
      stroke: '#769AF7',
    },
    label: {
      fill: '#000',
    },
  },
};

const nodeEl = {
  rect: {
    shape: 'rect',
    ...nodeDefaults
  },
  circle: {
    shape: 'circle',
    ...nodeDefaults
  }
};

export {
  nodeEl
};