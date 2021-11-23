import React from 'react';
import { Canvas } from 'reaflow';
import { nodes, edges } from './demo-data.reaflow';

const MainReaflow = () => (
  <Canvas
    maxWidth={800}
    maxHeight={600}
    nodes={nodes}
    edges={edges}
  />
);

export default MainReaflow;