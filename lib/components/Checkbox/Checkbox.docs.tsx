import React from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { Checkbox } from './Checkbox';
import { Text } from '../Text/Text';

const docs: ComponentDocs = {
  category: 'Interaction',
  migrationGuide: true,
  examples: [
    {
      label: 'Standard Checkbox',
      Example: ({ id, handler }) => (
        <Checkbox id={id} checked={false} onChange={handler} label="Label" />
      ),
    },
    {
      label: 'Checkbox without Message Placeholder',
      Example: ({ id, handler }) => (
        <Checkbox id={id} checked={false} onChange={handler} label="Label" />
      ),
    },
    {
      label: 'Checked Checkbox',
      Example: ({ id, handler }) => (
        <Checkbox id={id} checked={true} onChange={handler} label="Label" />
      ),
    },
    {
      label: 'Disabled Checkbox',
      Example: ({ id, handler }) => (
        <Checkbox
          id={id}
          disabled={true}
          checked={false}
          onChange={handler}
          label="Label"
        />
      ),
    },
    {
      label: 'Critical Checkbox',
      Example: ({ id, handler }) => (
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
      label: 'Nested Checkbox',
      Example: ({ id, handler }) => (
        <Checkbox id={id} checked={true} onChange={handler} label="Label">
          <Text>This text is visible when the checkbox is checked.</Text>
        </Checkbox>
      ),
    },
  ],
};

export default docs;
