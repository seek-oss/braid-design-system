import React from 'react';
import { ComponentDocs } from '../../../../site/src/types';
import { IconTag } from './IconTag';

const docs: ComponentDocs = {
  category: 'Icon',
  migrationGuide: true,
  foundation: true,
  examples: [
    {
      label: 'Default',
      Example: () => <IconTag />,
    },
  ],
};

export default docs;
