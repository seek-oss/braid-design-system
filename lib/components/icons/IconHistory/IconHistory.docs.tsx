import React from 'react';
import { ComponentDocs } from '../../../../site/src/types';
import { IconHistory } from './IconHistory';

const docs: ComponentDocs = {
  category: 'Icon',
  migrationGuide: true,
  foundation: true,
  examples: [
    {
      label: 'Default',
      Example: () => <IconHistory />,
    },
  ],
};

export default docs;
