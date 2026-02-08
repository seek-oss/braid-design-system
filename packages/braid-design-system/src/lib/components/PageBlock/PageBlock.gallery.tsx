import source from '@braid-design-system/source.macro';
import type { GalleryComponent } from 'site/types';

import { PageBlock } from '../';
import { Placeholder } from '../../playroom/components';

export const galleryItems: GalleryComponent = {
  itemWidth: 'wide',
  examples: [
    {
      label: 'Small width',
      Example: () =>
        source(
          <PageBlock width="small">
            <Placeholder height={100} />
          </PageBlock>,
        ),
    },
    {
      label: 'Medium width',
      Example: () =>
        source(
          <PageBlock width="medium">
            <Placeholder height={100} />
          </PageBlock>,
        ),
    },
    {
      label: 'Large width',
      Example: () =>
        source(
          <PageBlock width="large">
            <Placeholder height={100} />
          </PageBlock>,
        ),
    },
    {
      label: 'Full width',
      Example: () =>
        source(
          <PageBlock width="full">
            <Placeholder height={100} />
          </PageBlock>,
        ),
    },
  ],
};
