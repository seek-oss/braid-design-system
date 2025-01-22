import source from '@braid-design-system/source.macro';
import React from 'react';
import type { GalleryComponent } from 'site/types';

import { Pagination } from '../../playroom/components';

export const galleryItems: GalleryComponent = {
  examples: [
    {
      label: 'Standard',
      Example: () => source(<Pagination />),
    },
  ],
};
