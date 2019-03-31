import React from 'react';
import { ComponentDocs } from '../../../docs/src/types';
import { Button } from './Button';

const docs: ComponentDocs = {
  examples: [
    {
      label: 'Default Button',
      render: ({ handler }) => (
        <div style={{ maxWidth: '300px' }}>
          <Button onClick={handler}>Submit</Button>
        </div>
      ),
    },
    {
      label: 'Strong Button',
      render: ({ handler }) => (
        <div style={{ maxWidth: '300px' }}>
          <Button onClick={handler} weight="strong">
            Submit
          </Button>
        </div>
      ),
    },
    {
      label: 'Weak Button',
      render: ({ handler }) => (
        <div style={{ maxWidth: '300px' }}>
          <Button onClick={handler} weight="weak">
            Submit
          </Button>
        </div>
      ),
    },
  ],
};

export default docs;
