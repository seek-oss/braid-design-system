import React from 'react';
import { ComponentScreenshot } from '../../../site/src/types';
import { TextLinkRenderer, Text, Box } from '../';

export const screenshots: ComponentScreenshot = {
  screenshotWidths: [320],
  examples: [
    {
      label: 'TextLink with Custom Renderer',
      Example: () => (
        <Text>
          Even though it looks like a link, the last word of this sentence is
          actually a{' '}
          <TextLinkRenderer reset={false}>
            {(textLinkProps) => (
              <Box component="button" {...textLinkProps}>
                button.
              </Box>
            )}
          </TextLinkRenderer>
        </Text>
      ),
    },
  ],
};
