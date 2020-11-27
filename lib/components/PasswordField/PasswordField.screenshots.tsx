import React, { ReactNode, useState } from 'react';
import { ComponentScreenshot } from '../../../site/src/types';
import { PasswordField, TextLink } from '../';

const Container = ({ children }: { children: ReactNode }) => (
  <div style={{ maxWidth: '300px' }}>{children}</div>
);

export const screenshots: ComponentScreenshot = {
  screenshotWidths: [320],
  examples: [
    {
      label: 'PasswordField',
      Container,
      Example: ({ id }) => {
        const [value, setValue] = useState('qwerty');
        return (
          <PasswordField
            label="Password"
            id={id}
            value={value}
            onChange={(ev) => setValue(ev.currentTarget.value)}
          />
        );
      },
    },
    {
      label: 'PasswordField with message',
      Container,
      Example: ({ id }) => {
        const [value, setValue] = useState('qwerty');
        return (
          <PasswordField
            label="Password"
            id={id}
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
      Example: ({ id }) => {
        const [value, setValue] = useState('qwerty');
        return (
          <PasswordField
            label="Password"
            secondaryLabel="required"
            id={id}
            value={value}
            onChange={(ev) => setValue(ev.currentTarget.value)}
          />
        );
      },
    },
    {
      label: 'PasswordField with tertiary label',
      Container,
      Example: ({ id }) => {
        const [value, setValue] = useState('qwerty');
        return (
          <PasswordField
            label="Password"
            tertiaryLabel={<TextLink href="#">Forgot Password?</TextLink>}
            id={id}
            value={value}
            onChange={(ev) => setValue(ev.currentTarget.value)}
          />
        );
      },
    },
    {
      label: 'PasswordField with description',
      Container,
      Example: ({ id }) => {
        const [value, setValue] = useState('qwerty');
        return (
          <PasswordField
            label="Password"
            id={id}
            value={value}
            onChange={(ev) => setValue(ev.currentTarget.value)}
            description="Must be 8 characters long and include a capital letter, a number and a symbol"
          />
        );
      },
    },
    {
      label: 'PasswordField with critical message',
      Container,
      Example: ({ id }) => {
        const [value, setValue] = useState('qwerty');
        return (
          <PasswordField
            label="Password"
            tone="critical"
            id={id}
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
      Example: ({ id }) => {
        const [value, setValue] = useState('qwerty');
        return (
          <PasswordField
            label="Password"
            id={id}
            value={value}
            onChange={(ev) => setValue(ev.currentTarget.value)}
            message="Strong!"
            tone="positive"
          />
        );
      },
    },
    {
      label: 'PasswordField disabled',
      Container,
      Example: ({ id }) => {
        const [value, setValue] = useState('qwerty');
        return (
          <PasswordField
            label="Password"
            id={id}
            value={value}
            onChange={(ev) => setValue(ev.currentTarget.value)}
            disabled={true}
          />
        );
      },
    },
    {
      label: 'PasswordField on Brand Background',
      background: 'brand',
      Container,
      Example: ({ id }) => {
        const [value, setValue] = useState('qwerty');
        return (
          <PasswordField
            label="Password"
            id={id}
            onChange={(ev) => setValue(ev.currentTarget.value)}
            value={value}
          />
        );
      },
    },
  ],
};
