import React from 'react';
import { ComponentDocs } from '../../../../site/src/types';
import { IconMoney } from './IconMoney';

const docs: ComponentDocs = {
  migrationGuide: true,
  foundation: true,
  storybook: false,
  examples: [
    {
      label: 'Default',
      Example: () => <IconMoney />,
    },
  ],
};

export default docs;
