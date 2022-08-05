import React from 'react';
import { ComponentScreenshot } from '../../../../../site/src/types';
import { Inline, Stack, Box } from '../';
import { Placeholder } from '../../playroom/components';
import { DialogContent } from './Dialog';

export const screenshots: ComponentScreenshot = {
  screenshotWidths: [320, 1200],
  examples: [
    {
      label: 'Default layout',
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
  ],
};
