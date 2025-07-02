import type { Meta, StoryObj } from '@storybook/react-webpack5';
import type { ReactNode } from 'react';

import { Inline, Stack, Box, Text } from '../';
import { Placeholder } from '../../playroom/components';
import { externalGutter } from '../private/Modal/ModalExternalGutter';

import { Dialog, DialogContent } from './Dialog';

import * as styles from '../private/Modal/Modal.css';

export const DialogPreview = ({ children }: { children: ReactNode }) => (
  <Box position="relative">
    <Box position="absolute" inset={0} className={styles.backdrop} />
    <Box position="relative" zIndex="modal" padding={externalGutter}>
      {children}
    </Box>
  </Box>
);

const meta = {
  title: 'Components/Dialog',
  component: Dialog,
  parameters: {
    screenshotOnlyInWireframe: false,
  },
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
      viewports: [320, 1200],
    },
    layout: 'fullscreen',
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
  parameters: {
    chromatic: {
      viewports: [320, 1200],
    },
    layout: 'fullscreen',
  },
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
  parameters: {
    chromatic: {
      viewports: [320, 1200],
    },
    layout: 'fullscreen',
  },
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
  parameters: {
    chromatic: {
      viewports: [320, 1200],
    },
    layout: 'fullscreen',
  },
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
  parameters: {
    chromatic: {
      viewports: [320, 1200],
    },
    layout: 'fullscreen',
  },
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
  parameters: {
    chromatic: {
      viewports: [320, 1200],
    },
    layout: 'fullscreen',
  },
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
  parameters: {
    chromatic: {
      viewports: [320, 1200],
    },
    layout: 'fullscreen',
  },
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
  parameters: {
    chromatic: {
      viewports: [320, 1200],
    },
    layout: 'fullscreen',
  },
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
  parameters: {
    chromatic: {
      viewports: [320, 1200],
    },
    layout: 'fullscreen',
  },
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
  parameters: {
    chromatic: {
      viewports: [320, 1200],
    },
    layout: 'fullscreen',
  },
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
  parameters: {
    chromatic: {
      viewports: [320, 1200],
    },
    layout: 'fullscreen',
  },
};
