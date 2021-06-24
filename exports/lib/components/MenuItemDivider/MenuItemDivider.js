import _jsx from '@babel/runtime/helpers/jsx';

let _Box;

import assert from 'assert';
import React, { useContext } from 'react';
import { Box } from '../Box/Box';
import { Divider } from '../Divider/Divider';
import { MenuRendererContext } from '../MenuRenderer/MenuRendererContext';
export var MenuItemDivider = function MenuItemDivider() {
  assert(
    useContext(MenuRendererContext),
    'MenuItemDivider must be rendered within a menu component. See the documentation for correct usage: https://seek-oss.github.io/braid-design-system/components/MenuItemDivider',
  );
  return (
    _Box ||
    (_Box = /* #__PURE__*/ _jsx(
      Box,
      {
        paddingY: 'xxsmall',
      },
      void 0,
      /* #__PURE__*/ _jsx(Divider, {}),
    ))
  );
};
MenuItemDivider.displayName = 'MenuItemDivider';
