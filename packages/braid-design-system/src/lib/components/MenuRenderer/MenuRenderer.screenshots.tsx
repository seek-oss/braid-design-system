import React from 'react';
import type { ComponentScreenshot } from 'site/types';
import {
  Box,
  MenuRenderer,
  MenuItem,
  MenuItemLink,
  MenuItemDivider,
  MenuItemCheckbox,
  IconBookmark,
  IconProfile,
  Inline,
} from '../';
import { Placeholder } from '../private/Placeholder/Placeholder';
import { Menu } from './MenuRenderer';
import { vars } from '../../../entries/css';
import { calc } from '@vanilla-extract/css-utils';
import { debugTouchableAttrForDataProp } from '../private/touchable/debugTouchable';

const defaultProps = {
  offsetSpace: 'none',
  align: 'left',
  size: 'standard',
  width: 'content',
  highlightIndex: -1,
  open: true,
  dispatch: () => {},
  focusTrigger: () => {},
  position: 'relative',
  reserveIconSpace: false,
  placement: 'bottom',
} as const;

const triggerHeight = 44;

const triggerPosition = {
  top: triggerHeight,
  left: 0,
  bottom: 0, // this value is ignored when placement is top
  right: 0, // this value is ignored when align is left
};

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
                <Placeholder height={triggerHeight} label="Menu trigger" />
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
                <Placeholder height={triggerHeight} label="Menu trigger" />
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
              <Placeholder height={triggerHeight} label="Menu trigger" />
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
            <Placeholder height={triggerHeight} label="Menu trigger" />
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
            <Placeholder height={triggerHeight} label="Menu trigger" />
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
          }}
        >
          <Box position="relative">
            <Placeholder height={triggerHeight} label="Menu trigger" />
            <Menu
              {...defaultProps}
              placement="top"
              triggerPosition={triggerPosition}
              position="absolute"
            >
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
          }}
        >
          <Box position="relative">
            <Placeholder height={44} label="Menu trigger" />
            <Menu
              {...defaultProps}
              placement="top"
              offsetSpace="small"
              triggerPosition={triggerPosition}
              position="absolute"
            >
              <MenuItem onClick={() => {}}>Item</MenuItem>
              <MenuItem onClick={() => {}}>Item</MenuItem>
            </Menu>
          </Box>
        </Box>
      ),
    },
    {
      label: 'Small size (virtual touch target)',
      Example: () => (
        <Box display="flex" data={{ [debugTouchableAttrForDataProp]: '' }}>
          <Menu {...defaultProps} width="content" size="small">
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
      label: 'Width content',
      Example: () => (
        <Inline space="medium">
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
          <Menu {...defaultProps} width="content" size="small">
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
        </Inline>
      ),
    },
    {
      label: 'Width small',
      Example: () => (
        <Inline space="medium">
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
          <Menu {...defaultProps} width="small" size="small">
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
        </Inline>
      ),
    },
    {
      label: 'Width medium',
      Example: () => (
        <Inline space="medium">
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
          <Menu {...defaultProps} width="medium" size="small">
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
        </Inline>
      ),
    },
    {
      label: 'Width large',
      Example: () => (
        <Inline space="medium">
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
          <Menu {...defaultProps} width="large" size="small">
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
        </Inline>
      ),
    },
    {
      label: 'Reserve icon space',
      Example: () => (
        <Inline space="medium">
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
          <Menu {...defaultProps} reserveIconSpace size="small">
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
        </Inline>
      ),
    },
  ],
};
