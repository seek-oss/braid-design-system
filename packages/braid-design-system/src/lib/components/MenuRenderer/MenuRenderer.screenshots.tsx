import type { Meta, StoryObj } from '@storybook/react';
import { calc } from '@vanilla-extract/css-utils';
import React, { MutableRefObject, ReactNode, useRef } from 'react';

// !! Review this

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
import { vars } from '../../../entries/css';
import { Placeholder } from '../private/Placeholder/Placeholder';
import { debugTouchableAttrForDataProp } from '../private/touchable/debugTouchable';

import { Menu } from './MenuRenderer';
import { Popover, PopoverProps } from '../private/Popover/Popover';

// Constants for stories
const triggerHeight = 44;
const triggerPosition = {
  top: 200,
  bottom: 200,
  left: 20,
  right: 20,
};
const menuDefaultProps = {
  dispatch: () => {},
  focusTrigger: () => {},
  highlightIndex: -1,
  align: 'left' as const,
  offsetSpace: 'none' as const,
  size: 'standard' as const,
  width: 'content' as const,
  placement: 'bottom' as const,
  reserveIconSpace: false,
  position: 'relative' as const,
};

const popoverDefaultProps = {
  open: true,
  lockPlacement: true,
  role: false,
} as const;

const PopoverWrapper = ({
  children,
  popoverPlacement,
}: {
  children: (props: {
    triggerRef: MutableRefObject<HTMLButtonElement | null>;
  }) => ReactNode;
  popoverPlacement: PopoverProps['placement'];
}) => {
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const wrapperPadding = calc(vars.touchableSize).multiply(2.5).toString();

  return (
    <Box
      display="flex"
      style={
        popoverPlacement === 'bottom'
          ? { paddingBottom: wrapperPadding }
          : { paddingTop: wrapperPadding }
      }
    >
      <Box ref={triggerRef}>
        <Placeholder label="Menu trigger" height={triggerHeight} />
      </Box>
      {children({ triggerRef })}
    </Box>
  );
};

const meta = {
  title: 'Components/MenuRenderer',
  component: MenuRenderer,
  parameters: {
    screenshotOnlyInWireframe: false,
    chromatic: {
      viewports: [320],
    },
    layout: 'fullscreen',
  },
  argTypes: {
    align: {
      control: 'radio',
      options: ['left', 'right'],
      description: 'Horizontal alignment of the menu relative to the trigger',
    },
    offsetSpace: {
      control: 'select',
      options: ['none', 'xsmall', 'small', 'medium', 'large', 'xlarge'],
      description: 'Space between the trigger and the menu',
    },
    size: {
      control: 'radio',
      options: ['standard', 'small'],
      description: 'Size of the menu items',
    },
    width: {
      control: 'select',
      options: ['content', 'small', 'medium', 'large'],
      description: 'Width of the menu',
    },
    placement: {
      control: 'radio',
      options: ['top', 'bottom'],
      description: 'Vertical placement of the menu relative to the trigger',
    },
    reserveIconSpace: {
      control: 'boolean',
      description: 'Whether to reserve space for icons in menu items',
    },
  },
  args: {
    align: 'left',
    offsetSpace: 'none',
    size: 'standard',
    width: 'content',
    placement: 'bottom',
    reserveIconSpace: false,
    onOpen: undefined,
    onClose: undefined,
    trigger: (triggerProps) => (
      <Box userSelect="none" cursor="pointer" {...triggerProps}>
        <Placeholder height={triggerHeight} label="Menu trigger" />
      </Box>
    ),
    children: (
      <>
        <MenuItem onClick={() => {}}>Button</MenuItem>
        <MenuItemLink href="#">Link</MenuItemLink>
      </>
    ),
  },
} satisfies Meta<typeof MenuRenderer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Default',
  render: (args) => (
    <Box style={{ maxWidth: '150px' }}>
      <MenuRenderer trigger={args.trigger} offsetSpace="small">
        <MenuItem onClick={() => {}}>Button</MenuItem>
        <MenuItemLink href="#">Link</MenuItemLink>
      </MenuRenderer>
    </Box>
  ),
  args: {
    offsetSpace: 'small',
  },
};

export const Rightaligned: Story = {
  name: 'Right aligned',
  render: (args) => (
    <Box style={{ maxWidth: '150px' }}>
      <MenuRenderer align="right" offsetSpace="small" trigger={args.trigger}>
        <MenuItem onClick={() => {}}>Button</MenuItem>
        <MenuItemLink href="#">Link</MenuItemLink>
      </MenuRenderer>
    </Box>
  ),
  args: {
    align: 'right',
    offsetSpace: 'small',
  },
};

export const Triggergrowstoparentlayout: Story = {
  name: 'Trigger grows to parent layout',
  render: (args) => (
    <MenuRenderer align="right" offsetSpace="small" trigger={args.trigger}>
      <MenuItem onClick={() => {}}>Button</MenuItem>
      <MenuItemLink href="#">Link</MenuItemLink>
    </MenuRenderer>
  ),
  args: {
    align: 'right',
    offsetSpace: 'small',
  },
};

export const Placementbottom: Story = {
  name: 'Placement bottom',
  render: ({ placement }) => {
    return (
      <PopoverWrapper popoverPlacement={placement}>
        {({ triggerRef }) => (
          <Popover
            {...popoverDefaultProps}
            triggerRef={triggerRef}
            placement={placement}
          >
            <Menu {...menuDefaultProps} placement="bottom">
              <MenuItem onClick={() => {}}>Item</MenuItem>
              <MenuItem onClick={() => {}}>Item</MenuItem>
            </Menu>
          </Popover>
        )}
      </PopoverWrapper>
    );
  },
  args: {
    placement: 'bottom',
  },
};

export const Placementbottomwithsmalloffset: Story = {
  name: 'Placement bottom with small offset',
  render: ({ placement }) => {
    return (
      <PopoverWrapper popoverPlacement={placement}>
        {({ triggerRef }) => (
          <Popover
            {...popoverDefaultProps}
            triggerRef={triggerRef}
            placement={placement}
            offsetSpace="small"
          >
            <Menu {...menuDefaultProps} placement="bottom">
              <MenuItem onClick={() => {}}>Item</MenuItem>
              <MenuItem onClick={() => {}}>Item</MenuItem>
            </Menu>
          </Popover>
        )}
      </PopoverWrapper>
    );
  },
  args: {
    placement: 'bottom',
    offsetSpace: 'small',
  },
};

export const Placementtop: Story = {
  name: 'Placement top',
  render: ({ placement }) => {
    return (
      <PopoverWrapper popoverPlacement={placement}>
        {({ triggerRef }) => (
          <Popover
            {...popoverDefaultProps}
            triggerRef={triggerRef}
            placement={placement}
          >
            <Menu {...menuDefaultProps} placement="top">
              <MenuItem onClick={() => {}}>Item</MenuItem>
              <MenuItem onClick={() => {}}>Item</MenuItem>
            </Menu>
          </Popover>
        )}
      </PopoverWrapper>
    );
  },
  args: {
    placement: 'top',
  },
};

export const Placementtopwithsmalloffset: Story = {
  name: 'Placement top with small offset',
  render: ({ placement }) => {
    return (
      <PopoverWrapper popoverPlacement={placement}>
        {({ triggerRef }) => (
          <Popover
            {...popoverDefaultProps}
            triggerRef={triggerRef}
            placement={placement}
            offsetSpace="small"
          >
            <Menu {...menuDefaultProps} placement="top">
              <MenuItem onClick={() => {}}>Item</MenuItem>
              <MenuItem onClick={() => {}}>Item</MenuItem>
            </Menu>
          </Popover>
        )}
      </PopoverWrapper>
    );
  },

  args: {
    placement: 'top',
    offsetSpace: 'small',
  },
};

export const Smallsizevirtualtouchtarget: Story = {
  name: 'Small size (virtual touch target)',
  render: () => (
    <Box
      display="flex"
      data={{
        [debugTouchableAttrForDataProp]: '',
      }}
    >
      <Menu {...menuDefaultProps} width="content" size="small">
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
  args: {
    size: 'small',
    width: 'content',
  },
};

export const Widthcontent: Story = {
  name: 'Width content',
  render: () => (
    <Inline space="medium">
      <Menu {...menuDefaultProps} width="content">
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
      <Menu {...menuDefaultProps} width="content" size="small">
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
  args: {
    width: 'content',
  },
};

export const Widthsmall: Story = {
  name: 'Width small',
  render: () => (
    <Inline space="medium">
      <Menu {...menuDefaultProps} width="small">
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
      <Menu {...menuDefaultProps} width="small" size="small">
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
  args: {
    width: 'small',
  },
};

export const Widthmedium: Story = {
  name: 'Width medium',
  render: () => (
    <Inline space="medium">
      <Menu {...menuDefaultProps} width="medium">
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
      <Menu {...menuDefaultProps} width="medium" size="small">
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
  args: {
    width: 'medium',
  },
};

export const Widthlarge: Story = {
  name: 'Width large',
  render: () => (
    <Inline space="medium">
      <Menu {...menuDefaultProps} width="large">
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
      <Menu {...menuDefaultProps} width="large" size="small">
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
  args: {
    width: 'large',
  },
};

export const Reserveiconspace: Story = {
  name: 'Reserve icon space',
  render: () => (
    <Inline space="medium">
      <Menu {...menuDefaultProps} reserveIconSpace>
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
      <Menu {...menuDefaultProps} reserveIconSpace size="small">
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
  args: {
    reserveIconSpace: true,
  },
};

export const Heightlimit: Story = {
  name: 'Height limit',
  render: () => (
    <Inline space="medium">
      <Menu {...menuDefaultProps}>
        {Array(19)
          .fill(0)
          .map((_, i) => (
            <MenuItem key={i} onClick={() => {}}>
              Button
            </MenuItem>
          ))}
      </Menu>
      <Menu {...menuDefaultProps} size="small">
        {Array(19)
          .fill(0)
          .map((_, i) => (
            <MenuItem key={i} onClick={() => {}}>
              Button
            </MenuItem>
          ))}
      </Menu>
    </Inline>
  ),
};
