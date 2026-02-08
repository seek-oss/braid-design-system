import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { setChromatic } from 'braid-storybook/chromatic';

import { Box, Card, Stack, Text } from '../';
import { Placeholder } from '../../playroom/components';

const meta = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    chromatic: setChromatic({
      viewports: ['mobile', 'tablet', 'desktop', 'wide'],
    }),
  },
  argTypes: {
    tone: { control: 'select', options: ['promote', 'formAccent'] },
    height: { control: 'select', options: ['full', 'content'] },
  },
  args: {
    children: <Placeholder height={100} />,
  },
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
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

export const HeightFull: Story = {
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

export const HeightContentDefault: Story = {
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

export const TestShouldBeLeftAlignedInACenteredStack: Story = {
  name: 'Test: should be left aligned in a centered Stack',
  args: {
    height: 'content',
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
