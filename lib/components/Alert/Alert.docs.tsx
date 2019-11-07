import React from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { Alert } from './Alert';

const docs: ComponentDocs = {
  migrationGuide: true,
  examples: [
    {
      label: 'Info Alert',
      Example: () => (
        <Alert tone="info">This is an important piece of information.</Alert>
      ),
    },
    {
      label: 'Strong Info Alert',
      Example: () => (
        <Alert weight="strong" tone="info">
          This is an important piece of information.
        </Alert>
      ),
    },
    {
      label: 'Promote Alert',
      Example: () => (
        <Alert tone="promote">This is a promoted piece of information.</Alert>
      ),
    },
    {
      label: 'Strong Promote Alert',
      Example: () => (
        <Alert weight="strong" tone="promote">
          This is a promoted piece of information.
        </Alert>
      ),
    },
    {
      label: 'Critical Alert',
      Example: () => (
        <Alert tone="critical">This is a critical piece of information.</Alert>
      ),
    },
    {
      label: 'Strong Critical Alert',
      Example: () => (
        <Alert weight="strong" tone="critical">
          This is a critical piece of information.
        </Alert>
      ),
    },
    {
      label: 'Positive Alert',
      Example: () => (
        <Alert tone="positive">This is a positive piece of information.</Alert>
      ),
    },
    {
      label: 'Strong Positive Alert',
      Example: () => (
        <Alert weight="strong" tone="positive">
          This is a positive piece of information.
        </Alert>
      ),
    },
  ],
};

export default docs;
