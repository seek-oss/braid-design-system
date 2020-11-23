import React from 'react';
import { ComponentDetail } from '../../../site/src/types';
import { Actions, Button, TextLink } from '../';

const docs: ComponentDetail = {
  category: 'Content',
  migrationGuide: true,
  Example: () => (
    <Actions>
      <Button>Button</Button>
      <Button weight="weak">Weak</Button>
      <TextLink href="#">TextLink</TextLink>
    </Actions>
  ),
  alternatives: [
    {
      name: 'Inline',
      description:
        'For fine grain control of spacing and breakpoints. Support flowing content that wraps onto the next line if too long.',
    },
    {
      name: 'Columns',
      description: 'For finer grain control of widths and breakpoints.',
    },
  ],
};

export default docs;
