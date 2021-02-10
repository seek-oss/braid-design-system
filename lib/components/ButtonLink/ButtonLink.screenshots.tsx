import React, { ReactNode } from 'react';
import { ComponentScreenshot } from '../../../site/src/types';
import { ButtonLink } from '../';
import { Inline } from '../Inline/Inline';

const Container = ({ children }: { children: ReactNode }) => (
  <div style={{ maxWidth: '300px' }}>{children}</div>
);

export const screenshots: ComponentScreenshot = {
  screenshotWidths: [320],
  examples: [
    {
      label: 'Default',
      Container,
      Example: () => (
        <Inline space="small" collapseBelow="desktop">
          <ButtonLink href="#">Solid</ButtonLink>
          <ButtonLink href="#" variant="ghost">
            Ghost
          </ButtonLink>
          <ButtonLink href="#" variant="soft">
            Soft
          </ButtonLink>
          <ButtonLink href="#" variant="transparent">
            Transparent
          </ButtonLink>
        </Inline>
      ),
    },
    {
      label: 'Critical',
      Container,
      Example: () => (
        <Inline space="small" collapseBelow="desktop">
          <ButtonLink href="#" tone="critical">
            Solid
          </ButtonLink>
          <ButtonLink href="#" tone="critical" variant="ghost">
            Ghost
          </ButtonLink>
          <ButtonLink href="#" tone="critical" variant="soft">
            Soft
          </ButtonLink>
          <ButtonLink href="#" tone="critical" variant="transparent">
            Transparent
          </ButtonLink>
        </Inline>
      ),
    },
    {
      label: 'BrandAccent',
      Container,
      Example: () => (
        <Inline space="small" collapseBelow="desktop">
          <ButtonLink href="#" tone="brandAccent">
            Solid
          </ButtonLink>
          <ButtonLink href="#" tone="brandAccent" variant="ghost">
            Ghost
          </ButtonLink>
          <ButtonLink href="#" tone="brandAccent" variant="soft">
            Soft
          </ButtonLink>
          <ButtonLink href="#" tone="brandAccent" variant="transparent">
            Transparent
          </ButtonLink>
        </Inline>
      ),
    },
  ],
};
