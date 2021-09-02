import React from 'react';
import { ComponentExample } from '../../../site/src/types';
import { Secondary, Text } from '../';
import source from '../../utils/source.macro';

export const galleryItems: ComponentExample[] = [
  {
    Example: () =>
      source(
        <Text>
          The word in the <Secondary>middle</Secondary> is secondary text.
        </Text>,
      ),
  },
];
