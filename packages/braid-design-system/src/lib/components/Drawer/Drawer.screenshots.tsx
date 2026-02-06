import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { setChromatic } from 'braid-storybook/chromatic';

import { Placeholder, Spread } from '../../playroom/components';
import { Box } from '../Box/Box';
import { Stack } from '../Stack/Stack';
import { Text } from '../Text/Text';

import { DrawerContent } from './Drawer';

import * as styles from '../private/Modal/Modal.css';

const meta = {
  title: 'Components/Drawer',
  component: DrawerContent,
  parameters: {
    chromatic: setChromatic({ viewports: ['mobile', 'wide'] }),
  },
  args: {
    onClose: () => {},
    children: <Placeholder height={100} width="100%" />,
    scrollLock: false,
  },
  decorators: (Story) => (
    <Box overflow="hidden">
      <Box position="absolute" padding="small">
        <Placeholder height={100} width="100%" label="Page content" />
      </Box>
      <Box position="relative">
        <Box position="absolute" inset={0} className={styles.backdrop} />
        <Box position="relative" zIndex="modal">
          <Story />
        </Box>
      </Box>
    </Box>
  ),
} satisfies Meta<typeof DrawerContent>;

export default meta;
type Story = StoryObj<typeof DrawerContent>;

export const DefaultLayout: Story = {
  name: 'Default layout',
  args: {
    title: 'Default test',
    width: 'medium',
  },
};

export const LayoutWithDescription: Story = {
  name: 'Layout with a description',
  args: {
    title: 'Description test',
    description: <Placeholder height="auto" width="100%" label="Description" />,
  },
};

export const SmallWidth: Story = {
  name: 'Layout: Small width',
  args: {
    title: 'Small',
    width: 'small',
    children: <Placeholder height={100} width="100%" label="Small Drawer" />,
  },
};

export const MediumWidth: Story = {
  name: 'Layout: Medium width',
  args: {
    title: 'Medium',
    width: 'medium',
    children: <Placeholder height={100} width="100%" label="Medium Drawer" />,
  },
};

export const LargeWidth: Story = {
  name: 'Layout: Large width',
  args: {
    title: 'Large',
    width: 'large',
    children: <Placeholder height={100} width="100%" label="Large Drawer" />,
  },
};

export const CloseButtonLayout: Story = {
  name: 'Test: Close button layout',
  args: {
    title: 'Close button test',
    width: 'medium',
    children: (
      <>
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
      </>
    ),
  },
};

export const LeftAlignedInCenteredStack: Story = {
  name: 'Test: Should be left aligned in a centered Stack',
  args: {
    title: 'Left aligned in a centered Stack',
    width: 'medium',
    children: (
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        sodales hendrerit nulla.
      </Text>
    ),
  },
  decorators: (Story) => (
    <Stack space="large" align="center">
      <Story />
    </Stack>
  ),
};

export const SpreadContent: Story = {
  name: 'Test: Content should be spread',
  args: {
    title: 'Spread content',
    onClose: () => {},
    width: 'medium',
    scrollLock: false,
    children: (
      <Spread space="none" direction="vertical">
        <Text>Top of drawer</Text>
        <Text>Bottom of drawer</Text>
      </Spread>
    ),
  },
  decorators: (Story) => (
    <Box style={{ height: 500 }}>
      <Story />
    </Box>
  ),
};
