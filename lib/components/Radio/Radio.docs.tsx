import React from 'react';
import Radio from './Radio';
import Text from '../Text/Text';
import { ComponentDocs } from '../../../docs/src/types';

const docs: ComponentDocs = {
  examples: [
    {
      label: 'Standard Radio Button',
      render: ({ id, handler }) => (
        <Radio id={id} checked={false} onChange={handler} label="Label" />
      ),
    },
    {
      label: 'Radio Button without Message Placeholder',
      render: ({ id, handler }) => (
        <Radio
          id={id}
          checked={false}
          onChange={handler}
          label="Label"
          message={false}
        />
      ),
    },
    {
      label: 'Checked Radio Button',
      render: ({ id, handler }) => (
        <Radio
          id={id}
          checked={true}
          onChange={handler}
          label="Label"
          message={false}
        />
      ),
    },
    {
      label: 'Disabled Radio Button',
      render: ({ id, handler }) => (
        <Radio
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
      label: 'Critical Radio Button',
      render: ({ id, handler }) => (
        <Radio
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
      label: 'Positive Radio Button',
      render: ({ id, handler }) => (
        <Radio
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
      label: 'Nested Radio Button',
      render: ({ id, handler }) => (
        <Radio
          id={id}
          checked={true}
          onChange={handler}
          label="Label"
          message={false}
        >
          <Text>This text is visible when the radio button is checked.</Text>
        </Radio>
      ),
    },
  ],
};

export default docs;
