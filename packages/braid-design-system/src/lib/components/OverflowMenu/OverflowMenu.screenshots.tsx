import type { ComponentScreenshot } from 'site/types';

import { Box, OverflowMenu, MenuItem, MenuItemLink } from '../';

export const screenshots: ComponentScreenshot = {
  screenshotWidths: [320],
  examples: [
    {
      label: 'Default',
      background: 'surface',
      Example: ({ handler }) => (
        <Box style={{ maxWidth: '100px' }}>
          <OverflowMenu label="Options">
            <MenuItem onClick={handler}>Button</MenuItem>
            <MenuItemLink href="#" onClick={handler}>
              Link
            </MenuItemLink>
          </OverflowMenu>
        </Box>
      ),
    },
    {
      label: 'Small',
      background: 'surface',
      Example: ({ handler }) => (
        <Box style={{ maxWidth: '100px' }}>
          <OverflowMenu size="small" label="Options">
            <MenuItem onClick={handler}>Button</MenuItem>
            <MenuItemLink href="#" onClick={handler}>
              Link
            </MenuItemLink>
          </OverflowMenu>
        </Box>
      ),
    },
  ],
};
