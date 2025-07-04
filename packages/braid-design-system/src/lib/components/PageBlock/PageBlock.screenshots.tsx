import type { Meta, StoryObj } from '@storybook/react-webpack5';
import React from 'react';

import { Box, PageBlock } from '../';
import { Placeholder } from '../private/Placeholder/Placeholder';

const meta = {
  title: 'Components/PageBlock',
  component: PageBlock,
  parameters: {
    screenshotOnlyInWireframe: false,
    chromatic: {
      viewports: [320, 1200],
    },
  },
  argTypes: {
    width: {
      control: 'select',
      options: ['small', 'medium', 'large', 'full'],
      description: 'Width of the content block',
    },
    component: {
      control: 'select',
      options: ['div', 'article', 'aside', 'main', 'section', 'nav'],
      description: 'HTML element to render the component as',
    },
    children: {
      description: 'Content to display within the page block',
    },
  },
  args: {
    width: 'large',
    component: 'div',
    children: <Placeholder height={100} />,
  },
} satisfies Meta<typeof PageBlock>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Default',
};

export const Small: Story = {
  name: 'Small',
  args: {
    width: 'small',
  },
};

export const Medium: Story = {
  name: 'Medium',
  args: {
    width: 'medium',
  },
};

export const Large: Story = {
  name: 'Large',
  args: {
    width: 'large',
  },
};

export const Full: Story = {
  name: 'Full',
  args: {
    width: 'full',
  },
};

export const InsideFlexContainer: Story = {
  name: 'Inside flex container',
  args: {
    width: 'medium',
  },
  decorators: (Story) => (
    <Box display="flex">
      <Story />
    </Box>
  ),
};
