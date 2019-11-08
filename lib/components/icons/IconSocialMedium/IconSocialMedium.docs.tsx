import React from 'react';
import { ComponentDocs } from '../../../../site/src/types';
import { IconSocialMedium } from './IconSocialMedium';

const docs: ComponentDocs = {
  migrationGuide: true,
  foundation: true,
  storybook: false,
  examples: [
    {
      label: 'Default',
      Example: () => <IconSocialMedium />,
    },
  ],
};

export default docs;
