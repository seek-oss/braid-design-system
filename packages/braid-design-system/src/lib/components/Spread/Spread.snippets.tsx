import source from '@braid-design-system/source.macro';

import {
  Heading,
  MenuItem,
  OverflowMenu,
  Placeholder,
  Spread,
  Stack,
  Text,
} from '../../playroom/components';
import type { Snippets } from '../private/Snippets';

export const snippets: Snippets = [
  {
    description: 'Horizontal direction',
    code: source(
      <Spread space="small" alignY="center">
        <Placeholder height={60} width={50} />
        <Placeholder height={60} width={80} />
      </Spread>,
    ),
  },
  {
    description: 'Vertical direction',
    code: source(
      <Spread space="small" direction="vertical">
        <Placeholder height={60} />
        <Placeholder height={30} />
      </Spread>,
    ),
  },
  {
    description: 'Heading and action',
    code: source(
      <Spread space="small" alignY="center">
        <Heading level="4">Heading</Heading>
        <OverflowMenu label="Options">
          <MenuItem>First</MenuItem>
          <MenuItem>Second</MenuItem>
        </OverflowMenu>
      </Spread>,
    ),
  },
  {
    description: 'Content stack and date stamp',
    code: source(
      <Spread space="large" direction="vertical">
        <Stack space="small">
          <Heading level="4">Heading</Heading>
          <Text>Text</Text>
        </Stack>
        <Text size="small" tone="secondary">
          Date
        </Text>
      </Spread>,
    ),
  },
];
