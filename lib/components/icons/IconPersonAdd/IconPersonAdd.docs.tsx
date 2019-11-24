import React from 'react';
import { ComponentDocs } from '../../../../site/src/types';
import { IconPersonAdd } from './IconPersonAdd';

const docs: ComponentDocs = {
  category: 'Icon',
  migrationGuide: true,
  foundation: true,
  storybook: false,
  examples: [
    {
      label: 'Default',
      Example: () => <IconPersonAdd />,
    },
  ],
};

export default docs;
