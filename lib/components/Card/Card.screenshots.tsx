import React from 'react';
import { ComponentScreenshot } from '../../../site/src/types';
import { Card, Text } from '../';

export const screenshots: ComponentScreenshot = {
  screenshotWidths: [320],
  examples: [
    {
      label: 'Default',
      Example: () => (
        <Card>
          <Text>This text is inside a card.</Text>
        </Card>
      ),
    },
  ],
};
