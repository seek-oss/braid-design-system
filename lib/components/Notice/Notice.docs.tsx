import React from 'react';
import { ComponentDocs } from '../../../site/src/types';
import {
  Notice,
  Text,
  Stack,
  Heading,
  TextLink,
  BulletList,
  Bullet,
} from '../';

const docs: ComponentDocs = {
  category: 'Content',
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
    {
      label: 'Test: Rich content',
      docsSite: false,
      Example: () => (
        <Notice tone="positive">
          <Stack space="medium">
            <Heading level="4">Heading</Heading>
            <Text>
              Text with a <TextLink href="#">TextLink</TextLink>
            </Text>
            <BulletList space="small">
              <Bullet>Bullet 1</Bullet>
              <Bullet>Bullet 2</Bullet>
              <Bullet>Bullet 3</Bullet>
            </BulletList>
          </Stack>
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
