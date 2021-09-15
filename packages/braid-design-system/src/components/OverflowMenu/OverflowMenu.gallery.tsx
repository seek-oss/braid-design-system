import React from 'react';
import { ComponentExample } from '../../../site/src/types';
import { Box, OverflowMenu, MenuItem, MenuItemLink } from '../';
import source from '../../utils/source.macro';

export const galleryItems: ComponentExample[] = [
  {
    background: 'card',
    Example: ({ handler }) =>
      source(
        <Box style={{ paddingLeft: '100px', maxWidth: '200px' }}>
          <OverflowMenu label="Options">
            <MenuItem onClick={handler}>Button</MenuItem>
            <MenuItemLink href="#" onClick={handler}>
              Link
            </MenuItemLink>
          </OverflowMenu>
        </Box>,
      ),
  },
];
