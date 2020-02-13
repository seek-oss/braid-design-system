import React from 'react';
import { ComponentDocs } from '../../../../site/src/types';
import { IconImage } from './IconImage';

const docs: ComponentDocs = {
  category: 'Icon',
  migrationGuide: true,
  foundation: true,
  screenshotWidths: [],
  examples: [
    {
      label: 'Default',
      Example: () => <IconImage />,
    },
  ],
};

export default docs;
