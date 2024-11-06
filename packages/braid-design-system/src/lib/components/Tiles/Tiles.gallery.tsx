import React from 'react';
import type { GalleryComponent } from 'site/types';
import { Tiles } from '../';
import { Placeholder } from '../private/Placeholder/Placeholder';
import source from '@braid-design-system/source.macro';

export const galleryItems: GalleryComponent = {
  examples: [
    {
      label: '3 columns',
      Example: () =>
        source(
          <Tiles columns={3} space="small">
            <Placeholder height={40} />
            <Placeholder height={40} />
            <Placeholder height={40} />
            <Placeholder height={40} />
            <Placeholder height={40} />
            <Placeholder height={40} />
            <Placeholder height={40} />
            <Placeholder height={40} />
            <Placeholder height={40} />
          </Tiles>,
        ),
    },
    {
      label: 'Responsive columns (e.g. 2 on mobile, 4 from tablet upwards)',
      Example: () =>
        source(
          <Tiles space="small" columns={{ mobile: 2, tablet: 4 }}>
            <Placeholder height={40} />
            <Placeholder height={40} />
            <Placeholder height={40} />
            <Placeholder height={40} />
            <Placeholder height={40} />
            <Placeholder height={40} />
            <Placeholder height={40} />
            <Placeholder height={40} />
            <Placeholder height={40} />
            <Placeholder height={40} />
          </Tiles>,
        ),
    },
    {
      label: 'Space between tiles',
      Example: () =>
        source(
          <Tiles space="large" columns={3}>
            <Placeholder height={40} />
            <Placeholder height={40} />
            <Placeholder height={40} />
            <Placeholder height={40} />
            <Placeholder height={40} />
            <Placeholder height={40} />
            <Placeholder height={40} />
            <Placeholder height={40} />
            <Placeholder height={40} />
          </Tiles>,
        ),
    },
  ],
};
