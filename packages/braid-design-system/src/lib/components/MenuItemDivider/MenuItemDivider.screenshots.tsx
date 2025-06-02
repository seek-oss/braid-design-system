import type { Meta, StoryObj } from '@storybook/react';

import { Inline, MenuItem, MenuItemCheckbox, MenuItemDivider } from '../';
import { Menu } from '../MenuRenderer/MenuRenderer';

const meta = {
  title: 'Components/MenuItemDivider',
  component: MenuItemDivider,
  parameters: {
    screenshotOnlyInWireframe: false,
  },
} satisfies Meta<typeof MenuItemDivider>;

export default meta;
type Story = StoryObj<typeof MenuItemDivider>;

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

// Common parameters for all stories
const commonParameters = {
  chromatic: {
    viewports: [320],
  },
  layout: 'fullscreen',
};

export const Default: Story = {
  name: 'Default',
  render: () => (
    <Inline space="medium">
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
      <Menu {...defaultProps} size="small">
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
    </Inline>
  ),
  parameters: commonParameters,
};

export const HighlightedBeforeDivider: Story = {
  name: 'Highlighted before divider',
  render: () => (
    <Inline space="medium">
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
      <Menu {...defaultProps} size="small" highlightIndex={1}>
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
    </Inline>
  ),
  parameters: commonParameters,
};

export const HighlightedAfterDivider: Story = {
  name: 'Highlighted after divider',
  render: () => (
    <Inline space="medium">
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
      <Menu {...defaultProps} size="small" highlightIndex={2}>
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
    </Inline>
  ),
  parameters: commonParameters,
};
