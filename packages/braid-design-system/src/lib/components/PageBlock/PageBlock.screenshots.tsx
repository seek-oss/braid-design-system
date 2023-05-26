import React from 'react';
import type { ComponentScreenshot } from 'site/types';
import { Placeholder } from '../private/Placeholder/Placeholder';
import { PageBlock } from '../';

export const screenshots: ComponentScreenshot = {
  screenshotWidths: [320, 1200],
  examples: [
    {
      label: 'Default',
      Example: () => (
        <PageBlock>
          <Placeholder height={100} />
        </PageBlock>
      ),
    },
    {
      label: 'Medium',
      Example: () => (
        <PageBlock width="medium">
          <Placeholder height={100} />
        </PageBlock>
      ),
    },
    {
      label: 'Large',
      Example: () => (
        <PageBlock width="large">
          <Placeholder height={100} />
        </PageBlock>
      ),
    },
  ],
};
