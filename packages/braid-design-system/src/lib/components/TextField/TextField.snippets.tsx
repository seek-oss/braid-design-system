import source from '@braid-design-system/source.macro';

import {
  TextField,
  TextLink,
  IconSearch,
  IconHelp,
} from '../../playroom/components';
import type { Snippets } from '../private/Snippets';

export const snippets: Snippets = [
  {
    description: 'Standard',
    code: source(<TextField label="Label" />),
  },
  {
    description: 'With additional labels',
    code: source(
      <TextField
        label="Label"
        secondaryLabel="optional"
        tertiaryLabel={
          <TextLink href="#" icon={<IconHelp />}>
            Help
          </TextLink>
        }
      />,
    ),
  },
  {
    description: 'With a description',
    code: source(
      <TextField
        label="Label"
        description="More detailed description of field."
      />,
    ),
  },
  {
    description: 'With an icon',
    code: source(
      <TextField label="Label" icon={<IconSearch />} placeholder="Search" />,
    ),
  },
  {
    description: 'With a prefix',
    code: source(
      <TextField label="Label" prefix="Prefix" placeholder="Search" />,
    ),
  },
  {
    description: 'With a critical message',
    code: source(
      <TextField label="Label" tone="critical" message="Critical message" />,
    ),
  },
  {
    description: 'With a positive message',
    code: source(
      <TextField label="Label" tone="positive" message="Positive message" />,
    ),
  },
  {
    description: 'With a neutral message',
    code: source(
      <TextField label="Label" tone="neutral" message="Neutral message" />,
    ),
  },
];
