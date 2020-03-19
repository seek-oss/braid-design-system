import * as React from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { Notice } from '../';

const docs: ComponentDocs = {
  category: 'Content',
  migrationGuide: true,
  screenshotWidths: [320],
  examples: [
    {
      label: 'Info Notice',
      Example: () => (
        <Notice tone="info">This is an important piece of information.</Notice>
      ),
    },
    {
      label: 'Promote Notice',
      Example: () => (
        <Notice tone="promote">This is a promoted piece of information.</Notice>
      ),
    },
    {
      label: 'Critical Notice',
      Example: () => (
        <Notice tone="critical">
          This is a critical piece of information.
        </Notice>
      ),
    },
    {
      label: 'Positive Notice',
      Example: () => (
        <Notice tone="positive">
          This is a positive piece of information.
        </Notice>
      ),
    },
  ],
  snippets: [
    {
      name: 'Critical',
      code: <Notice tone="critical">Critical Notice</Notice>,
    },
    {
      name: 'Positive',
      code: <Notice tone="positive">Positive Notice</Notice>,
    },
    {
      name: 'Info',
      code: <Notice tone="info">Info Notice</Notice>,
    },
    {
      name: 'Promote',
      code: <Notice tone="promote">Promote Notice</Notice>,
    },
  ],
};

export default docs;
