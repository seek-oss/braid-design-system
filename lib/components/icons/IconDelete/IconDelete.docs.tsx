import React from 'react';
import { ComponentDocs } from '../../../../site/src/types';
import { IconDelete } from './IconDelete';

const docs: ComponentDocs = {
  migrationGuide: true,
  foundation: true,
  storybook: false,
  examples: [
    {
      label: 'Default',
      Example: () => <IconDelete />,
    },
  ],
};

export default docs;
