import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { Toggle, Box, Tiles, Inline, Text, Stack } from '../';
import { BackgroundContrastTest } from '../../utils/BackgroundContrastTest';
import { debugTouchableAttrForDataProp } from '../private/touchable/debugTouchable';

const meta: Meta<typeof Toggle> = {
  title: 'Components/Toggle',
  args: {
    onChange: () => {},
  },
  component: Toggle,
};

export default meta;
type Story = StoryObj<typeof Toggle>;

export const ToggleOff: Story = {
  args: {
    on: false,
    label: 'Toggled off',
  },
};

export const ToggleOn: Story = {
  args: {
    on: true,
    label: 'Toggled on',
  },
};

export const SmallSize: Story = {
  args: {
    on: true,
    size: 'small',
    label: 'Small',
  },
};

export const RightAlignedWithDefaultTogglePosition: Story = {
  args: {
    on: true,
    align: 'right',
    label: 'Aligned right',
  },
};

export const JustifiedWithDefaultTogglePosition: Story = {
  args: {
    on: true,
    align: 'justify',
    label: 'Justified',
  },
};

export const SpaceBetweenTheLabelAndTogglePreserved: Story = {
  args: {
    align: 'justify',
    on: true,
    label: 'Justified',
  },
  decorators: (Story) => (
    <Box display="flex">
      <Story />
    </Box>
  ),
};

export const LeftAlignedWithLeadingTogglePosition: Story = {
  args: {
    on: true,
    align: 'left',
    togglePosition: 'leading',
    label: 'Aligned left, leading toggle',
  },
};

export const LeftAlignedWithTrailingTogglePosition: Story = {
  args: {
    on: true,
    align: 'left',
    togglePosition: 'trailing',
    label: 'Aligned left, trailing toggle',
  },
};

export const JustifiedWithLeadingTogglePosition: Story = {
  args: {
    on: true,
    align: 'justify',
    togglePosition: 'leading',
    label: 'Justified, leading toggle',
  },
};

export const JustifiedWithTrailingTogglePosition: Story = {
  args: {
    on: true,
    align: 'justify',
    togglePosition: 'trailing',
    label: 'Justified, trailing toggle',
  },
};

export const RightAlignedWithLeadingTogglePosition: Story = {
  args: {
    on: true,
    align: 'right',
    togglePosition: 'leading',
    label: 'Right aligned, leading toggle',
  },
};

export const RightAlignedWithTrailingTogglePosition: Story = {
  args: {
    on: true,
    align: 'right',
    togglePosition: 'trailing',
    label: 'Right aligned, trailing toggle',
  },
};

export const WithALongLabel: Story = {
  args: {
    on: true,
    label:
      'The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.',
  },
};

export const WithInlineTextStandardSize: Story = {
  args: {
    on: true,
    label: 'Toggle',
  },
  decorators: (Story) => (
    <Inline space="xsmall">
      <Story />
      <Text>Inline text</Text>
    </Inline>
  ),
};

export const WithInlineTextSmallSize: Story = {
  args: {
    on: true,
    label: 'Toggle',
    size: 'small',
  },
  decorators: (Story) => (
    <Inline space="xsmall">
      <Story />
      <Text size="small">Inline text</Text>
    </Inline>
  ),
};

export const VirtualTouchTarget: Story = {
  render: () => (
    <Inline space="large" data={{ [debugTouchableAttrForDataProp]: '' }}>
      <Toggle on={true} size="small" label="Small" onChange={() => {}} />
      <Toggle on={true} size="standard" label="Standard" onChange={() => {}} />
    </Inline>
  ),
};

export const Contrast: Story = {
  render: () => (
    <Box maxWidth="xsmall">
      <BackgroundContrastTest>
        <Tiles space="small" columns={2}>
          <Toggle on={true} label="Label" onChange={() => {}} />
          <Toggle on={false} label="Label" onChange={() => {}} />
        </Tiles>
      </BackgroundContrastTest>
    </Box>
  ),
};

export const TestShouldBeLeftAlignedInACenteredStack: Story = {
  args: {
    on: true,
    label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  decorators: (Story) => (
    <Stack space="large" align="center">
      <Story />
    </Stack>
  ),
};
