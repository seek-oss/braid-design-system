import source from '@braid-design-system/source.macro';

import { Strong } from '../../playroom/components';
import type { Snippets } from '../private/Snippets';

export const snippets: Snippets = [
  {
    name: 'Standard',
    code: source(<Strong>Strong text</Strong>),
  },
];
