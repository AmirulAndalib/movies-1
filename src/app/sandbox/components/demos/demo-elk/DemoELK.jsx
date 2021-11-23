/* eslint-disable */

import React, { Component, createRef } from 'react';

import ELK from 'elkjs/lib/elk.bundled.js';

class DemoELK extends Component {
  componentDidMount() {
    const { containerRef } = this;
    const { current: containerEl } = containerRef;

    console.log('--- DemoELK.componentDidMount()');

    const elk = new ELK()

    const graph = {
      id: 'root',
      layoutOptions: { 'elk.algorithm': 'layered' },
      children: [
        { id: 'n1', width: 30, height: 30 },
        { id: 'n2', width: 30, height: 30 },
        { id: 'n3', width: 30, height: 30 }
      ],
      edges: [
        { id: 'e1', sources: ['n1'], targets: ['n2'] },
        { id: 'e2', sources: ['n1'], targets: ['n3'] }
      ]
    }

    elk.layout(graph)
      .then(
        (data) => {
          console.log('elk.layout:data', data);
        })
      .catch(console.error)

    console.log('- containerEl:', containerEl);
    console.log('- process.env:', JSON.stringify(process.env, null, 2));
  }

  containerRef = createRef();

  render() {
    console.log('--- DemoELK.render()');

    return (
      <div
        ref={this.containerRef}
        className="mb-1 p-1"
        style={{
          border: '1px solid gray',
          width: '100%',
          height: '50px'
        }}
      >
        DemoELK
      </div>
    );
  }
}

export default DemoELK;