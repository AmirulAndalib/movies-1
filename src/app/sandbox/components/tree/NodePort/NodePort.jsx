/* eslint-disable */
import './NodePort.scss';

import React, { Component } from 'react';

class NodePort extends Component {
  componentDidMount() {
    console.log('--- NodePort.componentDidMount()');
  }

  render() {

    console.log('\n --- NodePort.render()');
    console.log('this.props:', this.props);

    return (
        <div className="node-port">
          {/* NodePort */}
        </div>
    );
  }
}

export default NodePort;