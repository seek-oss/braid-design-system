import React from 'react';
import { ComponentDocs } from '../../../../site/src/types';
import { IconPromote } from './IconPromote';

const docs: ComponentDocs = {
  migrationGuide: true,
  foundation: true,
  storybook: false,
  examples: [
    {
      label: 'Default',
      Example: () => <IconPromote />,
    },
  ],
};

export default docs;
