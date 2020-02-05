import React from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { Alert } from '../';

const docs: ComponentDocs = {
  category: 'Content',
  migrationGuide: true,
  screenshotWidths: [320],
  examples: [
    {
      label: 'Info Alert',
      Example: () => (
        <Alert tone="info">This is an important piece of information.</Alert>
      ),
    },
    {
      label: 'Dismissible alert',
      Example: () => (
        <Alert onClose={() => {}} closeLabel="Close info alert">
          This is an important piece of information.
        </Alert>
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
  snippets: [
    {
      name: 'Critical',
      code: <Alert tone="critical">Critical Alert</Alert>,
    },
    {
      name: 'Critical (Strong)',
      code: (
        <Alert tone="critical" weight="strong">
          Critical Alert
        </Alert>
      ),
    },
    {
      name: 'Positive',
      code: <Alert tone="positive">Positive Alert</Alert>,
    },
    {
      name: 'Positive (Strong)',
      code: (
        <Alert tone="positive" weight="strong">
          Positive Alert
        </Alert>
      ),
    },
    {
      name: 'Info',
      code: <Alert tone="info">Info Alert</Alert>,
    },
    {
      name: 'Info (Strong)',
      code: (
        <Alert tone="info" weight="strong">
          Info Alert
        </Alert>
      ),
    },
    {
      name: 'Promote',
      code: <Alert tone="promote">Promote Alert</Alert>,
    },
    {
      name: 'Promote (Strong)',
      code: (
        <Alert tone="promote" weight="strong">
          Promote Alert
        </Alert>
      ),
    },
    {
      name: 'Dismissible alert',
      code: (
        <Alert onClose={() => {}} closeLabel="Close">
          Dismissible Alert
        </Alert>
      ),
    },
  ],
};

export default docs;
