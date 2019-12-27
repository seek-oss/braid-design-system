import React from 'react';
import { ComponentDocs } from '../../../../site/src/types';
import { IconWorkExperience } from './IconWorkExperience';

const docs: ComponentDocs = {
  category: 'Icon',
  migrationGuide: true,
  foundation: true,
  storybook: false,
  examples: [
    {
      label: 'Default',
      Example: () => <IconWorkExperience />,
    },
  ],
};

export default docs;
