import React from 'react';
import { ComponentDocs } from '../../../../site/src/types';
import { IconSocialTwitter } from './IconSocialTwitter';

const docs: ComponentDocs = {
  category: 'Icon',
  migrationGuide: true,
  foundation: true,
  screenshotWidths: [],
  examples: [
    {
      label: 'Default',
      Example: () => <IconSocialTwitter />,
    },
  ],
};

export default docs;
