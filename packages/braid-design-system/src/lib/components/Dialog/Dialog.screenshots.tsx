import React, { type ReactNode } from 'react';
import type { ComponentScreenshot } from 'site/types';
import { Inline, Stack, Box, Text } from '../';
import { Placeholder } from '../../playroom/components';
import { DialogContent } from './Dialog';
import * as styles from '../private/Modal/Modal.css';
import { externalGutter } from '../private/Modal/ModalExternalGutter';

export const DialogPreview = ({ children }: { children: ReactNode }) => (
  <Box position="relative">
    <Box position="absolute" inset={0} className={styles.backdrop} />
    <Box position="relative" zIndex="modal" padding={externalGutter}>
      {children}
    </Box>
  </Box>
);

const Container = ({ children }: { children: ReactNode }) => (
  <Box>
    <Box position="absolute" padding="small">
      <Placeholder height={100} width="100%" label="Page content" />
    </Box>
    <DialogPreview>{children}</DialogPreview>
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
        <DialogContent
          id={id}
          title="Default test"
          onClose={() => {}}
          scrollLock={false}
        >
          <Placeholder height={100} width="100%" />
        </DialogContent>
      ),
    },
    {
      label: 'Illustration layout',
      gutter: false,
      Container,
      Example: ({ id }) => (
        <DialogContent
          id={id}
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
    },
    {
      label: 'Layout with a description',
      gutter: false,
      Container,
      Example: ({ id }) => (
        <DialogContent
          id={id}
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
    },
    {
      label: 'Layout: Content width',
      gutter: false,
      Container,
      Example: ({ id }) => (
        <Box display="flex" alignItems="center" justifyContent="center">
          <DialogContent
            id={id}
            title="Content-sized"
            width="content"
            onClose={() => {}}
            scrollLock={false}
          >
            <Placeholder height={100} width={200} label="200px wide" />
          </DialogContent>
        </Box>
      ),
    },
    {
      label: 'Layout: Xsmall width',
      gutter: false,
      Container,
      Example: ({ id }) => (
        <DialogContent
          id={id}
          title="Xsmall"
          width="xsmall"
          onClose={() => {}}
          scrollLock={false}
        >
          <Placeholder height={100} width="100%" label="Xsmall Dialog" />
        </DialogContent>
      ),
    },
    {
      label: 'Layout: Small width',
      gutter: false,
      Container,
      Example: ({ id }) => (
        <DialogContent
          id={id}
          title="Small"
          width="small"
          onClose={() => {}}
          scrollLock={false}
        >
          <Placeholder height={100} width="100%" label="Small Dialog" />
        </DialogContent>
      ),
    },
    {
      label: 'Layout: Medium width',
      gutter: false,
      Container,
      Example: ({ id }) => (
        <DialogContent
          id={id}
          title="Medium"
          width="medium"
          onClose={() => {}}
          scrollLock={false}
        >
          <Placeholder height={100} width="100%" label="Medium Dialog" />
        </DialogContent>
      ),
    },
    {
      label: 'Layout: Large width',
      gutter: false,
      Container,
      Example: ({ id }) => (
        <DialogContent
          id={id}
          title="Large"
          width="large"
          onClose={() => {}}
          scrollLock={false}
        >
          <Placeholder height={100} width="100%" label="Large Dialog" />
        </DialogContent>
      ),
    },
    {
      label: 'Layout: Handle long-unbroken title',
      gutter: false,
      Container,
      Example: ({ id }) => (
        <DialogContent
          id={id}
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
    },
    {
      label: 'Test: Close button layout',
      gutter: false,
      Container,
      Example: ({ id }) => (
        <DialogContent
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
        </DialogContent>
      ),
    },
    {
      label: 'Test: should be left aligned in a centered Stack',
      gutter: false,
      Container,
      Example: ({ id }) => (
        <Stack space="large" align="center">
          <DialogContent
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
          </DialogContent>
        </Stack>
      ),
    },
  ],
};
