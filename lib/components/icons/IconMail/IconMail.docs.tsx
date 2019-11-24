import React from 'react';
import { ComponentDocs } from '../../../../site/src/types';
import { IconMail } from './IconMail';

const docs: ComponentDocs = {
  category: 'Icon',
  migrationGuide: true,
  foundation: true,
  storybook: false,
  examples: [
    {
      label: 'Default',
      Example: () => <IconMail />,
    },
  ],
};

export default docs;
