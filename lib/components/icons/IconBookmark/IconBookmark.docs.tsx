import React from 'react';
import { ComponentDocs } from '../../../../site/src/types';
import examplesForIcon from '../../private/examplesForIcon';
import { IconBookmark } from './IconBookmark';

const docs: ComponentDocs = {
  migrationGuide: true,
  examples: [
    {
      label: 'Default',
      Example: () => <IconBookmark />,
    },
    {
      label: 'Active',
      Example: () => <IconBookmark active={true} />,
    },
    ...examplesForIcon(IconBookmark),
  ],
};

export default docs;
