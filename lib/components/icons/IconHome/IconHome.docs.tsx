import React from 'react';
import { ComponentDocs } from '../../../../site/src/types';
import { IconHome } from './IconHome';

const docs: ComponentDocs = {
  category: 'Icon',
  migrationGuide: true,
  foundation: true,
  storybook: false,
  examples: [
    {
      label: 'Default',
      Example: () => <IconHome />,
    },
  ],
};

export default docs;
