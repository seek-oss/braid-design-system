import React from 'react';
import { ComponentExample } from '../../../site/src/types';
import { FieldMessage } from '../';

export const galleryItems: ComponentExample[] = [
  {
    label: 'Critical Field Message',
    Example: ({ id }) => (
      <FieldMessage
        id={id}
        tone="critical"
        message="This is a critical message."
      />
    ),
  },
  {
    label: 'Positive Field Message',
    Example: ({ id }) => (
      <FieldMessage
        id={id}
        tone="positive"
        message="This is a positive message."
      />
    ),
  },
];
