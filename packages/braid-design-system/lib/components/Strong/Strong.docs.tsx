import React from 'react';
import source from '../../utils/source.macro';
import { ComponentDocs } from '../../../../../site/src/types';
import { Strong, Text, TextLink } from '../';

const docs: ComponentDocs = {
  category: 'Content',
  migrationGuide: true,
  Example: () =>
    source(
      <Text size="large">
        The last word of this sentence is <Strong>strong.</Strong>
      </Text>,
    ),
  alternatives: [
    { name: 'Secondary', description: 'For a lighter text treatment.' },
  ],
  additional: [
    {
      label: 'Note',
      description: (
        <Text>
          This component must be nested within a{' '}
          <TextLink href="/components/Text">Text</TextLink> or{' '}
          <TextLink href="/components/Heading">Heading</TextLink> component.
        </Text>
      ),
    },
  ],
};

export default docs;
