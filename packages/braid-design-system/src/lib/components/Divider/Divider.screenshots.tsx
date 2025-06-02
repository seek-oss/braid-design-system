import type { Meta, StoryObj } from '@storybook/react';

import { Divider } from '../';

const meta = {
  title: 'Components/Divider',
  component: Divider,
  parameters: {
    screenshotOnlyInWireframe: false,
  },
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof Divider>;

export const Regular: Story = {
  name: 'Regular Divider',
  render: () => <Divider />,
  parameters: {
    chromatic: {
      viewports: [320],
    },
    layout: 'fullscreen',
  },
};

export const Strong: Story = {
  name: 'Strong Divider',
  render: () => <Divider weight="strong" />,
  parameters: {
    chromatic: {
      viewports: [320],
    },
    layout: 'fullscreen',
  },
};
