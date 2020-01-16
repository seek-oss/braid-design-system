import React from 'react';
import { ComponentDocs } from '../../../../site/src/types';
import { IconSettings } from './IconSettings';

const docs: ComponentDocs = {
  category: 'Icon',
  migrationGuide: true,
  foundation: true,
  screenshotWidths: [],
  examples: [
    {
      label: 'Default',
      Example: () => <IconSettings />,
    },
  ],
};

export default docs;
