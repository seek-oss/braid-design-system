import React from 'react';
import { ComponentDocs } from '../../../../site/src/types';
import { IconCompany } from './IconCompany';

const docs: ComponentDocs = {
  category: 'Icon',
  migrationGuide: true,
  foundation: true,
  screenshotWidths: [],
  examples: [
    {
      label: 'Default',
      Example: () => <IconCompany />,
    },
  ],
};

export default docs;
