import React from 'react';
import { ComponentScreenshot } from '../../../../../site/src/types';
import { Text, HiddenVisually } from '../';

export const screenshots: ComponentScreenshot = {
  screenshotWidths: [320],
  screenshotOnlyInWireframe: true,
  examples: [
    {
      label: 'Inside Text',
      Example: () => (
        <Text>
          The next sentence is only available to screen readers.
          <HiddenVisually> Hello world.</HiddenVisually>
        </Text>
      ),
    },
  ],
};
