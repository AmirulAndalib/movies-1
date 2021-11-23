/* eslint-disable */

import React from 'react';
import { TreeNode } from '@/sandbox/components/tree-elements';

const sizeDefaults = {
  width: 75,
  height: 75,
};

const nodeDefaults = {
  attrs: {
    body: {
      stroke: '#769AF7',
    },
    label: {
      fill: '#000',
    },
  },
  ...sizeDefaults
};

const NODE_SHAPES = {
  circle: {
    shape: 'circle',
    ...nodeDefaults
  },
  rectangle: {
    shape: 'rect',
    ...nodeDefaults
  },
  react: {
    shape: 'react-shape',
    component(node) {
      return (
        <TreeNode
          cls={node.getProp('cls')}
          customParams={node.getProp('customParams')}
          customData={{
            label: node.getProp('label')
          }}
        />
      )
    },
    ...sizeDefaults,
  },
};

export default NODE_SHAPES;