import React from 'react';
import { ComponentDocs } from '../../../../site/src/types';
import { IconClear } from './IconClear';

const docs: ComponentDocs = {
  category: 'Icon',
  migrationGuide: true,
  foundation: true,
  examples: [
    {
      label: 'Default',
      Example: () => <IconClear />,
    },
  ],
};

export default docs;
