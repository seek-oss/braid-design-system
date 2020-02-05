import React from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { Badge, Inline } from '../';

const docs: ComponentDocs = {
  category: 'Content',
  migrationGuide: true,
  screenshotWidths: [320],
  examples: [
    {
      label: 'Info Badge',
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
      label: 'Critical Badge',
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
      label: 'Positive Badge',
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
      label: 'Promote Badge',
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
      code: (
        <Inline space="xsmall">
          <Badge tone="info">Badge</Badge>
        </Inline>
      ),
    },
    {
      name: 'Info (strong)',
      code: (
        <Inline space="xsmall">
          <Badge tone="info" weight="strong">
            Badge
          </Badge>
        </Inline>
      ),
    },
    {
      name: 'Promote',
      code: (
        <Inline space="xsmall">
          <Badge tone="promote">Badge</Badge>
        </Inline>
      ),
    },
    {
      name: 'Promote (strong)',
      code: (
        <Inline space="xsmall">
          <Badge tone="promote" weight="strong">
            Badge
          </Badge>
        </Inline>
      ),
    },
    {
      name: 'Positive',
      code: (
        <Inline space="xsmall">
          <Badge tone="positive">Badge</Badge>
        </Inline>
      ),
    },
    {
      name: 'Positive (strong)',
      code: (
        <Inline space="xsmall">
          <Badge tone="positive" weight="strong">
            Badge
          </Badge>
        </Inline>
      ),
    },
    {
      name: 'Critical',
      code: (
        <Inline space="xsmall">
          <Badge tone="critical">Badge</Badge>
        </Inline>
      ),
    },
    {
      name: 'Critical (strong)',
      code: (
        <Inline space="xsmall">
          <Badge tone="critical" weight="strong">
            Badge
          </Badge>
        </Inline>
      ),
    },
    {
      name: 'Neutral',
      code: (
        <Inline space="xsmall">
          <Badge tone="neutral">Badge</Badge>
        </Inline>
      ),
    },
    {
      name: 'Neutral (strong)',
      code: (
        <Inline space="xsmall">
          <Badge tone="neutral" weight="strong">
            Badge
          </Badge>
        </Inline>
      ),
    },
  ],
};

export default docs;
