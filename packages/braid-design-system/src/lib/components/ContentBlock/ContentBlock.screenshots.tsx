import type { Meta, StoryObj } from '@storybook/react-webpack5';
import React from 'react';

import { makeBraidModes } from 'braid-storybook/modes';

import { Box, ContentBlock } from '../';
import { Placeholder } from '../private/Placeholder/Placeholder';

const meta = {
  title: 'Components/ContentBlock',
  component: ContentBlock,
  parameters: {
    // screenshotOnlyInWireframe: false,
    chromatic: {
      modes: makeBraidModes({ viewports: ['xsmall', 'large'] }),
    },
  },
  argTypes: {
    width: {
      control: 'select',
      options: ['xsmall', 'small', 'medium', 'large'],
      description: 'Maximum width of the content block',
    },
    align: {
      control: 'radio',
      options: ['left', 'center'],
      description: 'Horizontal alignment of the content block',
    },
  },
  args: {
    width: 'medium',
    align: 'center',
    children: <Placeholder height={100} />,
  },
} satisfies Meta<typeof ContentBlock>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Defaultwidth: Story = {
  name: 'Default width',
  args: {
    children: <Placeholder height={100} />,
  },
};

export const Xsmallwidth: Story = {
  name: 'Xsmall width',
  args: {
    width: 'xsmall',
    children: <Placeholder height={100} />,
  },
};

export const Smallwidth: Story = {
  name: 'Small width',
  args: {
    width: 'small',
    children: <Placeholder height={100} />,
  },
};

export const Mediumwidth: Story = {
  name: 'Medium width',
  args: {
    width: 'medium',
    children: <Placeholder height={100} />,
  },
};

export const Largewidth: Story = {
  name: 'Large width',
  args: {
    width: 'large',
    children: <Placeholder height={100} />,
  },
};

export const Alignleft: Story = {
  name: 'Align left',
  args: {
    width: 'xsmall',
    align: 'left',
    children: <Placeholder height={100} />,
  },
};

export const InsideFlexContainer: Story = {
  name: 'Inside flex container',
  args: {
    width: 'xsmall',
    children: <Placeholder height={100} />,
  },
  decorators: (Story) => (
    <Box display="flex">
      <Story />
    </Box>
  ),
};
