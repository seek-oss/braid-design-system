import React from 'react';
import { ComponentDetail } from '../../../site/src/types';
import source from '../../utils/source.macro';
import { Actions, Button, TextLink, Text, Strong, IconDelete } from '../';

const docs: ComponentDetail = {
  category: 'Content',
  migrationGuide: true,
  Example: () =>
    source(
      <Actions>
        <Button>Regular Button</Button>
        <Button weight="weak">Weak Button</Button>
        <TextLink href="#">TextLink</TextLink>
      </Actions>,
    ),
  alternatives: [
    {
      name: 'Inline',
      description: 'For fine-grained control of spacing and alignment.',
    },
    {
      name: 'Columns',
      description: 'For fine-grained control of widths, spacing and alignment.',
    },
  ],
  additional: [
    {
      label: 'Destructive actions',
      description: (
        <Text>
          For destructive actions like “Delete” you can set the{' '}
          <TextLink href="/components/Button">Button</TextLink> element’s{' '}
          <Strong>tone</Strong> to <Strong>critical.</Strong>
        </Text>
      ),
      Example: () =>
        source(
          <Actions>
            <Button tone="critical">
              <IconDelete /> Delete
            </Button>
            <TextLink href="#">Cancel</TextLink>
          </Actions>,
        ),
    },
    {
      label: 'Contextual design',
      description: (
        <Text>
          When nested inside Actions,{' '}
          <TextLink href="/components/TextLink">TextLink</TextLink> is given a
          more prominent treatment to visually align with{' '}
          <TextLink href="/components/Button">Button</TextLink>.
        </Text>
      ),
    },
  ],
};

export default docs;
