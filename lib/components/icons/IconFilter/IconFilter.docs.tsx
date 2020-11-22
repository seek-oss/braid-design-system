import React from 'react';
import { ComponentDocs } from '../../../../site/src/types';
import { IconFilter } from './IconFilter';

const docs: ComponentDocs = {
  category: 'Icon',
  migrationGuide: true,
  foundation: true,
  examples: [
    {
      label: 'Default',
      Example: () => <IconFilter />,
    },
  ],
};

export default docs;
