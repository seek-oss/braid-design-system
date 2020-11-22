import React from 'react';
import { ComponentDocs } from '../../../../site/src/types';
import { IconMail } from './IconMail';

const docs: ComponentDocs = {
  category: 'Icon',
  migrationGuide: true,
  foundation: true,
  examples: [
    {
      label: 'Default',
      Example: () => <IconMail />,
    },
  ],
};

export default docs;
