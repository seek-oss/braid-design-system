import React from 'react';
import { Snippets } from '../private/Snippets';
import { FieldLabel, TextLink } from '../../playroom/components';

export const snippets: Snippets = [
  {
    name: 'Standard',
    code: <FieldLabel label="Label" />,
  },
  {
    name: 'Standard with secondary label',
    code: <FieldLabel label="Label" secondaryLabel="Optional" />,
  },
  {
    name: 'Standard with tertiary label',
    code: (
      <FieldLabel
        label="Label"
        secondaryLabel="Optional"
        tertiaryLabel={<TextLink href="#">Help?</TextLink>}
      />
    ),
  },
];
