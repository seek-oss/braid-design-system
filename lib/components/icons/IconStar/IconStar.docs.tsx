import React from 'react';
import { ComponentDocs } from '../../../../site/src/types';
import { IconStar } from './IconStar';

const docs: ComponentDocs = {
  category: 'Icon',
  migrationGuide: true,
  foundation: true,
  screenshotWidths: [],
  examples: [
    {
      label: 'Default',
      Example: () => <IconStar />,
    },
    {
      label: 'Active',
      Example: () => <IconStar active={true} />,
    },
  ],
};

export default docs;
