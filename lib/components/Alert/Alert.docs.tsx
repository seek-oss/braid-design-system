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
      label: 'Promote Alert',
      Example: () => (
        <Alert tone="promote">This is a promoted piece of information.</Alert>
      ),
    },
    {
      label: 'Caution Alert',
      Example: () => (
        <Alert tone="caution">This is a cautionary piece of information.</Alert>
      ),
    },
    {
      label: 'Critical Alert',
      Example: () => (
        <Alert tone="critical">This is a critical piece of information.</Alert>
      ),
    },
    {
      label: 'Positive Alert',
      Example: () => (
        <Alert tone="positive">This is a positive piece of information.</Alert>
      ),
    },
  ],
  snippets: [
    {
      name: 'Critical',
      code: <Alert tone="critical">Critical Alert</Alert>,
    },
    {
      name: 'Caution',
      code: <Alert tone="caution">Caution Alert</Alert>,
    },
    {
      name: 'Positive',
      code: <Alert tone="positive">Positive Alert</Alert>,
    },
    {
      name: 'Info',
      code: <Alert tone="info">Info Alert</Alert>,
    },
    {
      name: 'Promote',
      code: <Alert tone="promote">Promote Alert</Alert>,
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
