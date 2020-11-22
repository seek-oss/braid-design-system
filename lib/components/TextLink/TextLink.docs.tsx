import React from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { Actions, Button, Heading, Stack, Text, TextLink } from '../';

const docs: ComponentDocs = {
  category: 'Content',
  migrationGuide: true,
  description: (
    <Stack space="large">
      <Text>
        This component renders a native `a` element by default, but this can be
        customised via the `linkComponent` prop on{' '}
        <TextLink href="/components/BraidProvider">BraidProvider</TextLink>.
      </Text>
      <Text>
        Please note that this component must be nested within a{' '}
        <TextLink href="/components/Text">Text</TextLink>,{' '}
        <TextLink href="/components/Heading">Heading</TextLink> or{' '}
        <TextLink href="/components/Actions">Actions</TextLink> component.
      </Text>
      <Text tone="secondary">
        If you want a button that looks like a link, check out{' '}
        <TextLink href="/components/TextLinkButton">TextLinkButton.</TextLink>
      </Text>
    </Stack>
  ),
  examples: [
    {
      label: 'Regular TextLink',
      Example: () => (
        <Text>
          <TextLink href="#" hitArea="large">
            TextLink
          </TextLink>
        </Text>
      ),
    },
    {
      label: 'Regular TextLink in a sentence',
      Example: () => (
        <Text>
          This sentence contains a <TextLink href="#">TextLink.</TextLink>
        </Text>
      ),
    },
    {
      label: 'Weak TextLink in a sentence',
      Example: () => (
        <Text>
          This sentence contains a{' '}
          <TextLink href="#" weight="weak">
            weak TextLink
          </TextLink>
          .
        </Text>
      ),
    },
    {
      label: 'TextLink in secondary text',
      Example: () => (
        <Text tone="secondary">
          This sentence contains a <TextLink href="#">TextLink.</TextLink>
        </Text>
      ),
    },
    {
      label: 'Visited TextLink',
      Example: () => (
        <Text>
          This sentence contains a{' '}
          <TextLink href="" showVisited>
            visited TextLink.
          </TextLink>
        </Text>
      ),
    },
    {
      label: 'TextLink on dark background',
      background: 'brand',
      Example: () => (
        <Text>
          This sentence contains a <TextLink href="#">TextLink.</TextLink>
        </Text>
      ),
    },
    {
      label: 'TextLink inside Actions',
      Example: () => (
        <Actions>
          <Button>Button</Button>
          <TextLink href="#">TextLink</TextLink>
        </Actions>
      ),
    },
    {
      label: 'TextLink inside large Text',
      Example: () => (
        <Text size="large">
          This sentence contains a <TextLink href="#">TextLink.</TextLink>
        </Text>
      ),
    },
    {
      label: 'TextLink inside Heading',
      Example: () => (
        <Heading level="3">
          This heading contains a <TextLink href="#">TextLink.</TextLink>
        </Heading>
      ),
    },
    {
      label: 'TextLink inside weak Heading',
      Example: () => (
        <Heading level="3" weight="weak">
          This heading contains a <TextLink href="#">TextLink.</TextLink>
        </Heading>
      ),
    },
    {
      label: 'Weak TextLink inside Heading',
      Example: () => (
        <Heading level="3">
          This heading contains a{' '}
          <TextLink href="#" weight="weak">
            weak TextLink.
          </TextLink>
        </Heading>
      ),
    },
    {
      label: 'Weak TextLink inside weak Heading',
      Example: () => (
        <Heading level="3" weight="weak">
          This heading contains a{' '}
          <TextLink href="#" weight="weak">
            weak TextLink.
          </TextLink>
        </Heading>
      ),
    },
  ],
};

export default docs;
