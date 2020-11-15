import React from 'react';
import { Snippets } from '../private/Snippets';
import { Tiles, Placeholder } from '../../playroom/components';

export const snippets: Snippets = [
  {
    name: '2 columns, small space',
    code: (
      <Tiles space="small" columns={2}>
        <Placeholder height={48} />
        <Placeholder height={48} />
        <Placeholder height={48} />
        <Placeholder height={48} />
        <Placeholder height={48} />
      </Tiles>
    ),
  },
  {
    name: '3 columns, medium space',
    code: (
      <Tiles space="medium" columns={3}>
        <Placeholder height={48} />
        <Placeholder height={48} />
        <Placeholder height={48} />
        <Placeholder height={48} />
        <Placeholder height={48} />
      </Tiles>
    ),
  },
  {
    name: '2 columns on mobile, 4 above tablet',
    code: (
      <Tiles space="small" columns={[2, 4]}>
        <Placeholder height={48} />
        <Placeholder height={48} />
        <Placeholder height={48} />
        <Placeholder height={48} />
        <Placeholder height={48} />
        <Placeholder height={48} />
      </Tiles>
    ),
  },
  {
    name: 'Dividers in single column',
    code: (
      <Tiles space="small" columns={[1, 2]} dividers>
        <Placeholder height={48} />
        <Placeholder height={48} />
        <Placeholder height={48} />
        <Placeholder height={48} />
        <Placeholder height={48} />
        <Placeholder height={48} />
      </Tiles>
    ),
  },
];
