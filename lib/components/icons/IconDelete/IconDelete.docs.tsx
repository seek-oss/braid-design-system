import React from 'react';
import { ComponentDocs } from '../../../../site/src/types';
import { IconDelete } from './IconDelete';

const docs: ComponentDocs = {
  category: 'Icon',
  migrationGuide: true,
  foundation: true,
  examples: [
    {
      label: 'Default',
      Example: () => <IconDelete />,
    },
  ],
};

export default docs;
