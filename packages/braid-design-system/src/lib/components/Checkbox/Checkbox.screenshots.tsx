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
      Example: () => {
        const [state, setState] = useState(false);
        return (
          <Checkbox
            checked={state}
            onChange={() => setState(!state)}
            label="Label"
          />
        );
      },
    },
    {
      label: 'Small',
      Example: () => {
        const [state, setState] = useState(false);
        return (
          <Checkbox
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
      Example: ({ handler }) => (
        <Checkbox checked={true} onChange={handler} label="Label" />
      ),
    },
    {
      label: 'Mixed state',
      Example: ({ handler }) => (
        <Checkbox checked="mixed" onChange={handler} label="Label" />
      ),
    },
    {
      label: 'Disabled',
      Example: ({ handler }) => (
        <Stack space="gutter">
          <Checkbox
            disabled={true}
            checked={false}
            onChange={handler}
            label="Unchecked"
          />
          <Checkbox
            disabled={true}
            checked={true}
            onChange={handler}
            label="Checked"
          />
          <Checkbox
            disabled={true}
            checked="mixed"
            onChange={handler}
            label="Mixed"
          />
          <Checkbox
            disabled={true}
            checked={false}
            onChange={handler}
            label="Unchecked & critical"
            tone="critical"
          />
          <Checkbox
            disabled={true}
            checked={true}
            onChange={handler}
            label="Checked & critical"
            tone="critical"
          />
          <Checkbox
            disabled={true}
            checked="mixed"
            onChange={handler}
            label="Mixed & critical"
            tone="critical"
          />
          <Checkbox
            disabled={true}
            checked={false}
            onChange={handler}
            label="Unchecked, critical & message"
            tone="critical"
            message="Message"
          />
          <Checkbox
            disabled={true}
            checked={true}
            onChange={handler}
            label="Checked, critical & message"
            tone="critical"
            message="Message"
          />
          <Checkbox
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
      Example: ({ handler }) => (
        <Checkbox
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
      Example: ({ handler }) => (
        <Checkbox
          checked={false}
          onChange={handler}
          label="Label"
          description="Extra information about the field"
        />
      ),
    },
    {
      label: 'With a Badge',
      Example: ({ handler }) => (
        <Checkbox
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
      Example: ({ handler }) => (
        <Checkbox
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
      Example: () => {
        const [state, setState] = useState(true);
        return (
          <Checkbox
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
      Example: ({ handler }) => (
        <Checkbox
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
      Example: ({ handler }) => (
        <Checkbox
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
      Example: ({ handler }) => (
        <Checkbox
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
      Example: () => {
        const [state, setState] = useState(false);
        return (
          <Inline space="large" data={{ [debugTouchableAttrForDataProp]: '' }}>
            <Checkbox
              checked={state}
              onChange={() => setState(!state)}
              label="Label"
              size="small"
            />

            <Checkbox
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
      Example: ({ handler }) => (
        <Box maxWidth="xsmall">
          <BackgroundContrastTest>
            <Tiles space="small" columns={2}>
              <Checkbox checked={false} onChange={handler} label="Label" />
              <Checkbox checked={true} onChange={handler} label="Label" />
            </Tiles>
          </BackgroundContrastTest>
        </Box>
      ),
    },
    {
      label: 'Test: should be left aligned in a centered Stack',
      Example: ({ handler }) => (
        <Stack space="large" align="center">
          <Checkbox
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
