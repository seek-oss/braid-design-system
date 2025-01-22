import source from '@braid-design-system/source.macro';
import React from 'react';

import { Stack, Placeholder, Text, Heading } from '../../playroom/components';
import type { Snippets } from '../private/Snippets';

export const snippets: Snippets = [
  {
    name: 'Small content',
    code: source(
      <Stack space="xsmall">
        <Text size="small">Small Text</Text>
        <Text size="small">Small Text</Text>
      </Stack>,
    ),
  },
  {
    name: 'Standard content',
    code: source(
      <Stack space="small">
        <Text>Standard Text</Text>
        <Text>Standard Text</Text>
      </Stack>,
    ),
  },
  {
    name: 'Titled content',
    code: source(
      <Stack space="small">
        <Heading level="4">Heading</Heading>
        <Text>Standard Text</Text>
      </Stack>,
    ),
  },
  {
    name: 'Content groups',
    code: source(
      <Stack space="medium">
        <Heading level="4">Heading</Heading>
        <Text>Standard Text</Text>
      </Stack>,
    ),
  },
  {
    name: 'Content groups (loose)',
    code: source(
      <Stack space="large">
        <Heading level="3">Heading</Heading>
        <Text>Standard Text</Text>
      </Stack>,
    ),
  },
  {
    name: 'Section groups',
    code: source(
      <Stack space="large">
        <Placeholder height={40} />
        <Placeholder height={40} />
      </Stack>,
    ),
  },
  {
    name: 'Section groups (loose)',
    code: source(
      <Stack space="xlarge">
        <Placeholder height={40} />
        <Placeholder height={40} />
      </Stack>,
    ),
  },
  {
    name: 'Page sections',
    code: source(
      <Stack space="xxlarge">
        <Placeholder height={100} />
        <Placeholder height={100} />
      </Stack>,
    ),
  },
  {
    name: 'Page sections (loose)',
    code: source(
      <Stack space="xxxlarge">
        <Placeholder height={100} />
        <Placeholder height={100} />
      </Stack>,
    ),
  },
];
