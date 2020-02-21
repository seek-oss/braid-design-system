import React from 'react';
import { ComponentDocs } from '../../../../site/src/types';
import { IconVisibility } from './IconVisibility';

const docs: ComponentDocs = {
  category: 'Icon',
  migrationGuide: true,
  foundation: true,
  screenshotWidths: [],
  examples: [
    {
      label: 'Default',
      Example: () => <IconVisibility />,
    },
  ],
};

export default docs;
