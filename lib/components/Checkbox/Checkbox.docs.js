import React from 'react';
import Checkbox from './Checkbox';
import Text from '../Text/Text';

const handleChange = () => {};

export default {
  component: Checkbox,
  examples: [
    {
      label: 'Standard Checkbox',
      render: ({ id }) => (
        <Checkbox
          id={id}
          checked={false}
          onChange={handleChange}
          label="Label"
          message={false}
        />
      )
    },
    {
      label: 'Checked Checkbox',
      render: ({ id }) => (
        <Checkbox
          id={id}
          checked={true}
          onChange={handleChange}
          label="Label"
          message={false}
        />
      )
    },
    {
      label: 'Disabled Checkbox',
      render: ({ id }) => (
        <Checkbox
          id={id}
          disabled={true}
          checked={false}
          onChange={handleChange}
          label="Label"
          message={false}
        />
      )
    },
    {
      label: 'Critical Checkbox',
      render: ({ id }) => (
        <Checkbox
          id={id}
          checked={false}
          onChange={handleChange}
          label="Label"
          message="This is a critical message"
          tone="critical"
        />
      )
    },
    {
      label: 'Positive Checkbox',
      render: ({ id }) => (
        <Checkbox
          id={id}
          checked={false}
          onChange={handleChange}
          label="Label"
          message="This is a positive message"
          tone="positive"
        />
      )
    },
    {
      label: 'Nested Checkbox',
      render: ({ id }) => (
        <Checkbox
          id={id}
          checked={true}
          onChange={handleChange}
          label="Label"
          message={false}
        >
          <Text>This text is visible when the checkbox is checked.</Text>
        </Checkbox>
      )
    }
  ]
};
