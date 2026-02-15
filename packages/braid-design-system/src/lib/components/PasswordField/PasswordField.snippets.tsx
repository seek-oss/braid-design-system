import source from '@braid-design-system/source.macro';

import { PasswordField, TextLink } from '../../playroom/components';
import type { Snippets } from '../private/Snippets';

export const snippets: Snippets = [
  {
    description: 'Standard',
    code: source(<PasswordField label="Password" />),
  },
  {
    description: 'With additional labels',
    code: source(
      <PasswordField
        label="Password"
        secondaryLabel="optional"
        tertiaryLabel={<TextLink href="#">Forgot password?</TextLink>}
      />,
    ),
  },
  {
    description: 'With a description',
    code: source(
      <PasswordField
        label="Label"
        description="More detailed description of field."
      />,
    ),
  },
  {
    description: 'With a critical message',
    code: source(
      <PasswordField
        label="Label"
        tone="critical"
        message="Critical message"
      />,
    ),
  },
  {
    description: 'With a positive message',
    code: source(
      <PasswordField
        label="Label"
        tone="positive"
        message="Positive message"
      />,
    ),
  },
  {
    description: 'With a neutral message',
    code: source(
      <PasswordField label="Label" tone="neutral" message="Neutral message" />,
    ),
  },
];
