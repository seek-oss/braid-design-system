import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { makeBraidModes } from 'braid-storybook/modes';

import { Inline, Stack, Box, Text } from '../';
import { Placeholder } from '../../playroom/components';

import { Dialog, DialogContent } from './Dialog';

const meta = {
  title: 'Components/Dialog',
  component: Dialog,
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof Dialog>;

export const DefaultLayout: Story = {
  name: 'Default layout',
  render: () => (
    <DialogContent title="Default test" onClose={() => {}} scrollLock={false}>
      <Placeholder height={100} width="100%" />
    </DialogContent>
  ),
  parameters: {
    chromatic: {
      modes: makeBraidModes({ viewports: ['mobile', 'wide'] }),
    },
  },
};

export const IllustrationLayout: Story = {
  name: 'Illustration layout',
  render: () => (
    <DialogContent
      title="Illustration test"
      illustration={
        <Placeholder
          height={150}
          width={150}
          shape="round"
          label="Illustration"
        />
      }
      onClose={() => {}}
      scrollLock={false}
    >
      <Stack space="xlarge" align="center">
        <Placeholder width="100%" height={100} />
        <Inline space="small">
          <Placeholder height={44} width={80} label="OK" />
          <Placeholder height={44} width={80} label="Cancel" />
        </Inline>
      </Stack>
    </DialogContent>
  ),
};

export const LayoutWithDescription: Story = {
  name: 'Layout with a description',
  render: () => (
    <DialogContent
      title="Description test"
      description={
        <Placeholder height="auto" width="100%" label="Description" />
      }
      onClose={() => {}}
      scrollLock={false}
    >
      <Placeholder height={100} width="100%" />
    </DialogContent>
  ),
};

export const ContentWidth: Story = {
  name: 'Layout: Content width',
  render: () => (
    <Box display="flex" alignItems="center" justifyContent="center">
      <DialogContent
        title="Content-sized"
        width="content"
        onClose={() => {}}
        scrollLock={false}
      >
        <Placeholder height={100} width={200} label="200px wide" />
      </DialogContent>
    </Box>
  ),
};

export const XsmallWidth: Story = {
  name: 'Layout: Xsmall width',
  render: () => (
    <DialogContent
      title="Xsmall"
      width="xsmall"
      onClose={() => {}}
      scrollLock={false}
    >
      <Placeholder height={100} width="100%" label="Xsmall Dialog" />
    </DialogContent>
  ),
};

export const SmallWidth: Story = {
  name: 'Layout: Small width',
  render: () => (
    <DialogContent
      title="Small"
      width="small"
      onClose={() => {}}
      scrollLock={false}
    >
      <Placeholder height={100} width="100%" label="Small Dialog" />
    </DialogContent>
  ),
};

export const MediumWidth: Story = {
  name: 'Layout: Medium width',
  render: () => (
    <DialogContent
      title="Medium"
      width="medium"
      onClose={() => {}}
      scrollLock={false}
    >
      <Placeholder height={100} width="100%" label="Medium Dialog" />
    </DialogContent>
  ),
};

export const LargeWidth: Story = {
  name: 'Layout: Large width',
  render: () => (
    <DialogContent
      title="Large"
      width="large"
      onClose={() => {}}
      scrollLock={false}
    >
      <Placeholder height={100} width="100%" label="Large Dialog" />
    </DialogContent>
  ),
};

export const LongUnbrokenTitle: Story = {
  name: 'Layout: Handle long-unbroken title',
  render: () => (
    <DialogContent
      title="ReallyLongUnbrokenWordShouldBeHandled"
      width="xsmall"
      onClose={() => {}}
      scrollLock={false}
    >
      <Placeholder
        height={100}
        width="100%"
        label="Handle long-unbroken title"
      />
    </DialogContent>
  ),
};

export const CloseButtonLayout: Story = {
  name: 'Test: Close button layout',
  render: () => (
    <DialogContent
      title="Default test"
      onClose={() => {}}
      width="medium"
      scrollLock={false}
    >
      <Box style={{ height: 100 }} />
      <Box
        position="absolute"
        inset={0}
        style={{ background: '#4964E9' }}
        background="customDark"
      >
        <Placeholder
          height="100%"
          width="100%"
          label="Close button should be on top of content and have a gutter"
        />
      </Box>
    </DialogContent>
  ),
};

export const LeftAlignedInCenteredStack: Story = {
  name: 'Test: should be left aligned in a centered Stack',
  render: () => (
    <Stack space="large" align="center">
      <DialogContent
        title="Default test"
        onClose={() => {}}
        width="medium"
        scrollLock={false}
      >
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          sodales hendrerit nulla.
        </Text>
      </DialogContent>
    </Stack>
  ),
};
