import React from 'react';
import { ComponentDocs } from '../../../../site/src/types';
import { IconSettings } from './IconSettings';

const docs: ComponentDocs = {
  migrationGuide: true,
  foundation: true,
  storybook: false,
  examples: [
    {
      label: 'Default',
      Example: () => <IconSettings />,
    },
  ],
};

export default docs;
