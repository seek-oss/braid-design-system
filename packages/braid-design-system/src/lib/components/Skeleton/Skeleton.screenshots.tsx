import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { Skeleton, Stack } from '../';
import { BackgroundContrastTest } from '../../utils/BackgroundContrastTest';

const meta = {
  title: 'Components/Skeleton',
  component: Skeleton,
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
  args: {},
};

export const DelayVisibility: Story = {
  args: {
    delayVisibility: true,
  },
  name: 'Delay visibility (used to prevent loading flicker)',
};

export const TextSizes: Story = {
  name: 'Text sizes',
  render: () => (
    <Stack space="medium">
      <Skeleton type="text" size="large" />
      <Skeleton type="text" size="standard" />
      <Skeleton type="text" size="small" />
      <Skeleton type="text" size="xsmall" />
    </Stack>
  ),
};

export const HeadingLevels: Story = {
  name: 'Heading levels',
  render: () => (
    <Stack space="medium">
      <Skeleton type="heading" level="1" />
      <Skeleton type="heading" level="2" />
      <Skeleton type="heading" level="3" />
      <Skeleton type="heading" level="4" />
    </Stack>
  ),
};

export const TextWithIcon: Story = {
  name: 'Text with icon',
  render: () => (
    <Stack space="medium">
      <Skeleton type="text" icon />
      <Skeleton type="text" icon="square" />
      <Skeleton type="text" icon="circle" />
    </Stack>
  ),
};

export const Widths: Story = {
  render: () => (
    <Stack space="medium">
      <Skeleton type="text" width="full" />
      <Skeleton type="text" width="large" />
      <Skeleton type="text" width="medium" />
      <Skeleton type="text" width="small" />
      <Skeleton type="text" width={40} />
    </Stack>
  ),
};

export const MultipleLines: Story = {
  name: 'Multiple lines',
  args: {
    type: 'text',
    lines: 3,
  },
};

export const Button: Story = {
  args: {
    type: 'button',
    width: 'small',
  },
};

export const RectangleHeights: Story = {
  name: 'Rectangle heights',
  render: () => (
    <Stack space="medium">
      <Skeleton type="rectangle" height="small" />
      <Skeleton type="rectangle" height="xlarge" />
      <Skeleton type="rectangle" height="xxxlarge" />
    </Stack>
  ),
};

export const Contrast: Story = {
  args: {
    type: 'rectangle',
  },
  decorators: (Story) => (
    <BackgroundContrastTest>
      <Story />
    </BackgroundContrastTest>
  ),
  name: 'Skeleton Contrast',
};
