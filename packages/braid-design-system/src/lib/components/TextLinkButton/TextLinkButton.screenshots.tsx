import React from 'react';
import type { ComponentScreenshot } from 'site/types';
import { Text, TextLinkButton, IconLink } from '../';

export const screenshots: ComponentScreenshot = {
  screenshotWidths: [320],
  examples: [
    {
      label: 'Default',
      Example: () => (
        <Text>
          The link in this sentence{' '}
          <TextLinkButton>
            is actually a span with an ARIA role of button.
          </TextLinkButton>
        </Text>
      ),
    },
    {
      label: 'Weight weak',
      Example: () => (
        <Text>
          The link in this sentence{' '}
          <TextLinkButton weight="weak">
            is actually a span with an ARIA role of button
          </TextLinkButton>
          .
        </Text>
      ),
    },
    {
      label: 'With icon',
      Example: () => (
        <Text>
          A sentence with a{' '}
          <TextLinkButton icon={<IconLink />}>TextLinkButton</TextLinkButton>.
        </Text>
      ),
    },
    {
      label: 'With a trailing icon',
      Example: () => (
        <Text>
          A sentence with an icon trailing the{' '}
          <TextLinkButton icon={<IconLink />} iconPosition="trailing">
            TextLinkButton
          </TextLinkButton>
          .
        </Text>
      ),
    },
    {
      label: 'With icon and weight weak',
      Example: () => (
        <Text>
          A sentence with a{' '}
          <TextLinkButton weight="weak" icon={<IconLink />}>
            TextLinkButton
          </TextLinkButton>
          .
        </Text>
      ),
    },
    {
      label: 'With a trailing icon and weight weak',
      Example: () => (
        <Text>
          A sentence with an icon trailing the{' '}
          <TextLinkButton
            weight="weak"
            icon={<IconLink />}
            iconPosition="trailing"
          >
            TextLinkButton
          </TextLinkButton>
          .
        </Text>
      ),
    },
  ],
};
