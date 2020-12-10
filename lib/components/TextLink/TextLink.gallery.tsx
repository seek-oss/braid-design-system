import React from 'react';
import { ComponentExample } from '../../../site/src/types';
import { Text, TextLink } from '../';
import source from '../../utils/source.macro';

export const galleryItems: ComponentExample[] = [
  {
    label: 'Standard',
    Example: () =>
      source(
        <Text>
          <TextLink href="#" hitArea="large">
            TextLink
          </TextLink>
        </Text>,
      ),
  },
  {
    label: 'Weak weight',
    Example: () =>
      source(
        <Text>
          This sentence contains a{' '}
          <TextLink href="#" weight="weak">
            weak TextLink
          </TextLink>
          .
        </Text>,
      ),
  },
  {
    label: 'Visited links',
    Example: () =>
      source(
        <Text>
          This sentence contains a{' '}
          <TextLink href="" showVisited>
            visited TextLink.
          </TextLink>
        </Text>,
      ),
  },
];
