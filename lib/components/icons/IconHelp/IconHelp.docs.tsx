import React from 'react';
import { ComponentDocs } from '../../../../site/src/types';
import { IconHelp } from './IconHelp';

const docs: ComponentDocs = {
  category: 'Icon',
  migrationGuide: true,
  foundation: true,
  storybook: false,
  examples: [
    {
      label: 'Default',
      Example: () => <IconHelp />,
    },
  ],
};

export default docs;
