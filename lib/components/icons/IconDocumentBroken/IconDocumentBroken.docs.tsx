import React from 'react';
import { ComponentDocs } from '../../../../site/src/types';
import { IconDocumentBroken } from './IconDocumentBroken';

const docs: ComponentDocs = {
  category: 'Icon',
  migrationGuide: true,
  foundation: true,
  examples: [
    {
      label: 'Default',
      Example: () => <IconDocumentBroken />,
    },
  ],
};

export default docs;
