import source from '@braid-design-system/source.macro';

import { List, Text, IconTick } from '../../playroom/components';
import type { Snippets } from '../private/Snippets';

export const snippets: Snippets = [
  {
    description: 'XSmall Space',
    code: source(
      <List space="xsmall">
        <Text>Text</Text>
        <Text>Text</Text>
        <Text>Text</Text>
      </List>,
    ),
  },
  {
    description: 'Small Space',
    code: source(
      <List space="small">
        <Text>Text</Text>
        <Text>Text</Text>
        <Text>Text</Text>
      </List>,
    ),
  },
  {
    description: 'Medium Space',
    code: source(
      <List space="medium">
        <Text>Text</Text>
        <Text>Text</Text>
        <Text>Text</Text>
      </List>,
    ),
  },
  {
    description: 'Secondary',
    code: source(
      <List space="medium" tone="secondary">
        <Text>Text</Text>
        <Text>Text</Text>
        <Text>Text</Text>
      </List>,
    ),
  },
  {
    description: 'Numbered',
    code: source(
      <List space="medium" type="number">
        <Text>Text</Text>
        <Text>Text</Text>
        <Text>Text</Text>
      </List>,
    ),
  },
  {
    description: 'Alpha',
    code: source(
      <List space="medium" type="alpha">
        <Text>Text</Text>
        <Text>Text</Text>
        <Text>Text</Text>
      </List>,
    ),
  },
  {
    description: 'Roman',
    code: source(
      <List space="medium" type="roman">
        <Text>Text</Text>
        <Text>Text</Text>
        <Text>Text</Text>
      </List>,
    ),
  },
  {
    description: 'Icon',
    code: source(
      <List space="medium" type="icon" icon={<IconTick tone="positive" />}>
        <Text>Text</Text>
        <Text>Text</Text>
        <Text>Text</Text>
      </List>,
    ),
  },
];
