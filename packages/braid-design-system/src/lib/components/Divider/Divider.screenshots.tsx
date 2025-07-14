import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { Divider } from '../';

const meta = {
  title: 'Components/Divider',
  component: Divider,
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof Divider>;

export const Regular: Story = {
  name: 'Regular Divider',
};

export const Strong: Story = {
  name: 'Strong Divider',
  args: {
    weight: 'strong',
  },
};
