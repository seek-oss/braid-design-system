import React from 'react';
import { ComponentDocs } from '../../../../site/src/types';
import { IconPhone } from './IconPhone';

const docs: ComponentDocs = {
  category: 'Icon',
  migrationGuide: true,
  foundation: true,
  screenshotWidths: [],
  examples: [
    {
      label: 'Default',
      Example: () => <IconPhone />,
    },
  ],
};

export default docs;
