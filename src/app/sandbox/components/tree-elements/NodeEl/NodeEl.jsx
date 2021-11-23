/* eslint-disable */
import './NodeEl.scss';

import React, { Component } from 'react';
import cn from 'classnames';

class NodeEl extends Component {
  componentDidMount() {
    // console.log('--- NodeEl.componentDidMount()');
  }
  /* 
    shouldComponentUpdate() {
      const node = this.props.node
      if (node) {
        if (node.hasChanged('data')) {
          return true
        }
      }
  
      return false
    }
   */

  render() {
    const {
      node,
      cls,
      customData = {},
      // customParams = {}
    } = this.props;
    const { label } = customData;

    // console.log('\n --- NodeEl.render()');
    // console.log('node.id:', node.id);
    // console.log('label:', label);
    // console.log('node:', node);
    // console.log('customParams:', customParams);

    return (
      <div className={cn('nodeEl', cls)}>
        <div className="content">
          {node.id}
          <br />
          {`(${label})`}
        </div>
      </div>
    );
  }
}

export default NodeEl;