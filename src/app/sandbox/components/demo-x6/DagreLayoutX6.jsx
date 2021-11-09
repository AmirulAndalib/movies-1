/* eslint-disable no-console */
import React, { Component, createRef } from 'react';

import { Graph } from '@antv/x6';
import { DagreLayout } from '@antv/layout';

class DagreLayoutX6 extends Component {
  componentDidMount() {
    const { containerRef } = this;

    console.log('--- DagreLayoutX6.componentDidMount()');
    console.log('containerRef.current:', containerRef.current);

    const data = {
      nodes: [],
      edges: [],
    };
    const edges = [
      ['1', '2'],
      ['2', '3'],
      ['2', '4'],
      ['4', '5'],
      ['4', '6'],
      ['4', '7'],
      ['4', '8'],
      ['5', '9'],
      ['6', '10'],
      ['7', '11'],
      ['8', '12'],
    ];

    for (let i = 1; i <= 12; i++) {
      data.nodes.push({
        id: `${i}`,
        shape: 'rect',
        width: 60,
        height: 30,
        label: i,
        attrs: {
          body: {
            fill: '#855af2',
            stroke: 'transparent',
          },
          label: {
            fill: '#ffffff',
          },
        },
      });
    }

    edges.forEach((edge) => {
      data.edges.push({
        source: edge[0],
        target: edge[1],
        attrs: {
          line: {
            stroke: '#fd6d6f',
            strokeWidth: 1,
          },
        },
      });
    });

    const graph = new Graph({
      container: containerRef.current,
      grid: true,
    });

    const dagreLayout = new DagreLayout({
      type: 'dagre',
      rankdir: 'LR',
      align: 'UR',
      ranksep: 35,
      nodesep: 15,
    });
    const model = dagreLayout.layout(data);

    graph.fromJSON(model);

  }

  containerRef = createRef();

  render() {
    console.log('--- DagreLayoutX6.render()');

    return (
      <div
        ref={this.containerRef}
        style={{
          width: '100%',
          height: '600px'
        }}
      />
    );
  }
}

export default DagreLayoutX6;