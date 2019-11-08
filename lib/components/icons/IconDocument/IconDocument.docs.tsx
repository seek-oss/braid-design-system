import React from 'react';
import { ComponentDocs } from '../../../../site/src/types';
import { IconDocument } from './IconDocument';

const docs: ComponentDocs = {
  migrationGuide: true,
  foundation: true,
  storybook: false,
  examples: [
    {
      label: 'Default',
      Example: () => <IconDocument />,
    },
  ],
};

export default docs;
