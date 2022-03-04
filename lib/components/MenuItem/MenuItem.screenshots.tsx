import React from 'react';
import { ComponentScreenshot } from '../../../site/src/types';
import { Badge, Box, MenuItem, MenuItemLink } from '../';
import { Menu } from '../MenuRenderer/MenuRenderer';
import { IconBookmark, IconStar, IconThumb } from '../icons';

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
  screenshotWidths: [768],
  examples: [
    {
      label: 'Default',
      Example: () => (
        <Box display="flex">
          <Menu {...defaultProps}>
            <MenuItem onClick={() => {}}>Button</MenuItem>
            <MenuItemLink href="#">Link</MenuItemLink>
          </Menu>
        </Box>
      ),
    },
    {
      label: 'Highlighted button',
      Example: () => (
        <Box display="flex">
          <Menu {...defaultProps} highlightIndex={0}>
            <MenuItem onClick={() => {}}>Button</MenuItem>
            <MenuItemLink href="#">Link</MenuItemLink>
          </Menu>
        </Box>
      ),
    },
    {
      label: 'Highlighted link',
      Example: () => (
        <Box display="flex">
          <Menu {...defaultProps} highlightIndex={1}>
            <MenuItem onClick={() => {}}>Button</MenuItem>
            <MenuItemLink href="#">Link</MenuItemLink>
          </Menu>
        </Box>
      ),
    },
    {
      label: 'Critical',
      Example: () => (
        <Box display="flex">
          <Menu {...defaultProps}>
            <MenuItem onClick={() => {}}>Default</MenuItem>
            <MenuItem onClick={() => {}} tone="critical">
              Button
            </MenuItem>
            <MenuItemLink href="#" tone="critical">
              Link
            </MenuItemLink>
          </Menu>
        </Box>
      ),
    },
    {
      label: 'Highlighted critical button',
      Example: () => (
        <Box display="flex">
          <Menu {...defaultProps} highlightIndex={0}>
            <MenuItem onClick={() => {}} tone="critical">
              Button
            </MenuItem>
            <MenuItemLink href="#">Link</MenuItemLink>
          </Menu>
        </Box>
      ),
    },
    {
      label: 'Highlighted critical link',
      Example: () => (
        <Box display="flex">
          <Menu {...defaultProps} highlightIndex={1}>
            <MenuItem onClick={() => {}}>Button</MenuItem>
            <MenuItemLink href="#" tone="critical">
              Link
            </MenuItemLink>
          </Menu>
        </Box>
      ),
    },
    {
      label: 'With icon',
      Example: () => (
        <Box display="flex">
          <Menu {...defaultProps} highlightIndex={1}>
            <MenuItem onClick={() => {}} icon={<IconStar />}>
              Button
            </MenuItem>
            <MenuItem onClick={() => {}} icon={<IconBookmark />}>
              Button
            </MenuItem>
            <MenuItemLink href="#" icon={<IconThumb />}>
              Link
            </MenuItemLink>
          </Menu>
        </Box>
      ),
    },
    {
      label: 'With icon and reserving icon space',
      Example: () => (
        <Box display="flex">
          <Menu {...defaultProps} highlightIndex={1} reserveIconSpace>
            <MenuItem onClick={() => {}} icon={<IconStar />}>
              Button
            </MenuItem>
            <MenuItem onClick={() => {}} icon={<IconBookmark />}>
              Button
            </MenuItem>
            <MenuItemLink href="#">Link</MenuItemLink>
          </Menu>
        </Box>
      ),
    },
    {
      label: 'With icon and critical',
      Example: () => (
        <Box display="flex">
          <Menu {...defaultProps} highlightIndex={1}>
            <MenuItem onClick={() => {}} icon={<IconStar />}>
              Button
            </MenuItem>
            <MenuItem
              onClick={() => {}}
              icon={<IconBookmark />}
              tone="critical"
            >
              Button
            </MenuItem>
            <MenuItemLink href="#" icon={<IconThumb />} tone="critical">
              Link
            </MenuItemLink>
          </Menu>
        </Box>
      ),
    },
    {
      label: 'With badge',
      Example: () => (
        <Box display="flex">
          <Menu {...defaultProps} highlightIndex={1}>
            <MenuItem
              onClick={() => {}}
              badge={<Badge weight="strong">Badge</Badge>}
            >
              Button
            </MenuItem>
            <MenuItem
              onClick={() => {}}
              icon={<IconBookmark />}
              badge={<Badge weight="strong">Badge</Badge>}
            >
              Button
            </MenuItem>
            <MenuItemLink
              href="#"
              icon={<IconThumb />}
              badge={<Badge weight="strong">Badge</Badge>}
            >
              Link
            </MenuItemLink>
          </Menu>
        </Box>
      ),
    },
    {
      label: 'Overflow tests in content width menu (no truncation)',
      Example: () => (
        <Box display="flex">
          <Menu {...defaultProps} highlightIndex={1} width="content">
            <MenuItem onClick={() => {}}>
              Really long menu item text that should truncate
            </MenuItem>
            <MenuItem onClick={() => {}} icon={<IconBookmark />}>
              Really long menu item text that should truncate
            </MenuItem>
            <MenuItemLink href="#" badge={<Badge weight="strong">Badge</Badge>}>
              Really long menu item text that should truncate
            </MenuItemLink>
            <MenuItemLink
              href="#"
              icon={<IconBookmark />}
              badge={<Badge weight="strong">Badge</Badge>}
            >
              Really long menu item text that should truncate
            </MenuItemLink>
          </Menu>
        </Box>
      ),
    },
    {
      label: 'Overflow tests in small width menu',
      Example: () => (
        <Box display="flex">
          <Menu {...defaultProps} highlightIndex={1} width="small">
            <MenuItem onClick={() => {}}>
              Really long menu item text that should truncate
            </MenuItem>
            <MenuItem onClick={() => {}} icon={<IconBookmark />}>
              Really long menu item text that should truncate
            </MenuItem>
            <MenuItemLink href="#" badge={<Badge weight="strong">Badge</Badge>}>
              Really long menu item text that should truncate
            </MenuItemLink>
            <MenuItemLink
              href="#"
              icon={<IconBookmark />}
              badge={<Badge weight="strong">Badge</Badge>}
            >
              Really long menu item text that should truncate
            </MenuItemLink>
          </Menu>
        </Box>
      ),
    },
    {
      label: 'Overflow tests in medium width menu',
      Example: () => (
        <Box display="flex">
          <Menu {...defaultProps} highlightIndex={1} width="medium">
            <MenuItem onClick={() => {}}>
              Really long menu item text that should truncate
            </MenuItem>
            <MenuItem onClick={() => {}} icon={<IconBookmark />}>
              Really long menu item text that should truncate
            </MenuItem>
            <MenuItemLink href="#" badge={<Badge weight="strong">Badge</Badge>}>
              Really long menu item text that should truncate
            </MenuItemLink>
            <MenuItemLink
              href="#"
              icon={<IconBookmark />}
              badge={<Badge weight="strong">Badge</Badge>}
            >
              Really long menu item text that should truncate
            </MenuItemLink>
          </Menu>
        </Box>
      ),
    },
    {
      label: 'Overflow tests in large width menu',
      Example: () => (
        <Box display="flex">
          <Menu {...defaultProps} highlightIndex={1} width="large">
            <MenuItem onClick={() => {}}>
              Really long menu item text that should truncate
            </MenuItem>
            <MenuItem onClick={() => {}} icon={<IconBookmark />}>
              Really long menu item text that should truncate
            </MenuItem>
            <MenuItemLink href="#" badge={<Badge weight="strong">Badge</Badge>}>
              Really long menu item text that should truncate
            </MenuItemLink>
            <MenuItemLink
              href="#"
              icon={<IconBookmark />}
              badge={<Badge weight="strong">Badge</Badge>}
            >
              Really long menu item text that should truncate
            </MenuItemLink>
          </Menu>
        </Box>
      ),
    },
  ],
};
