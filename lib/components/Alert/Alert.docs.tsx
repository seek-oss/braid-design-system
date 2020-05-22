import React from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { Alert, Text } from '../';

const docs: ComponentDocs = {
  category: 'Content',
  migrationGuide: true,
  screenshotWidths: [320],
  examples: [
    {
      label: 'Info Alert',
      Example: () => (
        <Alert tone="info">
          <Text>This is an important piece of information.</Text>
        </Alert>
      ),
    },
    {
      label: 'Dismissible alert',
      Example: () => (
        <Alert onClose={() => {}} closeLabel="Close info alert">
          <Text>This is an important piece of information.</Text>
        </Alert>
      ),
    },
    {
      label: 'Promote Alert',
      Example: () => (
        <Alert tone="promote">
          <Text>This is a promoted piece of information.</Text>
        </Alert>
      ),
    },
    {
      label: 'Caution Alert',
      Example: () => (
        <Alert tone="caution">
          <Text>This is a cautionary piece of information.</Text>
        </Alert>
      ),
    },
    {
      label: 'Critical Alert',
      Example: () => (
        <Alert tone="critical">
          <Text>This is a critical piece of information.</Text>
        </Alert>
      ),
    },
    {
      label: 'Positive Alert',
      Example: () => (
        <Alert tone="positive">
          <Text>This is a positive piece of information.</Text>
        </Alert>
      ),
    },
  ],
  snippets: [
    {
      name: 'Critical',
      code: (
        <Alert tone="critical">
          <Text>Critical Alert</Text>
        </Alert>
      ),
    },
    {
      name: 'Caution',
      code: (
        <Alert tone="caution">
          <Text>Caution Alert</Text>
        </Alert>
      ),
    },
    {
      name: 'Positive',
      code: (
        <Alert tone="positive">
          <Text>Positive Alert</Text>
        </Alert>
      ),
    },
    {
      name: 'Info',
      code: (
        <Alert tone="info">
          <Text>Info Alert</Text>
        </Alert>
      ),
    },
    {
      name: 'Promote',
      code: (
        <Alert tone="promote">
          <Text>Promote Alert</Text>
        </Alert>
      ),
    },
    {
      name: 'Dismissible alert',
      code: (
        <Alert onClose={() => {}} closeLabel="Close">
          <Text>Dismissible Alert</Text>
        </Alert>
      ),
    },
  ],
};

export default docs;
