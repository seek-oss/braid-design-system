import React from 'react';
import Alert from './Alert';
import { ComponentDocs } from '../../../docs/src/types';

const docs: ComponentDocs = {
  examples: [
    {
      label: 'Info Alert',
      render: () => (
        <Alert tone="info">This is an important piece of information.</Alert>
      )
    },
    {
      label: 'Critical Alert',
      render: () => (
        <Alert tone="critical">This is a critical piece of information.</Alert>
      )
    }
  ]
};

export default docs;
