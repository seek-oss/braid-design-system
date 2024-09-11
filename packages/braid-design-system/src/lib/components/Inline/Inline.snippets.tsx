import React from 'react';
import type { Snippets } from '../private/Snippets';
import { Inline, Placeholder } from '../../playroom/components';
import source from '@braid-design-system/source.macro';

export const snippets: Snippets = [
  {
    name: 'Xsmall space',
    code: source(
      <Inline space="xsmall">
        <Placeholder width={48} height={48} />
        <Placeholder width={48} height={48} />
        <Placeholder width={48} height={48} />
      </Inline>,
    ),
  },
  {
    name: 'Vertically centered',
    code: source(
      <Inline space="small" alignY="center">
        <Placeholder width={48} height={48} />
        <Placeholder width={48} height={48} />
        <Placeholder width={48} height={48} />
      </Inline>,
    ),
  },
  {
    name: 'Responsive space',
    code: source(
      <Inline space={{ mobile: 'small', tablet: 'large' }}>
        <Placeholder width={48} height={48} />
        <Placeholder width={48} height={48} />
        <Placeholder width={48} height={48} />
      </Inline>,
    ),
  },
];
