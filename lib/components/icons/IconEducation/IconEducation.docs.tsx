import React from 'react';
import { ComponentDocs } from '../../../../site/src/types';
import { IconEducation } from './IconEducation';

const docs: ComponentDocs = {
  migrationGuide: true,
  foundation: true,
  storybook: false,
  examples: [
    {
      label: 'Default',
      Example: () => <IconEducation />,
    },
  ],
};

export default docs;
