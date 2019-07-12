import React from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { TextLink } from './TextLink';
import { Text } from '../Text/Text';
import { Heading } from '../Heading/Heading';
import { Actions } from '../Actions/Actions';
import { Button } from '../Button/Button';

const docs: ComponentDocs = {
  migrationGuide: true,
  examples: [
    {
      label: 'Text Link',
      render: () => (
        <Text>
          The last word of a sentence is a{' '}
          <TextLink href="">text link.</TextLink>
        </Text>
      ),
    },
    {
      label: 'Block Text Link',
      render: () => (
        <TextLink href="">
          <Text>Text Link</Text>
        </TextLink>
      ),
    },
    {
      label: 'Text Link inside Actions',
      render: () => (
        <Actions>
          <Button>Button</Button>
          <TextLink href="">Text Link</TextLink>
        </Actions>
      ),
    },
    {
      label: 'Large Text Link',
      render: () => (
        <Text size="large">
          The last word of a sentence is a{' '}
          <TextLink href="">text link.</TextLink>
        </Text>
      ),
    },
    {
      label: 'Large Block Text Link',
      render: () => (
        <TextLink href="">
          <Text size="large">Text Link</Text>
        </TextLink>
      ),
    },
    {
      label: 'Small Text Link',
      render: () => (
        <Text size="small">
          The last word of a sentence is a{' '}
          <TextLink href="">text link.</TextLink>
        </Text>
      ),
    },
    {
      label: 'Small Block Text Link',
      render: () => (
        <TextLink href="">
          <Text size="small">Text Link</Text>
        </TextLink>
      ),
    },
    {
      label: 'Heading Level 1 Link',
      render: () => (
        <TextLink href="">
          <Heading level="1">Heading link.</Heading>
        </TextLink>
      ),
    },
    {
      label: 'Heading Level 1 Link (Inline)',
      render: () => (
        <Heading level="1">
          The last word of this heading is a <TextLink href="">link.</TextLink>
        </Heading>
      ),
    },
    {
      label: 'Heading Level 2 Link',
      render: () => (
        <TextLink href="">
          <Heading level="2">Heading link.</Heading>
        </TextLink>
      ),
    },
    {
      label: 'Heading Level 2 Link (Inline)',
      render: () => (
        <Heading level="2">
          The last word of this heading is a <TextLink href="">link.</TextLink>
        </Heading>
      ),
    },
    {
      label: 'Heading Level 3 Link',
      render: () => (
        <TextLink href="">
          <Heading level="3">Heading link.</Heading>
        </TextLink>
      ),
    },
    {
      label: 'Heading Level 3 Link (Inline)',
      render: () => (
        <Heading level="3">
          The last word of this heading is a <TextLink href="">link.</TextLink>
        </Heading>
      ),
    },
  ],
};

export default docs;
