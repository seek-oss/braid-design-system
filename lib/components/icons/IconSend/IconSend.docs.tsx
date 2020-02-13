import React from 'react';
import { ComponentDocs } from '../../../../site/src/types';
import { IconSend } from './IconSend';

const docs: ComponentDocs = {
  category: 'Icon',
  migrationGuide: true,
  foundation: true,
  screenshotWidths: [],
  examples: [
    {
      label: 'Default',
      Example: () => <IconSend />,
    },
  ],
};

export default docs;
