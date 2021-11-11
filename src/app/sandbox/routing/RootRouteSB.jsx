import React from 'react';

import LayoutSB from '@/sandbox/components/layout/LayoutSB';

// import MainReaflow from '@/sandbox/components/demo-reaflow/MainReaflow';

import {
  // CustomNodesX6,
  // OrgChartX6,
  DagreIntX6
} from '@/sandbox/components/demo-x6';

const RootRouteSB = () => (
  <>
    {/*     <LayoutSB text="reaflow demo">
      <MainReaflow />
    </LayoutSB> */}
    <LayoutSB text="x6 demo">
      {/* <CustomNodesX6 /> */}
      {/* <OrgChartX6 /> */}
      <DagreIntX6 />
    </LayoutSB>
  </>
);

export default RootRouteSB;