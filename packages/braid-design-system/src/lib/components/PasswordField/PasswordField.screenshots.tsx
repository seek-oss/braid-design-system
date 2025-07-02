import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { PasswordField, Stack, TextLink } from '../';
import { BackgroundContrastTest } from '../../utils/BackgroundContrastTest';

const meta = {
  title: 'Components/PasswordField',
  component: PasswordField,
  parameters: {
    screenshotOnlyInWireframe: false,
  },
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
    id: 'password-field-basic',
    value: 'qwerty',
  },
  parameters: {
    chromatic: {
      viewports: [320],
    },
    layout: 'fullscreen',
  },
};

export const PasswordFieldwithmessage: Story = {
  name: 'PasswordField with message',
  args: {
    label: 'Password',
    id: 'password-field-message',
    value: 'qwerty',
    message: `e.g. Cannot be "password"`,
  },
  parameters: {
    chromatic: {
      viewports: [320],
    },
    layout: 'fullscreen',
  },
};

export const PasswordFieldwithsecondarylabel: Story = {
  name: 'PasswordField with secondary label',
  args: {
    label: 'Password',
    secondaryLabel: 'required',
    id: 'password-field-secondary-label',
    value: 'qwerty',
  },
  parameters: {
    chromatic: {
      viewports: [320],
    },
    layout: 'fullscreen',
  },
};

export const PasswordFieldwithtertiarylabel: Story = {
  name: 'PasswordField with tertiary label',
  render: () => (
    <PasswordField
      label="Password"
      tertiaryLabel={<TextLink href="#">Forgot Password?</TextLink>}
      id="password-field-tertiary-label"
      value="qwerty"
      onChange={() => {}}
    />
  ),
  parameters: {
    chromatic: {
      viewports: [320],
    },
    layout: 'fullscreen',
  },
};

export const PasswordFieldwithnovisuallabel: Story = {
  name: 'PasswordField with no visual label',
  args: {
    'aria-label': 'Password',
    id: 'password-field-no-visual-label',
    value: 'qwerty',
  },
  parameters: {
    chromatic: {
      viewports: [320],
    },
    layout: 'fullscreen',
  },
};

export const PasswordFieldwithdescription: Story = {
  name: 'PasswordField with description',
  args: {
    label: 'Password',
    id: 'password-field-description',
    value: 'qwerty',
    description:
      'Must be 8 characters long and include a capital letter, a number and a symbol',
  },
  parameters: {
    chromatic: {
      viewports: [320],
    },
    layout: 'fullscreen',
  },
};

export const PasswordFieldwithadescriptionandnovisuallabel: Story = {
  name: 'PasswordField with a description and no visual label',
  args: {
    'aria-label': 'Password',
    description:
      'Must be 8 characters long and include a capital letter, a number and a symbol',
    id: 'password-field-description-no-visual-label',
    value: 'qwerty',
  },
  parameters: {
    chromatic: {
      viewports: [320],
    },
    layout: 'fullscreen',
  },
};

export const PasswordFieldwithcriticalmessage: Story = {
  name: 'PasswordField with critical message',
  args: {
    label: 'Password',
    tone: 'critical',
    id: 'password-field-critical',
    value: 'qwerty',
    message: 'Not strong enough',
  },
  parameters: {
    chromatic: {
      viewports: [320],
    },
    layout: 'fullscreen',
  },
};

export const PasswordFieldwithpositivemessage: Story = {
  name: 'PasswordField with positive message',
  args: {
    label: 'Password',
    id: 'password-field-positive',
    value: 'qwerty',
    message: 'Strong!',
    tone: 'positive',
  },
  parameters: {
    chromatic: {
      viewports: [320],
    },
    layout: 'fullscreen',
  },
};

export const PasswordFieldwithcautionmessage: Story = {
  name: 'PasswordField with caution message',
  args: {
    label: 'Password',
    id: 'password-field-caution',
    value: 'qwerty',
    message: 'Caution message',
    tone: 'caution',
  },
  parameters: {
    chromatic: {
      viewports: [320],
    },
    layout: 'fullscreen',
  },
};

export const PasswordFielddisabled: Story = {
  name: 'PasswordField disabled',
  render: () => (
    <Stack space="gutter">
      <PasswordField
        label="With no value or placeholder"
        id="password-field-disabled-1"
        value=""
        disabled={true}
        onChange={() => {}}
      />
      <PasswordField
        label="With value and no placeholder"
        id="password-field-disabled-2"
        value="Text value"
        disabled={true}
        onChange={() => {}}
      />
      <PasswordField
        label="With no value and a placeholder"
        id="password-field-disabled-3"
        value=""
        disabled={true}
        placeholder="Placeholder text"
        onChange={() => {}}
      />
      <PasswordField
        label="With value and a placeholder"
        id="password-field-disabled-4"
        value="Text value"
        disabled={true}
        placeholder="Placeholder text"
        onChange={() => {}}
      />
      <PasswordField
        label="With critical tone"
        id="password-field-disabled-5"
        value=""
        disabled={true}
        tone="critical"
        onChange={() => {}}
      />
      <PasswordField
        label="With critical tone and message"
        id="password-field-disabled-6"
        value=""
        disabled={true}
        tone="critical"
        message="Message"
        onChange={() => {}}
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

export const Contrast: Story = {
  name: 'Contrast',
  render: () => (
    <BackgroundContrastTest>
      <PasswordField
        label="Label"
        id="password-field-contrast"
        onChange={() => {}}
        value="Text value"
      />
    </BackgroundContrastTest>
  ),
  parameters: {
    chromatic: {
      viewports: [320],
    },
    layout: 'fullscreen',
  },
};
