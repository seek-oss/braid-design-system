import React from 'react';
import { ComponentExample } from '../../../site/src/types';
import { Card, Text } from '../';
import source from '../../utils/source.macro';

export const galleryItems: ComponentExample[] = [
  {
    Example: () =>
      source(
        <Card>
          <Text>This text is inside a card.</Text>
        </Card>,
      ),
  },
];
