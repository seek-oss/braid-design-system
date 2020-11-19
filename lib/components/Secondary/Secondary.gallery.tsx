import React from 'react';
import { ComponentExample } from '../../../site/src/types';
import { Secondary, Text } from '../';

export const galleryItems: ComponentExample[] = [
  {
    Example: () => (
      <Text>
        The word in the <Secondary>middle</Secondary> is secondary text.
      </Text>
    ),
  },
];
