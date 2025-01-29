import source from '@braid-design-system/source.macro';
import type { GalleryComponent } from 'site/types';

import { Box, OverflowMenu, MenuItem, MenuItemLink } from '../';

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
