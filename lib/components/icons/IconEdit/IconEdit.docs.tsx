import React from 'react';
import { ComponentDocs } from '../../../../site/src/types';
import { IconEdit } from './IconEdit';

const docs: ComponentDocs = {
  category: 'Icon',
  migrationGuide: true,
  foundation: true,
  examples: [
    {
      label: 'Default',
      Example: () => <IconEdit />,
    },
  ],
};

export default docs;
