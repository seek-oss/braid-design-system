import React from 'react';
import { ComponentDocs } from '../../../../site/src/types';
import { IconNewWindow } from './IconNewWindow';

const docs: ComponentDocs = {
  category: 'Icon',
  migrationGuide: true,
  foundation: true,
  screenshotWidths: [],
  examples: [
    {
      label: 'Default',
      Example: () => <IconNewWindow />,
    },
  ],
};

export default docs;
