import React from 'react';
import { render } from 'react-dom';

import { PortEl } from '@/sandbox/components/tree-elements';

const onPortRendered = (args) => {
  const { container, contentSelectors } = args;
  const { foContent } = contentSelectors;
  const { customParams } = args?.node?.store?.data;

  /*         console.log('\n--- port:', args?.port?.id);
          console.log('args:', args);
          console.log('customParams:', customParams); */

  if (container && foContent) {
    render(
      <PortEl
        customParams={customParams}
      />,
      foContent
    );
  }
};

export default onPortRendered;