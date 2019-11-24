import React from 'react';
import { ComponentDocs } from '../../../../site/src/types';
import { IconCompose } from './IconCompose';

const docs: ComponentDocs = {
  category: 'Icon',
  migrationGuide: true,
  foundation: true,
  storybook: false,
  examples: [
    {
      label: 'Default',
      Example: () => <IconCompose />,
    },
  ],
};

export default docs;
