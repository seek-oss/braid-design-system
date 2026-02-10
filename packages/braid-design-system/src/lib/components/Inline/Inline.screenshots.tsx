import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { setChromatic } from 'braid-storybook/chromatic';
import { Fragment } from 'react';

import { Box, Inline, Stack, Strong, Text } from '../';
import { Placeholder } from '../../playroom/components';
import { spaces } from '../../utils/docsHelpers';

const meta = {
  title: 'Components/Inline',
  component: Inline,
  parameters: {
    chromatic: setChromatic({
      viewports: ['mobile', 'tablet', 'desktop', 'wide'],
      wireframeOnly: true,
    }),
  },
} satisfies Meta<typeof Inline>;

export default meta;
type Story = StoryObj<typeof Inline>;

export const Space: Story = {
  render: () => (
    <Stack space="xlarge">
      {spaces.map((space) => (
        <Stack space="small" key={space}>
          <Text size="xsmall" tone="secondary">
            Space: <Strong>{space}</Strong>
          </Text>
          <Inline space={space}>
            <Placeholder width={48} height={48} />
            <Placeholder width={48} height={48} />
            <Placeholder width={48} height={48} />
            <Placeholder width={48} height={48} />
            <Placeholder width={48} height={48} />
            <Placeholder width={48} height={48} />
            <Placeholder width={48} height={48} />
            <Placeholder width={48} height={48} />
            <Placeholder width={48} height={48} />
          </Inline>
        </Stack>
      ))}
    </Stack>
  ),
};

export const ResponsiveSpace: Story = {
  name: "Responsive space, e.g. ['xxsmall', 'medium']",
  render: () => (
    <Inline space={['xxsmall', 'medium']}>
      <Placeholder width={48} height={48} />
      <Placeholder width={48} height={48} />
      <Placeholder width={48} height={48} />
      <Placeholder width={48} height={48} />
      <Placeholder width={48} height={48} />
      <Placeholder width={48} height={48} />
      <Placeholder width={48} height={48} />
      <Placeholder width={48} height={48} />
      <Placeholder width={48} height={48} />
    </Inline>
  ),
};

export const AlignCenter: Story = {
  name: 'Align horizontally to center',
  render: () => (
    <Inline space="small" align="center">
      <Placeholder width={48} height={48} />
      <Placeholder width={48} height={48} />
      <Placeholder width={48} height={48} />
      <Placeholder width={48} height={48} />
      <Placeholder width={48} height={48} />
      <Placeholder width={48} height={48} />
      <Placeholder width={48} height={48} />
      <Placeholder width={48} height={48} />
      <Placeholder width={48} height={48} />
    </Inline>
  ),
};

export const AlignRight: Story = {
  name: 'Align horizontally to right',
  render: () => (
    <Inline space="small" align="right">
      <Placeholder width={48} height={48} />
      <Placeholder width={48} height={48} />
      <Placeholder width={48} height={48} />
      <Placeholder width={48} height={48} />
      <Placeholder width={48} height={48} />
      <Placeholder width={48} height={48} />
      <Placeholder width={48} height={48} />
      <Placeholder width={48} height={48} />
      <Placeholder width={48} height={48} />
    </Inline>
  ),
};

export const ResponsiveAlignment: Story = {
  name: 'Responsive alignment (e.g. center on mobile, left from tablet upwards)',
  render: () => (
    <Inline space="small" align={['center', 'left']}>
      <Placeholder width={48} height={48} />
      <Placeholder width={48} height={48} />
      <Placeholder width={48} height={48} />
      <Placeholder width={48} height={48} />
      <Placeholder width={48} height={48} />
      <Placeholder width={48} height={48} />
      <Placeholder width={48} height={48} />
      <Placeholder width={48} height={48} />
      <Placeholder width={48} height={48} />
    </Inline>
  ),
};

export const AlignVertically: Story = {
  name: 'Align vertically',
  render: () => (
    <Inline space="small" alignY="center">
      <Placeholder width={48} height={40} />
      <Placeholder width={48} height={100} />
      <Placeholder width={48} height={60} />
    </Inline>
  ),
};

export const CollapseBelowTablet: Story = {
  name: 'Collapse below tablet',
  render: () => (
    <Inline space="small" collapseBelow="tablet">
      <Placeholder width={48} height={48} />
      <Placeholder width={48} height={48} />
      <Placeholder width={48} height={48} />
      <Placeholder width={48} height={48} />
      <Placeholder width={48} height={48} />
      <Placeholder width={48} height={48} />
    </Inline>
  ),
};

export const CollapseBelowDesktop: Story = {
  name: 'Collapse below desktop',
  render: () => (
    <Inline space="small" collapseBelow="desktop">
      <Placeholder width={48} height={48} />
      <Placeholder width={48} height={48} />
      <Placeholder width={48} height={48} />
      <Placeholder width={48} height={48} />
      <Placeholder width={48} height={48} />
      <Placeholder width={48} height={48} />
    </Inline>
  ),
};

export const CollapseBelowWide: Story = {
  name: 'Collapse below wide',
  render: () => (
    <Inline space="small" collapseBelow="wide">
      <Placeholder width={48} height={48} />
      <Placeholder width={48} height={48} />
      <Placeholder width={48} height={48} />
      <Placeholder width={48} height={48} />
      <Placeholder width={48} height={48} />
      <Placeholder width={48} height={48} />
    </Inline>
  ),
};

export const CollapseBelowDesktopWithResponsiveSpace: Story = {
  name: 'Collapse below desktop with responsive space (e.g. "xxsmall" on mobile, "small" on tablet, "large" on desktop)',
  render: () => (
    <Inline space={['xxsmall', 'medium', 'large']} collapseBelow="desktop">
      <Placeholder width={48} height={48} />
      <Placeholder width={48} height={48} />
      <Placeholder width={48} height={48} />
      <Placeholder width={48} height={48} />
      <Placeholder width={48} height={48} />
      <Placeholder width={48} height={48} />
    </Inline>
  ),
};

export const CollapseBelowWideWithResponsiveSpace: Story = {
  name: 'Collapse below wide with responsive space (e.g. "xxsmall" on mobile, "small" on tablet, "large" on desktop, "xlarge" on wide)',
  render: () => (
    <Inline
      space={['xxsmall', 'medium', 'large', 'xlarge']}
      collapseBelow="wide"
    >
      <Placeholder width={48} height={48} />
      <Placeholder width={48} height={48} />
      <Placeholder width={48} height={48} />
      <Placeholder width={48} height={48} />
      <Placeholder width={48} height={48} />
      <Placeholder width={48} height={48} />
    </Inline>
  ),
};

export const CollapseBelowDesktopWithAlignment: Story = {
  name: 'Collapse below desktop with alignment (e.g. "center")',
  render: () => (
    <Inline space="small" collapseBelow="desktop" align="center">
      <Placeholder width={48} height={48} />
      <Placeholder width={48} height={48} />
      <Placeholder width={48} height={48} />
      <Placeholder width={48} height={48} />
      <Placeholder width={48} height={48} />
      <Placeholder width={48} height={48} />
    </Inline>
  ),
};

export const CollapseAndResponsiveAlign: Story = {
  name: 'Test - collapseBelow + align: On mobile should be vertical and left aligned, on tablet should be vertical and centre aligned, on desktop should be horizontal and right aligned',
  render: () => (
    <Inline
      space="small"
      collapseBelow="desktop"
      align={['left', 'center', 'right']}
    >
      <Placeholder width={48} height={48} />
      <Placeholder width={48} height={48} />
      <Placeholder width={48} height={48} />
      <Placeholder width={48} height={48} />
      <Placeholder width={48} height={48} />
      <Placeholder width={48} height={48} />
    </Inline>
  ),
};

export const CollapseTabletAlignReverse: Story = {
  name: 'Test - collapseBelow + align + reverse: On mobile should be vertical and left aligned, on tablet should be reversed horizontally and centre aligned, on desktop should be reversed horizontally and right aligned',
  render: () => (
    <Inline
      space="small"
      collapseBelow="tablet"
      align={['left', 'center', 'right']}
      reverse
    >
      <Placeholder width={48} height={48} label="1" />
      <Placeholder width={48} height={48} label="2" />
      <Placeholder width={48} height={48} label="3" />
      <Placeholder width={48} height={48} label="4" />
      <Placeholder width={48} height={48} label="5" />
      <Placeholder width={48} height={48} label="6" />
    </Inline>
  ),
};

export const CollapseDesktopAlignReverse: Story = {
  name: 'Test - collapseBelow + align + reverse: On mobile should be vertical and left aligned, on tablet should be vertical and centre aligned, on desktop should be reversed horizontally and right aligned',
  render: () => (
    <Inline
      space="small"
      collapseBelow="desktop"
      align={['left', 'center', 'right']}
      reverse
    >
      <Placeholder width={48} height={48} label="1" />
      <Placeholder width={48} height={48} label="2" />
      <Placeholder width={48} height={48} label="3" />
      <Placeholder width={48} height={48} label="4" />
      <Placeholder width={48} height={48} label="5" />
      <Placeholder width={48} height={48} label="6" />
    </Inline>
  ),
};

export const CollapseWideAlignReverse: Story = {
  name: 'Test - collapseBelow + align + reverse: On mobile should be vertical and left aligned, on tablet should be vertical and centre aligned, on desktop should be vertical and right aligned, on wide should be reversed horizontally and centre aligned',
  render: () => (
    <Inline
      space="small"
      collapseBelow="wide"
      align={['left', 'center', 'right', 'center']}
      reverse
    >
      <Placeholder width={48} height={48} label="1" />
      <Placeholder width={48} height={48} label="2" />
      <Placeholder width={48} height={48} label="3" />
      <Placeholder width={48} height={48} label="4" />
      <Placeholder width={48} height={48} label="5" />
      <Placeholder width={48} height={48} label="6" />
    </Inline>
  ),
};

export const FlattenFragments: Story = {
  name: 'Test - Should flatten fragments (6 placeholders should be evenly spaced)',
  render: () => (
    <Inline space="small">
      <Fragment>
        <Fragment>
          <Placeholder width={48} height={48} />
        </Fragment>
        <Fragment>
          <Placeholder width={48} height={48} />
        </Fragment>
      </Fragment>
      <Fragment>
        <Fragment>
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Fragment>
            <Placeholder width={48} height={48} />
          </Fragment>
        </Fragment>
      </Fragment>
      <Placeholder width={48} height={48} />
    </Inline>
  ),
};

export const SpanAlignLeft: Story = {
  name: 'Test - Span align to left',
  render: () => (
    <Inline component="span" space="gutter">
      <Placeholder width={48} height={48} label="1" />
      <Placeholder width={48} height={48} label="2" />
      <Placeholder width={48} height={48} label="3" />
    </Inline>
  ),
};

export const SpanAlignCenter: Story = {
  name: 'Test - Span align to center',
  render: () => (
    <Inline component="span" space="gutter" align="center">
      <Placeholder width={48} height={48} label="1" />
      <Placeholder width={48} height={48} label="2" />
      <Placeholder width={48} height={48} label="3" />
    </Inline>
  ),
};

export const SpanAlignRight: Story = {
  name: 'Test - Span align to right',
  render: () => (
    <Inline component="span" space="gutter" align="right">
      <Placeholder width={48} height={48} label="1" />
      <Placeholder width={48} height={48} label="2" />
      <Placeholder width={48} height={48} label="3" />
    </Inline>
  ),
};

export const Truncation: Story = {
  name: 'Test - truncation should be visible on all examples below',
  render: () => (
    <Inline space="small">
      <Box
        style={{
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}
      >
        Consequat quis anim anim officia voluptate. Ex in ut ipsum tempor
        occaecat enim laboris ex incididunt sunt non est reprehenderit. Id
        proident deserunt excepteur esse mollit aliquip. Aute ut tempor ex
        officia quis magna occaecat nostrud.
      </Box>
      <Box>
        <Box
          style={{
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          Consequat quis anim anim officia voluptate. Ex in ut ipsum tempor
          occaecat enim laboris ex incididunt sunt non est reprehenderit. Id
          proident deserunt excepteur esse mollit aliquip. Aute ut tempor ex
          officia quis magna occaecat nostrud.
        </Box>
      </Box>
    </Inline>
  ),
};
