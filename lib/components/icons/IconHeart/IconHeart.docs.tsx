import React from 'react';
import { ComponentDocs } from '../../../../site/src/types';
import { IconHeart } from './IconHeart';

const docs: ComponentDocs = {
  migrationGuide: true,
  foundation: true,
  storybook: false,
  examples: [
    {
      label: 'Default',
      Example: () => <IconHeart />,
    },
    {
      label: 'Active',
      Example: () => <IconHeart active={true} />,
    },
  ],
};

export default docs;
