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
  render: () => (
    <Text>
      A <Secondary>secondary</Secondary> example.
    </Text>
  ),
};

export const InsideTextwithanicon: Story = {
  name: 'Inside Text with an icon',
  render: () => (
    <Text>
      A{' '}
      <Secondary>
        secondary <IconHome />
      </Secondary>{' '}
      example.
    </Text>
  ),
};

export const InsideHeading: Story = {
  name: 'Inside Heading',
  render: () => (
    <Heading level="3">
      A <Secondary>secondary</Secondary> example.
    </Heading>
  ),
};

export const InsideHeadingwithanicon: Story = {
  name: 'Inside Heading with an icon',
  render: () => (
    <Heading level="3">
      A{' '}
      <Secondary>
        secondary <IconHome />
      </Secondary>{' '}
      example.
    </Heading>
  ),
};
