import React from 'react';
import type { Snippets } from '../private/Snippets';
import { Disclosure, Text } from '../../playroom/components';
import source from '@braid-design-system/source.macro';

export const snippets: Snippets = [
  {
    name: 'Standard',
    code: source(
      <Disclosure expandLabel="Show" collapseLabel="Hide">
        <Text>Content</Text>
      </Disclosure>,
    ),
  },
];
