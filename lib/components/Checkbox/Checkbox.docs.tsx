import React from 'react';
import Checkbox from './Checkbox';
import Text from '../Text/Text';
import { ComponentDocs } from '../../../docs/src/types';

const docs: ComponentDocs = {
  examples: [
    {
      label: 'Standard Checkbox',
      render: ({ id, handler }) => (
        <Checkbox id={id} checked={false} onChange={handler} label="Label" />
      ),
    },
    {
      label: 'Checkbox without Message Placeholder',
      render: ({ id, handler }) => (
        <Checkbox
          id={id}
          checked={false}
          onChange={handler}
          label="Label"
          message={false}
        />
      ),
    },
    {
      label: 'Checked Checkbox',
      render: ({ id, handler }) => (
        <Checkbox
          id={id}
          checked={true}
          onChange={handler}
          label="Label"
          message={false}
        />
      ),
    },
    {
      label: 'Disabled Checkbox',
      render: ({ id, handler }) => (
        <Checkbox
          id={id}
          disabled={true}
          checked={false}
          onChange={handler}
          label="Label"
          message={false}
        />
      ),
    },
    {
      label: 'Critical Checkbox',
      render: ({ id, handler }) => (
        <Checkbox
          id={id}
          checked={false}
          onChange={handler}
          label="Label"
          message="This is a critical message"
          tone="critical"
        />
      ),
    },
    {
      label: 'Positive Checkbox',
      render: ({ id, handler }) => (
        <Checkbox
          id={id}
          checked={false}
          onChange={handler}
          label="Label"
          message="This is a positive message"
          tone="positive"
        />
      ),
    },
    {
      label: 'Nested Checkbox',
      render: ({ id, handler }) => (
        <Checkbox
          id={id}
          checked={true}
          onChange={handler}
          label="Label"
          message={false}
        >
          <Text>This text is visible when the checkbox is checked.</Text>
        </Checkbox>
      ),
    },
  ],
};

export default docs;
