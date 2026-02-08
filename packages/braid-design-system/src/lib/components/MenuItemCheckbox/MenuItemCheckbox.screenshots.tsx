import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { setChromatic } from 'braid-storybook/chromatic';

import { Badge, Inline, MenuItemCheckbox } from '../';
import { Menu } from '../MenuRenderer/MenuRenderer';

const meta = {
  title: 'Components/MenuItemCheckbox',
  component: MenuItemCheckbox,
  parameters: {
    chromatic: setChromatic({ viewports: ['tablet'] }),
  },
} satisfies Meta<typeof MenuItemCheckbox>;

export default meta;
type Story = StoryObj<typeof MenuItemCheckbox>;

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

export const Default: Story = {
  render: () => (
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
};

export const Highlighted: Story = {
  render: () => (
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
};

export const WithBadge: Story = {
  name: 'With badge',
  render: () => (
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
};

export const OverflowContentWidth: Story = {
  name: 'Overflow tests in content width menu (no truncation)',
  render: () => (
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
      <Menu {...defaultProps} highlightIndex={1} width="content" size="small">
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
};

export const OverflowSmallWidth: Story = {
  name: 'Overflow tests in small width menu',
  render: () => (
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
};

export const OverflowMediumWidth: Story = {
  name: 'Overflow tests in medium width menu',
  render: () => (
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
      <Menu {...defaultProps} highlightIndex={1} width="medium" size="small">
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
};

export const OverflowLargeWidth: Story = {
  name: 'Overflow tests in large width menu',
  render: () => (
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
};
