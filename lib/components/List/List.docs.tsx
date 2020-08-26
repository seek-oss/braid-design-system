import React from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { List, Text, TextLink, Stack } from '..';
import { Placeholder } from '../../playroom/components';

const docs: ComponentDocs = {
  category: 'Content',
  migrationGuide: true,
  screenshotWidths: [320],
  description: (
    <Stack space="large">
      <Text>
        Provides a wrapper element that converts each child element into a list
        item.
      </Text>
      <Text>
        When setting a size or tone, these values will cascade to nested List
        and <TextLink href="/components/Text">Text</TextLink> elements.
      </Text>
    </Stack>
  ),
  examples: [
    {
      label: 'Standard List',
      Example: () => (
        <List>
          <Text>This is a list item.</Text>
          <Text>This is a list item.</Text>
          <Text>This is a list item.</Text>
        </List>
      ),
    },
    {
      label: 'Numbered List',
      Example: () => (
        <List type="number">
          <Text>This is a numbered list item.</Text>
          <Text>This is a numbered list item.</Text>
          <Text>This is a numbered list item.</Text>
        </List>
      ),
    },
    {
      label: 'Alpha List',
      Example: () => (
        <List type="alpha">
          <Text>This is an alpha list item.</Text>
          <Text>This is an alpha list item.</Text>
          <Text>This is an alpha list item.</Text>
        </List>
      ),
    },
    {
      label: 'List with paragraphs',
      Example: () => (
        <List space="large">
          <Stack space="medium">
            <Text>This is a paragraph.</Text>
            <Text>This is another paragraph.</Text>
          </Stack>
          <Stack space="medium">
            <Text>This is a paragraph.</Text>
            <Text>This is another paragraph.</Text>
          </Stack>
        </List>
      ),
    },
    {
      label: 'Nested Lists',
      Example: () => (
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
        </List>
      ),
    },
    {
      label: 'List with custom text size',
      Example: () => (
        <List size="large">
          <Text>This is a large list item.</Text>
          <Text>This is a large list item.</Text>
          <Text>This is a large list item.</Text>
        </List>
      ),
    },
    {
      label: 'List with custom space between items',
      Example: () => (
        <List space="large">
          <Text>List item with large space.</Text>
          <Text>List item with large space.</Text>
          <Text>List item with large space.</Text>
        </List>
      ),
    },
    {
      label: 'List with custom tone',
      Example: () => (
        <List tone="secondary">
          <Text>List item with secondary tone.</Text>
          <Text>List item with secondary tone.</Text>
          <Text>List item with secondary tone.</Text>
        </List>
      ),
    },
    {
      label: 'Numbered List with custom start position',
      Example: () => (
        <List type="number" start={9}>
          <Text>This is a large list item.</Text>
          <Text>This is a large list item.</Text>
          <Text>This is a large list item.</Text>
        </List>
      ),
    },
    {
      label: 'Alpha List with custom start position',
      Example: () => (
        <List type="alpha" start={9}>
          <Text>This is a large list item.</Text>
          <Text>This is a large list item.</Text>
          <Text>This is a large list item.</Text>
        </List>
      ),
    },
    {
      label: 'Test: Size and tone should cascade to nested lists',
      docsSite: false,
      Example: () => (
        <List size="large" tone="critical">
          <Stack space="medium">
            <Text>Should be large and critical.</Text>
            <List>
              <Text>Should be large and critical.</Text>
            </List>
          </Stack>
        </List>
      ),
    },
    {
      label: 'Test: Cascading size and tone should be overridable',
      docsSite: false,
      Example: () => (
        <List size="large" tone="critical">
          <Stack space="medium">
            <Text>Should be large and critical.</Text>
            <List size="xsmall" tone="positive">
              <Text>Should be xsmall and positive.</Text>
            </List>
          </Stack>
        </List>
      ),
    },
    {
      label: 'Test: Flattens fragments',
      docsSite: false,
      Example: () => (
        <List>
          <Text>List item.</Text>
          <>
            <Text>List item.</Text>
          </>
          <>
            <>
              <Text>List item.</Text>
              <Text>List item.</Text>
            </>
          </>
        </List>
      ),
    },
    {
      label: 'Test: List items should be full width',
      docsSite: false,
      Example: () => (
        <List>
          <Placeholder height={60} />
        </List>
      ),
    },
  ],
  snippets: [
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
  ],
};

export default docs;
