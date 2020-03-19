import * as React from 'react';
import { ComponentDocs } from '../../../../site/src/types';
import { IconOverflow } from './IconOverflow';

const docs: ComponentDocs = {
  category: 'Icon',
  migrationGuide: true,
  foundation: true,
  screenshotWidths: [],
  examples: [
    {
      label: 'Default',
      Example: () => <IconOverflow />,
    },
  ],
};

export default docs;
