/* eslint-disable no-console */

const manhattanDefault = {
  name: 'manhattan',
  args: {
    step: 15,
    startDirections: ['bottom', 'right'],
    endDirections: ['top', 'left'],
  },
};
const manhattanBT = {
  name: 'manhattan',
  args: {
    step: 10,
    startDirections: ['bottom'],
    endDirections: ['top'],
  },
};

const metroBT = {
  name: 'metro',
  args: {
    step: 10,
    startDirections: ['bottom'],
    endDirections: ['top']
  },
};

/* const manhattanRouterRL = {
  name: 'manhattan',
  args: {
    step: 5,
    startDirections: ['left'],
    endDirections: ['right'],
  },
}; */

/*
const oneSideRouter = {
  name: 'oneSide',
  args: {
    side: 'bottom'
  },
};

const erRouter = {
  name: 'metro'
};
*/

function switchRouter(val) {
  switch (val) {
    case 'manhattan-bt':
      return manhattanBT;

    case 'metro-bt':
      return metroBT;

    default:
      return manhattanDefault;
  }
}

export {
  switchRouter
};