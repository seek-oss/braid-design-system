/* eslint-disable no-console */
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import type React from 'react';

import { Box, OverflowMenu, MenuItem, MenuItemLink } from '../';

const meta = {
  title: 'Components/OverflowMenu',
  component: OverflowMenu,
  parameters: {
    screenshotOnlyInWireframe: false,
     ,
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Accessible label for the overflow menu button',
    },
    size: {
      control: 'radio',
      options: ['standard', 'small'],
      description: 'Size of the overflow menu button and items',
    },
    id: {
      control: 'text',
      description: 'ID for the button (recommended for accessibility)',
    },
    width: {
      control: 'select',
      options: ['content', 'small', 'medium', 'large'],
      description: 'Width of the menu dropdown',
    },
    placement: {
      control: 'radio',
      options: ['top', 'bottom'],
      description: 'Placement of the menu dropdown',
    },
    reserveIconSpace: {
      control: 'boolean',
      description: 'Whether to reserve space for icons in menu items',
    },
  },
  args: {
    label: 'Options',
    size: 'standard',
    id: 'overflow-menu-example',
    width: 'content',
    placement: 'bottom',
    reserveIconSpace: false,
    children: (
      <>
        <MenuItem onClick={() => console.log('Button clicked')}>
          Button
        </MenuItem>
        <MenuItemLink href="#" onClick={() => console.log('Link clicked')}>
          Link
        </MenuItemLink>
      </>
    ),
  },
  decorators: [
    (Story) => (
      <Box style={{ maxWidth: '100px' }}>
        <Story />
      </Box>
    ),
  ],
} satisfies Meta<typeof OverflowMenu>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Default',
  args: {
    label: 'Options',
    size: 'standard',
  },
};

export const Small: Story = {
  name: 'Small',
  args: {
    label: 'Options',
    size: 'small',
  },
};
