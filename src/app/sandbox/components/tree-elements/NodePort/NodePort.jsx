/* eslint-disable */
import './NodePort.scss';

import React, { Component } from 'react';
import cn from 'classnames';

class NodePort extends Component {
/*   componentDidMount() {
    console.log('--- NodePort.componentDidMount()');
  } */

  render() {

    const { customParams = {} } = this.props
    const { childrenGroup = false } = customParams

    // console.log('\n --- NodePort.render()');
    // console.log('this.props:', this.props);
    // console.log('childrenGroup:', childrenGroup);

    const isDefault = (!childrenGroup || (childrenGroup == 1));

    return (
      <div className={cn('node-port', {
        'group--1': isDefault,
        'group--2': (childrenGroup == 2)
      })}>
        {/* NodePort */}
      </div>
    );
  }
}

export default NodePort;