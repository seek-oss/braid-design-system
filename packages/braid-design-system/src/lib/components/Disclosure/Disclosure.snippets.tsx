import React from 'react';
import type { Snippets } from '../private/Snippets';
import { Disclosure, Stack, Text } from '../../playroom/components';
import source from '@braid-design-system/source.macro';

export const snippets: Snippets = [
  {
    name: 'Standard',
    code: source(
      <Disclosure expandLabel="Show" collapseLabel="Hide">
        <Stack space="large">
          <Text>Content</Text>
        </Stack>
      </Disclosure>,
    ),
  },
];
