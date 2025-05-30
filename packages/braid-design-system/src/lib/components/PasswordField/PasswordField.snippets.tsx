import source from '@braid-design-system/source.macro';

import { PasswordField, TextLink } from '../../playroom/components';
import type { Snippets } from '../private/Snippets';

export const snippets: Snippets = [
  {
    name: 'Standard',
    code: source(<PasswordField label="Password" />),
  },
  {
    name: 'With additional labels',
    code: source(
      <PasswordField
        label="Password"
        secondaryLabel="optional"
        tertiaryLabel={<TextLink href="#">Forgot password?</TextLink>}
      />,
    ),
  },
  {
    name: 'With a description',
    code: source(
      <PasswordField
        label="Label"
        description="More detailed description of field."
      />,
    ),
  },
  {
    name: 'With a critical message',
    code: source(
      <PasswordField
        label="Label"
        tone="critical"
        message="Critical message"
      />,
    ),
  },
  {
    name: 'With a positive message',
    code: source(
      <PasswordField
        label="Label"
        tone="positive"
        message="Positive message"
      />,
    ),
  },
  {
    name: 'With a neutral message',
    code: source(
      <PasswordField label="Label" tone="neutral" message="Neutral message" />,
    ),
  },
];
