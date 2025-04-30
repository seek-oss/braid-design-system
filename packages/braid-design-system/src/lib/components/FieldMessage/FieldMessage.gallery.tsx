import source from '@braid-design-system/source.macro';
import type { GalleryComponent } from 'site/types';

import { FieldMessage } from '../';

export const galleryItems: GalleryComponent = {
  examples: [
    {
      label: 'Critical',
      Example: () =>
        source(
          <FieldMessage
            id="message1"
            tone="critical"
            message="This is a critical message."
          />,
        ),
    },
    {
      label: 'Positive',
      Example: () =>
        source(
          <FieldMessage
            id="message2"
            tone="positive"
            message="This is a positive message."
          />,
        ),
    },
    {
      label: 'Caution',
      Example: () =>
        source(
          <FieldMessage
            id="message3"
            tone="caution"
            message="This is a caution message."
          />,
        ),
    },
    {
      label: 'Neutral',
      Example: () =>
        source(
          <FieldMessage
            id="message4"
            tone="neutral"
            message="This is a neutral message."
          />,
        ),
    },
  ],
};
