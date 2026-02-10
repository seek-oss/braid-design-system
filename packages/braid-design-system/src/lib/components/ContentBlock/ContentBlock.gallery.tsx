import source from '@braid-design-system/source.macro';
import type { GalleryComponent } from 'site/types';

import { ContentBlock } from '../';
import { Placeholder } from '../../playroom/components';

export const galleryItems: GalleryComponent = {
  itemWidth: 'wide',
  examples: [
    {
      label: 'Default width',
      Example: () =>
        source(
          <ContentBlock>
            <Placeholder height={100} />
          </ContentBlock>,
        ),
    },
    {
      label: 'Xsmall width',
      Example: () =>
        source(
          <ContentBlock width="xsmall">
            <Placeholder height={100} />
          </ContentBlock>,
        ),
    },
    {
      label: 'Small width',
      Example: () =>
        source(
          <ContentBlock width="small">
            <Placeholder height={100} />
          </ContentBlock>,
        ),
    },
    {
      label: 'Medium width',
      Example: () =>
        source(
          <ContentBlock width="medium">
            <Placeholder height={100} />
          </ContentBlock>,
        ),
    },
    {
      label: 'Large width',
      Example: () =>
        source(
          <ContentBlock width="large">
            <Placeholder height={100} />
          </ContentBlock>,
        ),
    },
  ],
};
