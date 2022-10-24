import React from 'react';
import { ComponentExample } from 'site/types';
import { Strong, Text } from '../';
import source from '../../utils/source.macro';

export const galleryItems: ComponentExample[] = [
  {
    Example: () =>
      source(
        <Text>
          The last word of this sentence is <Strong>strong.</Strong>
        </Text>,
      ),
  },
];
