import source from '@braid-design-system/source.macro';

import { Notice, Text } from '../../playroom/components';
import type { Snippets } from '../private/Snippets';

export const snippets: Snippets = [
  {
    description: 'Critical',
    code: source(
      <Notice tone="critical">
        <Text>Critical Notice</Text>
      </Notice>,
    ),
  },
  {
    description: 'Positive',
    code: source(
      <Notice tone="positive">
        <Text>Positive Notice</Text>
      </Notice>,
    ),
  },
  {
    description: 'Info',
    code: source(
      <Notice tone="info">
        <Text>Info Notice</Text>
      </Notice>,
    ),
  },
  {
    description: 'Promote',
    code: source(
      <Notice tone="promote">
        <Text>Promote Notice</Text>
      </Notice>,
    ),
  },
];
