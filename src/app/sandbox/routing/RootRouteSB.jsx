import React from 'react';

import {
  LayoutSB
} from '@/sandbox/components/common/layout';

import {
  MiniTreePage
} from '@/sandbox/pages';

/* import {
  MainReaflow,
  CustomNodesX6,
  OrgChartX6,
  DemoELK,
  ElkX6
} from '@/sandbox/components/demos'; */

const RootRouteSB = () => (
  <LayoutSB text="Demo sandbox">
    {/* <MainReaflow /> */}
    {/* <CustomNodesX6 /> */}
    {/* <OrgChartX6 /> */}
    {/* <DemoELK /> */}
    {/* <ElkX6 /> */}
    <MiniTreePage />
  </LayoutSB>
);

export default RootRouteSB;