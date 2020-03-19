import * as React from 'react';
import { ComponentDocs } from '../../../../site/src/types';
import { IconSent } from './IconSent';

const docs: ComponentDocs = {
  category: 'Icon',
  migrationGuide: true,
  foundation: true,
  screenshotWidths: [],
  examples: [
    {
      label: 'Default',
      Example: () => <IconSent />,
    },
  ],
};

export default docs;
