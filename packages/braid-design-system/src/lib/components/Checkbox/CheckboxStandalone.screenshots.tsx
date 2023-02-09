import React, { useState } from 'react';
import type { ComponentProps } from 'react';
import type { ComponentScreenshot } from 'site/types';
import { Box, CheckboxStandalone, Column, Columns, Stack, Text } from '../';

type CheckboxProps = ComponentProps<typeof CheckboxStandalone>;
const checkboxSizes: CheckboxProps['size'][] = ['small', 'standard'];

export const screenshots: ComponentScreenshot = {
  screenshotWidths: [320],
  examples: [
    {
      label: 'Standard',
      Example: ({ id }) => {
        const [state, setState] = useState(false);
        return (
          <CheckboxStandalone
            id={id}
            checked={state}
            onChange={() => setState(!state)}
            aria-label="Label"
          />
        );
      },
    },
    {
      label: 'Small',
      Example: ({ id }) => {
        const [state, setState] = useState(false);
        return (
          <CheckboxStandalone
            id={id}
            checked={state}
            onChange={() => setState(!state)}
            aria-label="Label"
            size="small"
          />
        );
      },
    },
    {
      label: 'Checked',
      Example: ({ id, handler }) => (
        <CheckboxStandalone
          id={id}
          checked={true}
          onChange={handler}
          aria-label="Label"
        />
      ),
    },
    {
      label: 'Mixed state',
      Example: ({ id, handler }) => (
        <CheckboxStandalone
          id={id}
          checked="mixed"
          onChange={handler}
          aria-label="Label"
        />
      ),
    },
    {
      label: 'Disabled',
      Example: ({ id, handler }) => (
        <Stack space="gutter">
          <CheckboxStandalone
            id={`${id}_unchecked`}
            disabled={true}
            checked={false}
            onChange={handler}
            aria-label="Disabled unchecked"
          />
          <CheckboxStandalone
            id={`${id}_checked`}
            disabled={true}
            checked={true}
            onChange={handler}
            aria-label="Disabled checked"
          />
        </Stack>
      ),
    },
    {
      label: 'Critical',
      Example: ({ id, handler }) => (
        <CheckboxStandalone
          id={id}
          checked={false}
          onChange={handler}
          aria-label="Label"
          tone="critical"
        />
      ),
    },
    {
      label: 'Text alignment',
      Example: ({ id, handler }) => (
        <Stack space="medium">
          {checkboxSizes.map((size) => (
            <Box background="surface" key={size}>
              <Columns space="small">
                <Column width="content">
                  <Text size={size}>
                    <CheckboxStandalone
                      id={id}
                      onChange={handler}
                      checked={false}
                      aria-label="Label"
                      size={size}
                    />
                  </Text>
                </Column>
                <Column>
                  <Text size={size}>Text alignment</Text>
                </Column>
              </Columns>
            </Box>
          ))}
        </Stack>
      ),
    },
    {
      label: 'Text alignment with wrapping lines',
      Example: ({ id, handler }) => (
        <Box style={{ maxWidth: 200 }}>
          <Stack space="medium">
            {checkboxSizes.map((size) => (
              <Box background="surface" key={size}>
                <Columns space="small">
                  <Column width="content">
                    <Text size={size}>
                      <CheckboxStandalone
                        id={id}
                        onChange={handler}
                        checked={false}
                        aria-label="Label"
                        size={size}
                      />
                    </Text>
                  </Column>
                  <Column>
                    <Text size={size}>
                      Text with really really long wrapping lines
                    </Text>
                  </Column>
                </Columns>
              </Box>
            ))}
          </Stack>
        </Box>
      ),
    },
  ],
};
