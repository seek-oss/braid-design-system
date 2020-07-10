import React from 'react';
import { ComponentDocs } from '../../../../site/src/types';
import { IconLanguage } from './IconLanguage';

const docs: ComponentDocs = {
  category: 'Icon',
  migrationGuide: true,
  foundation: true,
  screenshotWidths: [],
  examples: [
    {
      label: 'Default',
      Example: () => <IconLanguage />,
    },
  ],
};

export default docs;
