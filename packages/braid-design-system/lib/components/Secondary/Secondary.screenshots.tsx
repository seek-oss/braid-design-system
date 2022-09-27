import React from 'react';
import { ComponentScreenshot } from '../../../../../site/src/types';
import { Secondary, Text, IconHome, Heading } from '../';

export const screenshots: ComponentScreenshot = {
  screenshotWidths: [320],
  examples: [
    {
      label: 'Inside Text',
      Example: () => (
        <Text>
          A <Secondary>secondary</Secondary> example.
        </Text>
      ),
    },
    {
      label: 'Inside Text with an icon',
      Example: () => (
        <Text>
          A{' '}
          <Secondary>
            secondary <IconHome />
          </Secondary>{' '}
          example.
        </Text>
      ),
    },
    {
      label: 'Inside Heading',
      Example: () => (
        <Heading level="3">
          A <Secondary>secondary</Secondary> example.
        </Heading>
      ),
    },
    {
      label: 'Inside Heading with an icon',
      Example: () => (
        <Heading level="3">
          A{' '}
          <Secondary>
            secondary <IconHome />
          </Secondary>{' '}
          example.
        </Heading>
      ),
    },
  ],
};
