import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { Secondary, Text, IconHome, Heading } from '../';

const meta = {
  title: 'Components/Secondary',
  component: Secondary,
} satisfies Meta<typeof Secondary>;

export default meta;
type Story = StoryObj<typeof Secondary>;

export const InsideText: Story = {
  name: 'Inside Text',
  args: {
    children: 'secondary',
  },
  decorators: (Story) => (
    <Text>
      A <Story /> example.
    </Text>
  ),
};

export const InsideTextwithanicon: Story = {
  name: 'Inside Text with an icon',
  args: {
    children: (
      <>
        secondary <IconHome />
      </>
    ),
  },
  decorators: (Story) => (
    <Text>
      A <Story /> example.
    </Text>
  ),
};

export const InsideHeading: Story = {
  name: 'Inside Heading',
  args: {
    children: 'secondary',
  },
  decorators: (Story) => (
    <Heading level="3">
      A <Story /> example.
    </Heading>
  ),
};

export const InsideHeadingwithanicon: Story = {
  name: 'Inside Heading with an icon',
  args: {
    children: (
      <>
        secondary <IconHome />
      </>
    ),
  },
  decorators: (Story) => (
    <Heading level="3">
      A <Story /> example.
    </Heading>
  ),
};
