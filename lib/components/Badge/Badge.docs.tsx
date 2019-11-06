import React from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { Badge } from './Badge';

const docs: ComponentDocs = {
  migrationGuide: true,
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
};

export default docs;
