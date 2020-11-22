import React, { useState } from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { Badge, Checkbox, Text } from '../';

const docs: ComponentDocs = {
  category: 'Content',
  migrationGuide: true,
  examples: [
    {
      label: 'Standard Checkbox',
      Example: ({ id }) => {
        const [state, setState] = useState(false);
        return (
          <Checkbox
            id={id}
            checked={state}
            onChange={() => setState(!state)}
            label="Label"
          />
        );
      },
    },
    {
      label: 'Checked Checkbox',
      Example: ({ id, handler }) => (
        <Checkbox id={id} checked={true} onChange={handler} label="Label" />
      ),
    },
    {
      label: 'Mixed state Checkbox',
      Example: ({ id, handler }) => (
        <Checkbox id={id} checked="mixed" onChange={handler} label="Label" />
      ),
    },
    {
      label: 'Disabled Checkbox',
      background: 'card',
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
      label: 'Checkbox with description',
      Example: ({ id, handler }) => (
        <Checkbox
          id={id}
          checked={false}
          onChange={handler}
          label="Label"
          description="Extra information about the field"
        />
      ),
    },
    {
      label: 'Checkbox with a Badge',
      Example: ({ id, handler }) => (
        <Checkbox
          id={id}
          checked={false}
          onChange={handler}
          label="Label"
          badge={
            <Badge tone="positive" weight="strong">
              New
            </Badge>
          }
        />
      ),
    },
    {
      label: 'Checkbox with nested content visible only when checked',
      Example: ({ id }) => {
        const [state, setState] = useState(true);
        return (
          <Checkbox
            id={id}
            checked={state}
            onChange={() => setState(!state)}
            label="Label"
          >
            <Text>This text is visible when the checkbox is checked.</Text>
          </Checkbox>
        );
      },
    },
  ],
};

export default docs;
