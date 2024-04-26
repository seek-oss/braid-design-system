import React from 'react';
import { TagSelector } from '../../playroom/components';
import type { Snippets } from '../private/Snippets';
import source from '@braid-design-system/source.macro';

export const snippets: Snippets = [
  {
    name: 'Standard',
    code: source(
      <TagSelector
        id="fruit"
        label="Fruit"
        tagOptions={[
          { description: 'Apples', id: '1' },
          { description: 'Bananas', id: '2' },
          { description: 'Carrots', id: '3' },
        ]}
        onSelect={() => {}}
        onRemove={() => {}}
      />,
    ),
  },
];
