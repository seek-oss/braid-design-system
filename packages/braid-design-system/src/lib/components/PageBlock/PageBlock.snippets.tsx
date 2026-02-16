import source from '@braid-design-system/source.macro';

import { PageBlock, Placeholder } from '../../playroom/components';
import type { Snippets } from '../private/Snippets';

export const snippets: Snippets = [
  {
    description: 'Small',
    code: source(
      <PageBlock width="small">
        <Placeholder height={100} />
      </PageBlock>,
    ),
  },
  {
    description: 'Medium',
    code: source(
      <PageBlock width="medium">
        <Placeholder height={100} />
      </PageBlock>,
    ),
  },
  {
    description: 'Large',
    code: source(
      <PageBlock width="large">
        <Placeholder height={100} />
      </PageBlock>,
    ),
  },
  {
    description: 'Full',
    code: source(
      <PageBlock width="full">
        <Placeholder height={100} />
      </PageBlock>,
    ),
  },
];
