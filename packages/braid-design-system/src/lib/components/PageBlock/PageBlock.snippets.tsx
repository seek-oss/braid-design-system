import React from 'react';
import type { Snippets } from '../private/Snippets';
import { PageBlock, Placeholder } from '../../playroom/components';
import source from '../../utils/source.macro';

export const snippets: Snippets = [
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
];
