import React from 'react';
import { ComponentDocs } from '../../../../site/src/types';
import { IconPositive } from './IconPositive';

const docs: ComponentDocs = {
  category: 'Icon',
  migrationGuide: true,
  foundation: true,
  examples: [
    {
      label: 'Default',
      Example: () => <IconPositive />,
    },
  ],
};

export default docs;
