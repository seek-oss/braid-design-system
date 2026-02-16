import source from '@braid-design-system/source.macro';

import { Stack, Placeholder, Text, Heading } from '../../playroom/components';
import type { Snippets } from '../private/Snippets';

export const snippets: Snippets = [
  {
    description: 'Small content',
    code: source(
      <Stack space="xsmall">
        <Text size="small">Small Text</Text>
        <Text size="small">Small Text</Text>
      </Stack>,
    ),
  },
  {
    description: 'Standard content',
    code: source(
      <Stack space="small">
        <Text>Standard Text</Text>
        <Text>Standard Text</Text>
      </Stack>,
    ),
  },
  {
    description: 'Titled content',
    code: source(
      <Stack space="small">
        <Heading level="4">Heading</Heading>
        <Text>Standard Text</Text>
      </Stack>,
    ),
  },
  {
    description: 'Content groups',
    code: source(
      <Stack space="medium">
        <Heading level="4">Heading</Heading>
        <Text>Standard Text</Text>
      </Stack>,
    ),
  },
  {
    description: 'Content groups (loose)',
    code: source(
      <Stack space="large">
        <Heading level="3">Heading</Heading>
        <Text>Standard Text</Text>
      </Stack>,
    ),
  },
  {
    description: 'Section groups',
    code: source(
      <Stack space="large">
        <Placeholder height={40} />
        <Placeholder height={40} />
      </Stack>,
    ),
  },
  {
    description: 'Section groups (loose)',
    code: source(
      <Stack space="xlarge">
        <Placeholder height={40} />
        <Placeholder height={40} />
      </Stack>,
    ),
  },
  {
    description: 'Page sections',
    code: source(
      <Stack space="xxlarge">
        <Placeholder height={100} />
        <Placeholder height={100} />
      </Stack>,
    ),
  },
  {
    description: 'Page sections (loose)',
    code: source(
      <Stack space="xxxlarge">
        <Placeholder height={100} />
        <Placeholder height={100} />
      </Stack>,
    ),
  },
];
