import React from 'react';
import { ComponentDocs } from '../../../../site/src/types';
import { IconCompany } from './IconCompany';

const docs: ComponentDocs = {
  migrationGuide: true,
  foundation: true,
  storybook: false,
  examples: [
    {
      label: 'Default',
      Example: () => <IconCompany />,
    },
  ],
};

export default docs;
