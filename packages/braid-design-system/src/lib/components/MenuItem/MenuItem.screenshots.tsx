import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { setChromatic } from 'braid-storybook/chromatic';

import {
  Badge,
  MenuItem,
  MenuItemLink,
  IconBookmark,
  IconStar,
  IconThumb,
  Inline,
} from '../';
import { Menu } from '../MenuRenderer/MenuRenderer';

const meta = {
  title: 'Components/MenuItem',
  component: MenuItem,
  parameters: {
    chromatic: setChromatic({ viewports: ['tablet'] }),
  },
} satisfies Meta<typeof MenuItem>;

export default meta;
type Story = StoryObj<typeof MenuItem>;

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
        <MenuItem onClick={() => {}}>Button</MenuItem>
        <MenuItemLink href="#">Link</MenuItemLink>
      </Menu>
      <Menu {...defaultProps} size="small">
        <MenuItem onClick={() => {}}>Button</MenuItem>
        <MenuItemLink href="#">Link</MenuItemLink>
      </Menu>
    </Inline>
  ),
};

export const HighlightedButton: Story = {
  name: 'Highlighted button',
  render: () => (
    <Inline space="medium">
      <Menu {...defaultProps} highlightIndex={0}>
        <MenuItem onClick={() => {}}>Button</MenuItem>
        <MenuItemLink href="#">Link</MenuItemLink>
      </Menu>
      <Menu {...defaultProps} highlightIndex={0} size="small">
        <MenuItem onClick={() => {}}>Button</MenuItem>
        <MenuItemLink href="#">Link</MenuItemLink>
      </Menu>
    </Inline>
  ),
};

export const HighlightedLink: Story = {
  name: 'Highlighted link',
  render: () => (
    <Inline space="medium">
      <Menu {...defaultProps} highlightIndex={1}>
        <MenuItem onClick={() => {}}>Button</MenuItem>
        <MenuItemLink href="#">Link</MenuItemLink>
      </Menu>
      <Menu {...defaultProps} highlightIndex={1} size="small">
        <MenuItem onClick={() => {}}>Button</MenuItem>
        <MenuItemLink href="#">Link</MenuItemLink>
      </Menu>
    </Inline>
  ),
};

export const Critical: Story = {
  render: () => (
    <Inline space="medium">
      <Menu {...defaultProps}>
        <MenuItem onClick={() => {}}>Default</MenuItem>
        <MenuItem onClick={() => {}} tone="critical">
          Button
        </MenuItem>
        <MenuItemLink href="#" tone="critical">
          Link
        </MenuItemLink>
      </Menu>
      <Menu {...defaultProps} size="small">
        <MenuItem onClick={() => {}}>Default</MenuItem>
        <MenuItem onClick={() => {}} tone="critical">
          Button
        </MenuItem>
        <MenuItemLink href="#" tone="critical">
          Link
        </MenuItemLink>
      </Menu>
    </Inline>
  ),
};

export const HighlightedCriticalButton: Story = {
  name: 'Highlighted critical button',
  render: () => (
    <Inline space="medium">
      <Menu {...defaultProps} highlightIndex={0}>
        <MenuItem onClick={() => {}} tone="critical">
          Button
        </MenuItem>
        <MenuItemLink href="#">Link</MenuItemLink>
      </Menu>
      <Menu {...defaultProps} highlightIndex={0} size="small">
        <MenuItem onClick={() => {}} tone="critical">
          Button
        </MenuItem>
        <MenuItemLink href="#">Link</MenuItemLink>
      </Menu>
    </Inline>
  ),
};

export const HighlightedCriticalLink: Story = {
  name: 'Highlighted critical link',
  render: () => (
    <Inline space="medium">
      <Menu {...defaultProps} highlightIndex={1}>
        <MenuItem onClick={() => {}}>Button</MenuItem>
        <MenuItemLink href="#" tone="critical">
          Link
        </MenuItemLink>
      </Menu>
      <Menu {...defaultProps} highlightIndex={1} size="small">
        <MenuItem onClick={() => {}}>Button</MenuItem>
        <MenuItemLink href="#" tone="critical">
          Link
        </MenuItemLink>
      </Menu>
    </Inline>
  ),
};

export const WithIcon: Story = {
  name: 'With icon',
  render: () => (
    <Inline space="medium">
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
    </Inline>
  ),
};

export const WithIconAndReservingSpace: Story = {
  name: 'With icon and reserving icon space',
  render: () => (
    <Inline space="medium">
      <Menu {...defaultProps} highlightIndex={1} reserveIconSpace>
        <MenuItem onClick={() => {}} icon={<IconStar />}>
          Button
        </MenuItem>
        <MenuItem onClick={() => {}} icon={<IconBookmark />}>
          Button
        </MenuItem>
        <MenuItemLink href="#">Link</MenuItemLink>
      </Menu>
      <Menu {...defaultProps} highlightIndex={1} reserveIconSpace size="small">
        <MenuItem onClick={() => {}} icon={<IconStar />}>
          Button
        </MenuItem>
        <MenuItem onClick={() => {}} icon={<IconBookmark />}>
          Button
        </MenuItem>
        <MenuItemLink href="#">Link</MenuItemLink>
      </Menu>
    </Inline>
  ),
};

export const WithIconAndCritical: Story = {
  name: 'With icon and critical',
  render: () => (
    <Inline space="medium">
      <Menu {...defaultProps} highlightIndex={1}>
        <MenuItem onClick={() => {}} icon={<IconStar />}>
          Button
        </MenuItem>
        <MenuItem onClick={() => {}} icon={<IconBookmark />} tone="critical">
          Button
        </MenuItem>
        <MenuItemLink href="#" icon={<IconThumb />} tone="critical">
          Link
        </MenuItemLink>
      </Menu>
      <Menu {...defaultProps} highlightIndex={1} size="small">
        <MenuItem onClick={() => {}} icon={<IconStar />}>
          Button
        </MenuItem>
        <MenuItem onClick={() => {}} icon={<IconBookmark />} tone="critical">
          Button
        </MenuItem>
        <MenuItemLink href="#" icon={<IconThumb />} tone="critical">
          Link
        </MenuItemLink>
      </Menu>
    </Inline>
  ),
};

export const WithBadge: Story = {
  name: 'With badge',
  render: () => (
    <Inline space="medium">
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
    </Inline>
  ),
};

// Reusable component for overflow tests removed - components inlined to fix TypeScript error

export const OverflowInContentWidth: Story = {
  name: 'Overflow tests in content width menu (no truncation)',
  render: () => (
    <Inline space="medium">
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
      <Menu {...defaultProps} highlightIndex={1} width="content" size="small">
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
    </Inline>
  ),
};

export const OverflowInSmallWidth: Story = {
  name: 'Overflow tests in small width menu',
  render: () => (
    <Inline space="medium">
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
      <Menu {...defaultProps} highlightIndex={1} width="small" size="small">
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
    </Inline>
  ),
};

export const OverflowInMediumWidth: Story = {
  name: 'Overflow tests in medium width menu',
  render: () => (
    <Inline space="medium">
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
      <Menu {...defaultProps} highlightIndex={1} width="medium" size="small">
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
    </Inline>
  ),
};

export const OverflowInLargeWidth: Story = {
  name: 'Overflow tests in large width menu',
  render: () => (
    <Inline space="medium">
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
      <Menu {...defaultProps} highlightIndex={1} width="large" size="small">
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
    </Inline>
  ),
};
