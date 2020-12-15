import React, { ReactNode } from 'react';
import { ComponentScreenshot } from '../../../site/src/types';
import { ButtonLink } from '../';

const Container = ({ children }: { children: ReactNode }) => (
  <div style={{ maxWidth: '300px' }}>{children}</div>
);

export const screenshots: ComponentScreenshot = {
  screenshotWidths: [320],
  examples: [
    {
      label: 'Default Button Link',
      Container,
      Example: () => <ButtonLink href="#">Submit</ButtonLink>,
    },
    {
      label: 'Strong Button Link',
      Container,
      Example: () => (
        <ButtonLink href="#" weight="strong">
          Submit
        </ButtonLink>
      ),
    },
    {
      label: 'Weak Button Link',
      Container,
      Example: () => (
        <ButtonLink href="#" weight="weak">
          Submit
        </ButtonLink>
      ),
    },
    {
      label: 'Default Critical Button Link',
      Container,
      Example: () => (
        <ButtonLink href="#" tone="critical">
          Delete
        </ButtonLink>
      ),
    },
    {
      label: 'Strong Critical Button Link',
      Container,
      Example: () => (
        <ButtonLink href="#" weight="strong" tone="critical">
          Delete
        </ButtonLink>
      ),
    },
    {
      label: 'Weak Critical Button Link',
      Container,
      Example: () => (
        <ButtonLink href="#" weight="weak" tone="critical">
          Delete
        </ButtonLink>
      ),
    },
  ],
};
