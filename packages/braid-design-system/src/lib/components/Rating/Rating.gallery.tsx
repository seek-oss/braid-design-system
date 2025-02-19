import source from '@braid-design-system/source.macro';
import type { GalleryComponent } from 'site/types';

import { Rating } from '../';

export const galleryItems: GalleryComponent = {
  examples: [
    {
      label: 'Default',
      Example: () => source(<Rating rating={3} />),
    },
    {
      label: 'Variant: starsOnly',
      Example: () => source(<Rating rating={4.2} variant="starsOnly" />),
    },
    {
      label: 'Variant: minimal',
      Example: () => source(<Rating rating={4.2} variant="minimal" />),
    },
    {
      label: 'large',
      Example: () => source(<Rating rating={3} size="large" />),
    },
    {
      label: 'small',
      Example: () => source(<Rating rating={2} size="small" />),
    },
    {
      label: 'xsmall',
      Example: () => source(<Rating rating={1.5} size="xsmall" />),
    },
  ],
};
