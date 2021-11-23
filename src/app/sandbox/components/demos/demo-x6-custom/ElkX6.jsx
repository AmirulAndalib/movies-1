/* eslint-disable */
import React, { Component, createRef } from 'react';
import { Graph } from '@antv/x6';
import ELK from 'elkjs/lib/elk.bundled.js';

import { NODE_SHAPES } from '@/sandbox/helpers/tree/nodes';
import { getEdgeMarkup } from '@/sandbox/helpers/tree/edges';

import { nodes, edges } from '@/sandbox/data/examples/elk';

class ElkX6 extends Component {
  componentDidMount() {
    const { containerRef } = this;
    const { current: containerEl } = containerRef;

    console.log('--- ElkX6.componentDidMount()');

    const modelRaw = {
      nodes: nodes.map(
        item => ({
          ...item,
          ...NODE_SHAPES.circle
        })
      ),
      edges: [],
    };

    edges.forEach((edge, i) => {
      return modelRaw.edges.push({
        id: `id-edge-${i}`,
        source: edge[0],
        target: edge[1],
        ...getEdgeMarkup()
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

    const elk = new ELK()

    const graphElk = {
      id: "root",
      layoutOptions: {
        'elk.direction': 'DOWN',
        'elk.layered.spacing.edgeNodeBetweenLayers': '20',
        'edgeRouting': 'SPLINES',

        /*
        ОТЛАДКА ПАРАМЕТРОВ: алгоритмы
        */
        // 'org.eclipse.elk.algorithm': 'layered',
        // 'elk.eclipse.elk.algorithm': 'mrtree',

        /*
        ОТЛАДКА ПАРАМЕТРОВ: алгоритм -> слоистый  -> стратегии
        */
        // 'org.eclipse.elk.layered.layering.strategy': 'INTERACTIVE',
        // 'org.eclipse.elk.layered.layering.strategy': 'NETWORK_SIMPLEX',

        /*
         ОТЛАДКА ПАРАМЕТРОВ: алгоритм -> слоистый  -> ограничения слоев
         */
        // 'elk.layered.layering.layerConstraint': 'FIRST',
        // 'elk.layered.layering.layerConstraint': 'LAST'

        /*
        ОТЛАДКА ПАРАМЕТРОВ: алгоритм -> слоистый  -> настройки (разное)
        */
        // 'org.eclipse.elk.layered.crossingMinimization.strategy': 'LAYER_SWEEP',
        // 'org.eclipse.elk.layered.nodePlacement.strategy': 'BRANDES_KOEPF',
        // 'elk.layered.mergeHierarchyEdges': true,

        /*
        ОТЛАДКА ПАРАМЕТРОВ: разное
        */
        // 'org.eclipse.elk.alignment': 'LEFT',
        // 'elk.spacing.edgeNode': '30',
        // 'elk.hierarchyHandling': 'INCLUDE_CHILDREN',
        // 'nodePlacement.bk.fixedAlignment': 'BALANCED',
        // 'elk.partitioning.activate': true

      },
      children: modelRaw.nodes,
      edges: modelRaw.edges
    }

    elk.layout(graphElk)
      .then(
        (data) => {
          graph.fromJSON({
            nodes: data.children,
            edges: data.edges
          });

          console.log('- elk, data:', data);
          console.log('- elk, modelRaw:', modelRaw);
          console.log('- elk, containerEl:', containerEl);
        })
      .catch(console.error)
  }

  containerRef = createRef();

  render() {
    console.log('--- ElkX6.render()');

    return (
      <div
        ref={this.containerRef}
        className="mb-1"
        style={{
          border: '1px solid gray',
          width: '100%',
          height: '600px'
        }}
      />
    );
  }
}

export default ElkX6;