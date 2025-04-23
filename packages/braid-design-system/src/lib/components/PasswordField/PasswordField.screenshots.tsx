import { type ReactNode, useState } from 'react';
import type { ComponentScreenshot } from 'site/types';

import { PasswordField, Stack, TextLink } from '../';
import { BackgroundContrastTest } from '../../utils/BackgroundContrastTest';

const Container = ({ children }: { children: ReactNode }) => (
  <div style={{ maxWidth: '300px' }}>{children}</div>
);

export const screenshots: ComponentScreenshot = {
  screenshotWidths: [320],
  examples: [
    {
      label: 'PasswordField',
      Container,
      Example: () => {
        const [value, setValue] = useState('qwerty');
        return (
          <PasswordField
            label="Password"
            value={value}
            onChange={(ev) => setValue(ev.currentTarget.value)}
          />
        );
      },
    },
    {
      label: 'PasswordField with message',
      Container,
      Example: () => {
        const [value, setValue] = useState('qwerty');
        return (
          <PasswordField
            label="Password"
            value={value}
            message={`e.g. Cannot be "password"`}
            onChange={(ev) => setValue(ev.currentTarget.value)}
          />
        );
      },
    },
    {
      label: 'PasswordField with secondary label',
      Container,
      Example: () => {
        const [value, setValue] = useState('qwerty');
        return (
          <PasswordField
            label="Password"
            secondaryLabel="required"
            value={value}
            onChange={(ev) => setValue(ev.currentTarget.value)}
          />
        );
      },
    },
    {
      label: 'PasswordField with tertiary label',
      Container,
      Example: () => {
        const [value, setValue] = useState('qwerty');
        return (
          <PasswordField
            label="Password"
            tertiaryLabel={<TextLink href="#">Forgot Password?</TextLink>}
            value={value}
            onChange={(ev) => setValue(ev.currentTarget.value)}
          />
        );
      },
    },
    {
      label: 'PasswordField with no visual label',
      Container,
      Example: () => {
        const [value, setValue] = useState('qwerty');
        return (
          <PasswordField
            aria-label="Password"
            value={value}
            onChange={(ev) => setValue(ev.currentTarget.value)}
          />
        );
      },
    },
    {
      label: 'PasswordField with description',
      Container,
      Example: () => {
        const [value, setValue] = useState('qwerty');
        return (
          <PasswordField
            label="Password"
            value={value}
            onChange={(ev) => setValue(ev.currentTarget.value)}
            description="Must be 8 characters long and include a capital letter, a number and a symbol"
          />
        );
      },
    },
    {
      label: 'PasswordField with a description and no visual label',
      Container,
      Example: () => {
        const [value, setValue] = useState('qwerty');
        return (
          <PasswordField
            aria-label="Password"
            description="Must be 8 characters long and include a capital letter, a number and a symbol"
            value={value}
            onChange={(ev) => setValue(ev.currentTarget.value)}
          />
        );
      },
    },
    {
      label: 'PasswordField with critical message',
      Container,
      Example: () => {
        const [value, setValue] = useState('qwerty');
        return (
          <PasswordField
            label="Password"
            tone="critical"
            value={value}
            onChange={(ev) => setValue(ev.currentTarget.value)}
            message="Not strong enough"
          />
        );
      },
    },
    {
      label: 'PasswordField with positive message',
      Container,
      Example: () => {
        const [value, setValue] = useState('qwerty');
        return (
          <PasswordField
            label="Password"
            value={value}
            onChange={(ev) => setValue(ev.currentTarget.value)}
            message="Strong!"
            tone="positive"
          />
        );
      },
    },
    {
      label: 'PasswordField with caution message',
      Container,
      Example: () => {
        const [value, setValue] = useState('qwerty');
        return (
          <PasswordField
            label="Password"
            value={value}
            onChange={(ev) => setValue(ev.currentTarget.value)}
            message="Caution message"
            tone="caution"
          />
        );
      },
    },
    {
      label: 'PasswordField disabled',
      Container,
      Example: ({ handler }) => (
        <Stack space="gutter">
          <PasswordField
            label="With no value or placeholder"
            value=""
            disabled={true}
            onChange={handler}
          />
          <PasswordField
            label="With value and no placeholder"
            value="Text value"
            disabled={true}
            onChange={handler}
          />
          <PasswordField
            label="With no value and a placeholder"
            value=""
            disabled={true}
            placeholder="Placeholder text"
            onChange={handler}
          />
          <PasswordField
            label="With value and a placeholder"
            value="Text value"
            disabled={true}
            placeholder="Placeholder text"
            onChange={handler}
          />
          <PasswordField
            label="With critical tone"
            value=""
            disabled={true}
            tone="critical"
            onChange={handler}
          />
          <PasswordField
            label="With critical tone and message"
            value=""
            disabled={true}
            tone="critical"
            message="Message"
            onChange={handler}
          />
        </Stack>
      ),
    },
    {
      label: 'Contrast',
      Container,
      Example: ({ handler }) => (
        <BackgroundContrastTest>
          <PasswordField label="Label" onChange={handler} value="Text value" />
        </BackgroundContrastTest>
      ),
    },
  ],
};
