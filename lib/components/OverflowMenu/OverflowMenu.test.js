import _extends from '@babel/runtime/helpers/extends';
import React from 'react';
import { menuTestSuite } from '../MenuRenderer/testHelper';
import { OverflowMenu } from './OverflowMenu';
menuTestSuite({
  name: 'OverflowMenu',
  Component: function Component(props) {
    return /* #__PURE__*/ React.createElement(
      OverflowMenu,
      _extends(
        {
          label: 'Overflow',
        },
        props,
      ),
    );
  },
});
