import React from 'react';
import type { ComponentScreenshot } from 'site/types';

import { Badge, Inline, MenuItemCheckbox } from '../';
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
  placement: 'bottom',
  reserveIconSpace: false,
} as const;

export const screenshots: ComponentScreenshot = {
  screenshotWidths: [768],
  examples: [
    {
      label: 'Default',
      Example: () => (
        <Inline space="medium">
          <Menu {...defaultProps}>
            <MenuItemCheckbox checked={false} onChange={() => {}}>
              Checkbox
            </MenuItemCheckbox>
            <MenuItemCheckbox checked={true} onChange={() => {}}>
              Checkbox
            </MenuItemCheckbox>
          </Menu>
          <Menu {...defaultProps} size="small">
            <MenuItemCheckbox checked={false} onChange={() => {}}>
              Checkbox
            </MenuItemCheckbox>
            <MenuItemCheckbox checked={true} onChange={() => {}}>
              Checkbox
            </MenuItemCheckbox>
          </Menu>
        </Inline>
      ),
    },
    {
      label: 'Highlighted',
      Example: () => (
        <Inline space="medium">
          <Menu {...defaultProps} highlightIndex={0}>
            <MenuItemCheckbox checked={false} onChange={() => {}}>
              Checkbox
            </MenuItemCheckbox>
            <MenuItemCheckbox checked={true} onChange={() => {}}>
              Checkbox
            </MenuItemCheckbox>
          </Menu>
          <Menu {...defaultProps} highlightIndex={0} size="small">
            <MenuItemCheckbox checked={false} onChange={() => {}}>
              Checkbox
            </MenuItemCheckbox>
            <MenuItemCheckbox checked={true} onChange={() => {}}>
              Checkbox
            </MenuItemCheckbox>
          </Menu>
        </Inline>
      ),
    },
    {
      label: 'With badge',
      Example: () => (
        <Inline space="medium">
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
          <Menu {...defaultProps} highlightIndex={1} size="small">
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
        </Inline>
      ),
    },
    {
      label: 'Overflow tests in content width menu (no truncation)',
      Example: () => (
        <Inline space="medium">
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
          <Menu
            {...defaultProps}
            highlightIndex={1}
            width="content"
            size="small"
          >
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
        </Inline>
      ),
    },
    {
      label: 'Overflow tests in small width menu',
      Example: () => (
        <Inline space="medium">
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
          <Menu {...defaultProps} highlightIndex={1} width="small" size="small">
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
        </Inline>
      ),
    },
    {
      label: 'Overflow tests in medium width menu',
      Example: () => (
        <Inline space="medium">
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
          <Menu
            {...defaultProps}
            highlightIndex={1}
            width="medium"
            size="small"
          >
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
        </Inline>
      ),
    },
    {
      label: 'Overflow tests in large width menu',
      Example: () => (
        <Inline space="medium">
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
          <Menu {...defaultProps} highlightIndex={1} width="large" size="small">
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
        </Inline>
      ),
    },
  ],
};
