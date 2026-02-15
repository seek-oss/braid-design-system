import source from '@braid-design-system/source.macro';

import { Secondary } from '../../playroom/components';
import type { Snippets } from '../private/Snippets';

export const snippets: Snippets = [
  { description: 'Standard', code: source(<Secondary>Secondary</Secondary>) },
];
