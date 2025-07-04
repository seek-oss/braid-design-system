import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { FieldMessage, Stack } from '../';

const meta = {
  title: 'Components/FieldMessage',
  component: FieldMessage,
  parameters: {
    screenshotOnlyInWireframe: false,
  },
} satisfies Meta<typeof FieldMessage>;

export default meta;
type Story = StoryObj<typeof FieldMessage>;

export const Critical: Story = {
  name: 'Critical Field Message',
  render: () => (
    <FieldMessage tone="critical" message="This is a critical message." />
  ),
  parameters: {
     ,
  },
};

export const Positive: Story = {
  name: 'Positive Field Message',
  render: () => (
    <FieldMessage tone="positive" message="This is a positive message." />
  ),
  parameters: {
     ,
  },
};

export const Caution: Story = {
  name: 'Caution Field Message',
  render: () => (
    <FieldMessage tone="caution" message="This is a caution message." />
  ),
  parameters: {
     ,
  },
};

export const Neutral: Story = {
  name: 'Neutral Field Message',
  render: () => <FieldMessage message="This is a neutral message." />,
  parameters: {
     ,
  },
};

export const CriticalLongMessage: Story = {
  name: 'Critical with long (wrapping) message',
  render: () => (
    <FieldMessage
      tone="critical"
      message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sodales hendrerit nulla."
    />
  ),
  parameters: {
     ,
  },
};

export const LeftAlignedInCenteredStack: Story = {
  name: 'Test: should be left aligned in a centered Stack',
  render: () => (
    <Stack space="large" align="center">
      <FieldMessage
        tone="critical"
        message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sodales hendrerit nulla."
      />
    </Stack>
  ),
  parameters: {
     ,
  },
};
