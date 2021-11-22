/* eslint-disable */
import './DagreIntX6.scss';

import React, { Component, createRef } from 'react';
import ReactDOM from 'react-dom';
import { Graph } from '@antv/x6';
import { DagreLayout } from '@antv/layout';
import '@antv/x6-react-shape';

import {
  NODES, EDGES_BASIC,
  EDGES_ADDITIONAL
} from '../_data-example/data-example.js';

import {
  NODE_SHAPES,
  EDGE_EL
} from '../_common/elements';

import { NodePort } from '@/sandbox/components/tree';

import DAGRE_CONFIG from '../_common/layout/dagre-config';

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
      onPortRendered(args) {
        const { container, contentSelectors, port } = args;
        const targetEl = contentSelectors.foContent;

        console.log('\n--- port.id:', port.id);
        console.log('args:', args);

        if (container && targetEl) {
          ReactDOM.render(
            <NodePort />,
            targetEl
          );
        }
      }
    });

    const dagreLayout = new DagreLayout(DAGRE_CONFIG);
    const modelLayout = dagreLayout.layout(modelRaw);

    graph.fromJSON(modelLayout);

    EDGES_ADDITIONAL.forEach(i => graph.addEdge(i));

    // console.log('- dagre, containerEl:', containerEl);
    // console.log('- dagre, modelRaw:', modelRaw);
    // console.log('- dagre, modelLayout:', modelLayout);
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
      const { source, target, routerType, labelPos } = item;

      const getPoint = (val) => {
        return isString(val)
          ? val
          : `${val.cell}/${val.port}`
      };

      const labelValue = `${getPoint(source)}->${target}`;

      return {
        label: {
          position: {
            distance: labelPos
              ? labelPos
              : 0.15
          },
          attrs: {
            label: {
              text: labelValue,
              fill: 'gray',
            },
            body: {
              stroke: 'lightgray',
            }
          },
        },
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