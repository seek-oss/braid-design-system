import React from 'react';
import { ComponentScreenshot } from '../../../site/src/types';
import {
  Box,
  MenuRenderer,
  MenuItem,
  MenuItemLink,
  MenuItemDivider,
  MenuItemCheckbox,
} from '../';
import { Placeholder } from '../private/Placeholder/Placeholder';
import { Menu } from './MenuRenderer';
import { IconBookmark, IconProfile } from '../icons';

const defaultProps = {
  offsetSpace: 'none',
  align: 'left',
  width: 'content',
  highlightIndex: -1,
  open: true,
  dispatch: () => {},
  focusTrigger: () => {},
  screenshot: true,
  reserveIconSpace: false,
  placement: 'bottom',
} as const;

export const screenshots: ComponentScreenshot = {
  screenshotWidths: [320],
  examples: [
    {
      label: 'Default',
      Example: () => (
        <Box style={{ maxWidth: '150px' }}>
          <MenuRenderer
            offsetSpace="small"
            trigger={(triggerProps) => (
              <Box userSelect="none" cursor="pointer" {...triggerProps}>
                <Placeholder height={44} label="Menu trigger" />
              </Box>
            )}
          >
            <MenuItem onClick={() => {}}>Button</MenuItem>
            <MenuItemLink href="#">Link</MenuItemLink>
          </MenuRenderer>
        </Box>
      ),
    },
    {
      label: 'Right aligned',
      Example: () => (
        <Box style={{ maxWidth: '150px' }}>
          <MenuRenderer
            align="right"
            offsetSpace="small"
            trigger={(triggerProps) => (
              <Box userSelect="none" cursor="pointer" {...triggerProps}>
                <Placeholder height={44} label="Menu trigger" />
              </Box>
            )}
          >
            <MenuItem onClick={() => {}}>Button</MenuItem>
            <MenuItemLink href="#">Link</MenuItemLink>
          </MenuRenderer>
        </Box>
      ),
    },
    {
      label: 'Trigger grows to parent layout',
      Example: () => (
        <MenuRenderer
          align="right"
          offsetSpace="small"
          trigger={(triggerProps) => (
            <Box userSelect="none" cursor="pointer" {...triggerProps}>
              <Placeholder height={44} label="Menu trigger" />
            </Box>
          )}
        >
          <MenuItem onClick={() => {}}>Button</MenuItem>
          <MenuItemLink href="#">Link</MenuItemLink>
        </MenuRenderer>
      ),
    },
    {
      label: 'Width content',
      Example: () => (
        <Box display="flex">
          <Menu {...defaultProps} width="content">
            <MenuItem onClick={() => {}}>Item</MenuItem>
            <MenuItem onClick={() => {}}>Item</MenuItem>
            <MenuItemDivider />
            <MenuItemCheckbox checked={true} onChange={() => {}}>
              Item
            </MenuItemCheckbox>
            <MenuItemCheckbox checked={false} onChange={() => {}}>
              Item
            </MenuItemCheckbox>
          </Menu>
        </Box>
      ),
    },
    {
      label: 'Width small',
      Example: () => (
        <Box display="flex">
          <Menu {...defaultProps} width="small">
            <MenuItem onClick={() => {}}>Item</MenuItem>
            <MenuItem onClick={() => {}}>Item</MenuItem>
            <MenuItemDivider />
            <MenuItemCheckbox checked={true} onChange={() => {}}>
              Item
            </MenuItemCheckbox>
            <MenuItemCheckbox checked={false} onChange={() => {}}>
              Item
            </MenuItemCheckbox>
            <MenuItemDivider />
            <MenuItem onClick={() => {}}>Item</MenuItem>
            <MenuItem onClick={() => {}}>Item</MenuItem>
          </Menu>
        </Box>
      ),
    },
    {
      label: 'Width medium',
      Example: () => (
        <Box display="flex">
          <Menu {...defaultProps} width="medium">
            <MenuItem onClick={() => {}}>Item</MenuItem>
            <MenuItem onClick={() => {}}>Item</MenuItem>
            <MenuItemDivider />
            <MenuItemCheckbox checked={true} onChange={() => {}}>
              Item
            </MenuItemCheckbox>
            <MenuItemCheckbox checked={false} onChange={() => {}}>
              Item
            </MenuItemCheckbox>
          </Menu>
        </Box>
      ),
    },
    {
      label: 'Width large',
      Example: () => (
        <Box display="flex">
          <Menu {...defaultProps} width="large">
            <MenuItem onClick={() => {}}>Item</MenuItem>
            <MenuItem onClick={() => {}}>Item</MenuItem>
            <MenuItemDivider />
            <MenuItemCheckbox checked={true} onChange={() => {}}>
              Item
            </MenuItemCheckbox>
            <MenuItemCheckbox checked={false} onChange={() => {}}>
              Item
            </MenuItemCheckbox>
          </Menu>
        </Box>
      ),
    },
    {
      label: 'Reserve icon space',
      Example: () => (
        <Box display="flex">
          <Menu {...defaultProps} reserveIconSpace>
            <MenuItem onClick={() => {}} icon={<IconProfile />}>
              Item
            </MenuItem>
            <MenuItem onClick={() => {}} icon={<IconBookmark />}>
              Item
            </MenuItem>
            <MenuItemDivider />
            <MenuItemCheckbox checked={true} onChange={() => {}}>
              Item
            </MenuItemCheckbox>
            <MenuItemCheckbox checked={false} onChange={() => {}}>
              Item
            </MenuItemCheckbox>
            <MenuItemDivider />
            <MenuItem onClick={() => {}}>Item</MenuItem>
            <MenuItem onClick={() => {}}>Item</MenuItem>
          </Menu>
        </Box>
      ),
    },
  ],
};
