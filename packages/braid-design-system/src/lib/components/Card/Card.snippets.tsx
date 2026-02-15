import source from '@braid-design-system/source.macro';

import {
  Card,
  Stack,
  Heading,
  Text,
  Spread,
  OverflowMenu,
  MenuItem,
  Placeholder,
} from '../../playroom/components';
import type { Snippets } from '../private/Snippets';

export const snippets: Snippets = [
  {
    description: 'With Heading',
    code: source(
      <Card>
        <Stack space="large">
          <Heading level="4">Heading</Heading>
          <Text>Text</Text>
        </Stack>
      </Card>,
    ),
  },
  {
    description: 'With promote tone',
    code: source(
      <Card tone="promote">
        <Stack space="large">
          <Placeholder height={200} />
        </Stack>
      </Card>,
    ),
  },
  {
    description: 'With formAccent tone',
    code: source(
      <Card tone="formAccent">
        <Stack space="large">
          <Placeholder height={200} />
        </Stack>
      </Card>,
    ),
  },
  {
    description: 'With Overflow Menu',
    code: source(
      <Card>
        <Stack space="large">
          <Spread space="small" alignY="center">
            <Heading level="4">Heading</Heading>
            <OverflowMenu label="Options">
              <MenuItem>Menu Item</MenuItem>
            </OverflowMenu>
          </Spread>
          <Text>Text</Text>
        </Stack>
      </Card>,
    ),
  },
];
