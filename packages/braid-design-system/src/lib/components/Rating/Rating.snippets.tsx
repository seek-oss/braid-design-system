import source from '@braid-design-system/source.macro';

import { Rating } from '../../playroom/components';
import type { Snippets } from '../private/Snippets';

export const snippets: Snippets = [
  {
    description: 'Standard',
    code: source(<Rating rating={3} />),
  },
  {
    description: 'Large',
    code: source(<Rating rating={3.7} size="large" />),
  },
  {
    description: 'Variant: starsOnly',
    code: source(<Rating rating={4.2} variant="starsOnly" />),
  },
  {
    description: 'Variant: minimal',
    code: source(<Rating rating={3.7} variant="minimal" />),
  },
];
