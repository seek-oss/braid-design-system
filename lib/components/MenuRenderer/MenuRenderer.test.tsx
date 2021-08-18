import React from 'react';
import { menuTestSuite } from './testHelper';
import { MenuRenderer } from './MenuRenderer';

menuTestSuite({
  name: 'Base',
  Component: (props) => (
    <MenuRenderer
      trigger={(triggerProps) => <button {...triggerProps}>Menu</button>}
      {...props}
    />
  ),
});
