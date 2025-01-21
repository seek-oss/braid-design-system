import source from '@braid-design-system/source.macro';
import type { GalleryComponent } from 'site/types';

import { Bleed } from '../';
import { Placeholder } from '../../playroom/components';

export const galleryItems: GalleryComponent = {
  examples: [
    {
      label: 'Horizontally',
      Example: () =>
        source(
          <Bleed horizontal="gutter">
            <Placeholder height={80} />
          </Bleed>,
        ),
    },
    {
      label: 'Vertically',
      Example: () =>
        source(
          <Bleed vertical="gutter">
            <Placeholder height={80} />
          </Bleed>,
        ),
    },
    {
      label: 'To the top',
      Example: () =>
        source(
          <Bleed top="gutter">
            <Placeholder height={80} />
          </Bleed>,
        ),
    },
    {
      label: 'To the bottom',
      Example: () =>
        source(
          <Bleed bottom="gutter">
            <Placeholder height={80} />
          </Bleed>,
        ),
    },
    {
      label: 'To the left',
      Example: () =>
        source(
          <Bleed left="gutter">
            <Placeholder height={80} />
          </Bleed>,
        ),
    },
    {
      label: 'To the right',
      Example: () =>
        source(
          <Bleed right="gutter">
            <Placeholder height={80} />
          </Bleed>,
        ),
    },
    {
      label: 'On all sides',
      Example: () =>
        source(
          <Bleed space="gutter">
            <Placeholder height={80} />
          </Bleed>,
        ),
    },
  ],
};
