import source from '@braid-design-system/source.macro';

import {
  Avatar,
  IconPeople,
  Inline,
  Stack,
  Text,
} from '../../playroom/components';
import type { Snippets } from '../private/Snippets';

export const snippets: Snippets = [
  {
    description: 'Initials',
    code: source(<Avatar variant="initials" name="Leia Organa" />),
  },
  {
    description: 'Icon',
    code: source(<Avatar variant="icon" name="Leia Organa" />),
  },
  {
    description: 'Photo',
    code: source(
      <Avatar
        variant="initials"
        name="Leia Organa"
        photoUrl="https://example.com/photo.jpg"
      />,
    ),
  },
  {
    description: 'With name',
    code: source(
      <Inline space="medium" alignY="center">
        <Avatar variant="initials" name="Leia Organa" />
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
        <Avatar variant="initials" name="Leia Organa" size="small" />
        <Avatar variant="initials" name="Leia Organa" size="standard" />
        <Avatar variant="initials" name="Leia Organa" size="large" />
        <Avatar variant="initials" name="Leia Organa" size="xlarge" />
      </Inline>,
    ),
  },
  {
    description: 'Border',
    code: source(<Avatar variant="initials" name="Leia Organa" border />),
  },
  {
    description: 'Custom icon',
    code: source(<Avatar variant="icon" icon={<IconPeople />} />),
  },
  {
    description: 'Loading',
    code: source(<Avatar variant="initials" name="Leia Organa" loading />),
  },
];
