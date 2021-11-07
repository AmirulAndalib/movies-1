/* eslint-disable no-console */
import React, { Component, createRef } from 'react';

import { Graph } from '@antv/x6';

class MainX6 extends Component {
  componentDidMount() {
    const { mainEl } = this;

    console.log('--- MainX6.componentDidMount()');
    console.log('mainEl.current:', mainEl.current);

    const graph = new Graph({
      container: mainEl.current,
      grid: true,
    });

    const source = this.createSourceNode(graph);
    const target = this.createTargetNode(graph);

    graph.addEdge({
      source,
      target,
    });
  }

  createSourceNode = (graph) => {
    const source = graph.addNode({
      shape: 'html',
      x: 120,
      y: 50,
      width: 120,
      height: 50,
      html: () => {
        const wrap = document.createElement('div');
        wrap.style.width = '100%';
        wrap.style.height = '100%';
        wrap.style.display = 'flex';
        wrap.style.alignItems = 'center';
        wrap.style.justifyContent = 'center';
        wrap.style.border = '2px solid #9254de';
        wrap.style.background = '#efdbff';
        wrap.style.borderRadius = '4px';
        wrap.innerText = 'Hello';
        return wrap;
      },
    });

    return source;
  }

  createTargetNode = (graph) => {
    const wrap = document.createElement('div');
    wrap.style.width = '100%';
    wrap.style.height = '100%';
    wrap.style.display = 'flex';
    wrap.style.alignItems = 'center';
    wrap.style.justifyContent = 'center';
    wrap.style.background = '#ffd591';
    wrap.style.border = '2px solid #ffa940';
    wrap.style.borderRadius = '4px';
    wrap.innerText = 'World';

    const target = graph.addNode({
      shape: 'html',
      x: 320,
      y: 260,
      width: 120,
      height: 50,
      html: wrap,
    });

    return target;
  }

  mainEl = createRef();

  render() {
    console.log('--- MainX6.render()');

    return (
      <div
        ref={this.mainEl}
        style={{
          width: '100%',
          height: '600px'
        }}
      />
    );
  }
}

export default MainX6;