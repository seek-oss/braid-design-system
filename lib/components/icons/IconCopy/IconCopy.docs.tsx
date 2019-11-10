import React from 'react';
import { ComponentDocs } from '../../../../site/src/types';
import { IconCopy } from './IconCopy';

const docs: ComponentDocs = {
  migrationGuide: true,
  foundation: true,
  storybook: false,
  examples: [
    {
      label: 'Default',
      Example: () => <IconCopy />,
    },
  ],
};

export default docs;
