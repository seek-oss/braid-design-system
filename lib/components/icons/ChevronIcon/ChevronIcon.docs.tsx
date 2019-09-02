import React from 'react';
import { ComponentDocs } from '../../../../site/src/types';
import examplesForIcon from '../../private/examplesForIcon';
import { ChevronIcon } from './ChevronIcon';

const docs: ComponentDocs = {
  migrationGuide: true,
  examples: [
    {
      label: 'Default',
      Example: () => <ChevronIcon />,
    },
    {
      label: 'Left',
      Example: () => <ChevronIcon direction="left" />,
    },
    {
      label: 'Right',
      Example: () => <ChevronIcon direction="right" />,
    },
    {
      label: 'Up',
      Example: () => <ChevronIcon direction="up" />,
    },
    {
      label: 'Down',
      Example: () => <ChevronIcon direction="down" />,
    },
    ...examplesForIcon(ChevronIcon),
  ],
};

export default docs;
