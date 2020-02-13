import React from 'react';
import { ComponentDocs } from '../../../../site/src/types';
import { IconSocialFacebook } from './IconSocialFacebook';

const docs: ComponentDocs = {
  category: 'Icon',
  migrationGuide: true,
  foundation: true,
  screenshotWidths: [],
  examples: [
    {
      label: 'Default',
      Example: () => <IconSocialFacebook />,
    },
  ],
};

export default docs;
