import React from 'react';
import { ComponentDocs } from '../../../../site/src/types';
import { IconPersonVerified } from './IconPersonVerified';

const docs: ComponentDocs = {
  category: 'Icon',
  migrationGuide: true,
  foundation: true,
  storybook: false,
  examples: [
    {
      label: 'Default',
      Example: () => <IconPersonVerified />,
    },
  ],
};

export default docs;
