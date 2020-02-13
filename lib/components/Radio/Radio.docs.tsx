import React from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { Radio, Text } from '../';
import { Radio as PlayroomRadio } from '../../playroom/components';

const docs: ComponentDocs = {
  category: 'Interaction',
  migrationGuide: true,
  screenshotWidths: [320],
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
  snippets: [
    {
      name: 'Standard',
      code: <PlayroomRadio checked={false} label="Label" />,
    },
    {
      name: 'Checked',
      code: <PlayroomRadio checked={true} label="Label" />,
    },
  ],
};

export default docs;
