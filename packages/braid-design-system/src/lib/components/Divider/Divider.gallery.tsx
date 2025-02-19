import source from '@braid-design-system/source.macro';
import type { GalleryComponent } from 'site/types';

import { Divider } from '../';

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
