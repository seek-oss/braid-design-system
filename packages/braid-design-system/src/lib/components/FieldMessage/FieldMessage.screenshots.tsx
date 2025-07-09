import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { FieldMessage, Stack } from '../';

const meta = {
  title: 'Components/FieldMessage',
  args: {
    message: 'This is a field message.',
    tone: 'neutral',
  },
  component: FieldMessage,
} satisfies Meta<typeof FieldMessage>;

export default meta;
type Story = StoryObj<typeof FieldMessage>;

export const Critical: Story = {
  name: 'Critical Field Message',
  args: {
    tone: 'critical',
    message: 'This is a critical message.',
  },
};

export const Positive: Story = {
  name: 'Positive Field Message',
  args: {
    tone: 'positive',
    message: 'This is a positive message.',
  },
};

export const Caution: Story = {
  name: 'Caution Field Message',
  args: {
    tone: 'caution',
    message: 'This is a caution message.',
  },
};

export const Neutral: Story = {
  name: 'Neutral Field Message',
  args: {
    tone: 'neutral',
    message: 'This is a neutral message.',
  },
};

export const CriticalLongMessage: Story = {
  name: 'Critical with long (wrapping) message',
  args: {
    tone: 'critical',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sodales hendrerit nulla.',
  },
};

export const LeftAlignedInCenteredStack: Story = {
  name: 'Test: should be left aligned in a centered Stack',
  args: {
    tone: 'critical',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sodales hendrerit nulla.',
  },
  decorators: (Story) => (
    <Stack space="large" align="center">
      <Story />
    </Stack>
  ),
};
