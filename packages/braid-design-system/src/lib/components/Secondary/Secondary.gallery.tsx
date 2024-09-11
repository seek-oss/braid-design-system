import React from 'react';
import type { GalleryComponent } from 'site/types';
import { Secondary, Text } from '../';
import source from '@braid-design-system/source.macro';

export const galleryItems: GalleryComponent = {
  examples: [
    {
      Example: () =>
        source(
          <Text>
            The word in the <Secondary>middle</Secondary> is secondary text.
          </Text>,
        ),
    },
  ],
};
