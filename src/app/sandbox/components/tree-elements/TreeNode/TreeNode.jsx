/* eslint-disable */
import './TreeNode.scss';

import React, { Component } from 'react';
import cn from 'classnames';

class TreeNode extends Component {
  componentDidMount() {
    // console.log('--- TreeNode.componentDidMount()');
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

    // console.log('\n --- TreeNode.render()');
    // console.log('node.id:', node.id);
    // console.log('label:', label);
    // console.log('node:', node);
    // console.log('customParams:', customParams);

    return (
      <div className={cn('treeNode', cls)}>
        <div className="content">
          {node.id}
          <br />
          {`(${label})`}
        </div>
      </div>
    );
  }
}

export default TreeNode;