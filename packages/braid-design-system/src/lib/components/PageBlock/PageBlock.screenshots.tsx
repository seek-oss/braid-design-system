import type { ComponentScreenshot } from 'site/types';

import { PageBlock } from '../';
import { Placeholder } from '../private/Placeholder/Placeholder';

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
      label: 'Small',
      Example: () => (
        <PageBlock width="small">
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
    {
      label: 'Full',
      Example: () => (
        <PageBlock width="full">
          <Placeholder height={100} />
        </PageBlock>
      ),
    },
  ],
};
