import React from 'react';
import { ComponentDocs } from '../../../docs/src/types';
import { Checkbox } from './Checkbox';
import { Text } from '../Text/Text';

const docs: ComponentDocs = {
  examples: [
    {
      label: 'Standard Checkbox',
      render: ({ id, handler }) => (
        <Checkbox
          id={id}
          value=""
          checked={false}
          onChange={handler}
          label="Label"
        />
      ),
    },
    {
      label: 'Checkbox without Message Placeholder',
      render: ({ id, handler }) => (
        <Checkbox
          id={id}
          value=""
          checked={false}
          onChange={handler}
          label="Label"
          reserveMessageSpace={false}
        />
      ),
    },
    {
      label: 'Checked Checkbox',
      render: ({ id, handler }) => (
        <Checkbox
          id={id}
          value=""
          checked={true}
          onChange={handler}
          label="Label"
          reserveMessageSpace={false}
        />
      ),
    },
    {
      label: 'Disabled Checkbox',
      render: ({ id, handler }) => (
        <Checkbox
          id={id}
          value=""
          disabled={true}
          checked={false}
          onChange={handler}
          label="Label"
          reserveMessageSpace={false}
        />
      ),
    },
    {
      label: 'Critical Checkbox',
      render: ({ id, handler }) => (
        <Checkbox
          id={id}
          value=""
          checked={false}
          onChange={handler}
          label="Label"
          message="This is a critical message"
          tone="critical"
        />
      ),
    },
    {
      label: 'Nested Checkbox',
      render: ({ id, handler }) => (
        <Checkbox
          id={id}
          value=""
          checked={true}
          onChange={handler}
          label="Label"
          reserveMessageSpace={false}
        >
          <Text>This text is visible when the checkbox is checked.</Text>
        </Checkbox>
      ),
    },
  ],
};

export default docs;
