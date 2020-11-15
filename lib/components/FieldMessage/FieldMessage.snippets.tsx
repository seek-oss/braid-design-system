import React from 'react';
import { Snippets } from '../private/Snippets';
import { FieldMessage, Text } from '../../playroom/components';

export const snippets: Snippets = [
  {
    name: 'Standard',
    code: <FieldMessage message="This is a message" />,
  },
  {
    name: 'Positive',
    code: <FieldMessage tone="positive" message="This is a positive message" />,
  },
  {
    name: 'Critical',
    code: <FieldMessage tone="critical" message="This is a critical message" />,
  },
  {
    name: 'Secondary message',
    code: (
      <FieldMessage
        message="This is a message"
        secondaryMessage={
          <Text size="small" tone="secondary">
            Secondary
          </Text>
        }
      />
    ),
  },
];
