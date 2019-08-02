import React from 'react';
import { ComponentDocs } from '../../../../site/src/types';
import examplesForIcon from '../../private/examplesForIcon';
import { ChevronIcon } from './ChevronIcon';

const docs: ComponentDocs = {
  migrationGuide: true,
  examples: [
    {
      label: 'Default',
      render: () => <ChevronIcon />,
    },
    {
      label: 'Left',
      render: () => <ChevronIcon direction="left" />,
    },
    {
      label: 'Right',
      render: () => <ChevronIcon direction="right" />,
    },
    {
      label: 'Up',
      render: () => <ChevronIcon direction="up" />,
    },
    {
      label: 'Down',
      render: () => <ChevronIcon direction="down" />,
    },
    ...examplesForIcon(ChevronIcon),
  ],
};

export default docs;
