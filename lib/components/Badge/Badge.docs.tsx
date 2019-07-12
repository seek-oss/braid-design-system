import React from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { Badge } from './Badge';

const docs: ComponentDocs = {
  migrationGuide: true,
  examples: [
    {
      label: 'Info Badge',
      render: () => <Badge tone="info">Featured</Badge>,
    },
    {
      label: 'Strong Info Badge',
      render: () => (
        <Badge tone="info" weight="strong">
          Featured
        </Badge>
      ),
    },
    {
      label: 'Critical Badge',
      render: () => <Badge tone="critical">Overdue</Badge>,
    },
    {
      label: 'Strong Critical Badge',
      render: () => (
        <Badge tone="critical" weight="strong">
          Overdue
        </Badge>
      ),
    },
    {
      label: 'Positive Badge',
      render: () => <Badge tone="positive">New</Badge>,
    },
    {
      label: 'Strong Positive Badge',
      render: () => (
        <Badge tone="positive" weight="strong">
          New
        </Badge>
      ),
    },
    {
      label: 'Secondary Badge',
      render: () => <Badge tone="secondary">10m ago</Badge>,
    },
    {
      label: 'Strong Secondary Badge',
      render: () => (
        <Badge tone="secondary" weight="strong">
          10m ago
        </Badge>
      ),
    },
  ],
};

export default docs;
