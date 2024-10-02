import React from 'react';
import type { GalleryComponent } from 'site/types';
import { Stack, Hidden } from '../';
import { Placeholder } from '../private/Placeholder/Placeholder';
import source from '@braid-design-system/source.macro';

export const galleryItems: GalleryComponent = {
  examples: [
    {
      label: 'Spacing',
      Example: () =>
        source(
          <Stack space="small">
            <Placeholder height={48} />
            <Placeholder height={48} />
            <Placeholder height={48} />
          </Stack>,
        ),
    },
    {
      label: 'Horizontal align left',
      Example: () =>
        source(
          <Stack space="small" align="left">
            <Placeholder width={80} height={40} label="left" />
            <Placeholder width={80} height={40} />
            <Placeholder width={80} height={40} />
          </Stack>,
        ),
    },
    {
      label: 'Horizontal align center',
      Example: () =>
        source(
          <Stack space="small" align="center">
            <Placeholder width={80} height={40} />
            <Placeholder width={80} height={40} label="center" />
            <Placeholder width={80} height={40} />
          </Stack>,
        ),
    },
    {
      label: 'Horizontal align right',
      Example: () =>
        source(
          <Stack space="small" align="right">
            <Placeholder width={80} height={40} />
            <Placeholder width={80} height={40} />
            <Placeholder width={80} height={40} label="right" />
          </Stack>,
        ),
    },
    {
      label: 'Responsively hiding stack items',
      Example: () =>
        source(
          <Stack space="gutter">
            <Placeholder height={40} label="1" />
            <Hidden below="tablet">
              <Placeholder height={40} label="2" />
            </Hidden>
            <Hidden above="mobile">
              <Placeholder height={40} label="3" />
            </Hidden>
            <Placeholder height={40} label="4" />
          </Stack>,
        ),
    },
  ],
};
