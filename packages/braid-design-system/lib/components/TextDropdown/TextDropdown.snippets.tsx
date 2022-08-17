import React from 'react';
import { Snippets } from '../private/Snippets';
import { TextDropdown, Text, Strong, Heading } from '../../playroom/components';
import source from '../../utils/source.macro';

export const snippets: Snippets = [
  {
    name: 'Standard',
    code: source(
      <Text>
        <TextDropdown
          label="Label"
          value="Option 1"
          options={['Option 1', 'Option 2', 'Option 3']}
        />
      </Text>,
    ),
  },
  {
    name: 'Emphasised within a sentence',
    code: source(
      <Text>
        Sort by{' '}
        <Strong>
          <TextDropdown
            label="Sort by"
            options={['Relevance', 'Date', 'Keyword']}
          />
        </Strong>
      </Text>,
    ),
  },
  {
    name: 'Within a heading',
    code: source(
      <Heading level="2">
        Heading with{' '}
        <TextDropdown
          label="Options"
          options={['Option 1', 'Option 2', 'Option 3']}
        />
      </Heading>,
    ),
  },
];
