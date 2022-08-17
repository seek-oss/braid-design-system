import React, { ReactNode } from 'react';
import { ComponentScreenshot } from '../../../../../site/src/types';
import { ButtonLink, IconSend, Stack } from '../';
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
    {
      label: 'With icon',
      Example: () => (
        <Stack space="small">
          <Inline space="small">
            <ButtonLink href="#" icon={<IconSend />}>
              Solid
            </ButtonLink>
            <ButtonLink href="#" icon={<IconSend />} variant="ghost">
              Ghost
            </ButtonLink>
            <ButtonLink href="#" icon={<IconSend />} variant="soft">
              Soft
            </ButtonLink>
            <ButtonLink href="#" icon={<IconSend />} variant="transparent">
              Transparent
            </ButtonLink>
          </Inline>
          <Inline space="small">
            <ButtonLink href="#" size="small" icon={<IconSend />}>
              Solid
            </ButtonLink>
            <ButtonLink
              href="#"
              size="small"
              icon={<IconSend />}
              variant="ghost"
            >
              Ghost
            </ButtonLink>
            <ButtonLink
              href="#"
              size="small"
              icon={<IconSend />}
              variant="soft"
            >
              Soft
            </ButtonLink>
            <ButtonLink
              href="#"
              size="small"
              icon={<IconSend />}
              variant="transparent"
            >
              Transparent
            </ButtonLink>
          </Inline>
        </Stack>
      ),
    },
  ],
};
