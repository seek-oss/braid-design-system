import React from 'react';
import { ComponentDocs } from '../../../../site/src/types';
import { IconCritical } from './IconCritical';

const docs: ComponentDocs = {
  migrationGuide: true,
  foundation: true,
  storybook: false,
  examples: [
    {
      label: 'Default',
      Example: () => <IconCritical />,
    },
  ],
};

export default docs;
