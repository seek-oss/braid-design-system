import React from 'react';
import { ComponentDocs } from '../../../../site/src/types';
import { IconBookmark } from './IconBookmark';

const docs: ComponentDocs = {
  category: 'Icon',
  migrationGuide: true,
  foundation: true,
  screenshotWidths: [],
  examples: [
    {
      label: 'Default',
      Example: () => <IconBookmark />,
    },
    {
      label: 'Active',
      Example: () => <IconBookmark active={true} />,
    },
  ],
};

export default docs;
