import { useState, type ComponentProps } from 'react';
import type { ComponentScreenshot } from 'site/types';

import {
  Box,
  CheckboxStandalone,
  Column,
  Columns,
  Inline,
  Stack,
  Text,
  Tiles,
} from '../';
import { BackgroundContrastTest } from '../../utils/BackgroundContrastTest';
import { debugTouchableAttrForDataProp } from '../private/touchable/debugTouchable';

type CheckboxProps = ComponentProps<typeof CheckboxStandalone>;
const checkboxSizes: Array<CheckboxProps['size']> = ['small', 'standard'];

export const screenshots: ComponentScreenshot = {
  screenshotWidths: [320],
  examples: [
    {
      label: 'Standard',
      Example: () => {
        const [state, setState] = useState(false);
        return (
          <CheckboxStandalone
            checked={state}
            onChange={() => setState(!state)}
            aria-label="Label"
          />
        );
      },
    },
    {
      label: 'Small',
      Example: () => {
        const [state, setState] = useState(false);
        return (
          <CheckboxStandalone
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
      Example: ({ handler }) => (
        <CheckboxStandalone
          checked={true}
          onChange={handler}
          aria-label="Label"
        />
      ),
    },
    {
      label: 'Mixed state',
      Example: ({ handler }) => (
        <CheckboxStandalone
          checked="mixed"
          onChange={handler}
          aria-label="Label"
        />
      ),
    },
    {
      label: 'Disabled',
      Example: ({ handler }) => (
        <Stack space="gutter">
          <CheckboxStandalone
            disabled={true}
            checked={false}
            onChange={handler}
            aria-label="Unchecked"
          />
          <CheckboxStandalone
            disabled={true}
            checked={true}
            onChange={handler}
            aria-label="Checked"
          />
          <CheckboxStandalone
            disabled={true}
            checked="mixed"
            onChange={handler}
            aria-label="Mixed"
          />
          <CheckboxStandalone
            disabled={true}
            checked={false}
            onChange={handler}
            aria-label="Unchecked & critical"
            tone="critical"
          />
          <CheckboxStandalone
            disabled={true}
            checked={true}
            onChange={handler}
            aria-label="Checked & critical"
            tone="critical"
          />
          <CheckboxStandalone
            disabled={true}
            checked="mixed"
            onChange={handler}
            aria-label="Mixed & critical"
            tone="critical"
          />
        </Stack>
      ),
    },
    {
      label: 'Critical',
      Example: ({ handler }) => (
        <CheckboxStandalone
          checked={false}
          onChange={handler}
          aria-label="Label"
          tone="critical"
        />
      ),
    },
    {
      label: 'Virtual touch target',
      Example: () => {
        const [state, setState] = useState(false);
        return (
          <Inline space="large" data={{ [debugTouchableAttrForDataProp]: '' }}>
            <CheckboxStandalone
              checked={state}
              onChange={() => setState(!state)}
              aria-label="Label"
              size="small"
            />

            <CheckboxStandalone
              checked={state}
              onChange={() => setState(!state)}
              aria-label="Label"
              size="standard"
            />
          </Inline>
        );
      },
    },
    {
      label: 'Text alignment',
      Example: ({ handler }) => (
        <Stack space="medium">
          {checkboxSizes.map((size) => (
            <Box background="surface" key={size}>
              <Columns space="small">
                <Column width="content">
                  <Text size={size}>
                    <CheckboxStandalone
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
      Example: ({ handler }) => (
        <Box style={{ maxWidth: 200 }}>
          <Stack space="medium">
            {checkboxSizes.map((size) => (
              <Box background="surface" key={size}>
                <Columns space="small">
                  <Column width="content">
                    <Text size={size}>
                      <CheckboxStandalone
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
    {
      label: 'Contrast',
      Example: ({ handler }) => (
        <Box maxWidth="xsmall">
          <BackgroundContrastTest>
            <Tiles space="small" columns={2}>
              <CheckboxStandalone
                checked={false}
                onChange={handler}
                aria-label="Label"
              />
              <CheckboxStandalone
                checked={true}
                onChange={handler}
                aria-label="Label"
              />
            </Tiles>
          </BackgroundContrastTest>
        </Box>
      ),
    },
  ],
};
