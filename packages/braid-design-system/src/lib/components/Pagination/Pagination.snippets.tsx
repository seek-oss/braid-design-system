import source from '@braid-design-system/source.macro';

import { Pagination } from '../../playroom/components';
import type { Snippets } from '../private/Snippets';

export const snippets: Snippets = [
  {
    name: 'Standard',
    code: source(<Pagination />),
  },
];
