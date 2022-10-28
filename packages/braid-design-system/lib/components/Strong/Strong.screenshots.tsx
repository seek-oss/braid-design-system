import React from 'react';
import type { ComponentScreenshot } from 'site/types';
import { Strong, Text } from '../';

export const screenshots: ComponentScreenshot = {
  screenshotWidths: [320],
  examples: [
    {
      Example: () => (
        <Text>
          The last word of this sentence is <Strong>strong.</Strong>
        </Text>
      ),
    },
  ],
};
