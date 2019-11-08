import React from 'react';
import { ComponentDocs } from '../../../../site/src/types';
import { IconGrid } from './IconGrid';

const docs: ComponentDocs = {
  migrationGuide: true,
  foundation: true,
  storybook: false,
  examples: [
    {
      label: 'Default',
      Example: () => <IconGrid />,
    },
  ],
};

export default docs;
