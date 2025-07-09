import type { Meta, StoryObj } from '@storybook/react-webpack5';
import React from 'react';

import { makeBraidModes } from 'braid-storybook/modes';

import { Box, Card, Stack, Text } from '../';
import { Placeholder } from '../../playroom/components';

const meta = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    chromatic: {
      modes: makeBraidModes({
        viewports: ['mobile', 'tablet', 'desktop', 'wide'],
      }),
    },
  },
  argTypes: {
    tone: { control: 'select', options: ['promote', 'formAccent'] },
    rounded: { control: 'boolean' },
    roundedAbove: {
      control: 'select',
      options: ['mobile', 'tablet', 'desktop'],
    },
    height: { control: 'select', options: ['full', 'content'] },
  },
  args: {
    children: <Placeholder height={100} />,
  },
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  name: 'Default',
  args: {},
};

export const TonePromote: Story = {
  name: 'Tone - Promote',
  args: {
    tone: 'promote',
  },
};

export const ToneFormAccent: Story = {
  name: 'Tone - FormAccent',
  args: {
    tone: 'formAccent',
  },
};

export const Roundeddefault: Story = {
  name: 'Rounded - default',
  args: {},
};

export const Roundedtrue: Story = {
  name: 'Rounded - true',
  args: {
    rounded: true,
  },
};

export const RoundedAbovemobile: Story = {
  name: 'RoundedAbove - mobile',
  args: {
    roundedAbove: 'mobile',
  },
};

export const RoundedAbovetablet: Story = {
  name: 'RoundedAbove - tablet',
  args: {
    roundedAbove: 'tablet',
  },
};

export const RoundedAbovedesktop: Story = {
  name: 'RoundedAbove - desktop',
  args: {
    roundedAbove: 'desktop',
  },
};

export const Tonerounded: Story = {
  name: 'Tone & rounded',
  args: {
    tone: 'formAccent',
    rounded: true,
  },
};

export const Heightfull: Story = {
  name: 'Height full',
  args: {
    height: 'full',
    children: <Placeholder height={60} />,
  },
  decorators: (Story) => (
    <Box style={{ height: 300 }}>
      <Story />
    </Box>
  ),
};

export const Heightcontentdefault: Story = {
  name: 'Height content (default)',
  args: {
    height: 'content',
    children: <Placeholder height={60} />,
  },
  decorators: (Story) => (
    <Box style={{ height: 300 }}>
      <Story />
    </Box>
  ),
};

export const TestshouldbeleftalignedinacenteredStack: Story = {
  name: 'Test: should be left aligned in a centered Stack',
  args: {
    height: 'content',
    rounded: true,
    children: (
      <Text>
        Enim elit eu et culpa non esse voluptate labore in ea. Incididunt irure
        aliquip cillum occaecat irure.
      </Text>
    ),
  },
  decorators: (Story) => (
    <Stack space="large" align="center">
      <Story />
    </Stack>
  ),
};
