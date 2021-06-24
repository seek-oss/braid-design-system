import React from 'react';
import { Snippets } from '../private/Snippets';
import { FieldLabel, TextLink } from '../../playroom/components';
import source from '../../utils/source.macro';

export const snippets: Snippets = [
  {
    name: 'Standard',
    code: source(<FieldLabel label="Label" />),
  },
  {
    name: 'Standard with secondary label',
    code: source(<FieldLabel label="Label" secondaryLabel="Optional" />),
  },
  {
    name: 'Standard with tertiary label',
    code: source(
      <FieldLabel
        label="Label"
        secondaryLabel="Optional"
        tertiaryLabel={<TextLink href="#">Help?</TextLink>}
      />,
    ),
  },
];
