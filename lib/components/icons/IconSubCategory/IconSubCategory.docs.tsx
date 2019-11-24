import React from 'react';
import { ComponentDocs } from '../../../../site/src/types';
import { IconSubCategory } from './IconSubCategory';

const docs: ComponentDocs = {
  category: 'Icon',
  migrationGuide: true,
  foundation: true,
  storybook: false,
  examples: [
    {
      label: 'Default',
      Example: () => <IconSubCategory />,
    },
  ],
};

export default docs;
