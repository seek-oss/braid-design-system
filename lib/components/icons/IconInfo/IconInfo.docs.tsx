import React from 'react';
import { ComponentDocs } from '../../../../site/src/types';
import { IconInfo } from './IconInfo';

const docs: ComponentDocs = {
  category: 'Icon',
  migrationGuide: true,
  foundation: true,
  screenshotWidths: [],
  examples: [
    {
      label: 'Default',
      Example: () => <IconInfo />,
    },
  ],
};

export default docs;
