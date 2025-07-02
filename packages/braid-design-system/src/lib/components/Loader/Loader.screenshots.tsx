import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { Loader } from '../';
import { BackgroundContrastTest } from '../../utils/BackgroundContrastTest';

const meta = {
  title: 'Components/Loader',
  component: Loader,
  parameters: {
    screenshotOnlyInWireframe: false,
  },
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof Loader>;

const commonParameters = {
  chromatic: {
    viewports: [320],
  },
  layout: 'fullscreen',
};

export const Default: Story = {
  args: {},
  name: 'Default',
  parameters: commonParameters,
};

export const DelayVisibility: Story = {
  args: {
    delayVisibility: true,
  },
  name: 'Delay visibility (used to prevent loading flicker)',
  parameters: commonParameters,
};

export const XSmall: Story = {
  args: {
    size: 'xsmall',
  },
  name: 'xsmall',
  parameters: commonParameters,
};

export const Small: Story = {
  args: {
    size: 'small',
  },
  name: 'small',
  parameters: commonParameters,
};

export const Standard: Story = {
  args: {
    size: 'standard',
  },
  name: 'standard',
  parameters: commonParameters,
};

export const Large: Story = {
  args: {
    size: 'large',
  },
  name: 'large',
  parameters: commonParameters,
};

export const Contrast: Story = {
  render: () => (
    <BackgroundContrastTest>
      <Loader />
    </BackgroundContrastTest>
  ),
  name: 'Loader Contrast',
  parameters: commonParameters,
};
