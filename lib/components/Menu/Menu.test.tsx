import React from 'react';
import { menuTestSuite } from './testHelper';
import { Menu } from './Menu';

menuTestSuite({
  name: 'Base',
  Component: props => (
    <Menu
      trigger={triggerProps => <button {...triggerProps}>Menu</button>}
      {...props}
    />
  ),
});
