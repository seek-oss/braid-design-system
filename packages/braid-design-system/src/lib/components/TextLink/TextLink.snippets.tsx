import source from '@braid-design-system/source.macro';
import React from 'react';

import { TextLink, Text } from '../../playroom/components';
import type { Snippets } from '../private/Snippets';

export const snippets: Snippets = [
  {
    name: 'Inline link',
    code: source(
      <Text>
        <TextLink href="#">Link text</TextLink>
      </Text>,
    ),
  },
  {
    name: 'Large hit area',
    code: source(
      <Text>
        <TextLink href="#" hitArea="large">
          Large hit area
        </TextLink>
      </Text>,
    ),
  },
  {
    name: 'Visited',
    code: source(
      <Text>
        <TextLink href="" showVisited>
          Visited link
        </TextLink>
      </Text>,
    ),
  },
];
