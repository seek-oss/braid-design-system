import React from 'react';
import { ComponentDocs } from '../../../../site/src/types';
import { IconTime } from './IconTime';

const docs: ComponentDocs = {
  migrationGuide: true,
  foundation: true,
  storybook: false,
  examples: [
    {
      label: 'Default',
      Example: () => <IconTime />,
    },
  ],
};

export default docs;
