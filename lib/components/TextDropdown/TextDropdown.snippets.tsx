import React from 'react';
import { Snippets } from '../private/Snippets';
import { TextDropdown, Text, Strong } from '../../playroom/components';

export const snippets: Snippets = [
  {
    name: 'Standard',
    code: (
      <Text>
        <TextDropdown
          label="Label"
          value="Option 1"
          options={['Option 1', 'Option 2', 'Option 3']}
        />
      </Text>
    ),
  },
  {
    name: 'Strong',
    code: (
      <Text>
        Sort by{' '}
        <Strong>
          <TextDropdown label="Sort order" options={['Relevance', 'Keyword']} />
        </Strong>
      </Text>
    ),
  },
];
