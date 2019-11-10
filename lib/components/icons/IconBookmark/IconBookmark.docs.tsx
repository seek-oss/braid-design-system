import React from 'react';
import { ComponentDocs } from '../../../../site/src/types';
import { IconBookmark } from './IconBookmark';

const docs: ComponentDocs = {
  migrationGuide: true,
  foundation: true,
  storybook: false,
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
