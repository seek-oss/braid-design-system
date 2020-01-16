import React from 'react';
import { ComponentDocs } from '../../../../site/src/types';
import { IconShare } from './IconShare';

const docs: ComponentDocs = {
  category: 'Icon',
  migrationGuide: true,
  foundation: true,
  screenshotWidths: [],
  examples: [
    {
      label: 'Default',
      Example: () => <IconShare />,
    },
  ],
};

export default docs;
