// custom nodes shapes
export const NODE_SHAPE_CIRCLE = 'circle';
export const NODE_SHAPE_RECTANGLE = 'rectangle';

// custom CSS classes
export const CLS_CIRCLE = 'node-circle';
export const CLS_SQUARE = 'node-square';

// custom router types
export const MANHATTAN_BT = 'manhattan-bt';

export const NODE_CP_ID = 'id8';
export const NODE_CP_PORT_1 = `${NODE_CP_ID}-p1`;
export const NODE_CP_PORT_2 = `${NODE_CP_ID}-p2`;

export const NODE_TEST_CHILDREN_ID = 'id14';
export const NODE_TEST_CHILDREN_PORT = `${NODE_TEST_CHILDREN_ID}-p1`;

// central person's  ports
export const PORTS_CP = {
  left: {
    cell: NODE_CP_ID,
    port: NODE_CP_PORT_1
  },
  right: {
    cell: NODE_CP_ID,
    port: NODE_CP_PORT_2
  }
};