import React from 'react';
import source from '@braid-design-system/source.macro';
import type { ComponentDocs } from 'site/types';
import { List, Text, TextLink, Stack, Column, Columns } from '..';
import { IconTick, Strong } from '../../playroom/components';

const docs: ComponentDocs = {
  category: 'Content',
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
      label: 'Types of lists',
      description: (
        <>
          <Text>
            A List can select a delimiter for its items by specifying the{' '}
            <Strong>type</Strong> prop, with supported values being{' '}
            <Strong>bullet</Strong>, <Strong>number</Strong>,{' '}
            <Strong>alpha</Strong> and <Strong>roman</Strong> characters.
          </Text>
          <Text>
            A type of <Strong>icon</Strong> may also be used, which then
            requires an icon component be provided to the <Strong>icon</Strong>{' '}
            prop.
          </Text>
        </>
      ),
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
              <List type="icon" icon={<IconTick tone="positive" />}>
                <Text>Icon</Text>
                <Text>Icon</Text>
                <Text>Icon</Text>
              </List>
            </Column>
          </Columns>,
        ),
    },
    {
      label: 'Tone and size',
      description: (
        <Text>
          Lists support the same sizes and tones as{' '}
          <TextLink href="/components/Text">Text</TextLink>.
        </Text>
      ),
      Example: () =>
        source(
          <Columns space="large" collapseBelow="desktop">
            <Column>
              <List tone="secondary" size="large">
                <Text>Large</Text>
                <Text>Large</Text>
                <Text>Large</Text>
              </List>
            </Column>
            <Column>
              <List tone="secondary" size="standard">
                <Text>Standard</Text>
                <Text>Standard</Text>
                <Text>Standard</Text>
              </List>
            </Column>
            <Column>
              <List tone="secondary" size="small">
                <Text>Small</Text>
                <Text>Small</Text>
                <Text>Small</Text>
              </List>
            </Column>
            <Column>
              <List tone="secondary" size="xsmall">
                <Text>Xsmall</Text>
                <Text>Xsmall</Text>
                <Text>Xsmall</Text>
              </List>
            </Column>
          </Columns>,
        ),
    },
    {
      label: 'Spacing',
      description: (
        <Text>
          By default, Lists will use <Strong>small</Strong> spacing, or{' '}
          <Strong>xsmall</Strong> spacing if the <Strong>size</Strong> prop is
          set to either <Strong>small</Strong> or <Strong>xsmall</Strong>. This
          can be changed via the <Strong>space</Strong> prop, which supports the
          same spacing as <TextLink href="/components/Stack">Stack</TextLink>.
        </Text>
      ),
      Example: () =>
        source(
          <Columns space="large" collapseBelow="desktop">
            <Column>
              <List space="large">
                <Text>Large</Text>
                <Text>Large</Text>
                <Text>Large</Text>
              </List>
            </Column>
            <Column>
              <List space="medium">
                <Text>Standard</Text>
                <Text>Standard</Text>
                <Text>Standard</Text>
              </List>
            </Column>
            <Column>
              <List space="small">
                <Text>Small</Text>
                <Text>Small</Text>
                <Text>Small</Text>
              </List>
            </Column>
            <Column>
              <List space="xsmall">
                <Text>Xsmall</Text>
                <Text>Xsmall</Text>
                <Text>Xsmall</Text>
              </List>
            </Column>
          </Columns>,
        ),
    },
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
