import React from 'react';
import { Snippets } from '../private/Snippets';
import { TextField, TextLink, IconSearch } from '../../playroom/components';

export const snippets: Snippets = [
  {
    name: 'Standard',
    code: <TextField label="Label" />,
  },
  {
    name: 'Optional',
    code: <TextField label="Label" secondaryLabel="Optional" />,
  },
  {
    name: 'With error',
    code: <TextField label="Label" tone="critical" message="Required" />,
  },
  {
    name: 'With description',
    code: (
      <TextField
        label="Label"
        description="More detailed description of field."
      />
    ),
  },
  {
    name: 'With icon',
    code: <TextField icon={<IconSearch />} placeholder="Search" />,
  },
  {
    name: 'With tertiary label',
    code: (
      <TextField
        label="Label"
        tertiaryLabel={<TextLink href="#">Help</TextLink>}
      />
    ),
  },
];
