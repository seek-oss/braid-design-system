import React, { useState } from 'react';
import type { ComponentScreenshot } from 'site/types';
import { Badge, Box, Checkbox, Inline, Stack, Text, Tiles } from '../';
import { BackgroundContrastTest } from '../../utils/BackgroundContrastTest';
import { debugTouchableAttrForDataProp } from '../private/touchable/debugTouchable';

export const screenshots: ComponentScreenshot = {
  screenshotWidths: [320],
  examples: [
    {
      label: 'Standard',
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
      label: 'Small',
      Example: ({ id }) => {
        const [state, setState] = useState(false);
        return (
          <Checkbox
            id={id}
            checked={state}
            onChange={() => setState(!state)}
            label="Label"
            size="small"
          />
        );
      },
    },
    {
      label: 'Checked',
      Example: ({ id, handler }) => (
        <Checkbox id={id} checked={true} onChange={handler} label="Label" />
      ),
    },
    {
      label: 'Mixed state',
      Example: ({ id, handler }) => (
        <Checkbox id={id} checked="mixed" onChange={handler} label="Label" />
      ),
    },
    {
      label: 'Disabled',
      Example: ({ id, handler }) => (
        <Stack space="gutter">
          <Checkbox
            id={`${id}_1`}
            disabled={true}
            checked={false}
            onChange={handler}
            label="Label"
          />
          <Checkbox
            id={`${id}_2`}
            disabled={true}
            checked={true}
            onChange={handler}
            label="Label"
          />
        </Stack>
      ),
    },
    {
      label: 'Critical',
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
      label: 'With a description',
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
      label: 'With a Badge',
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
      label: 'With a Badge and description',
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
          description="Extra information about the field"
        />
      ),
    },
    {
      label: 'With nested content visible only when checked',
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
    {
      label: 'With nested content and description',
      Example: ({ id, handler }) => (
        <Checkbox
          id={id}
          checked={true}
          onChange={handler}
          label="Label"
          description="Extra information about the field"
        >
          <Text>This text is visible when the button is checked.</Text>
        </Checkbox>
      ),
    },
    {
      label: 'With a message and description',
      Example: ({ id, handler }) => (
        <Checkbox
          id={id}
          checked={false}
          onChange={handler}
          label="Label"
          tone="critical"
          message="This is a critical message"
          description="Extra information about the field"
        />
      ),
    },
    {
      label: 'With nested content, a message and description',
      Example: ({ id, handler }) => (
        <Checkbox
          id={id}
          checked={true}
          onChange={handler}
          label="Label"
          tone="critical"
          message="This is a critical message"
          description="Extra information about the field"
        >
          <Text>This text is visible when the button is checked.</Text>
        </Checkbox>
      ),
    },
    {
      label: 'Virtual touch target',
      Example: ({ id }) => {
        const [state, setState] = useState(false);
        return (
          <Inline space="large" data={{ [debugTouchableAttrForDataProp]: '' }}>
            <Checkbox
              id={`${id}-1`}
              checked={state}
              onChange={() => setState(!state)}
              label="Label"
              size="small"
            />

            <Checkbox
              id={`${id}-2`}
              checked={state}
              onChange={() => setState(!state)}
              label="Label"
              size="standard"
            />
          </Inline>
        );
      },
    },
    {
      label: 'Contrast',
      Example: ({ id, handler }) => (
        <Box maxWidth="xsmall">
          <BackgroundContrastTest>
            <Tiles space="small" columns={2}>
              <Checkbox
                id={id}
                checked={false}
                onChange={handler}
                label="Label"
              />
              <Checkbox
                id={id}
                checked={true}
                onChange={handler}
                label="Label"
              />
            </Tiles>
          </BackgroundContrastTest>
        </Box>
      ),
    },
  ],
};
