import React from 'react';
import { Snippets } from '../private/Snippets';
import { Disclosure, Stack, Text } from '../../playroom/components';

export const snippets: Snippets = [
  {
    name: 'Standard',
    code: (
      <Disclosure expandLabel="Show" collapseLabel="Hide">
        <Stack space="large">
          <Text>Content</Text>
        </Stack>
      </Disclosure>
    ),
  },
];
