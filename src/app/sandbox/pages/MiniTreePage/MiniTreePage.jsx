/* eslint-disable */
import './MiniTreePage.scss';

import React, { Component, createRef } from 'react';
import ReactDOM from 'react-dom';
import { Graph } from '@antv/x6';
import { DagreLayout } from '@antv/layout';
import '@antv/x6-react-shape';

// хэлперы для дерева
import { processNodes } from '@/sandbox/helpers/tree/map-nodes/map-nodes';
import { processEdges } from '@/sandbox/helpers/tree/map-edges/map-edges';
import DAGRE_CONFIG from '@/sandbox/helpers/tree/layout/dagre-config';

// компоненты для дерева
import { NodePort } from '@/sandbox/components/tree';

// тестовые данные для дерева
import {
  getNodes,
  getEdgesBasic,
  EDGES_ADDITIONAL
} from '@/sandbox/data/examples/mini-tree';

class MiniTreePage extends Component {

  componentDidMount() {
    const { containerRef } = this;
    const { current: containerEl } = containerRef;

    console.log('--- MiniTreePage.componentDidMount()');

    const modelRaw = {
      nodes: processNodes({
        data: getNodes({
          commonOptions: {
            // showMotherPorts: true,
            // showPortLabels: true,
            useOnlyReactShape: true,
            useOnlyReactCircle: true,
          },
          lastChildOptions: {
            childrenGroup: 2,
            useGroupStyledPort: true,
          }
        })
      }),
      edges: processEdges({
        edgesListOptions: {
          data: getEdgesBasic({
            lastChildOptions: {
              useTargetPort: true,
              // useEmptyRouterType: true,
            }
          }),
          // showLabels: true
        },
        edgeElementOptions: {
          useRondedConnectors: true,
          targetMarkerType: 'path',
          // targetMarkerType: 'arrow',
          // targetMarkerType: 'rect',
          // targetMarkerType: '',
        }
      })
    };

    const graph = new Graph({
      container: containerEl,
      interacting: {
        nodeMovable: true,
      },
      grid: {
        size: 20,
        visible: true,
        type: 'mesh',
      },
      onPortRendered(args) {
        const { container, contentSelectors } = args;
        const { foContent } = contentSelectors;
        const { customParams } = args?.node?.store?.data;

        /*         console.log('\n--- port:', args?.port?.id);
                console.log('args:', args);
                console.log('customParams:', customParams); */

        if (container && foContent) {
          ReactDOM.render(
            <NodePort
              customParams={customParams}
            />,
            foContent
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

  render() {
    console.log('--- MiniTreePage.render()');

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

export default MiniTreePage;