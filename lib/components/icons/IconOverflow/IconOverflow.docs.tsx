import React from 'react';
import { ComponentDocs } from '../../../../site/src/types';
import { IconOverflow } from './IconOverflow';

const docs: ComponentDocs = {
  migrationGuide: true,
  foundation: true,
  storybook: false,
  examples: [
    {
      label: 'Default',
      Example: () => <IconOverflow />,
    },
  ],
};

export default docs;
