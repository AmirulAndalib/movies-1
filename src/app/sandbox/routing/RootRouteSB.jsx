import React from 'react';

import LayoutSB from '@/sandbox/components/layout/LayoutSB';

// import MainReaflow from '@/sandbox/components/demo-reaflow/MainReaflow';
import MainX6 from '@/sandbox/components/demo-x6/MainX6';

const RootRouteSB = () => (
  <>
{/*     <LayoutSB text="reaflow demo">
      <MainReaflow />
    </LayoutSB> */}
    <LayoutSB text="x6 demo">
      <MainX6 />
    </LayoutSB>
  </>
);

export default RootRouteSB;