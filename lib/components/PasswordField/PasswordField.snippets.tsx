import React from 'react';
import { Snippets } from '../private/Snippets';
import { PasswordField, TextLink } from '../../playroom/components';

export const snippets: Snippets = [
  {
    name: 'Standard',
    code: <PasswordField label="Password" />,
  },
  {
    name: 'With error',
    code: <PasswordField label="Password" tone="critical" message="Required" />,
  },
  {
    name: 'With description',
    code: (
      <PasswordField
        label="Password"
        description="More detailed description of field."
      />
    ),
  },
  {
    name: 'With forgot password link',
    code: (
      <PasswordField
        label="Password"
        tertiaryLabel={<TextLink href="#">Forgot password?</TextLink>}
      />
    ),
  },
];
