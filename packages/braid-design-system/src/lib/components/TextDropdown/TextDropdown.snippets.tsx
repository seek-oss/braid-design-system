import source from '@braid-design-system/source.macro';

import { TextDropdown, Text, Strong, Heading } from '../../playroom/components';
import type { Snippets } from '../private/Snippets';

export const snippets: Snippets = [
  {
    description: 'Standard',
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
    description: 'Emphasised within a sentence',
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
    description: 'Within a heading',
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
