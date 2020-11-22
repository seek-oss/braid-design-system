import React from 'react';
import { ComponentDocs } from '../../../../site/src/types';
import { IconDownload } from './IconDownload';

const docs: ComponentDocs = {
  category: 'Icon',
  migrationGuide: true,
  foundation: true,
  examples: [
    {
      label: 'Default',
      Example: () => <IconDownload />,
    },
  ],
};

export default docs;
