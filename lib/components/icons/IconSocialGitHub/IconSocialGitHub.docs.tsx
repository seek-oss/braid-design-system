import React from 'react';
import { ComponentDocs } from '../../../../site/src/types';
import { IconSocialGitHub } from './IconSocialGitHub';

const docs: ComponentDocs = {
  migrationGuide: true,
  foundation: true,
  storybook: false,
  examples: [
    {
      label: 'Default',
      Example: () => <IconSocialGitHub />,
    },
  ],
};

export default docs;
