import React from 'react';
import { Snippets } from '../private/Snippets';
import { Badge, Inline } from '../../playroom/components';

export const snippets: Snippets = [
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
];
