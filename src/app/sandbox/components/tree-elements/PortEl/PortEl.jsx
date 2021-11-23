/* eslint-disable */
import './PortEl.scss';

import React, { Component } from 'react';
import cn from 'classnames';

class PortEl extends Component {
/*   componentDidMount() {
    console.log('--- PortEl.componentDidMount()');
  } */

  render() {

    const { customParams = {} } = this.props
    const { childrenGroup = false } = customParams

    // console.log('\n --- PortEl.render()');
    // console.log('this.props:', this.props);
    // console.log('childrenGroup:', childrenGroup);

    const isDefault = (!childrenGroup || (childrenGroup == 1));

    return (
      <div className={cn('portEl', {
        'group--1': isDefault,
        'group--2': (childrenGroup == 2)
      })}>
        {/* PortEl */}
      </div>
    );
  }
}

export default PortEl;