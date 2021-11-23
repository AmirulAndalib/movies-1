/* eslint-disable */
import './MiniTreeBlock.scss';

import React, { Component, createRef } from 'react';
import ReactDOM from 'react-dom';
import { Graph } from '@antv/x6';
import { DagreLayout } from '@antv/layout';
import '@antv/x6-react-shape';

// хэлперы для дерева
import processNodes from '@/sandbox/helpers/tree/nodes';
import processEdges from '@/sandbox/helpers/tree/edges';

// компоненты для дерева
import { PortEl } from '@/sandbox/components/tree-elements';

// тестовые данные для дерева
import {
  getNodes,
  getEdgesBasic,
  getEdgesAdditional
} from '@/sandbox/data/examples/mini-tree';

// конфигурация для компоновки узлов и связей
import DAGRE_CONFIG from '@/sandbox/configs/tree/layout/dagre.config';

class MiniTreeBlock extends Component {

  componentDidMount() {
    const { containerRef } = this;
    const { current: containerEl } = containerRef;

    console.log('--- MiniTreeBlock.componentDidMount()');

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
            <PortEl
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

    getEdgesAdditional().forEach(i => graph.addEdge(i));

    // console.log('- dagre, containerEl:', containerEl);
    // console.log('- dagre, modelRaw:', modelRaw);
    // console.log('- dagre, modelLayout:', modelLayout);
  }

  containerRef = createRef();

  render() {
    console.log('--- MiniTreeBlock.render()');

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

export default MiniTreeBlock;