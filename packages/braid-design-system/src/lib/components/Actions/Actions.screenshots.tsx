import type { ComponentScreenshot } from 'site/types';

import { Button, Actions } from '../';

export const screenshots: ComponentScreenshot = {
  screenshotWidths: [320, 768],
  examples: [
    {
      label: 'Standard size',
      Example: () => (
        <Actions>
          <Button>Button 1</Button>
          <Button>Button 2</Button>
          <Button variant="transparent">Button 3</Button>
        </Actions>
      ),
    },
    {
      label: 'Small size',
      Example: () => (
        <Actions size="small">
          <Button>Button 1</Button>
          <Button>Button 2</Button>
          <Button variant="transparent">Button 3</Button>
        </Actions>
      ),
    },
  ],
};
