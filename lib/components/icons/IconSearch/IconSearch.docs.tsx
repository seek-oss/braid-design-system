import React from 'react';
import { ComponentDocs } from '../../../../site/src/types';
import { IconSearch } from './IconSearch';

const docs: ComponentDocs = {
  category: 'Icon',
  migrationGuide: true,
  foundation: true,
  storybook: false,
  examples: [
    {
      label: 'Default',
      Example: () => <IconSearch />,
    },
  ],
};

export default docs;
