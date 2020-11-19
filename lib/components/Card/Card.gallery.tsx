import React from 'react';
import { ComponentExample } from '../../../site/src/types';
import { Card, Text } from '../';

export const galleryItems: ComponentExample[] = [
  {
    label: 'Default',
    Example: () => (
      <Card>
        <Text>This text is inside a card.</Text>
      </Card>
    ),
  },
];
