import React from 'react';
import source from '../../utils/source.macro';
import { ComponentDocs } from '../../../site/src/types';
import { List, Text, TextLink, Stack, Column, Columns } from '..';
import { IconTick } from '../../playroom/components';

const docs: ComponentDocs = {
  category: 'Content',
  migrationGuide: true,
  Example: () =>
    source(
      <Columns space="large" collapseBelow="desktop">
        <Column>
          <List>
            <Text>Bullet</Text>
            <Text>Bullet</Text>
            <Text>Bullet</Text>
          </List>
        </Column>
        <Column>
          <List type="number">
            <Text>Number</Text>
            <Text>Number</Text>
            <Text>Number</Text>
          </List>
        </Column>
        <Column>
          <List type="alpha">
            <Text>Alpha</Text>
            <Text>Alpha</Text>
            <Text>Alpha</Text>
          </List>
        </Column>
        <Column>
          <List type="roman">
            <Text>Roman</Text>
            <Text>Roman</Text>
            <Text>Roman</Text>
          </List>
        </Column>
        <Column>
          <List type="icon" icon={<IconTick />}>
            <Text>Icon</Text>
            <Text>Icon</Text>
            <Text>Icon</Text>
          </List>
        </Column>
      </Columns>,
    ),
  accessibility: (
    <Text>
      List semantics are handled for you automatically, including the use of
      ordered lists where appropriate.
    </Text>
  ),
  alternatives: [],
  additional: [
    {
      label: 'Rich content',
      description: (
        <Text>
          You can use a <TextLink href="/components/Stack">Stack</TextLink> as a
          list item to display multiple lines of text.
        </Text>
      ),
      Example: () =>
        source(
          <List space="large">
            <Stack space="medium">
              <Text weight="strong">This is a paragraph.</Text>
              <Text>This is another paragraph.</Text>
            </Stack>
            <Stack space="medium">
              <Text weight="strong">This is a paragraph.</Text>
              <Text>This is another paragraph.</Text>
            </Stack>
          </List>,
        ),
    },
    {
      label: 'Nested lists',
      description: (
        <Text>Lists of varying types can be nested within each other.</Text>
      ),
      Example: () =>
        source(
          <List space="large" type="number">
            <Stack space="medium">
              <Text>Number list</Text>
              <List type="alpha">
                <Text>Alpha list</Text>
                <Text>Alpha list</Text>
                <Text>Alpha list</Text>
              </List>
            </Stack>
            <Stack space="medium">
              <Text>Number list</Text>
              <List type="alpha">
                <Text>Alpha list</Text>
                <Text>Alpha list</Text>
                <Text>Alpha list</Text>
              </List>
            </Stack>
          </List>,
        ),
    },
    {
      label: 'Tone, size and space',
      description: (
        <Text>
          Lists support the same sizes and tones as{' '}
          <TextLink href="/components/Text">Text</TextLink>, and the same
          spacing as <TextLink href="/components/Stack">Stack</TextLink>.
        </Text>
      ),
      Example: () =>
        source(
          <Columns space="large" collapseBelow="desktop">
            <Column>
              <List tone="secondary" size="large" space="gutter">
                <Text>Large</Text>
                <Text>Large</Text>
                <Text>Large</Text>
              </List>
            </Column>
            <Column>
              <List tone="secondary" size="standard" space="medium">
                <Text>Standard</Text>
                <Text>Standard</Text>
                <Text>Standard</Text>
              </List>
            </Column>
            <Column>
              <List tone="secondary" size="small" space="small">
                <Text>Small</Text>
                <Text>Small</Text>
                <Text>Small</Text>
              </List>
            </Column>
            <Column>
              <List tone="secondary" size="xsmall" space="small">
                <Text>Xsmall</Text>
                <Text>Xsmall</Text>
                <Text>Xsmall</Text>
              </List>
            </Column>
          </Columns>,
        ),
    },
    {
      label: 'Custom start position',
      description: (
        <Text>Lists can be started from a higher number if needed.</Text>
      ),
      Example: () =>
        source(
          <Columns space="large" collapseBelow="desktop">
            <Column>
              <List type="number" start={9}>
                <Text>Number</Text>
                <Text>Number</Text>
                <Text>Number</Text>
              </List>
            </Column>
            <Column>
              <List type="alpha" start={9}>
                <Text>Alpha</Text>
                <Text>Alpha</Text>
                <Text>Alpha</Text>
              </List>
            </Column>
            <Column>
              <List type="roman" start={9}>
                <Text>Roman</Text>
                <Text>Roman</Text>
                <Text>Roman</Text>
              </List>
            </Column>
          </Columns>,
        ),
    },
  ],
};

export default docs;
