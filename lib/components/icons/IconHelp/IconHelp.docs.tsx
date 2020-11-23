import React from 'react';
import { ComponentDocs } from '../../../../site/src/types';
import { IconHelp } from './IconHelp';

const docs: ComponentDocs = {
  category: 'Icon',
  migrationGuide: true,
  foundation: true,
  examples: [
    {
      label: 'Default',
      Example: () => <IconHelp />,
    },
  ],
};

export default docs;
