import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Box, ButtonIcon, Inline, Heading, IconBookmark, Stack } from '../';
import { BackgroundContrastTest } from '../../utils/BackgroundContrastTest';
import { LayoutTest } from '../../utils/LayoutTest';
import { debugTouchableAttrForDataProp } from '../private/touchable/debugTouchable';

const defaultParams = {
  chromatic: {
    viewports: [320],
  },
  layout: 'fullscreen',
};

const meta = {
  title: 'Components/ButtonIcon',
  component: ButtonIcon,
  parameters: {
    screenshotOnlyInWireframe: false,
  },
  argTypes: {
    variant: { control: 'select', options: ['soft', 'transparent'] },
    size: { control: 'select', options: ['small', 'standard', 'large'] },
    tone: {
      control: 'select',
      options: ['formAccent', 'brandAccent', 'neutral', 'critical'],
    },
    bleed: { control: 'boolean' },
    label: { control: 'text' },
    id: { control: 'text' },
  },
} satisfies Meta<typeof ButtonIcon>;

export default meta;

type Story = StoryObj<typeof ButtonIcon>;

export const Default: Story = {
  name: 'Default',
  args: {
    icon: <IconBookmark />,
    label: 'Bookmark',
    id: '1',
  },
  parameters: defaultParams,
};

export const Soft: Story = {
  name: 'Soft',
  render: () => (
    <Inline space="large" alignY="center">
      <ButtonIcon
        variant="soft"
        size="small"
        icon={<IconBookmark />}
        label="Small"
        id="1"
      />
      <ButtonIcon
        variant="soft"
        size="standard"
        icon={<IconBookmark />}
        label="Standard"
        id="2"
      />
      <ButtonIcon
        variant="soft"
        size="large"
        icon={<IconBookmark />}
        label="Large"
        id="3"
      />
    </Inline>
  ),
  parameters: defaultParams,
};

export const Softbleedon: Story = {
  name: 'Soft - bleed on',
  render: () => (
    <Box background="neutralLight" borderRadius="standard" padding="gutter">
      <Box background="surface">
        <Inline space="small" alignY="center">
          <Heading level="2">Heading</Heading>
          <ButtonIcon bleed icon={<IconBookmark />} label="Bookmark" id="1" />
        </Inline>
      </Box>
    </Box>
  ),
  parameters: defaultParams,
};

export const Softbleedoff: Story = {
  name: 'Soft - bleed off',
  render: () => (
    <Box background="neutralLight" borderRadius="standard" padding="gutter">
      <Box background="surface">
        <Inline space="small" alignY="center">
          <Heading level="2">Heading</Heading>
          <ButtonIcon
            bleed={false}
            icon={<IconBookmark />}
            label="Bookmark"
            id="1"
          />
        </Inline>
      </Box>
    </Box>
  ),
  parameters: defaultParams,
};

export const Transparent: Story = {
  name: 'Transparent',
  render: () => (
    <Inline space="large" alignY="center">
      <ButtonIcon
        variant="transparent"
        size="small"
        icon={<IconBookmark />}
        label="Small"
        id="1"
      />
      <ButtonIcon
        variant="transparent"
        size="standard"
        icon={<IconBookmark />}
        label="Standard"
        id="2"
      />
      <ButtonIcon
        variant="transparent"
        size="large"
        icon={<IconBookmark />}
        label="Large"
        id="3"
      />
    </Inline>
  ),
  parameters: defaultParams,
};

export const ToneformAccent: Story = {
  name: 'Tone - formAccent',
  render: () => (
    <Inline space="large" alignY="center">
      <ButtonIcon
        variant="transparent"
        tone="formAccent"
        icon={<IconBookmark />}
        label="Bookmark"
        id="1"
      />
      <ButtonIcon
        variant="soft"
        tone="formAccent"
        icon={<IconBookmark />}
        label="Bookmark"
        id="1"
      />
    </Inline>
  ),
  parameters: defaultParams,
};

export const Virtualtouchtarget: Story = {
  name: 'Virtual touch target',
  render: () => (
    <Stack
      space="large"
      data={{
        [debugTouchableAttrForDataProp]: '',
      }}
    >
      <Inline space="large">
        <ButtonIcon
          variant="soft"
          icon={<IconBookmark />}
          label="Bookmark"
          size="small"
          id="1"
        />
        <ButtonIcon
          variant="soft"
          icon={<IconBookmark />}
          label="Bookmark"
          size="standard"
          id="2"
        />
        <ButtonIcon
          variant="soft"
          icon={<IconBookmark />}
          label="Bookmark"
          size="large"
          id="3"
        />
      </Inline>
      <Inline space="large">
        <ButtonIcon
          variant="transparent"
          icon={<IconBookmark />}
          label="Bookmark"
          size="small"
          id="4"
        />
        <ButtonIcon
          variant="transparent"
          icon={<IconBookmark />}
          label="Bookmark"
          size="standard"
          id="5"
        />
        <ButtonIcon
          variant="transparent"
          icon={<IconBookmark />}
          label="Bookmark"
          size="large"
          id="6"
        />
      </Inline>
    </Stack>
  ),
  parameters: defaultParams,
};

export const Transparentbleedondefault: Story = {
  name: 'Transparent - bleed on (default)',
  render: () => (
    <Box background="neutralLight" borderRadius="standard" padding="gutter">
      <Box background="surface">
        <Inline space="small" alignY="center">
          <Heading level="2">Heading</Heading>
          <ButtonIcon
            variant="transparent"
            icon={<IconBookmark />}
            label="Bookmark"
            id="1"
          />
        </Inline>
      </Box>
    </Box>
  ),
  parameters: defaultParams,
};

export const Transparentbleedoff: Story = {
  name: 'Transparent - bleed off',
  render: () => (
    <Box background="neutralLight" borderRadius="standard" padding="gutter">
      <Box background="surface">
        <Inline space="small" alignY="center">
          <Heading level="2">Heading</Heading>
          <ButtonIcon
            bleed={false}
            variant="transparent"
            icon={<IconBookmark />}
            label="Bookmark"
            id="1"
          />
        </Inline>
      </Box>
    </Box>
  ),
  parameters: defaultParams,
};

export const Icontoneoverridesbuttontone: Story = {
  name: 'Icon tone overrides button tone',
  render: () => (
    <Inline space="small" alignY="center">
      <ButtonIcon
        bleed={false}
        variant="transparent"
        icon={<IconBookmark active tone="brandAccent" />}
        label="Bookmark"
        id="1"
      />
      <ButtonIcon
        bleed={false}
        variant="transparent"
        tone="formAccent"
        icon={<IconBookmark active tone="brandAccent" />}
        label="Bookmark"
        id="1"
      />
    </Inline>
  ),
  parameters: defaultParams,
};

export const Contrast: Story = {
  name: 'Contrast',
  render: () => (
    <BackgroundContrastTest>
      <Inline space="medium">
        <ButtonIcon icon={<IconBookmark />} label="Bookmark" id="1" />
        <ButtonIcon
          variant="transparent"
          bleed={false}
          icon={<IconBookmark />}
          label="Bookmark"
          id="1"
        />
      </Inline>
    </BackgroundContrastTest>
  ),
  parameters: defaultParams,
};

export const Layout: Story = {
  name: 'Layout',
  render: () => (
    <LayoutTest>
      <ButtonIcon icon={<IconBookmark />} label="Bookmark" id="1" />
    </LayoutTest>
  ),
  parameters: defaultParams,
};
