import assert from 'assert';
import React, { useContext } from 'react';
import { Box } from '../Box/Box';
import { Divider } from '../Divider/Divider';
import { MenuRendererContext } from '../MenuRenderer/MenuRendererContext';

export const MenuItemDivider = () => {
  assert(
    useContext(MenuRendererContext),
    'MenuItemDivider must be rendered within a menu component. See the documentation for correct usage: https://seek-oss.github.io/braid-design-system/components/MenuItemDivider',
  );

  return (
    <Box paddingY="xxsmall">
      <Divider />
    </Box>
  );
};
