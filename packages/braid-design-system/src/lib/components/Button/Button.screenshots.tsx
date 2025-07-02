import type { Meta, StoryObj } from '@storybook/react-webpack5';
import React from 'react';

import {
  Box,
  Button,
  IconSend,
  Stack,
  Inline,
  Heading,
  Text,
  IconArrow,
  IconWorkExperience,
} from '../';
import { BackgroundContrastTest } from '../../utils/BackgroundContrastTest';
import { debugTouchableAttrForDataProp } from '../private/touchable/debugTouchable';

import type { ButtonProps } from './Button';

const meta = {
  title: 'Components/Button',
  component: Button,
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
    bleed: { control: 'boolean' },
    children: { control: 'text' },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

const defaultParams = {
  chromatic: {
    viewports: [768],
  },
  layout: 'fullscreen',
};

export const Defaultvariantfortone: Story = {
  name: 'Default variant for tone',
  render: () => (
    <Inline space="small">
      <Button>No tone</Button>
      <Button tone="brandAccent">brandAccent</Button>
      <Button tone="critical">critical</Button>
      <Button tone="formAccent">formAccent</Button>
      <Button tone="neutral">neutral</Button>
    </Inline>
  ),
  parameters: defaultParams,
};

export const Critical: Story = {
  name: 'Critical',
  render: () => (
    <Inline space="small">
      <Button tone="critical" variant="solid">
        Solid
      </Button>
      <Button tone="critical" variant="ghost">
        Ghost
      </Button>
      <Button tone="critical" variant="soft">
        Soft
      </Button>
      <Button tone="critical" variant="transparent">
        Transparent
      </Button>
    </Inline>
  ),
  parameters: defaultParams,
};

export const BrandAccent: Story = {
  name: 'BrandAccent',
  render: () => (
    <Inline space="small">
      <Button tone="brandAccent" variant="solid">
        Solid
      </Button>
      <Button tone="brandAccent" variant="ghost">
        Ghost
      </Button>
      <Button tone="brandAccent" variant="soft">
        Soft
      </Button>
      <Button tone="brandAccent" variant="transparent">
        Transparent
      </Button>
    </Inline>
  ),
  parameters: defaultParams,
};

export const FormAccent: Story = {
  name: 'FormAccent',
  render: () => (
    <Inline space="small">
      <Button tone="formAccent" variant="solid">
        Solid
      </Button>
      <Button tone="formAccent" variant="ghost">
        Ghost
      </Button>
      <Button tone="formAccent" variant="soft">
        Soft
      </Button>
      <Button tone="formAccent" variant="transparent">
        Transparent
      </Button>
    </Inline>
  ),
  parameters: defaultParams,
};

export const Neutral: Story = {
  name: 'Neutral',
  render: () => (
    <Inline space="small">
      <Button tone="neutral" variant="solid">
        Solid
      </Button>
      <Button tone="neutral" variant="ghost">
        Ghost
      </Button>
      <Button tone="neutral" variant="soft">
        Soft
      </Button>
      <Button tone="neutral" variant="transparent">
        Transparent
      </Button>
    </Inline>
  ),
  parameters: defaultParams,
};

export const Smallsize: Story = {
  name: 'Small size',
  render: () => (
    <Inline space="small">
      <Button size="small" variant="solid">
        Solid
      </Button>
      <Button size="small" variant="ghost">
        Ghost
      </Button>
      <Button size="small" variant="soft">
        Soft
      </Button>
      <Button size="small" variant="transparent">
        Transparent
      </Button>
    </Inline>
  ),
  parameters: defaultParams,
};

export const Smallsizevirtualtouchtarget: Story = {
  name: 'Small size (virtual touch target)',
  render: () => (
    <Inline
      space="small"
      data={{
        [debugTouchableAttrForDataProp]: '',
      }}
    >
      <Button size="small" variant="solid">
        Solid
      </Button>
      <Button size="small" variant="ghost">
        Ghost
      </Button>
      <Button size="small" variant="soft">
        Soft
      </Button>
      <Button size="small" variant="transparent">
        Transparent
      </Button>
    </Inline>
  ),
  parameters: defaultParams,
};

export const Withverticalbleedstandard: Story = {
  name: 'With vertical bleed (standard)',
  render: () => (
    <Box background="neutralLight" borderRadius="standard" padding="gutter">
      <Box background="surface">
        <Inline space="none" alignY="center">
          <Heading level="2">Heading</Heading>
          <Button bleed>Button</Button>
        </Inline>
      </Box>
    </Box>
  ),
  parameters: defaultParams,
};

export const Withverticalbleedsmall: Story = {
  name: 'With vertical bleed (small)',
  render: () => (
    <Box background="neutralLight" borderRadius="standard" padding="gutter">
      <Box background="surface">
        <Inline space="none" alignY="center">
          <Heading level="2">Heading</Heading>
          <Button bleed size="small">
            Button
          </Button>
        </Inline>
      </Box>
    </Box>
  ),
  parameters: defaultParams,
};

export const Withfullbleedtransparent: Story = {
  name: 'With full bleed (transparent)',
  render: () => (
    <Box background="neutralLight" borderRadius="standard" padding="gutter">
      <Box background="surface">
        <Heading level="2">Heading</Heading>
        <Inline space="none">
          <Button bleed variant="transparent">
            Button
          </Button>
        </Inline>
      </Box>
    </Box>
  ),
  parameters: defaultParams,
};

export const Withicon: Story = {
  name: 'With icon',
  render: () => (
    <Stack space="small">
      <Inline space="small">
        <Button icon={<IconSend />} variant="solid">
          Solid
        </Button>
        <Button icon={<IconSend />} variant="ghost">
          Ghost
        </Button>
        <Button icon={<IconSend />} variant="soft">
          Soft
        </Button>
        <Button icon={<IconSend />} variant="transparent">
          Transparent
        </Button>
      </Inline>
      <Inline space="small">
        <Button size="small" icon={<IconSend />} variant="solid">
          Solid
        </Button>
        <Button size="small" icon={<IconSend />} variant="ghost">
          Ghost
        </Button>
        <Button size="small" icon={<IconSend />} variant="soft">
          Soft
        </Button>
        <Button size="small" icon={<IconSend />} variant="transparent">
          Transparent
        </Button>
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
        <Button
          icon={<IconArrow direction="right" />}
          iconPosition="trailing"
          variant="solid"
        >
          Solid
        </Button>
        <Button
          icon={<IconArrow direction="right" />}
          iconPosition="trailing"
          variant="ghost"
        >
          Ghost
        </Button>
        <Button
          icon={<IconArrow direction="right" />}
          iconPosition="trailing"
          variant="soft"
        >
          Soft
        </Button>
        <Button
          icon={<IconArrow direction="right" />}
          iconPosition="trailing"
          variant="transparent"
        >
          Transparent
        </Button>
      </Inline>
      <Inline space="small">
        <Button
          size="small"
          icon={<IconArrow direction="right" />}
          iconPosition="trailing"
          variant="solid"
        >
          Solid
        </Button>
        <Button
          size="small"
          icon={<IconArrow direction="right" />}
          iconPosition="trailing"
          variant="ghost"
        >
          Ghost
        </Button>
        <Button
          size="small"
          icon={<IconArrow direction="right" />}
          iconPosition="trailing"
          variant="soft"
        >
          Soft
        </Button>
        <Button
          size="small"
          icon={<IconArrow direction="right" />}
          iconPosition="trailing"
          variant="transparent"
        >
          Transparent
        </Button>
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
        <Button icon={<IconSend />} variant="transparent" bleed>
          Button
        </Button>
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
          <Button icon={<IconSend />} size="small" variant="transparent" bleed>
            Button
          </Button>
        </Inline>
      </Stack>
    ),
    parameters: defaultParams,
  };

export const Contrast: Story = {
  name: 'Contrast',
  render: () => (
    <BackgroundContrastTest>
      <Inline space="small">
        <Button tone="formAccent" variant="solid">
          Solid
        </Button>
        <Button tone="formAccent" variant="ghost">
          Ghost
        </Button>
        <Button tone="formAccent" variant="soft">
          Soft
        </Button>
        <Button tone="formAccent" variant="transparent">
          Transparent
        </Button>
      </Inline>
    </BackgroundContrastTest>
  ),
  parameters: defaultParams,
};

export const Contrastcritical: Story = {
  name: 'Contrast - critical',
  render: () => (
    <BackgroundContrastTest>
      <Inline space="small">
        <Button tone="critical" variant="solid">
          Solid
        </Button>
        <Button tone="critical" variant="ghost">
          Ghost
        </Button>
        <Button tone="critical" variant="soft">
          Soft
        </Button>
        <Button tone="critical" variant="transparent">
          Transparent
        </Button>
      </Inline>
    </BackgroundContrastTest>
  ),
  parameters: defaultParams,
};

export const ContrastbrandAccent: Story = {
  name: 'Contrast - brandAccent',
  render: () => (
    <BackgroundContrastTest>
      <Inline space="small">
        <Button tone="brandAccent" variant="solid">
          Solid
        </Button>
        <Button tone="brandAccent" variant="ghost">
          Ghost
        </Button>
        <Button tone="brandAccent" variant="soft">
          Soft
        </Button>
        <Button tone="brandAccent" variant="transparent">
          Transparent
        </Button>
      </Inline>
    </BackgroundContrastTest>
  ),
  parameters: defaultParams,
};

export const Contrastneutral: Story = {
  name: 'Contrast - neutral',
  render: () => (
    <BackgroundContrastTest>
      <Inline space="small">
        <Button tone="neutral" variant="solid">
          Solid
        </Button>
        <Button tone="neutral" variant="ghost">
          Ghost
        </Button>
        <Button tone="neutral" variant="soft">
          Soft
        </Button>
        <Button tone="neutral" variant="transparent">
          Transparent
        </Button>
      </Inline>
    </BackgroundContrastTest>
  ),
  parameters: defaultParams,
};

export const Longlabel: Story = {
  name: 'Long label',
  render: () => (
    <Stack space="xsmall">
      <Text>Long label</Text>
      <Inline space="small">
        {['standard', 'small'].map((s) => (
          <Box
            style={{
              maxWidth: 120,
            }}
            key={s}
          >
            <Button size={s as ButtonProps['size']}>
              Long label test ({s})
            </Button>
          </Box>
        ))}
      </Inline>

      <Text>Long label with icon</Text>
      <Inline space="small">
        {['standard', 'small'].map((s) => (
          <Box
            style={{
              maxWidth: 120,
            }}
            key={s}
          >
            <Button
              icon={<IconWorkExperience />}
              size={s as ButtonProps['size']}
            >
              long label test ({s})
            </Button>
          </Box>
        ))}
      </Inline>
    </Stack>
  ),
  parameters: defaultParams,
};

export const Unbrokenlabel: Story = {
  name: 'Unbroken label',
  render: () => (
    <Stack space="xsmall">
      <Text>Unbroken label</Text>
      <Inline space="small">
        {['standard', 'small'].map((s) => (
          <Box
            style={{
              maxWidth: 120,
            }}
            key={s}
          >
            <Button size={s as ButtonProps['size']}>
              unbrokenlabeltest{s}
            </Button>
          </Box>
        ))}
      </Inline>

      <Text>Unbroken label with icon</Text>
      <Inline space="small">
        {['standard', 'small'].map((s) => (
          <Box
            style={{
              maxWidth: 120,
            }}
            key={s}
          >
            <Button
              icon={<IconWorkExperience />}
              size={s as ButtonProps['size']}
            >
              unbrokenlabeltest{s}
            </Button>
          </Box>
        ))}
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
          <Button>Non elit</Button>
          <Button>Non elit do do incididunt nostrud</Button>
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
          <Button icon={<IconWorkExperience />} iconPosition="leading">
            Non elit
          </Button>
          <Button icon={<IconWorkExperience />} iconPosition="leading">
            Non elit do do incididunt nostrud
          </Button>
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
          <Button icon={<IconWorkExperience />} iconPosition="trailing">
            Non elit
          </Button>
          <Button icon={<IconWorkExperience />} iconPosition="trailing">
            Non elit do do incididunt nostrud
          </Button>
        </Box>
      </Stack>
    ),
    parameters: defaultParams,
  };

export const Ensureinnerlabelelementisfullwidthreddotsshouldtouchhorizontaledges: Story =
  {
    name: 'Ensure inner label element is full width (red dots should touch horizontal edges)',
    render: () => (
      <Button>
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
      </Button>
    ),
    parameters: defaultParams,
  };
