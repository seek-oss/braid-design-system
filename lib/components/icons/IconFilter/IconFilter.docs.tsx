import React from 'react';
import { ComponentDocs } from '../../../../site/src/types';
import { IconFilter } from './IconFilter';

const docs: ComponentDocs = {
  migrationGuide: true,
  foundation: true,
  storybook: false,
  examples: [
    {
      label: 'Default',
      Example: () => <IconFilter />,
    },
  ],
};

export default docs;
