import React from 'react';
import { ComponentExample } from '../../../site/src/types';
import { Box, OverflowMenu, MenuItem, MenuItemLink } from '../';

export const galleryItems: ComponentExample[] = [
  {
    label: 'Default',
    background: 'card',
    Example: ({ handler }) => (
      <Box style={{ paddingLeft: '100px', maxWidth: '200px' }}>
        <OverflowMenu label="Options">
          <MenuItem onClick={handler}>Button</MenuItem>
          <MenuItemLink href="#" onClick={handler}>
            Link
          </MenuItemLink>
        </OverflowMenu>
      </Box>
    ),
  },
];
