import React from 'react';
import { ComponentScreenshot } from '../../../site/src/types';
import { Text, TextLinkButton, Actions, Button } from '..';

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
    {
      label: 'TextLinkButton inside Actions (Deprecated)',
      Example: ({ handler }) => (
        <Actions>
          <Button>Button</Button>
          <TextLinkButton onClick={handler}>TextLinkButton</TextLinkButton>
        </Actions>
      ),
    },
  ],
};
