import React from 'react';
import { Snippets } from '../private/Snippets';
import { Tiles, Placeholder } from '../../playroom/components';
import source from '../../utils/source.macro';

export const snippets: Snippets = [
  {
    name: '2 columns, small space',
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
    name: '3 columns, medium space',
    code: source(
      <Tiles space="medium" columns={3}>
        <Placeholder height={48} />
        <Placeholder height={48} />
        <Placeholder height={48} />
        <Placeholder height={48} />
        <Placeholder height={48} />
      </Tiles>,
    ),
  },
  {
    name: '2 columns on mobile, 4 above tablet',
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
  {
    name: 'Dividers in single column',
    code: source(
      <Tiles space="small" columns={{ mobile: 1, tablet: 2 }} dividers>
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
