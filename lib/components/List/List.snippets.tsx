import React from 'react';
import { Snippets } from '../private/Snippets';
import { List, Text, IconTick } from '../../playroom/components';

export const snippets: Snippets = [
  {
    name: 'XSmall Space',
    code: (
      <List space="xsmall">
        <Text>Text</Text>
        <Text>Text</Text>
        <Text>Text</Text>
      </List>
    ),
  },
  {
    name: 'Small Space',
    code: (
      <List space="small">
        <Text>Text</Text>
        <Text>Text</Text>
        <Text>Text</Text>
      </List>
    ),
  },
  {
    name: 'Medium Space',
    code: (
      <List space="medium">
        <Text>Text</Text>
        <Text>Text</Text>
        <Text>Text</Text>
      </List>
    ),
  },
  {
    name: 'Secondary',
    code: (
      <List space="medium" tone="secondary">
        <Text>Text</Text>
        <Text>Text</Text>
        <Text>Text</Text>
      </List>
    ),
  },
  {
    name: 'Numbered',
    code: (
      <List space="medium" type="number">
        <Text>Text</Text>
        <Text>Text</Text>
        <Text>Text</Text>
      </List>
    ),
  },
  {
    name: 'Alpha',
    code: (
      <List space="medium" type="alpha">
        <Text>Text</Text>
        <Text>Text</Text>
        <Text>Text</Text>
      </List>
    ),
  },
  {
    name: 'Roman',
    code: (
      <List space="medium" type="roman">
        <Text>Text</Text>
        <Text>Text</Text>
        <Text>Text</Text>
      </List>
    ),
  },
  {
    name: 'Icon',
    code: (
      <List space="medium" type="icon" icon={<IconTick tone="positive" />}>
        <Text>Text</Text>
        <Text>Text</Text>
        <Text>Text</Text>
      </List>
    ),
  },
];
