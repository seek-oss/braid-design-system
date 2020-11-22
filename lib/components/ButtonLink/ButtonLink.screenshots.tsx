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
  ],
};
