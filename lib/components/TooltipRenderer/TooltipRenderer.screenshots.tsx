import React from 'react';
import { ComponentScreenshot } from '../../../site/src/types';
import { Stack, Text } from '../';
import { MockTooltip } from './MockTooltip';

export const screenshots: ComponentScreenshot = {
  screenshotWidths: [320],
  examples: [
    {
      label: 'Top placement',
      Example: () => (
        <MockTooltip placement="top">
          <Text>Tooltip</Text>
        </MockTooltip>
      ),
    },
    {
      label: 'Bottom placement',
      Example: () => (
        <MockTooltip placement="bottom">
          <Text>Tooltip</Text>
        </MockTooltip>
      ),
    },
    {
      label: 'Multiple lines of text',
      Example: () => (
        <MockTooltip placement="bottom">
          <Text>
            The quick brown fox jumps over the lazy dog. The quick brown fox
            jumps over the lazy dog. The quick brown fox jumps over the lazy
            dog.
          </Text>
        </MockTooltip>
      ),
    },
    {
      label: 'Text style overrides',
      Example: () => (
        <MockTooltip placement="bottom">
          <Stack space="medium">
            <Text weight="strong">Strong text</Text>
            <Text>
              The quick brown fox jumps over the lazy dog. The quick brown fox
              jumps over the lazy dog. The quick brown fox jumps over the lazy
              dog.
            </Text>
          </Stack>
        </MockTooltip>
      ),
    },
  ],
};
