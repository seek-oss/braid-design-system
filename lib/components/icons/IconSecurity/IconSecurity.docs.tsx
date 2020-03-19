import * as React from 'react';
import { ComponentDocs } from '../../../../site/src/types';
import { IconSecurity } from './IconSecurity';

const docs: ComponentDocs = {
  category: 'Icon',
  migrationGuide: true,
  foundation: true,
  screenshotWidths: [],
  examples: [
    {
      label: 'Default',
      Example: () => <IconSecurity />,
    },
  ],
};

export default docs;
