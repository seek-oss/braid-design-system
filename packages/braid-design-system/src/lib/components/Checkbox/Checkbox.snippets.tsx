import source from '@braid-design-system/source.macro';

import { Checkbox, Badge, Placeholder } from '../../playroom/components';
import type { Snippets } from '../private/Snippets';

export const snippets: Snippets = [
  {
    name: 'Standard',
    code: source(<Checkbox label="Label" />),
  },
  {
    name: 'Small',
    code: source(<Checkbox label="Label" size="small" />),
  },
  {
    name: 'With a critical message',
    code: source(
      <Checkbox label="Label" tone="critical" message="Critical message" />,
    ),
  },
  {
    name: 'With a description',
    code: source(<Checkbox label="Label" description="Description" />),
  },
  {
    name: 'With a Badge',
    code: source(
      <Checkbox label="Label" badge={<Badge weight="strong">Badge</Badge>} />,
    ),
  },
  {
    name: 'With nested content',
    code: source(
      <Checkbox label="Label">
        <Placeholder height={100} />
      </Checkbox>,
    ),
  },
];
