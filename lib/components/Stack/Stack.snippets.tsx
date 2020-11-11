import React from 'react';
import { Snippets } from '../private/Snippets';
import { Stack, Placeholder } from '../../playroom/components';

export const snippets: Snippets = [
  {
    name: 'XXSmall Space',
    code: (
      <Stack space="xxsmall">
        <Placeholder height={40} />
        <Placeholder height={40} />
        <Placeholder height={40} />
      </Stack>
    ),
  },
  {
    name: 'XSmall Space',
    code: (
      <Stack space="xsmall">
        <Placeholder height={40} />
        <Placeholder height={40} />
        <Placeholder height={40} />
      </Stack>
    ),
  },
  {
    name: 'Small Space',
    code: (
      <Stack space="small">
        <Placeholder height={40} />
        <Placeholder height={40} />
        <Placeholder height={40} />
      </Stack>
    ),
  },
  {
    name: 'Medium Space',
    code: (
      <Stack space="medium">
        <Placeholder height={40} />
        <Placeholder height={40} />
        <Placeholder height={40} />
      </Stack>
    ),
  },
  {
    name: 'Gutter Space',
    code: (
      <Stack space="gutter">
        <Placeholder height={40} />
        <Placeholder height={40} />
        <Placeholder height={40} />
      </Stack>
    ),
  },
  {
    name: 'Large Space',
    code: (
      <Stack space="large">
        <Placeholder height={40} />
        <Placeholder height={40} />
        <Placeholder height={40} />
      </Stack>
    ),
  },
  {
    name: 'Responsive Space',
    code: (
      <Stack space={['small', 'large', 'none']}>
        <Placeholder height={40} />
        <Placeholder height={40} />
        <Placeholder height={40} />
      </Stack>
    ),
  },
];
