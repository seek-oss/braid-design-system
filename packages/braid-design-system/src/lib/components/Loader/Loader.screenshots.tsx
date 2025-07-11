import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { Loader } from '../';
import { BackgroundContrastTest } from '../../utils/BackgroundContrastTest';

const meta = {
  title: 'Components/Loader',
  component: Loader,
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof Loader>;

export const Default: Story = {
  args: {},
};

export const DelayVisibility: Story = {
  args: {
    delayVisibility: true,
  },
  name: 'Delay visibility (used to prevent loading flicker)',
};

export const XSmall: Story = {
  args: {
    size: 'xsmall',
  },
  name: 'xsmall',
};

export const Small: Story = {
  args: {
    size: 'small',
  },
  name: 'small',
};

export const Standard: Story = {
  args: {
    size: 'standard',
  },
  name: 'standard',
};

export const Large: Story = {
  args: {
    size: 'large',
  },
  name: 'large',
};

export const Contrast: Story = {
  decorators: (Story) => (
    <BackgroundContrastTest>
      <Story />
    </BackgroundContrastTest>
  ),
  name: 'Loader Contrast',
};
