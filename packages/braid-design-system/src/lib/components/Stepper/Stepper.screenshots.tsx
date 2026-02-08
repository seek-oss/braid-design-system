import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { setChromatic } from 'braid-storybook/chromatic';

import { Stepper, Step } from '../';

const meta = {
  title: 'Components/Stepper',
  component: Stepper,
  parameters: {
    chromatic: setChromatic({ viewports: ['mobile', 'tablet'] }),
  },
} satisfies Meta<typeof Stepper>;

export default meta;
type Story = StoryObj<typeof Stepper>;

export const Linear: Story = {
  args: {
    label: 'Linear steps',
    progress: 3,
    children: [
      <Step key="1">1. First step</Step>,
      <Step key="2">2. Second step</Step>,
      <Step key="3">3. Third step</Step>,
      <Step key="4">4. Forth step</Step>,
    ],
  },
};

export const NonLinear: Story = {
  name: 'Non-linear',
  args: {
    mode: 'non-linear',
    label: 'Non-linear steps',
    activeStep: 2,
    children: [
      <Step key="1">1. First step</Step>,
      <Step key="2">2. Second step</Step>,
      <Step key="3">3. Third step</Step>,
      <Step key="4" complete>
        4. Forth step
      </Step>,
    ],
  },
};

export const Neutral: Story = {
  args: {
    label: 'Linear steps',
    tone: 'neutral',
    progress: 3,
    children: [
      <Step key="1">1. First step</Step>,
      <Step key="2">2. Second step</Step>,
      <Step key="3">3. Third step</Step>,
      <Step key="4">4. Forth step</Step>,
    ],
  },
};

export const LeftAligned: Story = {
  name: 'Left aligned',
  args: {
    label: 'Linear steps',
    align: 'left',
    progress: 3,
    children: [
      <Step key="1">1. First step</Step>,
      <Step key="2">2. Second step</Step>,
      <Step key="3">3. Third step</Step>,
      <Step key="4">4. Forth step</Step>,
    ],
  },
};
