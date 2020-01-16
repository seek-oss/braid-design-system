import React from 'react';
import { ComponentDocs } from '../../../../site/src/types';
import { IconUpload } from './IconUpload';

const docs: ComponentDocs = {
  category: 'Icon',
  migrationGuide: true,
  foundation: true,
  screenshotWidths: [],
  examples: [
    {
      label: 'Default',
      Example: () => <IconUpload />,
    },
  ],
};

export default docs;
