import type { ReactNode } from 'react';
import type { ComponentScreenshot } from 'site/types';

import { FieldLabel, Stack, TextLink } from '../';

const Container = ({ children }: { children: ReactNode }) => (
  <div style={{ maxWidth: '300px' }}>{children}</div>
);

export const screenshots: ComponentScreenshot = {
  screenshotWidths: [320],
  examples: [
    {
      label: 'Standard Field Label',
      Container,
      Example: () => <FieldLabel htmlFor={false} label="Label" />,
    },
    {
      label: 'with secondary label',
      Container,
      Example: () => (
        <FieldLabel
          htmlFor={false}
          label="Label"
          secondaryLabel="Secondary Label"
        />
      ),
    },
    {
      label: 'with tertiary label',
      Container,
      Example: () => (
        <FieldLabel
          htmlFor={false}
          label="Label"
          tertiaryLabel={<TextLink href="#">Tertiary</TextLink>}
        />
      ),
    },
    {
      label: 'with description',
      Container,
      Example: () => (
        <FieldLabel
          htmlFor={false}
          label="Label"
          description="Description with extra information about the field"
        />
      ),
    },
    {
      label: 'with all slots',
      Container,
      Example: () => (
        <FieldLabel
          htmlFor={false}
          label="Label"
          secondaryLabel="Secondary"
          tertiaryLabel={<TextLink href="#">Tertiary</TextLink>}
          description="Description with extra information about the field"
        />
      ),
    },
    {
      label: 'when disabled',
      Container,
      Example: () => (
        <FieldLabel
          htmlFor={false}
          label="Label"
          disabled={true}
          secondaryLabel="Secondary"
          tertiaryLabel={<TextLink href="#">Tertiary?</TextLink>}
          description="Description with extra information about the field"
        />
      ),
    },
    {
      label: 'with description and no label',
      Container,
      Example: () => (
        <FieldLabel
          htmlFor={false}
          secondaryLabel="Secondary"
          tertiaryLabel={<TextLink href="#">Tertiary?</TextLink>}
          description="Description visible without label or additional white space above"
        />
      ),
    },
    {
      label: 'Test: should be left aligned in a centered Stack',
      Container,
      Example: () => (
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
    },
  ],
};
