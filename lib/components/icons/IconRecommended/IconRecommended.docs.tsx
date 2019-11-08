import React from 'react';
import { ComponentDocs } from '../../../../site/src/types';
import { IconRecommended } from './IconRecommended';

const docs: ComponentDocs = {
  migrationGuide: true,
  foundation: true,
  storybook: false,
  examples: [
    {
      label: 'Default',
      Example: () => <IconRecommended />,
    },
  ],
};

export default docs;
