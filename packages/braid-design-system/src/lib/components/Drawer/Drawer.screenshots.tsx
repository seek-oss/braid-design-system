import type { Meta, StoryObj } from '@storybook/react';

import { Placeholder } from '../../playroom/components';
import { Box } from '../Box/Box';
import { Stack } from '../Stack/Stack';
import { Text } from '../Text/Text';

import { Drawer, DrawerContent } from './Drawer';

const meta = {
  title: 'Components/Drawer',
  component: Drawer,
  parameters: {
    screenshotOnlyInWireframe: false,
  },
} satisfies Meta<typeof Drawer>;

export default meta;
type Story = StoryObj<typeof Drawer>;

const id = 'drawer-example';

export const DefaultLayout: Story = {
  name: 'Default layout',
  render: () => (
    <DrawerContent
      id={id}
      title="Default test"
      onClose={() => {}}
      width="medium"
      scrollLock={false}
    >
      <Placeholder height={100} width="100%" />
    </DrawerContent>
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
    <DrawerContent
      id={id}
      title="Description test"
      description={
        <Placeholder height="auto" width="100%" label="Description" />
      }
      onClose={() => {}}
      scrollLock={false}
    >
      <Placeholder height={100} width="100%" />
    </DrawerContent>
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
    <DrawerContent
      id={id}
      title="Small"
      width="small"
      onClose={() => {}}
      scrollLock={false}
    >
      <Placeholder height={100} width="100%" label="Small Drawer" />
    </DrawerContent>
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
    <DrawerContent
      id={id}
      title="Medium"
      width="medium"
      onClose={() => {}}
      scrollLock={false}
    >
      <Placeholder height={100} width="100%" label="Medium Drawer" />
    </DrawerContent>
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
    <DrawerContent
      id={id}
      title="Large"
      width="large"
      onClose={() => {}}
      scrollLock={false}
    >
      <Placeholder height={100} width="100%" label="Large Drawer" />
    </DrawerContent>
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
    <DrawerContent
      id={id}
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
    </DrawerContent>
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
      <DrawerContent
        id={id}
        title="Default test"
        onClose={() => {}}
        width="medium"
        scrollLock={false}
      >
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          sodales hendrerit nulla.
        </Text>
      </DrawerContent>
    </Stack>
  ),
  parameters: {
    chromatic: {
      viewports: [320, 1200],
    },
    layout: 'fullscreen',
  },
};
