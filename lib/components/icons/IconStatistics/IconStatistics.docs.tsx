import React from 'react';
import { ComponentDocs } from '../../../../site/src/types';
import { IconStatistics } from './IconStatistics';

const docs: ComponentDocs = {
  category: 'Icon',
  migrationGuide: true,
  foundation: true,
  storybook: false,
  examples: [
    {
      label: 'Default',
      Example: () => <IconStatistics />,
    },
  ],
};

export default docs;
