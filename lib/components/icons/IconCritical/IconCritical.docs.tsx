import React from 'react';
import { ComponentDocs } from '../../../../site/src/types';
import { IconCritical } from './IconCritical';

const docs: ComponentDocs = {
  category: 'Icon',
  migrationGuide: true,
  foundation: true,
  examples: [
    {
      label: 'Default',
      Example: () => <IconCritical />,
    },
  ],
};

export default docs;
