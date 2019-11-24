import React from 'react';
import { ComponentDocs } from '../../../../site/src/types';
import { IconSocialLinkedIn } from './IconSocialLinkedIn';

const docs: ComponentDocs = {
  category: 'Icon',
  migrationGuide: true,
  foundation: true,
  storybook: false,
  examples: [
    {
      label: 'Default',
      Example: () => <IconSocialLinkedIn />,
    },
  ],
};

export default docs;
