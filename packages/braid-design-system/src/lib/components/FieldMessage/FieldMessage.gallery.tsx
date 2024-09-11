import React from 'react';
import type { GalleryComponent } from 'site/types';
import { FieldMessage } from '../';
import source from '@braid-design-system/source.macro';

export const galleryItems: GalleryComponent = {
  examples: [
    {
      label: 'Critical',
      Example: ({ id }) =>
        source(
          <FieldMessage
            id={id}
            tone="critical"
            message="This is a critical message."
          />,
        ),
    },
    {
      label: 'Positive',
      Example: ({ id }) =>
        source(
          <FieldMessage
            id={id}
            tone="positive"
            message="This is a positive message."
          />,
        ),
    },
    {
      label: 'Caution',
      Example: ({ id }) =>
        source(
          <FieldMessage
            id={id}
            tone="caution"
            message="This is a caution message."
          />,
        ),
    },
    {
      label: 'Neutral',
      Example: ({ id }) =>
        source(
          <FieldMessage
            id={id}
            tone="neutral"
            message="This is a neutral message."
          />,
        ),
    },
  ],
};
