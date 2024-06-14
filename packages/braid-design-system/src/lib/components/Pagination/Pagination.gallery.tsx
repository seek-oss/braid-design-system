import React from 'react';
import type { GalleryComponent } from 'site/types';
import { Pagination } from '../../playroom/components';
import source from '@braid-design-system/source.macro';

export const galleryItems: GalleryComponent = {
  examples: [
    {
      label: 'Standard',
      background: 'surface',
      Example: () => source(<Pagination />),
    },
  ],
};
