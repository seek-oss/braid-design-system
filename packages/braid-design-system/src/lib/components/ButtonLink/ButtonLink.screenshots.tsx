import type { Meta, StoryObj } from '@storybook/react-webpack5';
import React from 'react';

import { ButtonLink, IconSend, Stack, Inline, Text, IconArrow, Box } from '../';

const defaultParams = {
  chromatic: {
    viewports: [320],
  },
  layout: 'fullscreen',
};

const meta = {
  title: 'Components/ButtonLink',
  component: ButtonLink,
  parameters: {
    screenshotOnlyInWireframe: false,
  },
  argTypes: {
    tone: {
      control: 'select',
      options: ['brandAccent', 'critical', 'formAccent', 'neutral'],
    },
    variant: {
      control: 'select',
      options: ['solid', 'ghost', 'soft', 'transparent'],
    },
    size: { control: 'radio', options: ['standard', 'small'] },
    href: { control: 'text' },
    bleed: { control: 'boolean' },
    children: { control: 'text' },
  },
} satisfies Meta<typeof ButtonLink>;

export default meta;

type Story = StoryObj<typeof ButtonLink>;

export const Defaultvariantsfortone: Story = {
  name: 'Default variants for tone',
  render: () => (
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
  parameters: defaultParams,
};

export const Critical: Story = {
  name: 'Critical',
  render: () => (
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
  parameters: defaultParams,
};

export const BrandAccent: Story = {
  name: 'BrandAccent',
  render: () => (
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
  parameters: defaultParams,
};

export const FormAccent: Story = {
  name: 'FormAccent',
  render: () => (
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
  parameters: defaultParams,
};

export const Neutral: Story = {
  name: 'Neutral',
  render: () => (
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
  parameters: defaultParams,
};

export const Withicon: Story = {
  name: 'With icon',
  render: () => (
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
        <ButtonLink href="#" size="small" icon={<IconSend />} variant="solid">
          Solid
        </ButtonLink>
        <ButtonLink href="#" size="small" icon={<IconSend />} variant="ghost">
          Ghost
        </ButtonLink>
        <ButtonLink href="#" size="small" icon={<IconSend />} variant="soft">
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
  parameters: defaultParams,
};

export const WithiconPositiontrailing: Story = {
  name: 'With iconPosition trailing',
  render: () => (
    <Stack space="small">
      <Inline space="small">
        <ButtonLink
          href="#"
          icon={<IconArrow direction="right" />}
          iconPosition="trailing"
          variant="solid"
        >
          Solid
        </ButtonLink>
        <ButtonLink
          href="#"
          icon={<IconArrow direction="right" />}
          iconPosition="trailing"
          variant="ghost"
        >
          Ghost
        </ButtonLink>
        <ButtonLink
          href="#"
          icon={<IconArrow direction="right" />}
          iconPosition="trailing"
          variant="soft"
        >
          Soft
        </ButtonLink>
        <ButtonLink
          href="#"
          icon={<IconArrow direction="right" />}
          iconPosition="trailing"
          variant="transparent"
        >
          Transparent
        </ButtonLink>
      </Inline>
      <Inline space="small">
        <ButtonLink
          href="#"
          size="small"
          icon={<IconArrow direction="right" />}
          iconPosition="trailing"
          variant="solid"
        >
          Solid
        </ButtonLink>
        <ButtonLink
          href="#"
          size="small"
          icon={<IconArrow direction="right" />}
          iconPosition="trailing"
          variant="ghost"
        >
          Ghost
        </ButtonLink>
        <ButtonLink
          href="#"
          size="small"
          icon={<IconArrow direction="right" />}
          iconPosition="trailing"
          variant="soft"
        >
          Soft
        </ButtonLink>
        <ButtonLink
          href="#"
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
  parameters: defaultParams,
};

export const WithicontransparentvariantandbleeditshouldalignwithText: Story = {
  name: 'With icon, transparent variant and bleed, it should align with Text',
  render: () => (
    <Stack space="small">
      <Text icon={<IconSend />}>Text</Text>
      <Inline space="none">
        <ButtonLink href="#" icon={<IconSend />} variant="transparent" bleed>
          ButtonLink
        </ButtonLink>
      </Inline>
    </Stack>
  ),
  parameters: defaultParams,
};

export const WithicontransparentvariantbleedandsizesmallitshouldalignwithText: Story =
  {
    name: 'With icon, transparent variant, bleed and size small, it should align with Text',
    render: () => (
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
    parameters: defaultParams,
  };

export const Verticallycenteredlabelsincontainersthatstretchelementstofill: Story =
  {
    name: 'Vertically centered labels in containers that stretch elements to fill',
    render: () => (
      <Stack space="small">
        <Box
          display="flex"
          gap="small"
          style={{
            alignItems: 'stretch',
            width: 300,
            maxWidth: '100%',
          }}
        >
          <ButtonLink href="#">Non elit</ButtonLink>
          <ButtonLink href="#">Non elit do do incididunt nostrud</ButtonLink>
        </Box>
        <Box
          display="flex"
          gap="small"
          style={{
            alignItems: 'stretch',
            width: 300,
            maxWidth: '100%',
          }}
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
          style={{
            alignItems: 'stretch',
            width: 300,
            maxWidth: '100%',
          }}
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
    parameters: defaultParams,
  };

export const Ensureinnerlabelelementisfullwidthreddotsshouldtouchhorizontaledges: Story =
  {
    name: 'Ensure inner label element is full width (red dots should touch horizontal edges)',
    render: () => (
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
    parameters: defaultParams,
  };
