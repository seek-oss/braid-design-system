import React from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { Notice, Text, Strong, Stack, TextLink, BulletList, Bullet } from '../';

const docs: ComponentDocs = {
  category: 'Content',
  description: (
    <Stack space="large">
      <Text>
        Provides an inline notification to the user. If you’re looking for a
        stronger visual treatment, try{' '}
        <TextLink href="/components/Alert">Alert</TextLink> instead.
      </Text>
      <Text>
        <Strong>Note:</Strong> This component has only been designed to contain
        standard size text. Any other size of text will break the alignment with
        the icon.
      </Text>
    </Stack>
  ),
  migrationGuide: true,
  screenshotWidths: [320],
  examples: [
    {
      label: 'Info Notice',
      Example: () => (
        <Notice tone="info">
          <Text>This is an important piece of information.</Text>
        </Notice>
      ),
    },
    {
      label: 'Notice with rich content',
      Example: () => (
        <Notice tone="info">
          <Stack space="medium">
            <Text>This is an important piece of information.</Text>
            <BulletList space="medium">
              <Bullet>Bullet 1</Bullet>
              <Bullet>Bullet 2</Bullet>
              <Bullet>Bullet 3</Bullet>
            </BulletList>
          </Stack>
        </Notice>
      ),
    },
    {
      label: 'Promote Notice',
      Example: () => (
        <Notice tone="promote">
          <Text>This is a promoted piece of information.</Text>
        </Notice>
      ),
    },
    {
      label: 'Critical Notice',
      Example: () => (
        <Notice tone="critical">
          <Text>This is a critical piece of information.</Text>
        </Notice>
      ),
    },
    {
      label: 'Positive Notice',
      Example: () => (
        <Notice tone="positive">
          <Text>This is a positive piece of information.</Text>
        </Notice>
      ),
    },
  ],
  snippets: [
    {
      name: 'Critical',
      code: (
        <Notice tone="critical">
          <Text>Critical Notice</Text>
        </Notice>
      ),
    },
    {
      name: 'Positive',
      code: (
        <Notice tone="positive">
          <Text>Positive Notice</Text>
        </Notice>
      ),
    },
    {
      name: 'Info',
      code: (
        <Notice tone="info">
          <Text>Info Notice</Text>
        </Notice>
      ),
    },
    {
      name: 'Promote',
      code: (
        <Notice tone="promote">
          <Text>Promote Notice</Text>
        </Notice>
      ),
    },
  ],
};

export default docs;
