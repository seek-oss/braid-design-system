import React from 'react';
import { Snippets } from '../private/Snippets';
import { Inline, Placeholder } from '../../playroom/components';

export const snippets: Snippets = [
  {
    name: 'Small space',
    code: (
      <Inline space="small">
        <Placeholder width={48} height={48} />
        <Placeholder width={48} height={48} />
        <Placeholder width={48} height={48} />
      </Inline>
    ),
  },
  {
    name: 'Medium space',
    code: (
      <Inline space="medium">
        <Placeholder width={48} height={48} />
        <Placeholder width={48} height={48} />
        <Placeholder width={48} height={48} />
      </Inline>
    ),
  },
  {
    name: 'Responsive space',
    code: (
      <Inline space={['small', 'large']}>
        <Placeholder width={48} height={48} />
        <Placeholder width={48} height={48} />
        <Placeholder width={48} height={48} />
      </Inline>
    ),
  },
  {
    name: 'Responsive horizontal alignment',
    code: (
      <Inline space="small" align={['center', 'left']}>
        <Placeholder width={48} height={48} />
        <Placeholder width={48} height={48} />
        <Placeholder width={48} height={48} />
      </Inline>
    ),
  },
  {
    name: 'Vertically centered',
    code: (
      <Inline space="small" alignY="center">
        <Placeholder width={48} height={40} />
        <Placeholder width={48} height={100} />
        <Placeholder width={48} height={60} />
      </Inline>
    ),
  },
];
