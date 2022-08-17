import React, { useState } from 'react';
import { ComponentScreenshot } from '../../../../../site/src/types';
import { Badge, Radio, Text, Stack } from '../';

export const screenshots: ComponentScreenshot = {
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
      Example: ({ id, handler }) => (
        <Stack space="gutter">
          <Radio
            id={`${id}_1`}
            disabled={true}
            checked={false}
            onChange={handler}
            label="Disabled unchecked"
          />
          <Radio
            id={`${id}_2`}
            disabled={true}
            checked={true}
            onChange={handler}
            label="Disabled checked"
          />
        </Stack>
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
