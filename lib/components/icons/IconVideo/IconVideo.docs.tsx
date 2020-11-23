import React from 'react';
import { ComponentDocs } from '../../../../site/src/types';
import { IconVideo } from './IconVideo';

const docs: ComponentDocs = {
  category: 'Icon',
  migrationGuide: true,
  foundation: true,
  examples: [
    {
      label: 'Default',
      Example: () => <IconVideo />,
    },
  ],
};

export default docs;
