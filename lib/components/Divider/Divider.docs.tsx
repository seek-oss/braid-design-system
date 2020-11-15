import React from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { Divider } from '../';

const docs: ComponentDocs = {
  category: 'Layout',
  screenshotWidths: [320],
  examples: [
    {
      label: 'Divider',
      Example: () => <Divider />,
    },
    {
      label: 'Strong Divider',
      Example: () => <Divider weight="strong" />,
    },
  ],
};

export default docs;
