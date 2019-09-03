import React from 'react';
import { ComponentDocs } from '../../../../site/src/types';
import examplesForIcon from '../../private/examplesForIcon';
import { BookmarkIcon } from './BookmarkIcon';

const docs: ComponentDocs = {
  migrationGuide: true,
  examples: [
    {
      label: 'Default',
      Example: () => <BookmarkIcon />,
    },
    {
      label: 'Active',
      Example: () => <BookmarkIcon active={true} />,
    },
    ...examplesForIcon(BookmarkIcon),
  ],
};

export default docs;
