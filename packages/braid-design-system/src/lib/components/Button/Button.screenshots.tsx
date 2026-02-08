import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { setChromatic } from 'braid-storybook/chromatic';

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

import { buttonSizes, buttonVariants, type ButtonProps } from './Button';
import { buttonTones } from './buttonTones';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    chromatic: setChromatic({ viewports: ['tablet'] }),
  },
  argTypes: {
    tone: {
      control: 'select',
      options: buttonTones,
    },
    variant: {
      control: 'select',
      options: buttonVariants,
    },
    size: { control: 'radio', options: buttonSizes },
    bleed: { control: 'boolean' },
    children: { control: 'text' },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

export const DefaultVariantForTone: Story = {
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
};

export const Critical: Story = {
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
};

export const Neutral: Story = {
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
};

export const SmallSize: Story = {
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
};

export const SmallSizeVirtualTouchTarget: Story = {
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
};

export const WithVerticalBleedStandard: Story = {
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
};

export const WithVerticalBleedSmall: Story = {
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
};

export const WithFullBleedTransparent: Story = {
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
};

export const WithIcon: Story = {
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
};

export const WithIconPositionTrailing: Story = {
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
};

export const WithIconTransparentVariantAndBleedItShouldAlignWithText: Story = {
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
};

export const WithIconTransparentVariantBleedAndSizeSmallItShouldAlignWithText: Story =
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
  };

export const Contrast: Story = {
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
};

export const ContrastCritical: Story = {
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
};

export const ContrastBrandAccent: Story = {
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
};

export const ContrastNeutral: Story = {
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
};

export const LongLabel: Story = {
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
};

export const UnbrokenLabel: Story = {
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
};

export const VerticallyCenteredLabelsInContainersThatStretchElementsToFill: Story =
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
  };

export const EnsureInnerLabelElementIsFullWidthRedDotsShouldTouchHorizontalEdges: Story =
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
  };
