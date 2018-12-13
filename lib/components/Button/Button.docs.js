import React from 'react';
import Button from './Button';

export default {
  component: Button,
  examples: [
    {
      label: 'Disabled Button',
      render: () => (
        <Button color="inputDisabled" disabled>
          Button
        </Button>
      )
    },
    {
      label: 'level2 Heading',
      render: () => (
        <Button color="primary" disabled>
          Button
        </Button>
      )
    },
    {
      label: 'level3 Heading',
      render: () => <Button color="tertiary">Button</Button>
    }
  ]
};
