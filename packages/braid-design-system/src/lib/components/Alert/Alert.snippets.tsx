import source from '@braid-design-system/source.macro';

import { Alert, Text } from '../../playroom/components';
import type { Snippets } from '../private/Snippets';

export const snippets: Snippets = [
  {
    description: 'Critical',
    code: source(
      <Alert tone="critical">
        <Text>Critical Alert</Text>
      </Alert>,
    ),
  },
  {
    description: 'Caution',
    code: source(
      <Alert tone="caution">
        <Text>Caution Alert</Text>
      </Alert>,
    ),
  },
  {
    description: 'Positive',
    code: source(
      <Alert tone="positive">
        <Text>Positive Alert</Text>
      </Alert>,
    ),
  },
  {
    description: 'Info',
    code: source(
      <Alert tone="info">
        <Text>Info Alert</Text>
      </Alert>,
    ),
  },
  {
    description: 'Promote',
    code: source(
      <Alert tone="promote">
        <Text>Promote Alert</Text>
      </Alert>,
    ),
  },
  {
    description: 'Dismissible alert',
    code: source(
      <Alert onClose={() => {}} closeLabel="Close">
        <Text>Dismissible Alert</Text>
      </Alert>,
    ),
  },
];
