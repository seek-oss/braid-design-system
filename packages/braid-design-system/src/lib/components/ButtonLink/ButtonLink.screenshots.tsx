import React, { type ReactNode } from 'react';
import type { ComponentScreenshot } from 'site/types';
import { ButtonLink, IconSend, Stack, Inline, Text, IconArrow, Box } from '../';

const Container = ({ children }: { children: ReactNode }) => (
  <div style={{ maxWidth: '300px' }}>{children}</div>
);

export const screenshots: ComponentScreenshot = {
  screenshotWidths: [320],
  examples: [
    {
      label: 'Default variants for tone',
      Container,
      Example: () => (
        <Inline space="small" collapseBelow="desktop">
          <ButtonLink href="#">No tone</ButtonLink>
          <ButtonLink href="#" tone="brandAccent">
            brandAccent
          </ButtonLink>
          <ButtonLink href="#" tone="critical">
            critical
          </ButtonLink>
          <ButtonLink href="#" tone="formAccent">
            formAccent
          </ButtonLink>
          <ButtonLink href="#" tone="neutral">
            neutral
          </ButtonLink>
        </Inline>
      ),
    },
    {
      label: 'Critical',
      Container,
      Example: () => (
        <Inline space="small" collapseBelow="desktop">
          <ButtonLink href="#" tone="critical" variant="solid">
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
          <ButtonLink href="#" tone="brandAccent" variant="solid">
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
      label: 'FormAccent',
      Container,
      Example: () => (
        <Inline space="small" collapseBelow="desktop">
          <ButtonLink href="#" tone="formAccent" variant="solid">
            Solid
          </ButtonLink>
          <ButtonLink href="#" tone="formAccent" variant="ghost">
            Ghost
          </ButtonLink>
          <ButtonLink href="#" tone="formAccent" variant="soft">
            Soft
          </ButtonLink>
          <ButtonLink href="#" tone="formAccent" variant="transparent">
            Transparent
          </ButtonLink>
        </Inline>
      ),
    },
    {
      label: 'Neutral',
      Container,
      Example: () => (
        <Inline space="small" collapseBelow="desktop">
          <ButtonLink href="#" tone="neutral" variant="solid">
            Solid
          </ButtonLink>
          <ButtonLink href="#" tone="neutral" variant="ghost">
            Ghost
          </ButtonLink>
          <ButtonLink href="#" tone="neutral" variant="soft">
            Soft
          </ButtonLink>
          <ButtonLink href="#" tone="neutral" variant="transparent">
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
            <ButtonLink href="#" icon={<IconSend />} variant="solid">
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
            <ButtonLink
              href="#"
              size="small"
              icon={<IconSend />}
              variant="solid"
            >
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
              variant="solid"
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
              variant="solid"
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
    {
      label:
        'Vertically centered labels in containers that stretch elements to fill',
      Example: () => (
        <Stack space="small">
          <Box
            display="flex"
            gap="small"
            style={{ alignItems: 'stretch', width: 300, maxWidth: '100%' }}
          >
            <ButtonLink href="#">Non elit</ButtonLink>
            <ButtonLink href="#">Non elit do do incididunt nostrud</ButtonLink>
          </Box>
          <Box
            display="flex"
            gap="small"
            style={{ alignItems: 'stretch', width: 300, maxWidth: '100%' }}
          >
            <ButtonLink href="#" icon={<IconSend />} iconPosition="leading">
              Non elit
            </ButtonLink>
            <ButtonLink href="#" icon={<IconSend />} iconPosition="leading">
              Non elit do do incididunt nostrud
            </ButtonLink>
          </Box>
          <Box
            display="flex"
            gap="small"
            style={{ alignItems: 'stretch', width: 300, maxWidth: '100%' }}
          >
            <ButtonLink href="#" icon={<IconSend />} iconPosition="trailing">
              Non elit
            </ButtonLink>
            <ButtonLink href="#" icon={<IconSend />} iconPosition="trailing">
              Non elit do do incididunt nostrud
            </ButtonLink>
          </Box>
        </Stack>
      ),
    },
    {
      label:
        'Ensure inner label element is full width (red dots should touch horizontal edges)',
      Example: () => (
        <ButtonLink href="#">
          <Box position="absolute" left={0}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              height={24}
              width={24}
            >
              <circle cx="12" cy="12" r="10" fill="red" />
            </svg>
          </Box>
          <Box position="absolute" right={0}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              height={24}
              width={24}
            >
              <circle cx="12" cy="12" r="10" fill="red" />
            </svg>
          </Box>
          Label
        </ButtonLink>
      ),
    },
  ],
};
