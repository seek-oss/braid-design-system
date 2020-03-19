import * as React from 'react';
import { ComponentDocs } from '../../../../site/src/types';
import { IconSocialGitHub } from './IconSocialGitHub';

const docs: ComponentDocs = {
  category: 'Icon',
  migrationGuide: true,
  foundation: true,
  screenshotWidths: [],
  examples: [
    {
      label: 'Default',
      Example: () => <IconSocialGitHub />,
    },
  ],
};

export default docs;
