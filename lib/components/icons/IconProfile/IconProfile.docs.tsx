import React from 'react';
import { ComponentDocs } from '../../../../site/src/types';
import { IconProfile } from './IconProfile';

const docs: ComponentDocs = {
  category: 'Icon',
  migrationGuide: true,
  foundation: true,
  storybook: false,
  examples: [
    {
      label: 'Default',
      Example: () => <IconProfile />,
    },
  ],
};

export default docs;
