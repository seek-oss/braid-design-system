import React from 'react';
import { Snippets } from '../private/Snippets';
import { List, Text, IconTick } from '../../playroom/components';
import source from '../../utils/source.macro';

export const snippets: Snippets = [
  {
    name: 'XSmall Space',
    code: source(
      <List space="xsmall">
        <Text>Text</Text>
        <Text>Text</Text>
        <Text>Text</Text>
      </List>,
    ),
  },
  {
    name: 'Small Space',
    code: source(
      <List space="small">
        <Text>Text</Text>
        <Text>Text</Text>
        <Text>Text</Text>
      </List>,
    ),
  },
  {
    name: 'Medium Space',
    code: source(
      <List space="medium">
        <Text>Text</Text>
        <Text>Text</Text>
        <Text>Text</Text>
      </List>,
    ),
  },
  {
    name: 'Secondary',
    code: source(
      <List space="medium" tone="secondary">
        <Text>Text</Text>
        <Text>Text</Text>
        <Text>Text</Text>
      </List>,
    ),
  },
  {
    name: 'Numbered',
    code: source(
      <List space="medium" type="number">
        <Text>Text</Text>
        <Text>Text</Text>
        <Text>Text</Text>
      </List>,
    ),
  },
  {
    name: 'Alpha',
    code: source(
      <List space="medium" type="alpha">
        <Text>Text</Text>
        <Text>Text</Text>
        <Text>Text</Text>
      </List>,
    ),
  },
  {
    name: 'Roman',
    code: source(
      <List space="medium" type="roman">
        <Text>Text</Text>
        <Text>Text</Text>
        <Text>Text</Text>
      </List>,
    ),
  },
  {
    name: 'Icon',
    code: source(
      <List space="medium" type="icon" icon={<IconTick tone="positive" />}>
        <Text>Text</Text>
        <Text>Text</Text>
        <Text>Text</Text>
      </List>,
    ),
  },
];
