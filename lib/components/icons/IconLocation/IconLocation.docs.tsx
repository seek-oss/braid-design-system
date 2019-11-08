import React from 'react';
import { ComponentDocs } from '../../../../site/src/types';
import { IconLocation } from './IconLocation';

const docs: ComponentDocs = {
  migrationGuide: true,
  foundation: true,
  storybook: false,
  examples: [
    {
      label: 'Default',
      Example: () => <IconLocation />,
    },
  ],
};

export default docs;
