import React from 'react';
import { ComponentScreenshot } from '../../../site/src/types';
import { Badge, Box, MenuItemCheckbox } from '../';
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
  screenshotWidths: [768],
  examples: [
    {
      label: 'Default',
      Example: () => (
        <Box display="flex">
          <Menu {...defaultProps}>
            <MenuItemCheckbox checked={false} onChange={() => {}}>
              Checkbox
            </MenuItemCheckbox>
            <MenuItemCheckbox checked={true} onChange={() => {}}>
              Checkbox
            </MenuItemCheckbox>
          </Menu>
        </Box>
      ),
    },
    {
      label: 'Highlighted',
      Example: () => (
        <Box display="flex">
          <Menu {...defaultProps} highlightIndex={0}>
            <MenuItemCheckbox checked={false} onChange={() => {}}>
              Checkbox
            </MenuItemCheckbox>
            <MenuItemCheckbox checked={true} onChange={() => {}}>
              Checkbox
            </MenuItemCheckbox>
          </Menu>
        </Box>
      ),
    },
    {
      label: 'With badge',
      Example: () => (
        <Box display="flex">
          <Menu {...defaultProps} highlightIndex={1}>
            <MenuItemCheckbox checked={false} onChange={() => {}}>
              Checkbox
            </MenuItemCheckbox>
            <MenuItemCheckbox
              checked={true}
              onChange={() => {}}
              badge={<Badge weight="strong">Badge</Badge>}
            >
              Checkbox
            </MenuItemCheckbox>
          </Menu>
        </Box>
      ),
    },
    {
      label: 'Overflow tests in content width menu (no truncation)',
      Example: () => (
        <Box display="flex">
          <Menu {...defaultProps} highlightIndex={1} width="content">
            <MenuItemCheckbox checked={false} onChange={() => {}}>
              Really long menu item text that should truncate
            </MenuItemCheckbox>
            <MenuItemCheckbox checked={true} onChange={() => {}}>
              Really long menu item text that should truncate
            </MenuItemCheckbox>
            <MenuItemCheckbox
              checked={true}
              onChange={() => {}}
              badge={<Badge weight="strong">Badge</Badge>}
            >
              Really long menu item text that should truncate
            </MenuItemCheckbox>
          </Menu>
        </Box>
      ),
    },
    {
      label: 'Overflow tests in small width menu',
      Example: () => (
        <Box display="flex">
          <Menu {...defaultProps} highlightIndex={1} width="small">
            <MenuItemCheckbox checked={false} onChange={() => {}}>
              Really long menu item text that should truncate
            </MenuItemCheckbox>
            <MenuItemCheckbox checked={true} onChange={() => {}}>
              Really long menu item text that should truncate
            </MenuItemCheckbox>
            <MenuItemCheckbox
              checked={true}
              onChange={() => {}}
              badge={<Badge weight="strong">Badge</Badge>}
            >
              Really long menu item text that should truncate
            </MenuItemCheckbox>
          </Menu>
        </Box>
      ),
    },
    {
      label: 'Overflow tests in medium width menu',
      Example: () => (
        <Box display="flex">
          <Menu {...defaultProps} highlightIndex={1} width="medium">
            <MenuItemCheckbox checked={false} onChange={() => {}}>
              Really long menu item text that should truncate
            </MenuItemCheckbox>
            <MenuItemCheckbox checked={true} onChange={() => {}}>
              Really long menu item text that should truncate
            </MenuItemCheckbox>
            <MenuItemCheckbox
              checked={true}
              onChange={() => {}}
              badge={<Badge weight="strong">Badge</Badge>}
            >
              Really long menu item text that should truncate
            </MenuItemCheckbox>
          </Menu>
        </Box>
      ),
    },
    {
      label: 'Overflow tests in large width menu',
      Example: () => (
        <Box display="flex">
          <Menu {...defaultProps} highlightIndex={1} width="large">
            <MenuItemCheckbox checked={false} onChange={() => {}}>
              Really long menu item text that should truncate
            </MenuItemCheckbox>
            <MenuItemCheckbox checked={true} onChange={() => {}}>
              Really long menu item text that should truncate
            </MenuItemCheckbox>
            <MenuItemCheckbox
              checked={true}
              onChange={() => {}}
              badge={<Badge weight="strong">Badge</Badge>}
            >
              Really long menu item text that should truncate
            </MenuItemCheckbox>
          </Menu>
        </Box>
      ),
    },
  ],
};
