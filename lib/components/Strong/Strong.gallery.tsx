import React from 'react';
import { ComponentExample } from '../../../site/src/types';
import { Strong, Text } from '../';

export const galleryItems: ComponentExample[] = [
  {
    Example: () => (
      <Text>
        The last word of this sentence is <Strong>strong.</Strong>
      </Text>
    ),
  },
];
