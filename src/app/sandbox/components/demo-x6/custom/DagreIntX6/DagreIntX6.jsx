/* eslint-disable */
import './DagreIntX6.scss';

import React, { Component, createRef } from 'react';
import { Graph } from '@antv/x6';
import { DagreLayout } from '@antv/layout';
import '@antv/x6-react-shape';

import { NODES, EDGES_BASIC, EDGES_ADDITIONAL } from '../_data-example/data-example.js';
import { NODE_SHAPES, EDGE_EL } from '../_common/elements';

import { switchRouter } from '../_common/edges-routing/edges-routing.js';
import { isString } from '@/utils/common';

class DagreIntX6 extends Component {

  componentDidMount() {
    const { containerRef } = this;
    const { current: containerEl } = containerRef;

    console.log('--- DagreIntX6.componentDidMount()');

    const modelRaw = {
      nodes: this.mapNodes(NODES),
      edges: this.mapEdges(EDGES_BASIC)
    };

    const graph = new Graph({
      container: containerEl,
      interacting: {
        nodeMovable: true,
      },
      grid: {
        size: 25,
        visible: true,
        type: 'mesh',
      },
    });

    const dagreLayout = new DagreLayout({
      type: 'dagre',

      // Направление компоновки
      rankdir: 'TB',

      // Выравнивание узлов
      // align: 'UR',

      // Количество пикселей, разделяющих уровни (по вертикаль)
      ranksep: 45,

      // Количество пикселей, разделяющих узлы (по горизонтали)
      nodesep: 20,

      // Количество пикселей, разделяющих связи (по горизонтали)
      edgesep: 20,

      // Тип алгоритма для присвоения ранга каждому узлу входного графа
      // ranker: 'tight-tree',
      ranker: 'longest-path'
    });

    const modelLayout = dagreLayout.layout(modelRaw);

    graph.fromJSON(modelLayout);

    EDGES_ADDITIONAL.forEach(i => graph.addEdge(i));

    console.log('- dagre, containerEl:', containerEl);
    console.log('- dagre, modelRaw:', modelRaw);
    console.log('- dagre, modelLayout:', modelLayout);
  }

  containerRef = createRef();

  mapNodes = (data) => data.map(
    item => {
      const { id, label, layer, customShape, ports, cls = 'node-circle', customParams } = item;

      const nodeEl = NODE_SHAPES[
        customShape
          ? customShape
          : 'react'
      ];

      const labelValue = customShape
        ? `${id} \n (${label})`
        : label;

      return {
        id,
        label: labelValue,
        layer,
        ports,
        cls,
        customParams,
        ...nodeEl
      }
    }
  )

  mapEdges = (data) => data.map(
    item => {
      const { source, target, routerType } = item;

      const getPoint = (val) => {
        return isString(val)
          ? val
          : `${val.cell}/${val.port}`
      };

      return {
        // label: `${getPoint(source)}->${target}`,
        source,
        target,
        router: switchRouter(routerType),
        ...EDGE_EL
      }
    }
  )

  render() {
    console.log('--- DagreIntX6.render()');

    return (
      <div
        ref={this.containerRef}
        className="mb-1"
        style={{
          border: '1px solid gray',
          width: '100%',
          height: '800px'
        }}
      />
    );
  }
}

export default DagreIntX6;