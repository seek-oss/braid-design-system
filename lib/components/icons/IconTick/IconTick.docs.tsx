import React from 'react';
import { ComponentDocs } from '../../../../site/src/types';
import { IconTick } from './IconTick';

const docs: ComponentDocs = {
  category: 'Icon',
  migrationGuide: true,
  foundation: true,
  screenshotWidths: [],
  examples: [
    {
      label: 'Default',
      Example: () => <IconTick />,
    },
  ],
};

export default docs;
