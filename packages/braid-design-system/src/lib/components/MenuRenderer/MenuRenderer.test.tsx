import React from 'react';

import { MenuRenderer } from './MenuRenderer';
import { menuTestSuite } from './testHelper';

menuTestSuite({
  name: 'Base',
  Component: (props) => (
    <MenuRenderer
      trigger={(triggerProps) => <button {...triggerProps}>Menu</button>}
      {...props}
    />
  ),
});
