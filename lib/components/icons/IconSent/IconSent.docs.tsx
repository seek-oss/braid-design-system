import React from 'react';
import { ComponentDocs } from '../../../../site/src/types';
import { IconSent } from './IconSent';

const docs: ComponentDocs = {
  migrationGuide: true,
  foundation: true,
  storybook: false,
  examples: [
    {
      label: 'Default',
      Example: () => <IconSent />,
    },
  ],
};

export default docs;
