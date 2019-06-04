import React from 'react';
import { ComponentDocs } from '../../../docs/src/types';
import { Radio } from './Radio';
import { Text } from '../Text/Text';

const docs: ComponentDocs = {
  examples: [
    {
      label: 'Standard Radio Button',
      render: ({ id, handler }) => (
        <Radio
          id={id}
          value=""
          checked={false}
          onChange={handler}
          label="Label"
        />
      ),
    },
    {
      label: 'Checked Radio Button',
      render: ({ id, handler }) => (
        <Radio
          id={id}
          value=""
          checked={true}
          onChange={handler}
          label="Label"
        />
      ),
    },
    {
      label: 'Disabled Radio Button',
      render: ({ id, handler }) => (
        <Radio
          id={id}
          disabled={true}
          value=""
          checked={false}
          onChange={handler}
          label="Label"
        />
      ),
    },
    {
      label: 'Critical Radio Button',
      render: ({ id, handler }) => (
        <Radio
          id={id}
          value=""
          checked={false}
          onChange={handler}
          label="Label"
          tone="critical"
        />
      ),
    },
    {
      label: 'Nested Radio Button',
      render: ({ id, handler }) => (
        <Radio id={id} value="" checked={true} onChange={handler} label="Label">
          <Text>This text is visible when the radio button is checked.</Text>
        </Radio>
      ),
    },
  ],
};

export default docs;
