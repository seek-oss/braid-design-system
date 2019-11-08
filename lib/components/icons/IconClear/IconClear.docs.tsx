import React from 'react';
import { ComponentDocs } from '../../../../site/src/types';
import { IconClear } from './IconClear';

const docs: ComponentDocs = {
  migrationGuide: true,
  foundation: true,
  storybook: false,
  examples: [
    {
      label: 'Default',
      Example: () => <IconClear />,
    },
  ],
};

export default docs;
