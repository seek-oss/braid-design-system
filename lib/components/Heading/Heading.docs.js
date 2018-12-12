import React from 'react';
import Heading from './Heading';

export default {
  component: Text,
  examples: [
    { label: 'Standard Text', render: () => <Heading>Standard text.</Heading> },
    {
      label: 'Level 1',
      render: () => <Heading size="level1">Large text.</Heading>
    },
    {
      label: 'Level 2',
      render: () => <Heading size="level2">Large text.</Heading>
    },
    {
      label: 'Level 3',
      render: () => <Heading size="level3">Large text.</Heading>
    }
  ]
};
