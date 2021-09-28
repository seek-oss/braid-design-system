import React from 'react';
import { ComponentScreenshot } from '../../../site/src/types';
import { Text, TextLinkButton } from '..';

export const screenshots: ComponentScreenshot = {
  screenshotWidths: [320],
  examples: [
    {
      label: 'TextLinkButton inside Text',
      Example: ({ handler }) => (
        <Text>
          The link in this sentence{' '}
          <TextLinkButton onClick={handler}>
            is actually a span with an ARIA role of button.
          </TextLinkButton>
        </Text>
      ),
    },
    {
      label: 'Weak TextLinkButton inside Text',
      Example: ({ handler }) => (
        <Text>
          The link in this sentence{' '}
          <TextLinkButton weight="weak" onClick={handler}>
            is actually a span with an ARIA role of button.
          </TextLinkButton>
        </Text>
      ),
    },
  ],
};
