import React, { useState, type ComponentProps } from 'react';
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
            id={`${id}_1`}
            disabled={true}
            checked={false}
            onChange={handler}
            aria-label="Unchecked"
          />
          <CheckboxStandalone
            id={`${id}_2`}
            disabled={true}
            checked={true}
            onChange={handler}
            aria-label="Checked"
          />
          <CheckboxStandalone
            id={`${id}_3`}
            disabled={true}
            checked="mixed"
            onChange={handler}
            aria-label="Mixed"
          />
          <CheckboxStandalone
            id={`${id}_4`}
            disabled={true}
            checked={false}
            onChange={handler}
            aria-label="Unchecked & critical"
            tone="critical"
          />
          <CheckboxStandalone
            id={`${id}_5`}
            disabled={true}
            checked={true}
            onChange={handler}
            aria-label="Checked & critical"
            tone="critical"
          />
          <CheckboxStandalone
            id={`${id}_6`}
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
      label: 'Virtual touch target',
      Example: ({ id }) => {
        const [state, setState] = useState(false);
        return (
          <Inline space="large" data={{ [debugTouchableAttrForDataProp]: '' }}>
            <CheckboxStandalone
              id={`${id}-1`}
              checked={state}
              onChange={() => setState(!state)}
              aria-label="Label"
              size="small"
            />

            <CheckboxStandalone
              id={`${id}-2`}
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
    {
      label: 'Contrast',
      Example: ({ id, handler }) => (
        <Box maxWidth="xsmall">
          <BackgroundContrastTest>
            <Tiles space="small" columns={2}>
              <CheckboxStandalone
                id={id}
                checked={false}
                onChange={handler}
                aria-label="Label"
              />
              <CheckboxStandalone
                id={id}
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
