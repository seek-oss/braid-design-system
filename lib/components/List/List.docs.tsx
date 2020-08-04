import React from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { List, Text, TextLink, Stack, BulletList, Bullet } from '..';

const docs: ComponentDocs = {
  category: 'Content',
  migrationGuide: true,
  screenshotWidths: [320],
  examples: [
    {
      label: 'Test',
      Example: () => (
        <BulletList>
          <Bullet>Yo</Bullet>
        </BulletList>
      ),
    },
    {
      label: 'Standard Bullets',
      Example: () => (
        <List space="medium">
          <Stack space="medium">
            <Text>This has a nested list</Text>
            <List>
              <Text>This is a nested bullet.</Text>
              <Text>This is a nested bullet.</Text>
              <Text>This is a nested bullet.</Text>
            </List>
          </Stack>
          <Text>This is a bullet.</Text>
          <Text>This is a bullet.</Text>
        </List>
      ),
    },
    {
      label: 'Small Bullets',
      Example: () => (
        <List size="small">
          <Text size="small">This is a small bullet.</Text>
          <Text size="small">This is a small bullet.</Text>
          <Text size="small">This is a small bullet.</Text>
        </List>
      ),
    },
    {
      label: 'Xsmall Bullets',
      Example: () => (
        <List size="xsmall">
          <Text>This is an xsmall bullet.</Text>
          <Text>This is an xsmall bullet.</Text>
          <Text>This is an xsmall bullet.</Text>
        </List>
      ),
    },
    {
      label: 'Large Bullets',
      Example: () => (
        <List size="large">
          <Text>This is a large bullet.</Text>
          <Text>This is a large bullet.</Text>
          <Text>This is a large bullet.</Text>
        </List>
      ),
    },
    {
      label: 'Decreased space between Bullets',
      Example: () => (
        <List space="xsmall">
          <Text>Decreased space below bullet.</Text>
          <Text>Decreased space below bullet.</Text>
          <Text>Decreased space below bullet.</Text>
        </List>
      ),
    },
    {
      label: 'Increased space between Bullets',
      Example: () => (
        <List space="xlarge">
          <Text>Increased space below bullet.</Text>
          <Text>Increased space below bullet.</Text>
          <Text>Increased space below bullet.</Text>
        </List>
      ),
    },
    {
      label: 'Secondary Tone',
      Example: () => (
        <List tone="secondary">
          <Text>This is a secondary bullet.</Text>
          <Text>This is a secondary bullet.</Text>
          <Text>This is a secondary bullet.</Text>
        </List>
      ),
    },
    {
      label: 'With TextLink',
      docsSite: false,
      Example: () => (
        <List>
          <Text>
            This is a text <TextLink href="#">link</TextLink>.
          </Text>
          <Text>
            This is a secondary <TextLink href="#">link</TextLink>.
          </Text>
          <Text>
            This is a secondary <TextLink href="#">link</TextLink>.
          </Text>
        </List>
      ),
    },
  ],
  snippets: [
    {
      name: 'XSmall Space',
      code: (
        <List space="xsmall">
          <Text>Bullet</Text>
          <Text>Bullet</Text>
          <Text>Bullet</Text>
        </List>
      ),
    },
    {
      name: 'Small Space',
      code: (
        <List space="small">
          <Text>Bullet</Text>
          <Text>Bullet</Text>
          <Text>Bullet</Text>
        </List>
      ),
    },
    {
      name: 'Medium Space',
      code: (
        <List space="medium">
          <Text>Bullet</Text>
          <Text>Bullet</Text>
          <Text>Bullet</Text>
        </List>
      ),
    },
    {
      name: 'Secondary',
      code: (
        <List space="medium" tone="secondary">
          <Text>Bullet</Text>
          <Text>Bullet</Text>
          <Text>Bullet</Text>
        </List>
      ),
    },
  ],
};

export default docs;
