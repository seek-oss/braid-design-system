import type { Meta, StoryObj } from '@storybook/react';

import { FieldLabel, Stack, TextLink } from '../';

const meta = {
  title: 'Components/FieldLabel',
  component: FieldLabel,
  parameters: {
    screenshotOnlyInWireframe: false,
  },
} satisfies Meta<typeof FieldLabel>;

export default meta;
type Story = StoryObj<typeof FieldLabel>;

// Unique ID for field examples
const id = 'field-example';

export const Standard: Story = {
  name: 'Standard Field Label',
  render: () => <FieldLabel htmlFor={id} label="Label" />,
  parameters: {
    chromatic: {
      viewports: [320],
    },
    layout: 'fullscreen',
  },
};

export const WithSecondaryLabel: Story = {
  name: 'With secondary label',
  render: () => (
    <FieldLabel htmlFor={id} label="Label" secondaryLabel="Secondary Label" />
  ),
  parameters: {
    chromatic: {
      viewports: [320],
    },
    layout: 'fullscreen',
  },
};

export const WithTertiaryLabel: Story = {
  name: 'With tertiary label',
  render: () => (
    <FieldLabel
      htmlFor={id}
      label="Label"
      tertiaryLabel={<TextLink href="#">Tertiary</TextLink>}
    />
  ),
  parameters: {
    chromatic: {
      viewports: [320],
    },
    layout: 'fullscreen',
  },
};

export const WithDescription: Story = {
  name: 'With description',
  render: () => (
    <FieldLabel
      htmlFor={id}
      label="Label"
      description="Description with extra information about the field"
    />
  ),
  parameters: {
    chromatic: {
      viewports: [320],
    },
    layout: 'fullscreen',
  },
};

export const WithAllSlots: Story = {
  name: 'With all slots',
  render: () => (
    <FieldLabel
      htmlFor={id}
      label="Label"
      secondaryLabel="Secondary"
      tertiaryLabel={<TextLink href="#">Tertiary</TextLink>}
      description="Description with extra information about the field"
    />
  ),
  parameters: {
    chromatic: {
      viewports: [320],
    },
    layout: 'fullscreen',
  },
};

export const Disabled: Story = {
  name: 'When disabled',
  render: () => (
    <FieldLabel
      htmlFor={id}
      label="Label"
      disabled={true}
      secondaryLabel="Secondary"
      tertiaryLabel={<TextLink href="#">Tertiary?</TextLink>}
      description="Description with extra information about the field"
    />
  ),
  parameters: {
    chromatic: {
      viewports: [320],
    },
    layout: 'fullscreen',
  },
};

export const DescriptionWithoutLabel: Story = {
  name: 'With description and no label',
  render: () => (
    <FieldLabel
      htmlFor={id}
      secondaryLabel="Secondary"
      tertiaryLabel={<TextLink href="#">Tertiary?</TextLink>}
      description="Description visible without label or additional white space above"
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
      <FieldLabel
        htmlFor={false}
        label="Enim elit eu et culpa non esse voluptate labore in ea."
        secondaryLabel="Secondary"
        tertiaryLabel={<TextLink href="#">Tertiary</TextLink>}
        description="Enim elit eu et culpa non esse voluptate labore in ea. Incididunt
          irure aliquip cillum occaecat irure."
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
