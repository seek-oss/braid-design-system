import React from 'react';
import type { GalleryComponent } from 'site/types';
import { Loader } from '../';
import source from '@braid-design-system/source.macro';

export const galleryItems: GalleryComponent = {
  examples: [
    {
      Example: () => source(<Loader />),
    },
  ],
};
