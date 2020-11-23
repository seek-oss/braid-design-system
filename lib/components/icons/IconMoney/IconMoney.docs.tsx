import React from 'react';
import { ComponentDocs } from '../../../../site/src/types';
import { IconMoney } from './IconMoney';

const docs: ComponentDocs = {
  category: 'Icon',
  migrationGuide: true,
  foundation: true,
  examples: [
    {
      label: 'Default',
      Example: () => <IconMoney />,
    },
  ],
};

export default docs;
