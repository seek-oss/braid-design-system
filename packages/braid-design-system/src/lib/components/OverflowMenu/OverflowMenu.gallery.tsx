import React from 'react';
import type { GalleryComponent } from 'site/types';
import { Box, OverflowMenu, MenuItem, MenuItemLink } from '../';
import source from '@braid-design-system/source.macro';

export const galleryItems: GalleryComponent = {
  examples: [
    {
      Example: ({ handler }) =>
        source(
          <Box style={{ maxWidth: '100px' }}>
            <OverflowMenu label="Options">
              <MenuItem onClick={handler}>Button</MenuItem>
              <MenuItemLink href="#" onClick={handler}>
                Link
              </MenuItemLink>
            </OverflowMenu>
          </Box>,
        ),
    },
  ],
};
