import React from 'react';

import LayoutSB from '@/sandbox/components/layout/LayoutSB';

import {
  // MainReaflow,
  // CustomNodesX6,
  // OrgChartX6,
  // DemoELK,
  // ElkX6,
  DagreIntX6
} from '@/sandbox/components';

const RootRouteSB = () => (
  <LayoutSB text="Demo sandbox">
    {/* <MainReaflow /> */}
    {/* <CustomNodesX6 /> */}
    {/* <OrgChartX6 /> */}
    {/* <DemoELK /> */}
    {/* <ElkX6 /> */}
    <DagreIntX6 />
  </LayoutSB>
);

export default RootRouteSB;