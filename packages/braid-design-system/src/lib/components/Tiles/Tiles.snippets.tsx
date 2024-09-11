import React from 'react';
import type { Snippets } from '../private/Snippets';
import { Tiles, Placeholder } from '../../playroom/components';
import source from '@braid-design-system/source.macro';

export const snippets: Snippets = [
  {
    name: '2 columns',
    code: source(
      <Tiles space="small" columns={2}>
        <Placeholder height={48} />
        <Placeholder height={48} />
        <Placeholder height={48} />
        <Placeholder height={48} />
        <Placeholder height={48} />
      </Tiles>,
    ),
  },
  {
    name: 'Responsive columns',
    code: source(
      <Tiles space="small" columns={{ mobile: 2, tablet: 4 }}>
        <Placeholder height={48} />
        <Placeholder height={48} />
        <Placeholder height={48} />
        <Placeholder height={48} />
        <Placeholder height={48} />
        <Placeholder height={48} />
      </Tiles>,
    ),
  },
];
