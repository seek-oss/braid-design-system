import React from 'react';
import { ComponentExample } from 'braid-site/types';
import { FieldMessage } from '../';
import source from '@braid-design-system/source.macro';

export const galleryItems: ComponentExample[] = [
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
];
