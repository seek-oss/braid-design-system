import * as React from 'react';
import { ComponentDocs } from '../../../../site/src/types';
import { IconSubCategory } from './IconSubCategory';

const docs: ComponentDocs = {
  category: 'Icon',
  migrationGuide: true,
  foundation: true,
  screenshotWidths: [],
  examples: [
    {
      label: 'Default',
      Example: () => <IconSubCategory />,
    },
  ],
};

export default docs;
