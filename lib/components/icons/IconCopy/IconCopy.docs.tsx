import React from 'react';
import { ComponentDocs } from '../../../../site/src/types';
import { IconCopy } from './IconCopy';

const docs: ComponentDocs = {
  category: 'Icon',
  migrationGuide: true,
  foundation: true,
  examples: [
    {
      label: 'Default',
      Example: () => <IconCopy />,
    },
  ],
};

export default docs;
