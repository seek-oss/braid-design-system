import source from '@braid-design-system/source.macro';
import React from 'react';

import { PageBlock, Placeholder } from '../../playroom/components';
import type { Snippets } from '../private/Snippets';

export const snippets: Snippets = [
  {
    name: 'Small',
    code: source(
      <PageBlock width="small">
        <Placeholder height={100} />
      </PageBlock>,
    ),
  },
  {
    name: 'Medium',
    code: source(
      <PageBlock width="medium">
        <Placeholder height={100} />
      </PageBlock>,
    ),
  },
  {
    name: 'Large',
    code: source(
      <PageBlock width="large">
        <Placeholder height={100} />
      </PageBlock>,
    ),
  },
  {
    name: 'Full',
    code: source(
      <PageBlock width="full">
        <Placeholder height={100} />
      </PageBlock>,
    ),
  },
];
