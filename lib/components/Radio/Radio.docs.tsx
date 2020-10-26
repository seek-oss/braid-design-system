import React, { useState } from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { Badge, Radio, Text } from '../';
import { TextLink } from '../TextLink/TextLink';

const docs: ComponentDocs = {
  category: 'Content',
  migrationGuide: false,
  deprecationWarning: (
    <Text weight="medium">
      This component has been deprecated. Use{' '}
      <TextLink href="/components/RadioGroup">RadioGroup</TextLink> instead.
    </Text>
  ),
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
      label: 'Radio Button with a Badge',
      Example: ({ id, handler }) => (
        <Radio
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
      label: 'Radio Button with a Badge and description',
      docsSite: false,
      Example: ({ id, handler }) => (
        <Radio
          id={id}
          checked={false}
          onChange={handler}
          label="Label"
          badge={
            <Badge tone="positive" weight="strong">
              New
            </Badge>
          }
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
};

export default docs;
