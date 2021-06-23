import React from 'react';
import { Snippets } from '../private/Snippets';
import { Stack, Placeholder } from '../../playroom/components';
import source from '../../utils/source.macro';

export const snippets: Snippets = [
  {
    name: 'XXSmall Space',
    code: source(
      <Stack space="xxsmall">
        <Placeholder height={40} />
        <Placeholder height={40} />
        <Placeholder height={40} />
      </Stack>,
    ),
  },
  {
    name: 'XSmall Space',
    code: source(
      <Stack space="xsmall">
        <Placeholder height={40} />
        <Placeholder height={40} />
        <Placeholder height={40} />
      </Stack>,
    ),
  },
  {
    name: 'Small Space',
    code: source(
      <Stack space="small">
        <Placeholder height={40} />
        <Placeholder height={40} />
        <Placeholder height={40} />
      </Stack>,
    ),
  },
  {
    name: 'Medium Space',
    code: source(
      <Stack space="medium">
        <Placeholder height={40} />
        <Placeholder height={40} />
        <Placeholder height={40} />
      </Stack>,
    ),
  },
  {
    name: 'Gutter Space',
    code: source(
      <Stack space="gutter">
        <Placeholder height={40} />
        <Placeholder height={40} />
        <Placeholder height={40} />
      </Stack>,
    ),
  },
  {
    name: 'Large Space',
    code: source(
      <Stack space="large">
        <Placeholder height={40} />
        <Placeholder height={40} />
        <Placeholder height={40} />
      </Stack>,
    ),
  },
  {
    name: 'Responsive Space',
    code: source(
      <Stack space={{ mobile: 'small', tablet: 'large', desktop: 'none' }}>
        <Placeholder height={40} />
        <Placeholder height={40} />
        <Placeholder height={40} />
      </Stack>,
    ),
  },
];
