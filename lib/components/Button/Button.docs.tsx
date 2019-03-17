import React from 'react';
import { ComponentDocs } from '../../../docs/src/types';
import { Button } from './Button';

const docs: ComponentDocs = {
  examples: [
    {
      label: 'Default Button',
      render: () => (
        <div style={{ maxWidth: '300px' }}>
          <Button>Submit</Button>
        </div>
      ),
    },
    {
      label: 'Strong Button',
      render: () => (
        <div style={{ maxWidth: '300px' }}>
          <Button weight="strong">Submit</Button>
        </div>
      ),
    },
    {
      label: 'Weak Button',
      render: () => (
        <div style={{ maxWidth: '300px' }}>
          <Button weight="weak">Submit</Button>
        </div>
      ),
    },
  ],
};

export default docs;
