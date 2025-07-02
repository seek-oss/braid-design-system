import type { Meta, StoryObj } from '@storybook/react-webpack5';
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
    label: 'Label',
    onChange: () => {},
    value: 'Text value',
  },
};

export const TextFieldWithDefaultPadding: Story = {
  args: {
    label: 'Label',
    onChange: () => {},
    value: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
  },
};

const TextFieldWithClearButtonComponent = () => {
  const [value, setValue] = useState('Clear me');

  return (
    <TextField
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
    label: 'Label',
    onChange: () => {},
    onClear: () => {},
    value: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
  },
};

export const TextFieldWithMessage: Story = {
  args: {
    label: 'Label',
    value: '',
    message: 'Neutral message',
    onChange: () => {},
  },
};

export const TextFieldWithSecondaryLabel: Story = {
  args: {
    label: 'Label',
    secondaryLabel: 'Secondary',
    value: '',
    onChange: () => {},
  },
};

export const TextFieldWithTertiaryLabel: Story = {
  args: {
    label: 'Label',
    secondaryLabel: 'Secondary',
    tertiaryLabel: <TextLink href="#">Help?</TextLink>,
    value: '',
    onChange: () => {},
  },
};

export const TextFieldWithNoVisualLabel: Story = {
  args: {
    'aria-label': 'Label',
    value: '',
    onChange: () => {},
  },
};

export const TextFieldWithADescriptionAndNoVisualLabel: Story = {
  args: {
    'aria-label': 'Label',
    description: 'Longer description of this field',
    value: '',
    onChange: () => {},
  },
};

export const TextFieldWithDescription: Story = {
  args: {
    label: 'Label',
    secondaryLabel: 'Secondary',
    description: 'Longer description of this field',
    value: '',
    onChange: () => {},
  },
};

export const TextFieldWithCriticalMessage: Story = {
  args: {
    label: 'Label',
    tone: 'critical',
    value: 'Text value',
    message: 'Critical message',
    onChange: () => {},
  },
};

export const TextFieldWithPositiveMessage: Story = {
  args: {
    label: 'Label',
    value: 'Text value',
    message: 'Positive message',
    tone: 'positive',
    onChange: () => {},
  },
};

export const TextFieldWithCautionMessage: Story = {
  args: {
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
        label="With no value or placeholder"
        value=""
        disabled={true}
        onChange={() => {}}
      />
      <TextField
        label="With value and no placeholder"
        value="Text value"
        disabled={true}
        onChange={() => {}}
      />
      <TextField
        label="With no value and a placeholder"
        value=""
        disabled={true}
        placeholder="Placeholder text"
        onChange={() => {}}
      />
      <TextField
        label="With value and a placeholder"
        value="Text value"
        disabled={true}
        placeholder="Placeholder text"
        onChange={() => {}}
      />
      <TextField
        label="With critical tone"
        value=""
        disabled={true}
        tone="critical"
        onChange={() => {}}
      />
      <TextField
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
    label: 'Label',
    onChange: () => {},
    prefix: 'Prefix',
    value: 'Text value',
  },
};

export const TextFieldWithIconAndPrefix: Story = {
  args: {
    label: 'Label',
    onChange: () => {},
    icon: <IconPhone />,
    prefix: 'Prefix',
    value: 'Text value',
  },
};

export const TextFieldWithCharacterLimitAndNoValue: Story = {
  args: {
    value: '',
    onChange: () => {},
    label: 'Label',
    characterLimit: 55,
  },
};

export const TextFieldApproachingCharacterLimitShouldBe5: Story = {
  args: {
    value: '123456789_123456789_123456789_123456789_123456789_',
    onChange: () => {},
    label: 'Label',
    characterLimit: 55,
  },
};

export const TextFieldExceedingCharacterLimitShouldBeNegative9: Story = {
  args: {
    value: '123456789123456789',
    onChange: () => {},
    label: 'Label',
    characterLimit: 9,
  },
};

export const Contrast: Story = {
  render: () => (
    <BackgroundContrastTest>
      <TextField label="Label" onChange={() => {}} value="Text value" />
    </BackgroundContrastTest>
  ),
  decorators: [],
};
