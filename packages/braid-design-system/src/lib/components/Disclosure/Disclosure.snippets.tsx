import source from '@braid-design-system/source.macro';

import { Disclosure, Text } from '../../playroom/components';
import type { Snippets } from '../private/Snippets';

export const snippets: Snippets = [
  {
    description: 'Standard',
    code: source(
      <Disclosure expandLabel="Show" collapseLabel="Hide">
        <Text>Content</Text>
      </Disclosure>,
    ),
  },
];
