import React from 'react';
import { ComponentDocs } from '../../../../site/src/types';
import { IconTick } from './IconTick';

const docs: ComponentDocs = {
  migrationGuide: true,
  foundation: true,
  storybook: false,
  examples: [
    {
      label: 'Default',
      Example: () => <IconTick />,
    },
  ],
};

export default docs;
