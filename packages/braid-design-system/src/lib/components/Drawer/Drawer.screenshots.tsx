import type { ReactNode } from 'react';
import type { ComponentScreenshot } from 'site/types';

import { Placeholder } from '../../playroom/components';
import { Box } from '../Box/Box';
import { Stack } from '../Stack/Stack';
import { Text } from '../Text/Text';

import { DrawerContent } from './Drawer';

import * as styles from '../private/Modal/Modal.css';

export const DrawerPreview = ({ children }: { children: ReactNode }) => (
  <Box position="relative">
    <Box position="absolute" inset={0} className={styles.backdrop} />
    <Box position="relative" zIndex="modal">
      {children}
    </Box>
  </Box>
);

const Container = ({ children }: { children: ReactNode }) => (
  <Box overflow="hidden">
    <Box position="absolute" padding="small">
      <Placeholder height={100} width="100%" label="Page content" />
    </Box>
    <DrawerPreview>{children}</DrawerPreview>
  </Box>
);

export const screenshots: ComponentScreenshot = {
  screenshotWidths: [320, 1200],
  examples: [
    {
      label: 'Default layout',
      gutter: false,
      Container,
      Example: ({ id }) => (
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
    },
    {
      label: 'Layout with a description',
      gutter: false,
      Container,
      Example: ({ id }) => (
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
    },
    {
      label: 'Layout: Small width',
      gutter: false,
      Container,
      Example: ({ id }) => (
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
    },
    {
      label: 'Layout: Medium width',
      gutter: false,
      Container,
      Example: ({ id }) => (
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
    },
    {
      label: 'Layout: Large width',
      gutter: false,
      Container,
      Example: ({ id }) => (
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
    },
    {
      label: 'Test: Close button layout',
      gutter: false,
      Container,
      Example: ({ id }) => (
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
    },
    {
      label: 'Test: should be left aligned in a centered Stack',
      gutter: false,
      Container,
      Example: ({ id }) => (
        <Stack space="large" align="center">
          <DrawerContent
            id={id}
            title="Default test"
            onClose={() => {}}
            width="medium"
            scrollLock={false}
          >
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque sodales hendrerit nulla.
            </Text>
          </DrawerContent>
        </Stack>
      ),
    },
  ],
};
