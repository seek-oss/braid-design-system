import React from 'react';
import Heading from './Heading';
import { ComponentDocs } from '../../../docs/src/types';

const docs: ComponentDocs = {
  examples: [
    {
      label: 'Level 1',
      render: () => <Heading level="1">Heading Level 1</Heading>
    },
    {
      label: 'Level 1 Weak',
      render: () => (
        <Heading level="1" weight="weak">
          Heading Level 1 Weak
        </Heading>
      )
    },
    {
      label: 'Level 2',
      render: () => <Heading level="2">Heading Level 2</Heading>
    },
    {
      label: 'Level 2 Weak',
      render: () => (
        <Heading level="2" weight="weak">
          Heading Level 2 Weak
        </Heading>
      )
    },
    {
      label: 'Level 3',
      render: () => <Heading level="3">Heading Level 3</Heading>
    },
    {
      label: 'Level 3 Weak',
      render: () => (
        <Heading level="3" weight="weak">
          Heading Level 3 Weak
        </Heading>
      )
    }
  ]
};

export default docs;
