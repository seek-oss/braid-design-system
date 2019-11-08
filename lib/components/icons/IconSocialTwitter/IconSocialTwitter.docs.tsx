import React from 'react';
import { ComponentDocs } from '../../../../site/src/types';
import { IconSocialTwitter } from './IconSocialTwitter';

const docs: ComponentDocs = {
  migrationGuide: true,
  foundation: true,
  storybook: false,
  examples: [
    {
      label: 'Default',
      Example: () => <IconSocialTwitter />,
    },
  ],
};

export default docs;
