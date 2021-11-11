/* eslint-disable */
import './DagreIntX6.scss';

import React, { Component, createRef } from 'react';
import { Graph } from '@antv/x6';
import { DagreLayout } from '@antv/layout';

import { nodeEl } from './elements/nodeEl.js';
import { edgeEl } from './elements/edgeEl.js';
import { manhattanRouterSwitch } from './edges-routing/edges-routing.js';

import { nodes, edges } from '../data-example/data-example.js';

class DagreIntX6 extends Component {
  componentDidMount() {
    const { containerRef } = this;
    const { current: containerEl } = containerRef;

    console.log('--- DagreIntX6.componentDidMount()');

    const modelRaw = {
      nodes: nodes.map(
        item => ({
          ...item,
          ...nodeEl
        })
      ),
      edges: [],
    };

    edges.forEach((edge) => {
      return modelRaw.edges.push({
        source: edge[0],
        target: edge[1],
        // router: 'normal',
        router: manhattanRouterSwitch(edge[2]),
        ...edgeEl
      });
    });

    const graph = new Graph({
      container: containerEl,
      grid: {
        size: 15,
        visible: true,
        type: 'mesh',
      },
    });

    const dagreLayout = new DagreLayout({
      type: 'dagre',

      // Направление компоновки
      rankdir: 'TB',

      // Выравнивание узлов
      align: '',

      // Количество пикселей, разделяющих уровни (по вертикаль)
      ranksep: 45,

      // Количество пикселей, разделяющих узлы (по горизонтали)
      nodesep: 30,

      // Количество пикселей, разделяющих связи (по горизонтали)
      edgesep: 20,

      // Тип алгоритма для присвоения ранга каждому узлу входного графа
      ranker: 'tight-tree',

      weight: 2
    });

    const modelLayout = dagreLayout.layout(modelRaw);

    graph.fromJSON(modelLayout);

    console.log('- containerEl:', containerEl);
    console.log('- modelRaw:', modelRaw);
    console.log('- modelLayout:', modelLayout);

  }

  containerRef = createRef();

  render() {
    console.log('--- DagreIntX6.render()');

    return (
      <div
        ref={this.containerRef}
        style={{
          width: '100%',
          height: '800px'
        }}
      />
    );
  }
}

export default DagreIntX6;