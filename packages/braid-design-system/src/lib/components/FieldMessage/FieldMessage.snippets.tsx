import source from '@braid-design-system/source.macro';

import { FieldMessage, Text } from '../../playroom/components';
import type { Snippets } from '../private/Snippets';

export const snippets: Snippets = [
  {
    name: 'Standard',
    code: source(<FieldMessage message="This is a message" />),
  },
  {
    name: 'Positive',
    code: source(
      <FieldMessage tone="positive" message="This is a positive message" />,
    ),
  },
  {
    name: 'Critical',
    code: source(
      <FieldMessage tone="critical" message="This is a critical message" />,
    ),
  },
  {
    name: 'Secondary message',
    code: source(
      <FieldMessage
        message="This is a message"
        secondaryMessage={
          <Text size="small" tone="secondary">
            Secondary
          </Text>
        }
      />,
    ),
  },
];
