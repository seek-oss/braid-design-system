import * as React from 'react';
import { ComponentDocs } from '../../../../site/src/types';
import { IconResume } from './IconResume';

const docs: ComponentDocs = {
  category: 'Icon',
  migrationGuide: true,
  foundation: true,
  screenshotWidths: [],
  examples: [
    {
      label: 'Default',
      Example: () => <IconResume />,
    },
  ],
};

export default docs;
