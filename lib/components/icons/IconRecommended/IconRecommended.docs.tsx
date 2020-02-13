import React from 'react';
import { ComponentDocs } from '../../../../site/src/types';
import { IconRecommended } from './IconRecommended';

const docs: ComponentDocs = {
  category: 'Icon',
  migrationGuide: true,
  foundation: true,
  screenshotWidths: [],
  examples: [
    {
      label: 'Default',
      Example: () => <IconRecommended />,
    },
  ],
};

export default docs;
