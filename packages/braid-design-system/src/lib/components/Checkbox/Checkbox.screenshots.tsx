import { useState } from 'react';
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
            label="Unchecked"
          />
          <Checkbox
            id={`${id}_2`}
            disabled={true}
            checked={true}
            onChange={handler}
            label="Checked"
          />
          <Checkbox
            id={`${id}_3`}
            disabled={true}
            checked="mixed"
            onChange={handler}
            label="Mixed"
          />
          <Checkbox
            id={`${id}_4`}
            disabled={true}
            checked={false}
            onChange={handler}
            label="Unchecked & critical"
            tone="critical"
          />
          <Checkbox
            id={`${id}_5`}
            disabled={true}
            checked={true}
            onChange={handler}
            label="Checked & critical"
            tone="critical"
          />
          <Checkbox
            id={`${id}_6`}
            disabled={true}
            checked="mixed"
            onChange={handler}
            label="Mixed & critical"
            tone="critical"
          />
          <Checkbox
            id={`${id}_7`}
            disabled={true}
            checked={false}
            onChange={handler}
            label="Unchecked, critical & message"
            tone="critical"
            message="Message"
          />
          <Checkbox
            id={`${id}_8`}
            disabled={true}
            checked={true}
            onChange={handler}
            label="Checked, critical & message"
            tone="critical"
            message="Message"
          />
          <Checkbox
            id={`${id}_9`}
            disabled={true}
            checked="mixed"
            onChange={handler}
            label="Mixed, critical & message"
            tone="critical"
            message="Message"
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
    {
      label: 'Test: should be left aligned in a centered Stack',
      Example: ({ id, handler }) => (
        <Stack space="large" align="center">
          <Checkbox
            id={id}
            checked={false}
            onChange={handler}
            label="Dolor cillum elit aliquip velit reprehenderit."
            tone="critical"
            message="Do ut pariatur anim aliquip duis mollit esse qui irure pariatur eu elit."
            description="Nulla amet dolor sunt elit consequat proident eiusmod id. Do ut pariatur anim aliquip duis mollit esse qui irure pariatur eu elit."
          />
        </Stack>
      ),
    },
  ],
};
