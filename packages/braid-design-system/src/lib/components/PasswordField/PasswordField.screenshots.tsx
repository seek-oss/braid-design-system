import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { PasswordField, Stack, TextLink } from '../';
import { BackgroundContrastTest } from '../../utils/BackgroundContrastTest';

const meta = {
  title: 'Components/PasswordField',
  component: PasswordField,
  args: {
    onChange: () => {},
  },
} satisfies Meta<typeof PasswordField>;

export default meta;
type Story = StoryObj<typeof PasswordField>;

export const PasswordFieldStory: Story = {
  name: 'PasswordField',
  args: {
    label: 'Password',
    value: 'qwerty',
  },
};

export const PasswordFieldwithmessage: Story = {
  name: 'PasswordField with message',
  args: {
    label: 'Password',
    value: 'qwerty',
    message: `e.g. Cannot be "password"`,
  },
};

export const PasswordFieldwithsecondarylabel: Story = {
  name: 'PasswordField with secondary label',
  args: {
    label: 'Password',
    secondaryLabel: 'required',
    value: 'qwerty',
  },
};

export const PasswordFieldwithtertiarylabel: Story = {
  name: 'PasswordField with tertiary label',
  args: {
    label: 'Password',
    tertiaryLabel: <TextLink href="#">Forgot Password?</TextLink>,
    value: 'qwerty',
  },
};

export const PasswordFieldwithnovisuallabel: Story = {
  name: 'PasswordField with no visual label',
  args: {
    'aria-label': 'Password',
    value: 'qwerty',
  },
};

export const PasswordFieldwithdescription: Story = {
  name: 'PasswordField with description',
  args: {
    label: 'Password',
    value: 'qwerty',
    description:
      'Must be 8 characters long and include a capital letter, a number and a symbol',
  },
};

export const PasswordFieldwithadescriptionandnovisuallabel: Story = {
  name: 'PasswordField with a description and no visual label',
  args: {
    'aria-label': 'Password',
    description:
      'Must be 8 characters long and include a capital letter, a number and a symbol',
    value: 'qwerty',
  },
};

export const PasswordFieldwithcriticalmessage: Story = {
  name: 'PasswordField with critical message',
  args: {
    label: 'Password',
    tone: 'critical',
    value: 'qwerty',
    message: 'Not strong enough',
  },
};

export const PasswordFieldwithpositivemessage: Story = {
  name: 'PasswordField with positive message',
  args: {
    label: 'Password',
    value: 'qwerty',
    message: 'Strong!',
    tone: 'positive',
  },
};

export const PasswordFieldwithcautionmessage: Story = {
  name: 'PasswordField with caution message',
  args: {
    label: 'Password',
    value: 'qwerty',
    message: 'Caution message',
    tone: 'caution',
  },
};

export const PasswordFielddisabled: Story = {
  name: 'PasswordField disabled',
  render: () => (
    <Stack space="gutter">
      <PasswordField
        label="With no value or placeholder"
        value=""
        disabled={true}
        onChange={() => {}}
      />
      <PasswordField
        label="With value and no placeholder"
        value="Text value"
        disabled={true}
        onChange={() => {}}
      />
      <PasswordField
        label="With no value and a placeholder"
        value=""
        disabled={true}
        placeholder="Placeholder text"
        onChange={() => {}}
      />
      <PasswordField
        label="With value and a placeholder"
        value="Text value"
        disabled={true}
        placeholder="Placeholder text"
        onChange={() => {}}
      />
      <PasswordField
        label="With critical tone"
        value=""
        disabled={true}
        tone="critical"
        onChange={() => {}}
      />
      <PasswordField
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

export const Contrast: Story = {
  args: {
    label: 'Label',
    value: 'Text value',
  },
  decorators: (Story) => (
    <BackgroundContrastTest>
      <Story />
    </BackgroundContrastTest>
  ),
};
