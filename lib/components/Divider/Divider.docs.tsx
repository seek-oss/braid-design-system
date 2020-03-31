import React from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { Divider } from '../';

const docs: ComponentDocs = {
  category: 'Layout',
  screenshotWidths: [320],
  examples: [
    {
      label: 'Standard Divider',
      Example: () => <Divider />,
    },
    {
      label: 'Strong Divider',
      Example: () => <Divider weight="strong" />,
    },
  ],
  snippets: [
    { name: 'Standard', code: <Divider /> },
    { name: 'Strong', code: <Divider weight="strong" /> },
  ],
};

export default docs;
