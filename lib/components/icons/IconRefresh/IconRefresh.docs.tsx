import * as React from 'react';
import { ComponentDocs } from '../../../../site/src/types';
import { IconRefresh } from './IconRefresh';

const docs: ComponentDocs = {
  category: 'Icon',
  migrationGuide: true,
  foundation: true,
  screenshotWidths: [],
  examples: [
    {
      label: 'Default',
      Example: () => <IconRefresh />,
    },
  ],
};

export default docs;
