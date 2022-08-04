import React from 'react';
import { ComponentScreenshot } from '../../../site/src/types';
import { Placeholder } from '../../playroom/components';
import { DrawerContent } from './Drawer';

export const screenshots: ComponentScreenshot = {
  screenshotWidths: [320, 1200],
  examples: [
    {
      label: 'Default layout',
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
  ],
};
