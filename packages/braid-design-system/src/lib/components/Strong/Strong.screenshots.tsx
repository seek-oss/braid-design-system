import type { Meta, StoryObj } from '@storybook/react';

import { Strong, Text } from '../';

const meta = {
  title: 'Components/Strong',
  component: Strong,
  parameters: {
    screenshotOnlyInWireframe: false,
  },
  decorators: [
    (Story) => (
      <Text>
        The last word of this sentence is <Story />
      </Text>
    ),
  ],
} satisfies Meta<typeof Strong>;

export default meta;
type Story = StoryObj<typeof Strong>;

export const StrongExample1: Story = {
  name: 'StrongExample1',
  args: {
    children: 'strong.',
  },
  parameters: {
    chromatic: {
      viewports: [320],
    },
    layout: 'fullscreen',
  },
};
