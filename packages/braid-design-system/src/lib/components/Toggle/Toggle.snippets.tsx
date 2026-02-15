import source from '@braid-design-system/source.macro';

import { Toggle } from '../../playroom/components';
import type { Snippets } from '../private/Snippets';

export const snippets: Snippets = [
  {
    description: 'Standard',
    code: source(<Toggle label="Label" />),
  },
  {
    description: 'Small',
    code: source(<Toggle label="Label" size="small" />),
  },
  {
    description: 'Right aligned',
    code: source(<Toggle label="Label" align="right" />),
  },
  {
    description: 'Justified',
    code: source(<Toggle label="Label" align="justify" />),
  },
  {
    description: 'Trailing toggle position',
    code: source(<Toggle label="Label" togglePosition="trailing" />),
  },
];
