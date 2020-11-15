import React from 'react';
import { Snippets } from '../private/Snippets';
import { Textarea } from '../../playroom/components';

export const snippets: Snippets = [
  {
    name: 'Standard',
    code: <Textarea label="Textarea" />,
  },
  {
    name: 'With character limit',
    code: (
      <Textarea
        label="Textarea"
        secondaryLabel="Max 100 characters"
        characterLimit={100}
      />
    ),
  },
  {
    name: 'Fixed height, 5 lines',
    code: <Textarea label="Textarea" lines={5} grow={false} />,
  },
  {
    name: 'Grow with typing, limit to 7 lines',
    code: <Textarea label="Textarea" lineLimit={7} />,
  },
  {
    name: 'With error',
    code: <Textarea label="Textarea" tone="critical" message="Required" />,
  },
  {
    name: 'With highlighting',
    code: (
      <Textarea
        label="Textarea"
        tone="critical"
        description="Characters 11-20 are invalid"
        highlightRanges={[{ start: 11, end: 20 }]}
      />
    ),
  },
];
