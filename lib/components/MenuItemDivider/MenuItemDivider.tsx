import assert from 'assert';
import React, { useContext } from 'react';
import { Box, Divider } from '..';
import { MenuRendererContext } from '../MenuRenderer/MenuRendererContext';

export const MenuItemDivider = () => {
  assert(
    useContext(MenuRendererContext),
    'MenuItemDivider must be rendered within a menu component. See the documentation for correct usage: https://seek-oss.github.io/braid-design-system/components/MenuItemDivider',
  );

  return (
    <Box padding="xxsmall">
      <Divider />
    </Box>
  );
};
