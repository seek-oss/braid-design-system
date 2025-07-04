import type { Meta, StoryObj } from '@storybook/react-webpack5';

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

export const Standard: Story = {
  name: 'Standard Field Label',
  render: () => <FieldLabel htmlFor={false} label="Label" />,
  parameters: {
     ,
  },
};

export const WithSecondaryLabel: Story = {
  name: 'With secondary label',
  render: () => (
    <FieldLabel
      htmlFor={false}
      label="Label"
      secondaryLabel="Secondary Label"
    />
  ),
  parameters: {
     ,
  },
};

export const WithTertiaryLabel: Story = {
  name: 'With tertiary label',
  render: () => (
    <FieldLabel
      htmlFor={false}
      label="Label"
      tertiaryLabel={<TextLink href="#">Tertiary</TextLink>}
    />
  ),
  parameters: {
     ,
  },
};

export const WithDescription: Story = {
  name: 'With description',
  render: () => (
    <FieldLabel
      htmlFor={false}
      label="Label"
      description="Description with extra information about the field"
    />
  ),
  parameters: {
     ,
  },
};

export const WithAllSlots: Story = {
  name: 'With all slots',
  render: () => (
    <FieldLabel
      htmlFor={false}
      label="Label"
      secondaryLabel="Secondary"
      tertiaryLabel={<TextLink href="#">Tertiary</TextLink>}
      description="Description with extra information about the field"
    />
  ),
  parameters: {
     ,
  },
};

export const Disabled: Story = {
  name: 'When disabled',
  render: () => (
    <FieldLabel
      htmlFor={false}
      label="Label"
      disabled={true}
      secondaryLabel="Secondary"
      tertiaryLabel={<TextLink href="#">Tertiary?</TextLink>}
      description="Description with extra information about the field"
    />
  ),
  parameters: {
     ,
  },
};

export const DescriptionWithoutLabel: Story = {
  name: 'With description and no label',
  render: () => (
    <FieldLabel
      htmlFor={false}
      secondaryLabel="Secondary"
      tertiaryLabel={<TextLink href="#">Tertiary?</TextLink>}
      description="Description visible without label or additional white space above"
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
     ,
  },
};
