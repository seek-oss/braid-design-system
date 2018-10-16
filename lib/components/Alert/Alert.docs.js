import React from 'react';
import Alert from './Alert';

export default {
  component: Alert,
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
