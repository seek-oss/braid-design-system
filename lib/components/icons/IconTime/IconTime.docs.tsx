import React from 'react';
import { ComponentDocs } from '../../../../site/src/types';
import { IconTime } from './IconTime';

const docs: ComponentDocs = {
  category: 'Icon',
  migrationGuide: true,
  foundation: true,
  examples: [
    {
      label: 'Default',
      Example: () => <IconTime />,
    },
  ],
};

export default docs;
