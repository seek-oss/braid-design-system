import React from 'react';
import { ComponentDocs } from '../../../../site/src/types';
import { IconSocialMedium } from './IconSocialMedium';

const docs: ComponentDocs = {
  category: 'Icon',
  migrationGuide: true,
  foundation: true,
  examples: [
    {
      label: 'Default',
      Example: () => <IconSocialMedium />,
    },
  ],
};

export default docs;
