import source from '@braid-design-system/source.macro';

import { Checkbox, Badge, Placeholder } from '../../playroom/components';
import type { Snippets } from '../private/Snippets';

export const snippets: Snippets = [
  {
    description: 'Standard',
    code: source(<Checkbox label="Label" />),
  },
  {
    description: 'Small',
    code: source(<Checkbox label="Label" size="small" />),
  },
  {
    description: 'With a critical message',
    code: source(
      <Checkbox label="Label" tone="critical" message="Critical message" />,
    ),
  },
  {
    description: 'With a description',
    code: source(<Checkbox label="Label" description="Description" />),
  },
  {
    description: 'With a Badge',
    code: source(
      <Checkbox label="Label" badge={<Badge weight="strong">Badge</Badge>} />,
    ),
  },
  {
    description: 'With nested content',
    code: source(
      <Checkbox label="Label">
        <Placeholder height={100} />
      </Checkbox>,
    ),
  },
];
