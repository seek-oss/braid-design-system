import React from 'react';
import type { ComponentScreenshot } from 'site/types';
import { Divider } from '../';

export const screenshots: ComponentScreenshot = {
  screenshotWidths: [320],
  examples: [
    {
      label: 'Divider',
      Example: () => <Divider />,
    },
    {
      label: 'Strong Divider',
      Example: () => <Divider weight="strong" />,
    },
  ],
};
