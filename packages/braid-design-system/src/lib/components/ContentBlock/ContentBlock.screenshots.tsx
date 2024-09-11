import React from 'react';
import type { ComponentScreenshot } from 'site/types';
import { Placeholder } from '../private/Placeholder/Placeholder';
import { ContentBlock } from '../';

export const screenshots: ComponentScreenshot = {
  screenshotWidths: [320, 1200],
  examples: [
    {
      label: 'Default width',
      Example: () => (
        <ContentBlock>
          <Placeholder height={100} />
        </ContentBlock>
      ),
    },
    {
      label: 'Xsmall width',
      Example: () => (
        <ContentBlock width="xsmall">
          <Placeholder height={100} />
        </ContentBlock>
      ),
    },
    {
      label: 'Small width',
      Example: () => (
        <ContentBlock width="small">
          <Placeholder height={100} />
        </ContentBlock>
      ),
    },
    {
      label: 'Medium width',
      Example: () => (
        <ContentBlock width="medium">
          <Placeholder height={100} />
        </ContentBlock>
      ),
    },
    {
      label: 'Large width',
      Example: () => (
        <ContentBlock width="large">
          <Placeholder height={100} />
        </ContentBlock>
      ),
    },
    {
      label: 'Align left',
      Example: () => (
        <ContentBlock width="xsmall" align="left">
          <Placeholder height={100} />
        </ContentBlock>
      ),
    },
  ],
};
