import React from 'react';
import { ComponentScreenshot } from '../../../../../site/src/types';
import { Box, MenuItem, MenuItemCheckbox, MenuItemDivider } from '../';
import { Menu } from '../MenuRenderer/MenuRenderer';

const defaultProps = {
  offsetSpace: 'none',
  align: 'left',
  width: 'content',
  highlightIndex: -1,
  open: true,
  dispatch: () => {},
  focusTrigger: () => {},
  position: 'relative',
  placement: 'bottom',
  reserveIconSpace: false,
} as const;

export const screenshots: ComponentScreenshot = {
  screenshotWidths: [320],
  examples: [
    {
      label: 'Default',
      Example: () => (
        <Box display="flex">
          <Menu {...defaultProps}>
            <MenuItem onClick={() => {}}>Item</MenuItem>
            <MenuItem onClick={() => {}}>Item</MenuItem>
            <MenuItemDivider />
            <MenuItemCheckbox checked={false} onChange={() => {}}>
              Item
            </MenuItemCheckbox>
            <MenuItemCheckbox checked={true} onChange={() => {}}>
              Item
            </MenuItemCheckbox>
          </Menu>
        </Box>
      ),
    },
    {
      label: 'Highlighted before divider',
      Example: () => (
        <Box display="flex">
          <Menu {...defaultProps} highlightIndex={1}>
            <MenuItem onClick={() => {}}>Item</MenuItem>
            <MenuItem onClick={() => {}}>Item</MenuItem>
            <MenuItemDivider />
            <MenuItemCheckbox checked={false} onChange={() => {}}>
              Item
            </MenuItemCheckbox>
            <MenuItemCheckbox checked={true} onChange={() => {}}>
              Item
            </MenuItemCheckbox>
          </Menu>
        </Box>
      ),
    },
    {
      label: 'Highlighted before divider',
      Example: () => (
        <Box display="flex">
          <Menu {...defaultProps} highlightIndex={2}>
            <MenuItem onClick={() => {}}>Item</MenuItem>
            <MenuItem onClick={() => {}}>Item</MenuItem>
            <MenuItemDivider />
            <MenuItemCheckbox checked={false} onChange={() => {}}>
              Item
            </MenuItemCheckbox>
            <MenuItemCheckbox checked={true} onChange={() => {}}>
              Item
            </MenuItemCheckbox>
          </Menu>
        </Box>
      ),
    },
  ],
};
