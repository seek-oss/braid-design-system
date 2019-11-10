import React from 'react';
import { ComponentDocs } from '../../../../site/src/types';
import { IconImage } from './IconImage';

const docs: ComponentDocs = {
  migrationGuide: true,
  foundation: true,
  storybook: false,
  examples: [
    {
      label: 'Default',
      Example: () => <IconImage />,
    },
  ],
};

export default docs;
