import React from 'react';
import { ComponentDocs } from '../../../../site/src/types';
import { IconAdd } from './IconAdd';

const docs: ComponentDocs = {
  category: 'Icon',
  migrationGuide: true,
  foundation: true,
  screenshotWidths: [],
  examples: [
    {
      label: 'Default',
      Example: () => <IconAdd />,
    },
  ],
};

export default docs;
