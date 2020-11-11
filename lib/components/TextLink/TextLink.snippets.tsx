import React from 'react';
import { Snippets } from '../private/Snippets';
import { TextLink, Text } from '../../playroom/components';

export const snippets: Snippets = [
  {
    name: 'Inline link',
    code: (
      <Text>
        <TextLink href="#">Link text</TextLink>
      </Text>
    ),
  },
  {
    name: 'Large hit area',
    code: (
      <Text>
        <TextLink href="#" hitArea="large">
          Large hit area
        </TextLink>
      </Text>
    ),
  },
  {
    name: 'Visited',
    code: (
      <Text>
        <TextLink href="#" showVisited>
          Visited link
        </TextLink>
      </Text>
    ),
  },
];
