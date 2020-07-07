import React from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { Badge, Card, Inline } from '../';

const docs: ComponentDocs = {
  category: 'Content',
  migrationGuide: true,
  screenshotWidths: [320],
  examples: [
    {
      label: 'Info Badge',
      Example: () => (
        <Card>
          <Badge tone="info">Info</Badge>
        </Card>
      ),
    },
    {
      label: 'Strong Info Badge',
      Example: () => (
        <Card>
          <Badge tone="info" weight="strong">
            Info
          </Badge>
        </Card>
      ),
    },
    {
      label: 'Critical Badge',
      Example: () => (
        <Card>
          <Badge tone="critical">Critical</Badge>
        </Card>
      ),
    },
    {
      label: 'Strong Critical Badge',
      Example: () => (
        <Card>
          <Badge tone="critical" weight="strong">
            Critical
          </Badge>
        </Card>
      ),
    },
    {
      label: 'Caution Badge',
      Example: () => (
        <Card>
          <Badge tone="caution">Caution</Badge>
        </Card>
      ),
    },
    {
      label: 'Strong Caution Badge',
      Example: () => (
        <Card>
          <Badge tone="caution" weight="strong">
            Caution
          </Badge>
        </Card>
      ),
    },
    {
      label: 'Positive Badge',
      Example: () => (
        <Card>
          <Badge tone="positive">Positive</Badge>
        </Card>
      ),
    },
    {
      label: 'Strong Positive Badge',
      Example: () => (
        <Card>
          <Badge tone="positive" weight="strong">
            Positive
          </Badge>
        </Card>
      ),
    },
    {
      label: 'Promote Badge',
      Example: () => (
        <Card>
          <Badge tone="promote">Promote</Badge>
        </Card>
      ),
    },
    {
      label: 'Strong Promote Badge',
      Example: () => (
        <Card>
          <Badge tone="promote" weight="strong">
            Promote
          </Badge>
        </Card>
      ),
    },
    {
      label: 'Neutral Badge',
      Example: () => (
        <Card>
          <Badge tone="neutral">Neutral</Badge>
        </Card>
      ),
    },
    {
      label: 'Strong Neutral Badge',
      Example: () => (
        <Card>
          <Badge tone="neutral" weight="strong">
            Neutral
          </Badge>
        </Card>
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
