import React from 'react';
import { ComponentDocs } from '../../../../site/src/types';
import { IconChevron } from './IconChevron';

const docs: ComponentDocs = {
  category: 'Icon',
  migrationGuide: true,
  foundation: true,
  examples: [
    {
      label: 'Default',
      Example: () => <IconChevron />,
    },
    {
      label: 'Left',
      Example: () => <IconChevron direction="left" />,
    },
    {
      label: 'Right',
      Example: () => <IconChevron direction="right" />,
    },
    {
      label: 'Up',
      Example: () => <IconChevron direction="up" />,
    },
    {
      label: 'Down',
      Example: () => <IconChevron direction="down" />,
    },
  ],
};

export default docs;
