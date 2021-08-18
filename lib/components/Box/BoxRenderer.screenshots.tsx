import React from 'react';
import { ComponentScreenshot } from '../../../site/src/types';
import { BoxRenderer } from './BoxRenderer';
import { Text } from '../Text/Text';

export const screenshots: ComponentScreenshot = {
  screenshotWidths: [320],
  examples: [
    {
      label: 'Standard BoxRenderer',
      Example: () => (
        <BoxRenderer component="ul" background="brand" padding="medium">
          {(className) => (
            <ul className={className}>
              <li>
                <Text baseline={false}>
                  This text should be white, and it shouldn&apos;t have a
                  visible bullet.
                </Text>
              </li>
            </ul>
          )}
        </BoxRenderer>
      ),
    },
  ],
};
