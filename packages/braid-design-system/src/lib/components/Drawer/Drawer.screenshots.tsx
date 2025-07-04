import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { lgModes, xsModes } from 'braid-storybook/modes';
import type { ReactNode } from 'react';

import { Placeholder } from '../../playroom/components';
import { Box } from '../Box/Box';
import { Stack } from '../Stack/Stack';
import { Text } from '../Text/Text';

import { Drawer, DrawerContent } from './Drawer';

import * as styles from '../private/Modal/Modal.css';

export const DrawerPreview = ({ children }: { children: ReactNode }) => (
  <Box position="relative">
    <Box position="absolute" inset={0} className={styles.backdrop} />
    <Box position="relative" zIndex="modal">
      {children}
    </Box>
  </Box>
);

const meta = {
  title: 'Components/Drawer',
  component: Drawer,
  parameters: {
    screenshotOnlyInWireframe: false,
  },
} satisfies Meta<typeof Drawer>;

export default meta;
type Story = StoryObj<typeof Drawer>;

export const DefaultLayout: Story = {
  name: 'Default layout',
  render: () => (
    <DrawerContent
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
      modes: {
        ...xsModes,
        ...lgModes,
      },
    },
  },
};

export const LayoutWithDescription: Story = {
  name: 'Layout with a description',
  render: () => (
    <DrawerContent
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
};

export const SmallWidth: Story = {
  name: 'Layout: Small width',
  render: () => (
    <DrawerContent
      title="Small"
      width="small"
      onClose={() => {}}
      scrollLock={false}
    >
      <Placeholder height={100} width="100%" label="Small Drawer" />
    </DrawerContent>
  ),
};

export const MediumWidth: Story = {
  name: 'Layout: Medium width',
  render: () => (
    <DrawerContent
      title="Medium"
      width="medium"
      onClose={() => {}}
      scrollLock={false}
    >
      <Placeholder height={100} width="100%" label="Medium Drawer" />
    </DrawerContent>
  ),
};

export const LargeWidth: Story = {
  name: 'Layout: Large width',
  render: () => (
    <DrawerContent
      title="Large"
      width="large"
      onClose={() => {}}
      scrollLock={false}
    >
      <Placeholder height={100} width="100%" label="Large Drawer" />
    </DrawerContent>
  ),
};

export const CloseButtonLayout: Story = {
  name: 'Test: Close button layout',
  render: () => (
    <DrawerContent
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
};

export const LeftAlignedInCenteredStack: Story = {
  name: 'Test: should be left aligned in a centered Stack',
  render: () => (
    <Stack space="large" align="center">
      <DrawerContent
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
};
