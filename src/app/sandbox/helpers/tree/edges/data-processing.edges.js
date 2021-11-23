import {
  MANHATTAN_BT,
} from '@/sandbox/data/examples/mini-tree/constants.data-example';

const buildEdge = ({
  source,
  target,
  labelPos,
  routerType = MANHATTAN_BT
}) => ({
  source,
  target,
  routerType,
  labelPos: labelPos || 0.75,
});

export {
  buildEdge,
};