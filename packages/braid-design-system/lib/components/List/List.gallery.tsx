import React from 'react';
import { ComponentExample } from '../../../../../site/src/types';
import { List, IconTick, Text, Stack } from '..';
import source from '../../utils/source.macro';

export const galleryItems: ComponentExample[] = [
  {
    label: 'Standard',
    Example: () =>
      source(
        <List>
          <Text>This is a list item.</Text>
          <Text>This is a list item.</Text>
          <Text>This is a list item.</Text>
        </List>,
      ),
  },
  {
    label: 'Numbered',
    Example: () =>
      source(
        <List type="number">
          <Text>This is a numbered list item.</Text>
          <Text>This is a numbered list item.</Text>
          <Text>This is a numbered list item.</Text>
        </List>,
      ),
  },
  {
    label: 'Alpha',
    Example: () =>
      source(
        <List type="alpha">
          <Text>This is an alpha list item.</Text>
          <Text>This is an alpha list item.</Text>
          <Text>This is an alpha list item.</Text>
        </List>,
      ),
  },
  {
    label: 'Roman',
    Example: () =>
      source(
        <List type="roman">
          <Text>This is a Roman list item.</Text>
          <Text>This is a Roman list item.</Text>
          <Text>This is a Roman list item.</Text>
        </List>,
      ),
  },
  {
    label: 'Icon',
    Example: () =>
      source(
        <List type="icon" icon={<IconTick tone="positive" />}>
          <Text>This is a list item.</Text>
          <Text>This is a list item.</Text>
          <Text>This is a list item.</Text>
        </List>,
      ),
  },
  {
    label: 'With paragraphs',
    Example: () =>
      source(
        <List space="large">
          <Stack space="medium">
            <Text>This is a paragraph.</Text>
            <Text>This is another paragraph.</Text>
          </Stack>
          <Stack space="medium">
            <Text>This is a paragraph.</Text>
            <Text>This is another paragraph.</Text>
          </Stack>
        </List>,
      ),
  },
  {
    label: 'Nested Lists',
    Example: () =>
      source(
        <List space="large" type="number">
          <Stack space="medium">
            <Text>This has a nested list.</Text>
            <List type="alpha">
              <Text>This is a nested list item.</Text>
              <Text>This is a nested list item.</Text>
              <Text>This is a nested list item.</Text>
            </List>
          </Stack>
          <Stack space="medium">
            <Text>This has a nested list.</Text>
            <List type="alpha">
              <Text>This is a nested list item.</Text>
              <Text>This is a nested list item.</Text>
              <Text>This is a nested list item.</Text>
            </List>
          </Stack>
        </List>,
      ),
  },
  {
    label: 'With custom text size',
    Example: () =>
      source(
        <List size="large">
          <Text>This is a large list item.</Text>
          <Text>This is a large list item.</Text>
          <Text>This is a large list item.</Text>
        </List>,
      ),
  },
  {
    label: 'With custom space between items',
    Example: () =>
      source(
        <List space="large">
          <Text>List item with large space.</Text>
          <Text>List item with large space.</Text>
          <Text>List item with large space.</Text>
        </List>,
      ),
  },
  {
    label: 'With custom tone',
    Example: () =>
      source(
        <List tone="secondary">
          <Text>List item with secondary tone.</Text>
          <Text>List item with secondary tone.</Text>
          <Text>List item with secondary tone.</Text>
        </List>,
      ),
  },
  {
    label: 'Numbered with custom start position',
    Example: () =>
      source(
        <List type="number" start={9}>
          <Text>This is a numbered list item.</Text>
          <Text>This is a numbered list item.</Text>
          <Text>This is a numbered list item.</Text>
        </List>,
      ),
  },
  {
    label: 'Alpha with custom start position',
    Example: () =>
      source(
        <List type="alpha" start={9}>
          <Text>This is an alpha list item.</Text>
          <Text>This is an alpha list item.</Text>
          <Text>This is an alpha list item.</Text>
        </List>,
      ),
  },
  {
    label: 'Roman with custom start position',
    Example: () =>
      source(
        <List type="roman" start={9}>
          <Text>This is a Roman list item.</Text>
          <Text>This is a Roman list item.</Text>
          <Text>This is a Roman list item.</Text>
        </List>,
      ),
  },
];
