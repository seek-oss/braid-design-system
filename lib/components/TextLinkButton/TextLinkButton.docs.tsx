import React from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { Stack, Text, TextLink, TextLinkButton, Actions, Button } from '..';

const docs: ComponentDocs = {
  category: 'Content',
  screenshotWidths: [320],
  gallery: false,
  description: (
    <Stack space="large">
      <Text>
        Follows the{' '}
        <TextLink href="https://www.w3.org/TR/wai-aria-practices/#button">
          WAI-ARIA Button Pattern.
        </TextLink>
      </Text>
      <Text>
        Renders a semantic button that looks like a{' '}
        <TextLink href="/components/TextLink">TextLink</TextLink>.
      </Text>
      <Text>
        This component renders a native `span` element with an ARIA role of
        “button” so that, unlike a standard button element, text can wrap across
        multiple lines.
      </Text>
      <Text>
        Please note that this component must be nested within a{' '}
        <TextLink href="/components/Text">Text</TextLink>,{' '}
        <TextLink href="/components/Heading">Heading</TextLink> or{' '}
        <TextLink href="/components/Actions">Actions</TextLink> component.
      </Text>
      <Text tone="secondary">
        If you want a link that looks like a{' '}
        <TextLink href="/components/Button">Button</TextLink>, check out{' '}
        <TextLink href="/components/ButtonLink">ButtonLink.</TextLink>
      </Text>
    </Stack>
  ),
  examples: [
    {
      label: 'TextLinkButton inside Text',
      showCodeByDefault: true,
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
      showCodeByDefault: true,
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
      label: 'TextLinkButton inside Actions',
      Example: ({ handler }) => (
        <Actions>
          <Button>Button</Button>
          <TextLinkButton onClick={handler}>TextLinkButton</TextLinkButton>
        </Actions>
      ),
    },
  ],
};

export default docs;
