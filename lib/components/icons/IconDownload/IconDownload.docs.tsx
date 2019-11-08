import React from 'react';
import { ComponentDocs } from '../../../../site/src/types';
import { IconDownload } from './IconDownload';

const docs: ComponentDocs = {
  migrationGuide: true,
  foundation: true,
  storybook: false,
  examples: [
    {
      label: 'Default',
      Example: () => <IconDownload />,
    },
  ],
};

export default docs;
