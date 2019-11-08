import React from 'react';
import { ComponentDocs } from '../../../../site/src/types';
import { IconTag } from './IconTag';

const docs: ComponentDocs = {
  migrationGuide: true,
  foundation: true,
  storybook: false,
  examples: [
    {
      label: 'Default',
      Example: () => <IconTag />,
    },
  ],
};

export default docs;
