import React from 'react';
import type { GalleryComponent } from 'site/types';
import { Divider } from '../';
import source from '@braid-design-system/source.macro';

export const galleryItems: GalleryComponent = {
  examples: [
    {
      label: 'Regular weight',
      Example: () => source(<Divider />),
    },
    {
      label: 'Strong weight',
      Example: () => source(<Divider weight="strong" />),
    },
  ],
};
