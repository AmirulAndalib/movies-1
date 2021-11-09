/* eslint-disable no-console */
import React, { Component, createRef } from 'react';

import { Graph } from '@antv/x6';
import { DagreLayout } from '@antv/layout';

class DagreLayoutX6 extends Component {
  componentDidMount() {
    const { containerRef } = this;

    console.log('--- DagreLayoutX6.componentDidMount()');
    console.log('containerRef.current:', containerRef.current);

    const node = {
      shape: 'rect',
      width: 100,
      height: 30,
      attrs: {
        body: {
          fill: '#855af2',
          stroke: 'transparent',
        },
        label: {
          fill: '#ffffff',
        },
      },
    };

    const data = {
      nodes: [
        { id: '1', label: 'Дедушка', ...node },
        { id: '2', label: 'Бабушка', ...node },
        { id: '3', label: 'Дедушка', ...node },
        { id: '4', label: 'Бабушка', ...node },
        { id: '5', label: 'Отец', ...node },
        { id: '6', label: 'Мать', ...node },
        { id: '7', label: 'Мать ребенка', ...node },
        { id: '8', label: 'Это я', ...node },
        { id: '9', label: 'Жена', ...node },
        { id: '10', label: 'Сын', ...node },
        { id: '11', label: 'Сын', ...node },
        { id: '12', label: 'Сын', ...node },
        { id: '13', label: 'Сын', ...node },
        { id: '14', label: 'Сын', ...node },
      ],
      edges: [],
    };
    const edges = [
      ['1', '5'],
      ['2', '5'],
      ['3', '6'],
      ['4', '6'],
      ['5', '8'],
      ['6', '8'],
      ['7', '8'],
      ['7', '10'],
      ['7', '11'],
      ['7', '12'],
      ['7', '13'],
      ['8', '10'],
      ['8', '11'],
      ['8', '12'],
      ['8', '13'],
      ['8', '14'],
      ['9', '14'],
    ];

    edges.forEach((edge) => {
      data.edges.push({
        source: edge[0],
        target: edge[1],
        router: 'normal',
        /*         router: {
                  name: 'manhattan',
                  args: {
                    startDirections: ['bottom'],
                    endDirections: ['top'],
                    padding: {
                      top: 10,
                    }
                  },
                }, */
        attrs: {
          line: {
            stroke: '#fd6d6f',
            strokeWidth: 1,
            targetMarker: {
              name: 'block'
            },
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

      // Напраление компоновки
      rankdir: 'TB',

      // расстояние между слоями
      ranksep: 35,

      // расстояние между узлами
      nodesep: 30
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