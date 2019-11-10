import React from 'react';
import { ComponentDocs } from '../../../../site/src/types';
import { IconMinus } from './IconMinus';

const docs: ComponentDocs = {
  migrationGuide: true,
  foundation: true,
  storybook: false,
  examples: [
    {
      label: 'Default',
      Example: () => <IconMinus />,
    },
  ],
};

export default docs;
