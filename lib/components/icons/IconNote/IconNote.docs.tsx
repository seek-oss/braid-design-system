import React from 'react';
import { ComponentDocs } from '../../../../site/src/types';
import { IconNote } from './IconNote';

const docs: ComponentDocs = {
  category: 'Icon',
  migrationGuide: true,
  foundation: true,
  storybook: false,
  examples: [
    {
      label: 'Default',
      Example: () => <IconNote />,
    },
  ],
};

export default docs;
