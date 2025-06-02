import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { IconSearch, IconPhone, TextField, TextLink, Stack } from '../';
import { BackgroundContrastTest } from '../../utils/BackgroundContrastTest';

const Container = ({ children }: { children: React.ReactNode }) => (
  <div style={{ maxWidth: '300px' }}>{children}</div>
);

const meta: Meta<typeof TextField> = {
  title: 'Components/TextField',
  component: TextField,
  parameters: {
    layout: 'padded',
  },
  decorators: [
    (Story) => (
      <Container>
        <Story />
      </Container>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof TextField>;

export const TextFieldBasic: Story = {
  args: {
    id: 'textfield-basic',
    label: 'Label',
    onChange: () => {},
    value: 'Text value',
  },
};

export const TextFieldWithDefaultPadding: Story = {
  args: {
    id: 'textfield-default-padding',
    label: 'Label',
    onChange: () => {},
    value: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
  },
};

const TextFieldWithClearButtonComponent = () => {
  const [value, setValue] = useState('Clear me');

  return (
    <TextField
      id="textfield-clear-button"
      label="Label"
      onChange={(e: React.FormEvent<HTMLInputElement>) =>
        setValue(e.currentTarget.value)
      }
      onClear={() => setValue('')}
      value={value}
    />
  );
};

export const TextFieldWithClearButton: Story = {
  render: () => <TextFieldWithClearButtonComponent />,
};

const TextFieldWithIconComponent = () => {
  const [value, setValue] = useState('');

  return (
    <TextField
      id="textfield-icon"
      label="Label"
      icon={<IconSearch />}
      placeholder="Placeholder text"
      onChange={(e: React.FormEvent<HTMLInputElement>) =>
        setValue(e.currentTarget.value)
      }
      value={value}
    />
  );
};

export const TextFieldWithIcon: Story = {
  render: () => <TextFieldWithIconComponent />,
};

export const TextFieldWithClearButtonPadding: Story = {
  args: {
    id: 'textfield-clear-button-padding',
    label: 'Label',
    onChange: () => {},
    onClear: () => {},
    value: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
  },
};

export const TextFieldWithMessage: Story = {
  args: {
    id: 'textfield-message',
    label: 'Label',
    value: '',
    message: 'Neutral message',
    onChange: () => {},
  },
};

export const TextFieldWithSecondaryLabel: Story = {
  args: {
    id: 'textfield-secondary-label',
    label: 'Label',
    secondaryLabel: 'Secondary',
    value: '',
    onChange: () => {},
  },
};

export const TextFieldWithTertiaryLabel: Story = {
  args: {
    id: 'textfield-tertiary-label',
    label: 'Label',
    secondaryLabel: 'Secondary',
    tertiaryLabel: <TextLink href="#">Help?</TextLink>,
    value: '',
    onChange: () => {},
  },
};

export const TextFieldWithNoVisualLabel: Story = {
  args: {
    id: 'textfield-no-visual-label',
    'aria-label': 'Label',
    value: '',
    onChange: () => {},
  },
};

export const TextFieldWithADescriptionAndNoVisualLabel: Story = {
  args: {
    id: 'textfield-description-no-visual-label',
    'aria-label': 'Label',
    description: 'Longer description of this field',
    value: '',
    onChange: () => {},
  },
};

export const TextFieldWithDescription: Story = {
  args: {
    id: 'textfield-description',
    label: 'Label',
    secondaryLabel: 'Secondary',
    description: 'Longer description of this field',
    value: '',
    onChange: () => {},
  },
};

export const TextFieldWithCriticalMessage: Story = {
  args: {
    id: 'textfield-critical-message',
    label: 'Label',
    tone: 'critical',
    value: 'Text value',
    message: 'Critical message',
    onChange: () => {},
  },
};

export const TextFieldWithPositiveMessage: Story = {
  args: {
    id: 'textfield-positive-message',
    label: 'Label',
    value: 'Text value',
    message: 'Positive message',
    tone: 'positive',
    onChange: () => {},
  },
};

export const TextFieldWithCautionMessage: Story = {
  args: {
    id: 'textfield-caution-message',
    label: 'Label',
    value: 'Text value',
    message: 'Caution message',
    tone: 'caution',
    onChange: () => {},
  },
};

export const TextFieldDisabled: Story = {
  render: () => (
    <Stack space="gutter">
      <TextField
        id="textfield-disabled-1"
        label="With no value or placeholder"
        value=""
        disabled={true}
        onChange={() => {}}
      />
      <TextField
        id="textfield-disabled-2"
        label="With value and no placeholder"
        value="Text value"
        disabled={true}
        onChange={() => {}}
      />
      <TextField
        id="textfield-disabled-3"
        label="With no value and a placeholder"
        value=""
        disabled={true}
        placeholder="Placeholder text"
        onChange={() => {}}
      />
      <TextField
        id="textfield-disabled-4"
        label="With value and a placeholder"
        value="Text value"
        disabled={true}
        placeholder="Placeholder text"
        onChange={() => {}}
      />
      <TextField
        id="textfield-disabled-5"
        label="With critical tone"
        value=""
        disabled={true}
        tone="critical"
        onChange={() => {}}
      />
      <TextField
        id="textfield-disabled-6"
        label="With critical tone and message"
        value=""
        disabled={true}
        tone="critical"
        message="Message"
        onChange={() => {}}
      />
    </Stack>
  ),
};

export const TextFieldWithPrefix: Story = {
  args: {
    id: 'textfield-prefix',
    label: 'Label',
    onChange: () => {},
    prefix: 'Prefix',
    value: 'Text value',
  },
};

export const TextFieldWithIconAndPrefix: Story = {
  args: {
    id: 'textfield-icon-prefix',
    label: 'Label',
    onChange: () => {},
    icon: <IconPhone />,
    prefix: 'Prefix',
    value: 'Text value',
  },
};

export const TextFieldWithCharacterLimitAndNoValue: Story = {
  args: {
    id: 'textfield-character-limit-no-value',
    value: '',
    onChange: () => {},
    label: 'Label',
    characterLimit: 55,
  },
};

export const TextFieldApproachingCharacterLimitShouldBe5: Story = {
  args: {
    id: 'textfield-approaching-character-limit',
    value: '123456789_123456789_123456789_123456789_123456789_',
    onChange: () => {},
    label: 'Label',
    characterLimit: 55,
  },
};

export const TextFieldExceedingCharacterLimitShouldBeNegative9: Story = {
  args: {
    id: 'textfield-exceeding-character-limit',
    value: '123456789123456789',
    onChange: () => {},
    label: 'Label',
    characterLimit: 9,
  },
};

export const Contrast: Story = {
  render: () => (
    <BackgroundContrastTest>
      <TextField
        id="textfield-contrast"
        label="Label"
        onChange={() => {}}
        value="Text value"
      />
    </BackgroundContrastTest>
  ),
  decorators: [],
};
