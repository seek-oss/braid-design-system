import React from 'react';
import Radio from './Radio';
import { ComponentDocs } from '../../../docs/src/types';

const handleChange = () => undefined;

const docs: ComponentDocs = {
  examples: [
    {
      label: 'Standard Radio Button',
      render: ({ id }) => (
        <Radio id={id} checked={false} onChange={handleChange} label="Label" />
      )
    },
    {
      label: 'Radio Button without Message Placeholder',
      render: ({ id }) => (
        <Radio
          id={id}
          checked={false}
          onChange={handleChange}
          label="Label"
          message={false}
        />
      )
    },
    {
      label: 'Checked Radio Button',
      render: ({ id }) => (
        <Radio
          id={id}
          checked={true}
          onChange={handleChange}
          label="Label"
          message={false}
        />
      )
    },
    {
      label: 'Disabled Radio Button',
      render: ({ id }) => (
        <Radio
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
      label: 'Critical Radio Button',
      render: ({ id }) => (
        <Radio
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
      label: 'Positive Radio Button',
      render: ({ id }) => (
        <Radio
          id={id}
          checked={false}
          onChange={handleChange}
          label="Label"
          message="This is a positive message"
          tone="positive"
        />
      )
    }
  ]
};

export default docs;
