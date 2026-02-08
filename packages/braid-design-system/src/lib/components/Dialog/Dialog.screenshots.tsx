import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { setChromatic } from 'braid-storybook/chromatic';

import { Inline, Stack, Box, Text } from '../';
import { Placeholder } from '../../playroom/components';
import { externalGutter } from '../private/Modal/ModalExternalGutter';

import { DialogContent } from './Dialog';

import * as styles from '../private/Modal/Modal.css';

const meta = {
  title: 'Components/Dialog',
  component: DialogContent,
  args: {
    onClose: () => {},
    children: <Placeholder height={100} width="100%" />,
    scrollLock: false,
  },
  parameters: {
    chromatic: setChromatic({ viewports: ['mobile', 'wide'] }),
  },
  decorators: (Story) => (
    <Box>
      <Box position="absolute" padding="small">
        <Placeholder height={100} width="100%" label="Page content" />
      </Box>
      <Box position="relative">
        <Box position="absolute" inset={0} className={styles.backdrop} />
        <Box position="relative" zIndex="modal" padding={externalGutter}>
          <Story />
        </Box>
      </Box>
    </Box>
  ),
} satisfies Meta<typeof DialogContent>;

export default meta;
type Story = StoryObj<typeof DialogContent>;

export const DefaultLayout: Story = {
  name: 'Default layout',
  args: {
    title: 'Default test',
  },
};

export const IllustrationLayout: Story = {
  name: 'Illustration layout',
  args: {
    title: 'Illustration test',
    illustration: (
      <Placeholder
        height={150}
        width={150}
        shape="round"
        label="Illustration"
      />
    ),
    children: (
      <Stack space="xlarge" align="center">
        <Placeholder width="100%" height={100} />
        <Inline space="small">
          <Placeholder height={44} width={80} label="OK" />
          <Placeholder height={44} width={80} label="Cancel" />
        </Inline>
      </Stack>
    ),
  },
};

export const LayoutWithDescription: Story = {
  name: 'Layout with a description',
  args: {
    title: 'Description test',
    description: <Placeholder height="auto" width="100%" label="Description" />,
  },
};

export const ContentWidth: Story = {
  name: 'Layout: Content width',
  args: {
    title: 'Content-sized',
    width: 'content',
    children: <Placeholder height={100} width={200} label="200px wide" />,
  },
  decorators: (Story) => (
    <Box display="flex" alignItems="center" justifyContent="center">
      <Story />
    </Box>
  ),
};

export const XsmallWidth: Story = {
  name: 'Layout: Xsmall width',
  args: {
    title: 'Xsmall',
    width: 'xsmall',
    children: <Placeholder height={100} width="100%" label="Xsmall Dialog" />,
  },
};

export const SmallWidth: Story = {
  name: 'Layout: Small width',
  args: {
    title: 'Small',
    width: 'small',
    children: <Placeholder height={100} width="100%" label="Small Dialog" />,
  },
};

export const MediumWidth: Story = {
  name: 'Layout: Medium width',
  args: {
    title: 'Medium',
    width: 'medium',
    children: <Placeholder height={100} width="100%" label="Medium Dialog" />,
  },
};

export const LargeWidth: Story = {
  name: 'Layout: Large width',
  args: {
    title: 'Large',
    width: 'large',
    children: <Placeholder height={100} width="100%" label="Large Dialog" />,
  },
};

export const LongUnbrokenTitle: Story = {
  name: 'Layout: Handle long-unbroken title',
  args: {
    title: 'ReallyLongUnbrokenWordShouldBeHandled',
    width: 'xsmall',
    children: (
      <Placeholder
        height={100}
        width="100%"
        label="Handle long-unbroken title"
      />
    ),
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
  name: 'Test: should be left aligned in a centered Stack',
  args: {
    title: 'Default test',
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
