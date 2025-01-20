import source from '@braid-design-system/source.macro';
import React from 'react';
import type { GalleryComponent } from 'site/types';

import { Loader } from '../';

export const galleryItems: GalleryComponent = {
  examples: [
    {
      Example: () => source(<Loader />),
    },
  ],
};
