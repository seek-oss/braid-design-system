import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { Stack, Text, Box, TooltipRenderer, Inline } from '../';

import { StaticTooltipProvider } from './TooltipRenderer';

const triggerStyles = { width: 50, height: 20, background: 'pink' } as const;

const meta: Meta<typeof TooltipRenderer> = {
  title: 'Components/TooltipRenderer',
  component: TooltipRenderer,
  decorators: [
    (Story) => (
      <StaticTooltipProvider>
        <Story />
      </StaticTooltipProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof TooltipRenderer>;

export const TopPlacement: Story = {
  render: () => (
    <Box style={{ paddingTop: 100 }}>
      <TooltipRenderer placement="top" tooltip={<Text>Tooltip</Text>}>
        {({ triggerProps }) => <Box style={triggerStyles} {...triggerProps} />}
      </TooltipRenderer>
    </Box>
  ),
};

export const BottomPlacement: Story = {
  render: () => (
    <Box style={{ paddingBottom: 100 }}>
      <TooltipRenderer placement="bottom" tooltip={<Text>Tooltip</Text>}>
        {({ triggerProps }) => <Box style={triggerStyles} {...triggerProps} />}
      </TooltipRenderer>
    </Box>
  ),
};

export const LeftPlacement: Story = {
  render: () => (
    <Box style={{ paddingLeft: 200 }} display="flex" justifyContent="flexEnd">
      <TooltipRenderer placement="left" tooltip={<Text>Tooltip</Text>}>
        {({ triggerProps }) => <Box style={triggerStyles} {...triggerProps} />}
      </TooltipRenderer>
    </Box>
  ),
};

export const RightPlacement: Story = {
  render: () => (
    <Box style={{ paddingRight: 200 }}>
      <TooltipRenderer placement="right" tooltip={<Text>Tooltip</Text>}>
        {({ triggerProps }) => <Box style={triggerStyles} {...triggerProps} />}
      </TooltipRenderer>
    </Box>
  ),
};

export const LeftAligned: Story = {
  render: () => (
    <Box style={{ paddingBottom: 100 }}>
      <TooltipRenderer placement="bottom" tooltip={<Text>Tooltip</Text>}>
        {({ triggerProps }) => <Box style={triggerStyles} {...triggerProps} />}
      </TooltipRenderer>
    </Box>
  ),
  decorators: (Story) => (
    <Inline space="small" align="left">
      <Story />
    </Inline>
  ),
};

export const CenterAligned: Story = {
  render: () => (
    <Box style={{ paddingBottom: 100 }}>
      <TooltipRenderer placement="bottom" tooltip={<Text>Tooltip</Text>}>
        {({ triggerProps }) => <Box style={triggerStyles} {...triggerProps} />}
      </TooltipRenderer>
    </Box>
  ),
  decorators: (Story) => (
    <Inline space="small" align="center">
      <Story />
    </Inline>
  ),
};

export const RightAligned: Story = {
  render: () => (
    <Box style={{ paddingBottom: 100 }}>
      <TooltipRenderer placement="bottom" tooltip={<Text>Tooltip</Text>}>
        {({ triggerProps }) => <Box style={triggerStyles} {...triggerProps} />}
      </TooltipRenderer>
    </Box>
  ),
  decorators: (Story) => (
    <Inline space="small" align="right">
      <Story />
    </Inline>
  ),
};

export const MultipleLinesOfText: Story = {
  render: () => (
    <Box style={{ paddingBottom: 200 }}>
      <TooltipRenderer
        placement="bottom"
        tooltip={
          <Text>
            The quick brown fox jumps over the lazy dog. The quick brown fox
            jumps over the lazy dog.
          </Text>
        }
      >
        {({ triggerProps }) => <Box style={triggerStyles} {...triggerProps} />}
      </TooltipRenderer>
    </Box>
  ),
};

export const HandleLongUnbrokenText: Story = {
  render: () => (
    <Box style={{ paddingBottom: 200 }}>
      <TooltipRenderer
        placement="bottom"
        tooltip={<Text>ReallyLongUnbrokenWordShouldBeHandled</Text>}
      >
        {({ triggerProps }) => <Box style={triggerStyles} {...triggerProps} />}
      </TooltipRenderer>
    </Box>
  ),
};

export const HandleLongUnbrokenChineseText: Story = {
  render: () => (
    <Box style={{ paddingBottom: 200 }} display="flex" justifyContent="flexEnd">
      <TooltipRenderer
        placement="bottom"
        tooltip={<Text>上傳您的文檔上傳您的文檔上傳您的文檔上傳您的文檔</Text>}
      >
        {({ triggerProps }) => <Box style={triggerStyles} {...triggerProps} />}
      </TooltipRenderer>
    </Box>
  ),
};

export const HandleLongUnbrokenMixedCharacterSetText: Story = {
  render: () => (
    <Box style={{ paddingBottom: 200 }} display="flex" justifyContent="flexEnd">
      <TooltipRenderer
        placement="bottom"
        tooltip={
          <Text>
            此僱主過去 30 天回覆了約 50% 的申請，數據來自其申請管理動態
          </Text>
        }
      >
        {({ triggerProps }) => <Box style={triggerStyles} {...triggerProps} />}
      </TooltipRenderer>
    </Box>
  ),
};

export const TextStyleOverrides: Story = {
  render: () => (
    <Box style={{ paddingBottom: 200 }}>
      <TooltipRenderer
        placement="bottom"
        tooltip={
          <Stack space="medium">
            <Text weight="strong">Strong text</Text>
            <Text>
              The quick brown fox jumps over the lazy dog. The quick brown fox
              jumps over the lazy dog.
            </Text>
          </Stack>
        }
      >
        {({ triggerProps }) => <Box style={triggerStyles} {...triggerProps} />}
      </TooltipRenderer>
    </Box>
  ),
};
