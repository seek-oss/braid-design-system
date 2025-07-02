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

// Unique ID for field message examples
const id = 'field-message-example';

export const Critical: Story = {
  name: 'Critical Field Message',
  render: () => (
    <FieldMessage
      id={id}
      tone="critical"
      message="This is a critical message."
    />
  ),
  parameters: {
    chromatic: {
      viewports: [320],
    },
    layout: 'fullscreen',
  },
};

export const Positive: Story = {
  name: 'Positive Field Message',
  render: () => (
    <FieldMessage
      id={id}
      tone="positive"
      message="This is a positive message."
    />
  ),
  parameters: {
    chromatic: {
      viewports: [320],
    },
    layout: 'fullscreen',
  },
};

export const Caution: Story = {
  name: 'Caution Field Message',
  render: () => (
    <FieldMessage id={id} tone="caution" message="This is a caution message." />
  ),
  parameters: {
    chromatic: {
      viewports: [320],
    },
    layout: 'fullscreen',
  },
};

export const Neutral: Story = {
  name: 'Neutral Field Message',
  render: () => <FieldMessage id={id} message="This is a neutral message." />,
  parameters: {
    chromatic: {
      viewports: [320],
    },
    layout: 'fullscreen',
  },
};

export const CriticalLongMessage: Story = {
  name: 'Critical with long (wrapping) message',
  render: () => (
    <FieldMessage
      id={id}
      tone="critical"
      message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sodales hendrerit nulla."
    />
  ),
  parameters: {
    chromatic: {
      viewports: [320],
    },
    layout: 'fullscreen',
  },
};

export const LeftAlignedInCenteredStack: Story = {
  name: 'Test: should be left aligned in a centered Stack',
  render: () => (
    <Stack space="large" align="center">
      <FieldMessage
        id={id}
        tone="critical"
        message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sodales hendrerit nulla."
      />
    </Stack>
  ),
  parameters: {
    chromatic: {
      viewports: [320],
    },
    layout: 'fullscreen',
  },
};
