import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { FieldLabel, Stack, TextLink } from '../';

const meta = {
  title: 'Components/FieldLabel',
  component: FieldLabel,
  args: {
    htmlFor: false,
    label: 'Label',
  },
} satisfies Meta<typeof FieldLabel>;

export default meta;
type Story = StoryObj<typeof FieldLabel>;

export const Standard: Story = {
  name: 'Standard Field Label',
};

export const WithSecondaryLabel: Story = {
  name: 'With secondary label',
  args: {
    secondaryLabel: 'Secondary Label',
  },
};

export const WithTertiaryLabel: Story = {
  name: 'With tertiary label',
  args: {
    tertiaryLabel: <TextLink href="#">Tertiary Label</TextLink>,
  },
};

export const WithDescription: Story = {
  name: 'With description',
  args: {
    description: 'Description with extra information about the field',
  },
};

export const WithAllSlots: Story = {
  name: 'With all slots',
  args: {
    secondaryLabel: 'Secondary',
    tertiaryLabel: <TextLink href="#">Tertiary</TextLink>,
    description: 'Description with extra information about the field',
  },
};

export const Disabled: Story = {
  name: 'When disabled',
  args: {
    disabled: true,
    secondaryLabel: 'Secondary',
    tertiaryLabel: <TextLink href="#">Tertiary</TextLink>,
    description: 'Description with extra information about the field',
  },
};

export const DescriptionWithoutLabel: Story = {
  name: 'With description and no label',
  args: {
    label: false,
    secondaryLabel: 'Secondary',
    tertiaryLabel: <TextLink href="#">Tertiary</TextLink>,
    description:
      'Description visible without label or additional white space above',
  },
};

export const LeftAlignedInCenteredStack: Story = {
  name: 'Test: should be left aligned in a centered Stack',
  args: {
    label: 'Enim elit eu et culpa non esse voluptate labore in ea.',
    secondaryLabel: 'Secondary',
    tertiaryLabel: <TextLink href="#">Tertiary</TextLink>,
    description:
      'Enim elit eu et culpa non esse voluptate labore in ea. Incididunt irure aliquip cillum occaecat irure.',
  },
  decorators: (Story) => (
    <Stack space="large" align="center">
      <Story />
    </Stack>
  ),
};
