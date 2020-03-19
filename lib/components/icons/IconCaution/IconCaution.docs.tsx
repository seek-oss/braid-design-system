import * as React from 'react';
import { ComponentDocs } from '../../../../site/src/types';
import { IconCaution } from './IconCaution';

const docs: ComponentDocs = {
  category: 'Icon',
  migrationGuide: true,
  foundation: true,
  screenshotWidths: [],
  examples: [
    {
      label: 'Default',
      Example: () => <IconCaution />,
    },
  ],
};

export default docs;
