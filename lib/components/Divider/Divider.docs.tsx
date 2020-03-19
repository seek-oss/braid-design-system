import * as React from 'react';
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
  ],
  snippets: [{ name: 'Standard', code: <Divider /> }],
};

export default docs;
