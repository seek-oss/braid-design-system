import source from '@braid-design-system/source.macro';

import { Divider } from '../../playroom/components';
import type { Snippets } from '../private/Snippets';

export const snippets: Snippets = [
  { description: 'Regular', code: source(<Divider />) },
  { description: 'Strong', code: source(<Divider weight="strong" />) },
];
