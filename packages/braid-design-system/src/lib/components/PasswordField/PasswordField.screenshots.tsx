import React, { type ReactNode, useState } from 'react';
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
      label: 'PasswordField with no visual label',
      Container,
      Example: ({ id }) => {
        const [value, setValue] = useState('qwerty');
        return (
          <PasswordField
            aria-label="Password"
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
      label: 'PasswordField with a description and no visual label',
      Container,
      Example: ({ id }) => {
        const [value, setValue] = useState('qwerty');
        return (
          <PasswordField
            aria-label="Password"
            description="Must be 8 characters long and include a capital letter, a number and a symbol"
            id={id}
            value={value}
            onChange={(ev) => setValue(ev.currentTarget.value)}
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
      label: 'PasswordField with caution message',
      Container,
      Example: ({ id }) => {
        const [value, setValue] = useState('qwerty');
        return (
          <PasswordField
            label="Password"
            id={id}
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
      Example: ({ id, handler }) => (
        <Stack space="gutter">
          <PasswordField
            label="With no value or placeholder"
            id={`${id}_1`}
            value=""
            disabled={true}
            onChange={handler}
          />
          <PasswordField
            label="With value and no placeholder"
            id={`${id}_2`}
            value="Text value"
            disabled={true}
            onChange={handler}
          />
          <PasswordField
            label="With no value and a placeholder"
            id={`${id}_3`}
            value=""
            disabled={true}
            placeholder="Placeholder text"
            onChange={handler}
          />
          <PasswordField
            label="With value and a placeholder"
            id={`${id}_4`}
            value="Text value"
            disabled={true}
            placeholder="Placeholder text"
            onChange={handler}
          />
          <PasswordField
            label="With critical tone"
            id={`${id}_5`}
            value=""
            disabled={true}
            tone="critical"
            onChange={handler}
          />
          <PasswordField
            label="With critical tone and message"
            id={`${id}_6`}
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
      Example: ({ id, handler }) => (
        <BackgroundContrastTest>
          <PasswordField
            label="Label"
            id={id}
            onChange={handler}
            value="Text value"
          />
        </BackgroundContrastTest>
      ),
    },
  ],
};
