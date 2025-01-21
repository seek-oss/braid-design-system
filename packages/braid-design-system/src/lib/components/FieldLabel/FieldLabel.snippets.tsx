import source from '@braid-design-system/source.macro';

import { FieldLabel, TextLink, IconHelp } from '../../playroom/components';
import type { Snippets } from '../private/Snippets';

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
        tertiaryLabel={
          <TextLink href="#" icon={<IconHelp />}>
            Help
          </TextLink>
        }
      />,
    ),
  },
];
