import React from 'react';
import { ComponentDocs } from '../../../../site/src/types';
import { IconSocialFacebook } from './IconSocialFacebook';

const docs: ComponentDocs = {
  migrationGuide: true,
  foundation: true,
  storybook: false,
  examples: [
    {
      label: 'Default',
      Example: () => <IconSocialFacebook />,
    },
  ],
};

export default docs;
