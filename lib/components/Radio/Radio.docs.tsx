import React from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { Radio } from './Radio';
import { Text } from '../Text/Text';

const docs: ComponentDocs = {
  category: 'Interaction',
  migrationGuide: true,
  examples: [
    {
      label: 'Standard Radio Button',
      Example: ({ id, handler }) => (
        <Radio id={id} checked={false} onChange={handler} label="Label" />
      ),
    },
    {
      label: 'Checked Radio Button',
      Example: ({ id, handler }) => (
        <Radio id={id} checked={true} onChange={handler} label="Label" />
      ),
    },
    {
      label: 'Disabled Radio Button',
      Example: ({ id, handler }) => (
        <Radio
          id={id}
          disabled={true}
          checked={false}
          onChange={handler}
          label="Label"
        />
      ),
    },
    {
      label: 'Critical Radio Button',
      Example: ({ id, handler }) => (
        <Radio
          id={id}
          checked={false}
          onChange={handler}
          label="Label"
          tone="critical"
        />
      ),
    },
    {
      label: 'Nested Radio Button',
      Example: ({ id, handler }) => (
        <Radio id={id} checked={true} onChange={handler} label="Label">
          <Text>This text is visible when the radio button is checked.</Text>
        </Radio>
      ),
    },
  ],
};

export default docs;
