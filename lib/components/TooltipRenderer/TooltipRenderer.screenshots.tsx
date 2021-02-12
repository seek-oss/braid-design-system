import React from 'react';
import { ComponentScreenshot } from '../../../site/src/types';
import { Stack, Text } from '../';
import { TooltipContent } from './TooltipRenderer';

export const screenshots: ComponentScreenshot = {
  screenshotWidths: [320],
  examples: [
    {
      label: 'Single line of text',
      Example: () => (
        <TooltipContent opacity={100}>
          <Text>Tooltip</Text>
        </TooltipContent>
      ),
    },
    {
      label: 'Multiple lines of text',
      Example: () => (
        <TooltipContent opacity={100}>
          <Text>
            The quick brown fox jumps over the lazy dog. The quick brown fox
            jumps over the lazy dog. The quick brown fox jumps over the lazy
            dog.
          </Text>
        </TooltipContent>
      ),
    },
    {
      label: 'Text style overrides',
      Example: () => (
        <TooltipContent opacity={100}>
          <Stack space="medium">
            <Text weight="strong">Strong text</Text>
            <Text>
              The quick brown fox jumps over the lazy dog. The quick brown fox
              jumps over the lazy dog. The quick brown fox jumps over the lazy
              dog.
            </Text>
          </Stack>
        </TooltipContent>
      ),
    },
  ],
};
