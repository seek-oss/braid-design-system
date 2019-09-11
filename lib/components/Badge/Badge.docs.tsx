import React from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { Badge } from './Badge';

const docs: ComponentDocs = {
  migrationGuide: true,
  examples: [
    {
      label: 'Info Badge',
      Example: () => <Badge tone="info">Featured</Badge>,
    },
    {
      label: 'Strong Info Badge',
      Example: () => (
        <Badge tone="info" weight="strong">
          Featured
        </Badge>
      ),
    },
    {
      label: 'Critical Badge',
      Example: () => <Badge tone="critical">Overdue</Badge>,
    },
    {
      label: 'Strong Critical Badge',
      Example: () => (
        <Badge tone="critical" weight="strong">
          Overdue
        </Badge>
      ),
    },
    {
      label: 'Positive Badge',
      Example: () => <Badge tone="positive">New</Badge>,
    },
    {
      label: 'Strong Positive Badge',
      Example: () => (
        <Badge tone="positive" weight="strong">
          New
        </Badge>
      ),
    },
    {
      label: 'Neutral Badge',
      Example: () => <Badge tone="neutral">Expired</Badge>,
    },
    {
      label: 'Strong Neutral Badge',
      Example: () => (
        <Badge tone="neutral" weight="strong">
          Expired
        </Badge>
      ),
    },
  ],
};

export default docs;
