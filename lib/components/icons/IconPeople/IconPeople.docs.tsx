import * as React from 'react';
import { ComponentDocs } from '../../../../site/src/types';
import { IconPeople } from './IconPeople';

const docs: ComponentDocs = {
  category: 'Icon',
  migrationGuide: true,
  foundation: true,
  screenshotWidths: [],
  examples: [
    {
      label: 'Default',
      Example: () => <IconPeople />,
    },
  ],
};

export default docs;
