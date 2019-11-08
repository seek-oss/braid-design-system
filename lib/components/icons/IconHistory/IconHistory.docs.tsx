import React from 'react';
import { ComponentDocs } from '../../../../site/src/types';
import { IconHistory } from './IconHistory';

const docs: ComponentDocs = {
  migrationGuide: true,
  foundation: true,
  storybook: false,
  examples: [
    {
      label: 'Default',
      Example: () => <IconHistory />,
    },
  ],
};

export default docs;
