import React from 'react';

import {
  LayoutSB
} from '@/sandbox/components/common/layout';

import {
  MiniTreeBlock
} from '@/sandbox/components/tree-blocks';

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
    <MiniTreeBlock />
  </LayoutSB>
);

export default RootRouteSB;