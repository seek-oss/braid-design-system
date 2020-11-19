import React from 'react';
import { ComponentExample } from '../../../site/src/types';
import { Actions, Button, Heading, Text, TextLink } from '../';

export const galleryItems: ComponentExample[] = [
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
];
