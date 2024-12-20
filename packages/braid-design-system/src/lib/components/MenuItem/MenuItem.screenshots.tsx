import React from 'react';
import type { ComponentScreenshot } from 'site/types';
import {
  Badge,
  Box,
  MenuItem,
  MenuItemLink,
  IconBookmark,
  IconStar,
  IconThumb,
  Inline,
} from '../';
import { Menu } from '../MenuRenderer/MenuRenderer';

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

export const screenshots: ComponentScreenshot = {
  screenshotWidths: [768],
  examples: [
    {
      label: 'Default',
      Example: () => (
        <Inline space="medium">
          <Box display="flex">
            <Menu {...defaultProps}>
              <MenuItem onClick={() => {}}>Button</MenuItem>
              <MenuItemLink href="#">Link</MenuItemLink>
            </Menu>
          </Box>
          <Box display="flex">
            <Menu {...defaultProps} size="small">
              <MenuItem onClick={() => {}}>Button</MenuItem>
              <MenuItemLink href="#">Link</MenuItemLink>
            </Menu>
          </Box>
        </Inline>
      ),
    },
    {
      label: 'Highlighted button',
      Example: () => (
        <Inline space="medium">
          <Box display="flex">
            <Menu {...defaultProps} highlightIndex={0}>
              <MenuItem onClick={() => {}}>Button</MenuItem>
              <MenuItemLink href="#">Link</MenuItemLink>
            </Menu>
          </Box>
          <Box display="flex">
            <Menu {...defaultProps} highlightIndex={0} size="small">
              <MenuItem onClick={() => {}}>Button</MenuItem>
              <MenuItemLink href="#">Link</MenuItemLink>
            </Menu>
          </Box>
        </Inline>
      ),
    },
    {
      label: 'Highlighted link',
      Example: () => (
        <Inline space="medium">
          <Box display="flex">
            <Menu {...defaultProps} highlightIndex={1}>
              <MenuItem onClick={() => {}}>Button</MenuItem>
              <MenuItemLink href="#">Link</MenuItemLink>
            </Menu>
          </Box>
          <Box display="flex">
            <Menu {...defaultProps} highlightIndex={1} size="small">
              <MenuItem onClick={() => {}}>Button</MenuItem>
              <MenuItemLink href="#">Link</MenuItemLink>
            </Menu>
          </Box>
        </Inline>
      ),
    },
    {
      label: 'Critical',
      Example: () => (
        <Inline space="medium">
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
          <Box display="flex">
            <Menu {...defaultProps} size="small">
              <MenuItem onClick={() => {}}>Default</MenuItem>
              <MenuItem onClick={() => {}} tone="critical">
                Button
              </MenuItem>
              <MenuItemLink href="#" tone="critical">
                Link
              </MenuItemLink>
            </Menu>
          </Box>
        </Inline>
      ),
    },
    {
      label: 'Highlighted critical button',
      Example: () => (
        <Inline space="medium">
          <Box display="flex">
            <Menu {...defaultProps} highlightIndex={0}>
              <MenuItem onClick={() => {}} tone="critical">
                Button
              </MenuItem>
              <MenuItemLink href="#">Link</MenuItemLink>
            </Menu>
          </Box>
          <Box display="flex">
            <Menu {...defaultProps} highlightIndex={0} size="small">
              <MenuItem onClick={() => {}} tone="critical">
                Button
              </MenuItem>
              <MenuItemLink href="#">Link</MenuItemLink>
            </Menu>
          </Box>
        </Inline>
      ),
    },
    {
      label: 'Highlighted critical link',
      Example: () => (
        <Inline space="medium">
          <Box display="flex">
            <Menu {...defaultProps} highlightIndex={1}>
              <MenuItem onClick={() => {}}>Button</MenuItem>
              <MenuItemLink href="#" tone="critical">
                Link
              </MenuItemLink>
            </Menu>
          </Box>
          <Box display="flex">
            <Menu {...defaultProps} highlightIndex={1} size="small">
              <MenuItem onClick={() => {}}>Button</MenuItem>
              <MenuItemLink href="#" tone="critical">
                Link
              </MenuItemLink>
            </Menu>
          </Box>
        </Inline>
      ),
    },
    {
      label: 'With icon',
      Example: () => (
        <Inline space="medium">
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
          <Box display="flex">
            <Menu {...defaultProps} highlightIndex={1} size="small">
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
        </Inline>
      ),
    },
    {
      label: 'With icon and reserving icon space',
      Example: () => (
        <Inline space="medium">
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
          <Box display="flex">
            <Menu
              {...defaultProps}
              highlightIndex={1}
              reserveIconSpace
              size="small"
            >
              <MenuItem onClick={() => {}} icon={<IconStar />}>
                Button
              </MenuItem>
              <MenuItem onClick={() => {}} icon={<IconBookmark />}>
                Button
              </MenuItem>
              <MenuItemLink href="#">Link</MenuItemLink>
            </Menu>
          </Box>
        </Inline>
      ),
    },
    {
      label: 'With icon and critical',
      Example: () => (
        <Inline space="medium">
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
          <Box display="flex">
            <Menu {...defaultProps} highlightIndex={1} size="small">
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
        </Inline>
      ),
    },
    {
      label: 'With badge',
      Example: () => (
        <Inline space="medium">
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
          <Box display="flex">
            <Menu {...defaultProps} highlightIndex={1} size="small">
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
        </Inline>
      ),
    },
    {
      label: 'Overflow tests in content width menu (no truncation)',
      Example: () => (
        <Inline space="medium">
          <Box display="flex">
            <Menu {...defaultProps} highlightIndex={1} width="content">
              <MenuItem onClick={() => {}}>
                Really long menu item text that should truncate
              </MenuItem>
              <MenuItem onClick={() => {}} icon={<IconBookmark />}>
                Really long menu item text that should truncate
              </MenuItem>
              <MenuItemLink
                href="#"
                badge={<Badge weight="strong">Badge</Badge>}
              >
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
          <Box display="flex">
            <Menu
              {...defaultProps}
              highlightIndex={1}
              width="content"
              size="small"
            >
              <MenuItem onClick={() => {}}>
                Really long menu item text that should truncate
              </MenuItem>
              <MenuItem onClick={() => {}} icon={<IconBookmark />}>
                Really long menu item text that should truncate
              </MenuItem>
              <MenuItemLink
                href="#"
                badge={<Badge weight="strong">Badge</Badge>}
              >
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
        </Inline>
      ),
    },
    {
      label: 'Overflow tests in small width menu',
      Example: () => (
        <Inline space="medium">
          <Box display="flex">
            <Menu {...defaultProps} highlightIndex={1} width="small">
              <MenuItem onClick={() => {}}>
                Really long menu item text that should truncate
              </MenuItem>
              <MenuItem onClick={() => {}} icon={<IconBookmark />}>
                Really long menu item text that should truncate
              </MenuItem>
              <MenuItemLink
                href="#"
                badge={<Badge weight="strong">Badge</Badge>}
              >
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
          <Box display="flex">
            <Menu
              {...defaultProps}
              highlightIndex={1}
              width="small"
              size="small"
            >
              <MenuItem onClick={() => {}}>
                Really long menu item text that should truncate
              </MenuItem>
              <MenuItem onClick={() => {}} icon={<IconBookmark />}>
                Really long menu item text that should truncate
              </MenuItem>
              <MenuItemLink
                href="#"
                badge={<Badge weight="strong">Badge</Badge>}
              >
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
        </Inline>
      ),
    },
    {
      label: 'Overflow tests in medium width menu',
      Example: () => (
        <Inline space="medium">
          <Box display="flex">
            <Menu {...defaultProps} highlightIndex={1} width="medium">
              <MenuItem onClick={() => {}}>
                Really long menu item text that should truncate
              </MenuItem>
              <MenuItem onClick={() => {}} icon={<IconBookmark />}>
                Really long menu item text that should truncate
              </MenuItem>
              <MenuItemLink
                href="#"
                badge={<Badge weight="strong">Badge</Badge>}
              >
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
          <Box display="flex">
            <Menu
              {...defaultProps}
              highlightIndex={1}
              width="medium"
              size="small"
            >
              <MenuItem onClick={() => {}}>
                Really long menu item text that should truncate
              </MenuItem>
              <MenuItem onClick={() => {}} icon={<IconBookmark />}>
                Really long menu item text that should truncate
              </MenuItem>
              <MenuItemLink
                href="#"
                badge={<Badge weight="strong">Badge</Badge>}
              >
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
        </Inline>
      ),
    },
    {
      label: 'Overflow tests in large width menu',
      Example: () => (
        <Inline space="medium">
          <Box display="flex">
            <Menu {...defaultProps} highlightIndex={1} width="large">
              <MenuItem onClick={() => {}}>
                Really long menu item text that should truncate
              </MenuItem>
              <MenuItem onClick={() => {}} icon={<IconBookmark />}>
                Really long menu item text that should truncate
              </MenuItem>
              <MenuItemLink
                href="#"
                badge={<Badge weight="strong">Badge</Badge>}
              >
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
          <Box display="flex">
            <Menu
              {...defaultProps}
              highlightIndex={1}
              width="large"
              size="small"
            >
              <MenuItem onClick={() => {}}>
                Really long menu item text that should truncate
              </MenuItem>
              <MenuItem onClick={() => {}} icon={<IconBookmark />}>
                Really long menu item text that should truncate
              </MenuItem>
              <MenuItemLink
                href="#"
                badge={<Badge weight="strong">Badge</Badge>}
              >
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
        </Inline>
      ),
    },
  ],
};
