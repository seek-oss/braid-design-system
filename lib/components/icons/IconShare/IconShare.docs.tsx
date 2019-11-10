import React from 'react';
import { ComponentDocs } from '../../../../site/src/types';
import { IconShare } from './IconShare';

const docs: ComponentDocs = {
  migrationGuide: true,
  foundation: true,
  storybook: false,
  examples: [
    {
      label: 'Default',
      Example: () => <IconShare />,
    },
  ],
};

export default docs;
