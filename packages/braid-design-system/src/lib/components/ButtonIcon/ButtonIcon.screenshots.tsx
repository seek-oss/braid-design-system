import type { Meta, StoryObj } from '@storybook/react-webpack5';
import type { ComponentProps } from 'react';

import {
  Box,
  ButtonIcon,
  Inline,
  Heading,
  IconBookmark,
  Stack,
  IconRenderer,
} from '../';
import { BackgroundContrastTest } from '../../utils/BackgroundContrastTest';
import { LayoutTest } from '../../utils/LayoutTest';
import { debugTouchableAttrForDataProp } from '../private/touchable/debugTouchable';

import {
  buttonIconSizes,
  buttonIconTones,
  buttonIconVariants,
} from './ButtonIcon';

const meta = {
  title: 'Components/ButtonIcon',
  component: ButtonIcon,
  argTypes: {
    variant: { control: 'select', options: buttonIconVariants },
    size: { control: 'select', options: buttonIconSizes },
    tone: {
      control: 'select',
      options: buttonIconTones,
    },
    bleed: { control: 'boolean' },
    label: { control: 'text' },
    id: { control: 'text' },
  },
} satisfies Meta<typeof ButtonIcon>;

export default meta;

type Story = StoryObj<typeof ButtonIcon>;

const CustomIcon = ({
  size,
  tone,
}: Pick<ComponentProps<typeof IconRenderer>, 'size' | 'tone'>) => (
  <IconRenderer size={size} tone={tone}>
    {({ className }) => (
      <svg
        viewBox="0 0 24 24"
        focusable="false"
        fill="currentColor"
        aria-hidden
        className={className}
      >
        <rect x="3" y="3" width="18" height="18" rx="5" />
      </svg>
    )}
  </IconRenderer>
);

export const Default: Story = {
  args: {
    icon: <IconBookmark />,
    label: 'Bookmark',
    id: '1',
  },
};

export const Soft: Story = {
  render: () => (
    <Inline space="large" alignY="center">
      <ButtonIcon
        variant="soft"
        size="small"
        icon={<IconBookmark />}
        label="Small"
      />
      <ButtonIcon
        variant="soft"
        size="standard"
        icon={<IconBookmark />}
        label="Standard"
      />
      <ButtonIcon
        variant="soft"
        size="large"
        icon={<IconBookmark />}
        label="Large"
      />
    </Inline>
  ),
};

export const SoftBleedOn: Story = {
  name: 'Soft - bleed on',
  render: () => (
    <Box background="neutralLight" borderRadius="standard" padding="gutter">
      <Box background="surface">
        <Inline space="small" alignY="center">
          <Heading level="2">Heading</Heading>
          <ButtonIcon
            variant="soft"
            bleed
            icon={<IconBookmark />}
            label="Bookmark"
          />
        </Inline>
      </Box>
    </Box>
  ),
};

export const SoftBleedOff: Story = {
  name: 'Soft - bleed off',
  render: () => (
    <Box background="neutralLight" borderRadius="standard" padding="gutter">
      <Box background="surface">
        <Inline space="small" alignY="center">
          <Heading level="2">Heading</Heading>
          <ButtonIcon
            variant="soft"
            bleed={false}
            icon={<IconBookmark />}
            label="Bookmark"
          />
        </Inline>
      </Box>
    </Box>
  ),
};

export const Solid: Story = {
  render: () => (
    <Inline space="large" alignY="center">
      <ButtonIcon
        variant="solid"
        size="small"
        icon={<IconBookmark />}
        label="Small"
      />
      <ButtonIcon
        variant="solid"
        size="standard"
        icon={<IconBookmark />}
        label="Standard"
      />
      <ButtonIcon
        variant="solid"
        size="large"
        icon={<IconBookmark />}
        label="Large"
      />
    </Inline>
  ),
};

export const SolidBleedOn: Story = {
  name: 'Solid - bleed on',
  render: () => (
    <Box background="neutralLight" borderRadius="standard" padding="gutter">
      <Box background="surface">
        <Inline space="small" alignY="center">
          <Heading level="2">Heading</Heading>
          <ButtonIcon
            variant="solid"
            bleed
            icon={<IconBookmark />}
            label="Bookmark"
          />
        </Inline>
      </Box>
    </Box>
  ),
};

export const SolidBleedOff: Story = {
  name: 'Solid - bleed off',
  render: () => (
    <Box background="neutralLight" borderRadius="standard" padding="gutter">
      <Box background="surface">
        <Inline space="small" alignY="center">
          <Heading level="2">Heading</Heading>
          <ButtonIcon
            variant="solid"
            bleed={false}
            icon={<IconBookmark />}
            label="Bookmark"
          />
        </Inline>
      </Box>
    </Box>
  ),
};

export const Transparent: Story = {
  render: () => (
    <Inline space="large" alignY="center">
      <ButtonIcon
        variant="transparent"
        size="small"
        icon={<IconBookmark />}
        label="Small"
      />
      <ButtonIcon
        variant="transparent"
        size="standard"
        icon={<IconBookmark />}
        label="Standard"
      />
      <ButtonIcon
        variant="transparent"
        size="large"
        icon={<IconBookmark />}
        label="Large"
      />
    </Inline>
  ),
};

export const TransparentBleedOnDefault: Story = {
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
          />
        </Inline>
      </Box>
    </Box>
  ),
};

export const TransparentBleedOff: Story = {
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
          />
        </Inline>
      </Box>
    </Box>
  ),
};

export const ToneFormAccent: Story = {
  name: 'Tone - formAccent',
  render: () => (
    <Inline space="large" alignY="center">
      <ButtonIcon
        variant="transparent"
        tone="formAccent"
        icon={<IconBookmark />}
        label="Bookmark"
      />
      <ButtonIcon
        variant="soft"
        tone="formAccent"
        icon={<IconBookmark />}
        label="Bookmark"
      />
      <ButtonIcon
        variant="solid"
        tone="formAccent"
        icon={<IconBookmark />}
        label="Bookmark"
      />
    </Inline>
  ),
};

export const ToneBrandAccent: Story = {
  name: 'Tone - brandAccent',
  render: () => (
    <Inline space="large" alignY="center">
      <ButtonIcon
        variant="transparent"
        tone="brandAccent"
        icon={<IconBookmark />}
        label="Bookmark"
      />
      <ButtonIcon
        variant="soft"
        tone="brandAccent"
        icon={<IconBookmark />}
        label="Bookmark"
      />
      <ButtonIcon
        variant="solid"
        tone="brandAccent"
        icon={<IconBookmark />}
        label="Bookmark"
      />
    </Inline>
  ),
};

export const VirtualTouchTarget: Story = {
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
        />
        <ButtonIcon
          variant="soft"
          icon={<IconBookmark />}
          label="Bookmark"
          size="standard"
        />
        <ButtonIcon
          variant="soft"
          icon={<IconBookmark />}
          label="Bookmark"
          size="large"
        />
      </Inline>
      <Inline space="large">
        <ButtonIcon
          variant="transparent"
          icon={<IconBookmark />}
          label="Bookmark"
          size="small"
        />
        <ButtonIcon
          variant="transparent"
          icon={<IconBookmark />}
          label="Bookmark"
          size="standard"
        />
        <ButtonIcon
          variant="transparent"
          icon={<IconBookmark />}
          label="Bookmark"
          size="large"
        />
      </Inline>
    </Stack>
  ),
};

export const IconToneOverridesButtonTone: Story = {
  name: 'Icon tone overrides button tone',
  render: () => (
    <Inline space="small" alignY="center">
      <ButtonIcon
        bleed={false}
        variant="transparent"
        icon={<IconBookmark active tone="brandAccent" />}
        label="Bookmark"
      />
      <ButtonIcon
        bleed={false}
        variant="transparent"
        tone="formAccent"
        icon={<IconBookmark active tone="brandAccent" />}
        label="Bookmark"
      />
    </Inline>
  ),
};

export const Contrast: Story = {
  render: () => (
    <BackgroundContrastTest>
      <Inline space="medium">
        <ButtonIcon variant="solid" icon={<IconBookmark />} label="Bookmark" />
        <ButtonIcon variant="soft" icon={<IconBookmark />} label="Bookmark" />
        <ButtonIcon
          variant="transparent"
          bleed={false}
          icon={<IconBookmark />}
          label="Bookmark"
        />
      </Inline>
    </BackgroundContrastTest>
  ),
};

export const CustomIconSlot: Story = {
  name: 'Custom icon',
  render: () => (
    <Inline space="large" alignY="center">
      <ButtonIcon
        variant="soft"
        size="small"
        icon={<CustomIcon />}
        label="Small"
      />
      <ButtonIcon
        variant="soft"
        size="standard"
        icon={<CustomIcon />}
        label="Standard"
      />
      <ButtonIcon
        variant="soft"
        size="large"
        icon={<CustomIcon />}
        label="Large"
      />
    </Inline>
  ),
};

export const Layout: Story = {
  render: () => (
    <LayoutTest>
      <ButtonIcon icon={<IconBookmark />} label="Bookmark" />
    </LayoutTest>
  ),
};
