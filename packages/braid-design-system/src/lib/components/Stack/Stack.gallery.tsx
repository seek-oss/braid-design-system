import source from '@braid-design-system/source.macro';
import type { GalleryComponent } from 'site/types';

import { Stack } from '../';
import { Placeholder } from '../../playroom/components';

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
  ],
};
