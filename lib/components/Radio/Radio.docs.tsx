import React, { useState } from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { Radio, Text } from '../';
import { Radio as PlayroomRadio } from '../../playroom/components';

const docs: ComponentDocs = {
  category: 'Content',
  migrationGuide: true,
  screenshotWidths: [320],
  examples: [
    {
      label: 'Standard Radio Button',
      Example: ({ id }) => {
        const [state, setState] = useState(false);
        return (
          <Radio
            id={id}
            checked={state}
            onChange={() => setState(!state)}
            label="Label"
          />
        );
      },
    },
    {
      label: 'Checked Radio Button',
      Example: ({ id, handler }) => (
        <Radio id={id} checked={true} onChange={handler} label="Label" />
      ),
    },
    {
      label: 'Disabled Radio Button',
      background: 'card',
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
      label: 'Radio Button with description',
      Example: ({ id, handler }) => (
        <Radio
          id={id}
          checked={false}
          onChange={handler}
          label="Label"
          description="Extra information about the field"
        />
      ),
    },
    {
      label: 'Radio Button with nested content visible only when checked',
      Example: ({ id }) => {
        const [state, setState] = useState(true);

        return (
          <Radio
            id={id}
            checked={state}
            onChange={() => setState(!state)}
            label="Label"
          >
            <Text>This text is visible when the radio button is checked.</Text>
          </Radio>
        );
      },
    },
    {
      label: 'Radio Button with nested content and description',
      docsSite: false,
      Example: ({ id, handler }) => (
        <Radio
          id={id}
          checked={true}
          onChange={handler}
          label="Label"
          description="Extra information about the field"
        >
          <Text>This text is visible when the radio button is checked.</Text>
        </Radio>
      ),
    },
  ],
  snippets: [
    {
      name: 'Standard',
      code: <PlayroomRadio checked={false} label="Label" />,
    },
    {
      name: 'Checked',
      code: <PlayroomRadio checked={true} label="Label" />,
    },
    {
      name: 'With description',
      code: <PlayroomRadio label="Label" description="Description" />,
    },
  ],
};

export default docs;
