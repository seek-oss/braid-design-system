import * as React from 'react';
import { ComponentDocs } from '../../../../site/src/types';
import { IconLocation } from './IconLocation';

const docs: ComponentDocs = {
  category: 'Icon',
  migrationGuide: true,
  foundation: true,
  screenshotWidths: [],
  examples: [
    {
      label: 'Default',
      Example: () => <IconLocation />,
    },
  ],
};

export default docs;
