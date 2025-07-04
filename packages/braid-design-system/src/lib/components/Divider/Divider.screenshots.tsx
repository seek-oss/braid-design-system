import type { Meta, StoryObj } from '@storybook/react-webpack5';

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
     ,
  },
};

export const Strong: Story = {
  name: 'Strong Divider',
  render: () => <Divider weight="strong" />,
  parameters: {
     ,
  },
};
