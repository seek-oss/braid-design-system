import React, { type ReactNode } from 'react';
import type { ComponentScreenshot } from 'site/types';
import { ButtonLink, IconSend, Stack, Inline, Text, IconArrow } from '../';

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
    {
      label: 'With iconPosition trailing',
      Example: () => (
        <Stack space="small">
          <Inline space="small">
            <ButtonLink
              href=""
              icon={<IconArrow direction="right" />}
              iconPosition="trailing"
            >
              Solid
            </ButtonLink>
            <ButtonLink
              href=""
              icon={<IconArrow direction="right" />}
              iconPosition="trailing"
              variant="ghost"
            >
              Ghost
            </ButtonLink>
            <ButtonLink
              href=""
              icon={<IconArrow direction="right" />}
              iconPosition="trailing"
              variant="soft"
            >
              Soft
            </ButtonLink>
            <ButtonLink
              href=""
              icon={<IconArrow direction="right" />}
              iconPosition="trailing"
              variant="transparent"
            >
              Transparent
            </ButtonLink>
          </Inline>
          <Inline space="small">
            <ButtonLink
              href=""
              size="small"
              icon={<IconArrow direction="right" />}
              iconPosition="trailing"
            >
              Solid
            </ButtonLink>
            <ButtonLink
              href=""
              size="small"
              icon={<IconArrow direction="right" />}
              iconPosition="trailing"
              variant="ghost"
            >
              Ghost
            </ButtonLink>
            <ButtonLink
              href=""
              size="small"
              icon={<IconArrow direction="right" />}
              iconPosition="trailing"
              variant="soft"
            >
              Soft
            </ButtonLink>
            <ButtonLink
              href=""
              size="small"
              icon={<IconArrow direction="right" />}
              iconPosition="trailing"
              variant="transparent"
            >
              Transparent
            </ButtonLink>
          </Inline>
        </Stack>
      ),
    },
    {
      label:
        'With icon, transparent variant and bleed, it should align with Text',
      Example: () => (
        <Stack space="small">
          <Text icon={<IconSend />}>Text</Text>
          <Inline space="none">
            <ButtonLink
              href="#"
              icon={<IconSend />}
              variant="transparent"
              bleed
            >
              ButtonLink
            </ButtonLink>
          </Inline>
        </Stack>
      ),
    },
    {
      label:
        'With icon, transparent variant, bleed and size small, it should align with Text',
      Example: () => (
        <Stack space="small">
          <Text icon={<IconSend />} size="small">
            Text
          </Text>
          <Inline space="none">
            <ButtonLink
              href="#"
              icon={<IconSend />}
              size="small"
              variant="transparent"
              bleed
            >
              ButtonLink
            </ButtonLink>
          </Inline>
        </Stack>
      ),
    },
  ],
};
