import React, { Fragment } from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { Badge, Inline, Heading, Text, TextLink } from '../';
import { Strong } from '../Strong/Strong';

const docs: ComponentDocs = {
  category: 'Content',
  migrationGuide: true,
  screenshotWidths: [320],
  examples: [
    {
      label: 'Regular Badge',
      background: 'card',
      Example: () => <Badge tone="positive">Regular</Badge>,
    },
    {
      label: 'Strong Badge',
      Example: () => (
        <Badge tone="positive" weight="strong">
          Strong
        </Badge>
      ),
    },
    {
      label: 'Badge with Vertical Bleed',
      description: (
        <Fragment>
          <Text>
            Allows the background colour to bleed out into the surrounding
            layout.
          </Text>
          <Text>
            For example, we can align a badge to a{' '}
            <TextLink href="/components/Heading">Heading</TextLink> element
            using an <TextLink href="/components/Inline">Inline</TextLink>, even
            though the badge is actually taller than the heading. If we didn’t
            use the <Strong>bleedY</Strong> prop in this case, the badge would
            introduce unwanted space above and below the heading.
          </Text>
        </Fragment>
      ),
      background: 'card',
      Example: () => (
        <Inline space="xsmall" alignY="center">
          <Heading level="4">Heading</Heading>
          <Badge tone="positive" bleedY>
            New
          </Badge>
        </Inline>
      ),
    },
    {
      label: 'Positive Badge',
      background: 'card',
      Example: () => <Badge tone="positive">Positive</Badge>,
    },
    {
      label: 'Strong Positive Badge',
      Example: () => (
        <Badge tone="positive" weight="strong">
          Positive
        </Badge>
      ),
    },
    {
      label: 'Critical Badge',
      background: 'card',
      Example: () => <Badge tone="critical">Critical</Badge>,
    },
    {
      label: 'Strong Critical Badge',
      Example: () => (
        <Badge tone="critical" weight="strong">
          Critical
        </Badge>
      ),
    },
    {
      label: 'Caution Badge',
      background: 'card',
      Example: () => <Badge tone="caution">Caution</Badge>,
    },
    {
      label: 'Strong Caution Badge',
      Example: () => (
        <Badge tone="caution" weight="strong">
          Caution
        </Badge>
      ),
    },
    {
      label: 'Info Badge',
      background: 'card',
      Example: () => <Badge tone="info">Info</Badge>,
    },
    {
      label: 'Strong Info Badge',
      Example: () => (
        <Badge tone="info" weight="strong">
          Info
        </Badge>
      ),
    },
    {
      label: 'Promote Badge',
      background: 'card',
      Example: () => <Badge tone="promote">Promote</Badge>,
    },
    {
      label: 'Strong Promote Badge',
      Example: () => (
        <Badge tone="promote" weight="strong">
          Promote
        </Badge>
      ),
    },
    {
      label: 'Neutral Badge',
      background: 'card',
      Example: () => <Badge tone="neutral">Neutral</Badge>,
    },
    {
      label: 'Strong Neutral Badge',
      Example: () => (
        <Badge tone="neutral" weight="strong">
          Neutral
        </Badge>
      ),
    },
  ],
  snippets: [
    {
      name: 'Info',
      code: <Badge tone="info">Badge</Badge>,
    },
    {
      name: 'Info (strong)',
      code: (
        <Badge tone="info" weight="strong">
          Badge
        </Badge>
      ),
    },
    {
      name: 'Promote',
      code: <Badge tone="promote">Badge</Badge>,
    },
    {
      name: 'Promote (strong)',
      code: (
        <Badge tone="promote" weight="strong">
          Badge
        </Badge>
      ),
    },
    {
      name: 'Positive',
      code: <Badge tone="positive">Badge</Badge>,
    },
    {
      name: 'Positive (strong)',
      code: (
        <Badge tone="positive" weight="strong">
          Badge
        </Badge>
      ),
    },
    {
      name: 'Caution',
      code: <Badge tone="caution">Badge</Badge>,
    },
    {
      name: 'Caution (strong)',
      code: (
        <Badge tone="caution" weight="strong">
          Badge
        </Badge>
      ),
    },
    {
      name: 'Critical',
      code: <Badge tone="critical">Badge</Badge>,
    },
    {
      name: 'Critical (strong)',
      code: (
        <Badge tone="critical" weight="strong">
          Badge
        </Badge>
      ),
    },
    {
      name: 'Neutral',
      code: <Badge tone="neutral">Badge</Badge>,
    },
    {
      name: 'Neutral (strong)',
      code: (
        <Badge tone="neutral" weight="strong">
          Badge
        </Badge>
      ),
    },
    {
      name: 'Multiple',
      code: (
        <Inline space="small">
          <Badge tone="info">Badge</Badge>
          <Badge tone="positive">Badge</Badge>
          <Badge tone="promote">Badge</Badge>
        </Inline>
      ),
    },
  ],
};

export default docs;
