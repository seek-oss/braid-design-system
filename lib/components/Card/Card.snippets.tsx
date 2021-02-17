import React from 'react';
import { Snippets } from '../private/Snippets';
import {
  Card,
  Stack,
  Heading,
  Text,
  Columns,
  Column,
  OverflowMenu,
  MenuItem,
  Placeholder,
} from '../../playroom/components';
import source from '../../utils/source.macro';

export const snippets: Snippets = [
  {
    name: 'With Heading',
    code: source(
      <Card>
        <Stack space="gutter">
          <Heading level="3">Heading</Heading>
          <Text>Text</Text>
        </Stack>
      </Card>,
    ),
  },
  {
    name: 'With info tone',
    code: source(
      <Card tone="info">
        <Stack space="gutter">
          <Placeholder height={200} />
        </Stack>
      </Card>,
    ),
  },
  {
    name: 'With promote tone',
    code: source(
      <Card tone="promote">
        <Stack space="gutter">
          <Placeholder height={200} />
        </Stack>
      </Card>,
    ),
  },
  {
    name: 'With standard radius corners',
    code: source(
      <Card radius="standard">
        <Stack space="gutter">
          <Placeholder height={200} />
        </Stack>
      </Card>,
    ),
  },
  {
    name: 'With Overflow Menu',
    code: source(
      <Card>
        <Stack space="gutter">
          <Columns space="gutter">
            <Column>
              <Heading level="3">Heading</Heading>
            </Column>
            <Column width="content">
              <OverflowMenu label="Options">
                <MenuItem>Menu Item</MenuItem>
              </OverflowMenu>
            </Column>
          </Columns>
          <Text>Text</Text>
        </Stack>
      </Card>,
    ),
  },
];
