import React from 'react';
import { ComponentDocs } from '../../../../site/src/types';
import { IconNote } from './IconNote';

const docs: ComponentDocs = {
  category: 'Icon',
  migrationGuide: true,
  foundation: true,
  examples: [
    {
      label: 'Default',
      Example: () => <IconNote />,
    },
  ],
};

export default docs;
