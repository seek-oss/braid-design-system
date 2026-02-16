import source from '@braid-design-system/source.macro';

import { Text } from '../../playroom/components';
import type { Snippets } from '../private/Snippets';

export const snippets: Snippets = [
  {
    description: 'Standard',
    code: source(<Text>Standard text</Text>),
  },
  {
    description: 'Large',
    code: source(<Text size="large">Large text</Text>),
  },
  {
    description: 'Small',
    code: source(<Text size="small">Small text</Text>),
  },
  {
    description: 'Xsmall',
    code: source(<Text size="xsmall">Xsmall text</Text>),
  },
  {
    description: 'Tone (critical)',
    code: source(<Text tone="critical">Critical text</Text>),
  },
  {
    description: 'Tone (positive)',
    code: source(<Text tone="positive">Positive text</Text>),
  },
  {
    description: 'Tone (secondary)',
    code: source(<Text tone="secondary">Secondary text</Text>),
  },
  {
    description: 'Weight (strong)',
    code: source(<Text weight="strong">Strong text</Text>),
  },
  {
    description: 'Weight (medium)',
    code: source(<Text weight="medium">Medium text</Text>),
  },
];
