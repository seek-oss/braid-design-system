import source from '@braid-design-system/source.macro';

import { Heading } from '../../playroom/components';
import type { Snippets } from '../private/Snippets';

export const snippets: Snippets = [
  {
    description: 'Level 1',
    code: source(<Heading level="1">Heading</Heading>),
  },
  {
    description: 'Level 1 (Weak)',
    code: source(
      <Heading level="1" weight="weak">
        Heading
      </Heading>,
    ),
  },
  {
    description: 'Level 1 (centered)',
    code: source(
      <Heading level="1" align="center">
        Heading
      </Heading>,
    ),
  },
  {
    description: 'Level 2',
    code: source(<Heading level="2">Heading</Heading>),
  },
  {
    description: 'Level 2 (Weak)',
    code: source(
      <Heading level="2" weight="weak">
        Heading
      </Heading>,
    ),
  },
  {
    description: 'Level 3',
    code: source(<Heading level="3">Heading</Heading>),
  },
  {
    description: 'Level 3 (Weak)',
    code: source(
      <Heading level="3" weight="weak">
        Heading
      </Heading>,
    ),
  },
  {
    description: 'Level 4',
    code: source(<Heading level="4">Heading</Heading>),
  },
  {
    description: 'Level 4 (Weak)',
    code: source(
      <Heading level="4" weight="weak">
        Heading
      </Heading>,
    ),
  },
];
