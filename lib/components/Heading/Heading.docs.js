import React from 'react';
import Heading from './Heading';

export default {
  component: Heading,
  examples: [
    {
      label: 'level1 Heading',
      render: () => <Heading>Standard Heading.</Heading>
    },
    {
      label: 'level2 Heading',
      render: () => <Heading size="level2">Large Heading.</Heading>
    },
    {
      label: 'level3 Heading',
      render: () => <Heading size="level3">Large Heading.</Heading>
    }
  ]
};
