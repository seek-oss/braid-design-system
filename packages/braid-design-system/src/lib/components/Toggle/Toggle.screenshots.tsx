import type { Meta, StoryObj } from '@storybook/react';

import { Toggle, Box, Tiles, Inline, Text, Stack } from '../';
import { BackgroundContrastTest } from '../../utils/BackgroundContrastTest';
import { debugTouchableAttrForDataProp } from '../private/touchable/debugTouchable';

const Container = ({ children }: { children: React.ReactNode }) => (
  <div style={{ maxWidth: '300px' }}>{children}</div>
);

const meta: Meta<typeof Toggle> = {
  title: 'Components/Toggle',
  component: Toggle,
  parameters: {
    layout: 'padded',
    chromatic: {
      viewports: [320],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Toggle>;

export const ToggleOff: Story = {
  args: {
    id: 'toggle-off',
    on: false,
    label: 'Toggled off',
    onChange: () => {},
  },
};

export const ToggleOn: Story = {
  args: {
    id: 'toggle-on',
    on: true,
    label: 'Toggled on',
    onChange: () => {},
  },
};

export const SmallSize: Story = {
  args: {
    id: 'toggle-small',
    on: true,
    size: 'small',
    label: 'Small',
    onChange: () => {},
  },
};

export const RightAlignedWithDefaultTogglePosition: Story = {
  args: {
    id: 'toggle-right-aligned',
    on: true,
    align: 'right',
    label: 'Aligned right',
    onChange: () => {},
  },
  decorators: [
    (Story) => (
      <Container>
        <Story />
      </Container>
    ),
  ],
};

export const JustifiedWithDefaultTogglePosition: Story = {
  args: {
    id: 'toggle-justified',
    on: true,
    align: 'justify',
    label: 'Justified',
    onChange: () => {},
  },
  decorators: [
    (Story) => (
      <Container>
        <Story />
      </Container>
    ),
  ],
};

export const SpaceBetweenTheLabelAndTogglePreserved: Story = {
  render: () => (
    <Container>
      <Box display="flex">
        <Toggle
          id="toggle-space-preserved"
          on={true}
          align="justify"
          label="Justified"
          onChange={() => {}}
        />
      </Box>
    </Container>
  ),
};

export const LeftAlignedWithLeadingTogglePosition: Story = {
  args: {
    id: 'toggle-left-leading',
    on: true,
    align: 'left',
    togglePosition: 'leading',
    label: 'Aligned left, leading toggle',
    onChange: () => {},
  },
  decorators: [
    (Story) => (
      <Container>
        <Story />
      </Container>
    ),
  ],
};

export const LeftAlignedWithTrailingTogglePosition: Story = {
  args: {
    id: 'toggle-left-trailing',
    on: true,
    align: 'left',
    togglePosition: 'trailing',
    label: 'Aligned left, trailing toggle',
    onChange: () => {},
  },
  decorators: [
    (Story) => (
      <Container>
        <Story />
      </Container>
    ),
  ],
};

export const JustifiedWithLeadingTogglePosition: Story = {
  args: {
    id: 'toggle-justified-leading',
    on: true,
    align: 'justify',
    togglePosition: 'leading',
    label: 'Justified, leading toggle',
    onChange: () => {},
  },
  decorators: [
    (Story) => (
      <Container>
        <Story />
      </Container>
    ),
  ],
};

export const JustifiedWithTrailingTogglePosition: Story = {
  args: {
    id: 'toggle-justified-trailing',
    on: true,
    align: 'justify',
    togglePosition: 'trailing',
    label: 'Justified, trailing toggle',
    onChange: () => {},
  },
  decorators: [
    (Story) => (
      <Container>
        <Story />
      </Container>
    ),
  ],
};

export const RightAlignedWithLeadingTogglePosition: Story = {
  args: {
    id: 'toggle-right-leading',
    on: true,
    align: 'right',
    togglePosition: 'leading',
    label: 'Right aligned, leading toggle',
    onChange: () => {},
  },
  decorators: [
    (Story) => (
      <Container>
        <Story />
      </Container>
    ),
  ],
};

export const RightAlignedWithTrailingTogglePosition: Story = {
  args: {
    id: 'toggle-right-trailing',
    on: true,
    align: 'right',
    togglePosition: 'trailing',
    label: 'Right aligned, trailing toggle',
    onChange: () => {},
  },
  decorators: [
    (Story) => (
      <Container>
        <Story />
      </Container>
    ),
  ],
};

export const WithALongLabel: Story = {
  args: {
    id: 'toggle-long-label',
    on: true,
    label:
      'The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.',
    onChange: () => {},
  },
  decorators: [
    (Story) => (
      <Container>
        <Story />
      </Container>
    ),
  ],
};

export const WithInlineTextStandardSize: Story = {
  render: () => (
    <Container>
      <Inline space="xsmall">
        <Toggle
          id="toggle-inline-standard"
          on={true}
          label="Toggle"
          onChange={() => {}}
        />
        <Text>Inline text</Text>
      </Inline>
    </Container>
  ),
};

export const WithInlineTextSmallSize: Story = {
  render: () => (
    <Container>
      <Inline space="xsmall">
        <Toggle
          id="toggle-inline-small"
          on={true}
          label="Toggle"
          onChange={() => {}}
          size="small"
        />
        <Text size="small">Inline text</Text>
      </Inline>
    </Container>
  ),
};

export const VirtualTouchTarget: Story = {
  render: () => (
    <Inline space="large" data={{ [debugTouchableAttrForDataProp]: '' }}>
      <Toggle
        id="toggle-virtual-small"
        on={true}
        size="small"
        label="Small"
        onChange={() => {}}
      />
      <Toggle
        id="toggle-virtual-standard"
        on={true}
        size="standard"
        label="Standard"
        onChange={() => {}}
      />
    </Inline>
  ),
};

export const Contrast: Story = {
  render: () => (
    <Box maxWidth="xsmall">
      <BackgroundContrastTest>
        <Tiles space="small" columns={2}>
          <Toggle
            id="toggle-contrast-on"
            on={true}
            label="Label"
            onChange={() => {}}
          />
          <Toggle
            id="toggle-contrast-off"
            on={false}
            label="Label"
            onChange={() => {}}
          />
        </Tiles>
      </BackgroundContrastTest>
    </Box>
  ),
};

export const TestShouldBeLeftAlignedInACenteredStack: Story = {
  render: () => (
    <Stack space="large" align="center">
      <Toggle
        id="toggle-centered-stack"
        on={true}
        label="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sodales hendrerit nulla."
        onChange={() => {}}
      />
    </Stack>
  ),
};
