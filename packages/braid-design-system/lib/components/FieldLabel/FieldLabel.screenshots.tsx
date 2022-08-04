import React, { ReactNode } from 'react';
import { ComponentScreenshot } from '../../../site/src/types';
import { FieldLabel, TextLink } from '../';

const Container = ({ children }: { children: ReactNode }) => (
  <div style={{ maxWidth: '300px' }}>{children}</div>
);

export const screenshots: ComponentScreenshot = {
  screenshotWidths: [320],
  examples: [
    {
      label: 'Standard Field Label',
      Container,
      Example: ({ id }) => (
        <FieldLabel htmlFor={id} label="This is a field label" />
      ),
    },
    {
      label: 'Field Label with secondary',
      Container,
      Example: ({ id }) => (
        <FieldLabel
          htmlFor={id}
          label="Username"
          secondaryLabel="Max 30 characters"
        />
      ),
    },
    {
      label: 'Field Label with tertiary label',
      Container,
      Example: ({ id }) => (
        <FieldLabel
          htmlFor={id}
          label="Password"
          tertiaryLabel={<TextLink href="#">Forgot password?</TextLink>}
        />
      ),
    },
    {
      label: 'Field Label with all types',
      Container,
      Example: ({ id }) => (
        <FieldLabel
          htmlFor={id}
          label="Title"
          secondaryLabel="Optional"
          tertiaryLabel={<TextLink href="#">Help?</TextLink>}
        />
      ),
    },
    {
      label: 'Field Label when disabled',
      Container,
      Example: ({ id }) => (
        <FieldLabel
          htmlFor={id}
          label="Title"
          disabled={true}
          secondaryLabel="Optional"
          tertiaryLabel={<TextLink href="#">Help?</TextLink>}
        />
      ),
    },
  ],
};
