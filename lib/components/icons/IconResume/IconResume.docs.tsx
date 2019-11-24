import React from 'react';
import { ComponentDocs } from '../../../../site/src/types';
import { IconResume } from './IconResume';

const docs: ComponentDocs = {
  category: 'Icon',
  migrationGuide: true,
  foundation: true,
  storybook: false,
  examples: [
    {
      label: 'Default',
      Example: () => <IconResume />,
    },
  ],
};

export default docs;
