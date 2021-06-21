import React from 'react';
import { Snippets } from '../private/Snippets';
import { Inline, Placeholder } from '../../playroom/components';
import source from '../../utils/source.macro';

export const snippets: Snippets = [
  {
    name: 'Small space',
    code: source(
      <Inline space="small">
        <Placeholder width={48} height={48} />
        <Placeholder width={48} height={48} />
        <Placeholder width={48} height={48} />
      </Inline>,
    ),
  },
  {
    name: 'Medium space',
    code: source(
      <Inline space="medium">
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
  {
    name: 'Responsive horizontal alignment',
    code: source(
      <Inline space="small" align={{ mobile: 'center', tablet: 'left' }}>
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
        <Placeholder width={48} height={40} />
        <Placeholder width={48} height={100} />
        <Placeholder width={48} height={60} />
      </Inline>,
    ),
  },
];
