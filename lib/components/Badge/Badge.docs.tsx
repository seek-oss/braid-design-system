import * as React from 'react';
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
      label: 'Caution Badge',
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
