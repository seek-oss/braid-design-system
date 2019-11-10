import React from 'react';
import { ComponentDocs } from '../../../../site/src/types';
import { IconPrint } from './IconPrint';

const docs: ComponentDocs = {
  migrationGuide: true,
  foundation: true,
  storybook: false,
  examples: [
    {
      label: 'Default',
      Example: () => <IconPrint />,
    },
  ],
};

export default docs;
