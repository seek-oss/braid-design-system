import React from 'react';
import { ComponentDocs } from '../../../../site/src/types';
import { IconPeople } from './IconPeople';

const docs: ComponentDocs = {
  category: 'Icon',
  migrationGuide: true,
  foundation: true,
  storybook: false,
  examples: [
    {
      label: 'Default',
      Example: () => <IconPeople />,
    },
  ],
};

export default docs;
