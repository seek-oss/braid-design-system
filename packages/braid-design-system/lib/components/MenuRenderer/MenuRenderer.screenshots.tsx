import React from 'react';
import { ComponentScreenshot } from '../../../../../site/src/types';
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
import { vars } from '../../../css';
import { calc } from '@vanilla-extract/css-utils';

const defaultProps = {
  offsetSpace: 'none',
  align: 'left',
  width: 'content',
  highlightIndex: -1,
  open: true,
  dispatch: () => {},
  focusTrigger: () => {},
  position: 'relative',
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
      label: 'Placement bottom',
      Example: () => (
        <Box display="flex">
          <Box position="relative">
            <Placeholder height={44} label="Menu trigger" />
            <Menu {...defaultProps} placement="bottom">
              <MenuItem onClick={() => {}}>Item</MenuItem>
              <MenuItem onClick={() => {}}>Item</MenuItem>
            </Menu>
          </Box>
        </Box>
      ),
    },
    {
      label: 'Placement bottom with small offset',
      Example: () => (
        <Box display="flex">
          <Box position="relative">
            <Placeholder height={44} label="Menu trigger" />
            <Menu {...defaultProps} placement="bottom" offsetSpace="small">
              <MenuItem onClick={() => {}}>Item</MenuItem>
              <MenuItem onClick={() => {}}>Item</MenuItem>
            </Menu>
          </Box>
        </Box>
      ),
    },
    {
      label: 'Placement top',
      Example: () => (
        <Box
          display="flex"
          style={{
            paddingTop: calc(vars.touchableSize).multiply(2.5).toString(),
            marginBottom: calc(vars.touchableSize)
              .multiply(1.5)
              .negate()
              .toString(),
          }}
        >
          <Box position="relative">
            <Placeholder height={44} label="Menu trigger" />
            <Menu {...defaultProps} placement="top">
              <MenuItem onClick={() => {}}>Item</MenuItem>
              <MenuItem onClick={() => {}}>Item</MenuItem>
            </Menu>
          </Box>
        </Box>
      ),
    },
    {
      label: 'Placement top with small offset',
      Example: () => (
        <Box
          display="flex"
          style={{
            paddingTop: calc(vars.touchableSize).multiply(2.5).toString(),
            marginBottom: calc(vars.touchableSize)
              .multiply(1.5)
              .negate()
              .toString(),
          }}
        >
          <Box position="relative">
            <Placeholder height={44} label="Menu trigger" />
            <Menu {...defaultProps} placement="top" offsetSpace="small">
              <MenuItem onClick={() => {}}>Item</MenuItem>
              <MenuItem onClick={() => {}}>Item</MenuItem>
            </Menu>
          </Box>
        </Box>
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
