import React, { ReactNode } from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { Button } from './Button';

const Container = ({ children }: { children: ReactNode }) => (
  <div style={{ maxWidth: '300px' }}>{children}</div>
);

const docs: ComponentDocs = {
  migrationGuide: true,
  examples: [
    {
      label: 'Default Button',
      Container,
      render: () => <Button>Submit</Button>,
    },
    {
      label: 'Strong Button',
      Container,
      render: () => <Button weight="strong">Submit</Button>,
    },
    {
      label: 'Weak Button',
      Container,
      render: () => <Button weight="weak">Submit</Button>,
    },
  ],
};

export default docs;
