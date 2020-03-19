import * as React from 'react';
import { ComponentDocs } from '../../../../site/src/types';
import { IconMinus } from './IconMinus';

const docs: ComponentDocs = {
  category: 'Icon',
  migrationGuide: true,
  foundation: true,
  screenshotWidths: [],
  examples: [
    {
      label: 'Default',
      Example: () => <IconMinus />,
    },
  ],
};

export default docs;
