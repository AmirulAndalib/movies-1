import React from 'react';
import PT from 'prop-types';

const LayoutSB = (props) => (
  <div className="m-2">
    {props.text}
    <div className="border border-secondary">
      {props.children}
    </div>
  </div>
);

LayoutSB.propTypes = {
  text: PT.string.isRequired,
  children: PT.oneOfType([
    PT.arrayOf(PT.node),
    PT.node
  ])
};

export default LayoutSB;