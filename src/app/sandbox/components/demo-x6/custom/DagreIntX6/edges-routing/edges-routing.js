/* eslint-disable no-console */

const manhattanRouter = {
  name: 'manhattan',
  args: {
    step: 15,
    startDirections: ['bottom', 'right'],
    endDirections: ['top', 'left'],
  },
};
const manhattanRouterChildren = {
  name: 'manhattan',
  args: {
    step: 15,
    startDirections: ['bottom'],
    endDirections: ['top'],
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

function manhattanRouterSwitch(val) {
  switch (val) {
    case '1': return manhattanRouterChildren;
    // case '2': return manhattanRouterRL;
    default: return manhattanRouter;
  }
}

export {
  manhattanRouterSwitch
};