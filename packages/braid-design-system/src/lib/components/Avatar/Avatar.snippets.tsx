import source from '@braid-design-system/source.macro';

import { Avatar, Inline, Stack, Text } from '../../playroom/components';
import type { Snippets } from '../private/Snippets';

export const snippets: Snippets = [
  {
    description: 'Initials',
    code: source(<Avatar name="Leia Organa" />),
  },
  {
    description: 'Empty',
    code: source(<Avatar />),
  },
  {
    description: 'Photo',
    code: source(
      <Avatar name="Leia Organa" imageUrl="https://example.com/photo.jpg" />,
    ),
  },
  {
    description: 'With name',
    code: source(
      <Inline space="medium" alignY="center">
        <Avatar name="Leia Organa" />
        <Stack space="xsmall">
          <Text>Leia Organa</Text>
          <Text size="small" tone="secondary">
            Product Designer
          </Text>
        </Stack>
      </Inline>,
    ),
  },
  {
    description: 'Sizes',
    code: source(
      <Inline space="small" alignY="center">
        <Avatar name="Leia Organa" size="small" />
        <Avatar name="Leia Organa" size="standard" />
        <Avatar name="Leia Organa" size="large" />
        <Avatar name="Leia Organa" size="xlarge" />
      </Inline>,
    ),
  },
  {
    description: 'Keyline',
    code: source(<Avatar name="Leia Organa" keyline />),
  },
  {
    description: 'Loading',
    code: source(<Avatar name="Leia Organa" loading />),
  },
];
