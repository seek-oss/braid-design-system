import React from 'react';
import type { GalleryComponent } from 'site/types';
import { Strong, Text } from '../';
import source from '@braid-design-system/source.macro';

export const galleryItems: GalleryComponent = {
  examples: [
    {
      Example: () =>
        source(
          <Text>
            The last word of this sentence is <Strong>strong.</Strong>
          </Text>,
        ),
    },
  ],
};
