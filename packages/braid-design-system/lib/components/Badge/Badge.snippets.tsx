import React from 'react';
import source from '../../utils/source.macro';
import { Snippets } from '../private/Snippets';
import { Badge, Inline } from '../../playroom/components';

export const snippets: Snippets = [
  {
    name: 'Info',
    code: source(<Badge tone="info">Badge</Badge>),
  },
  {
    name: 'Info (strong)',
    code: source(
      <Badge tone="info" weight="strong">
        Badge
      </Badge>,
    ),
  },
  {
    name: 'Promote',
    code: source(<Badge tone="promote">Badge</Badge>),
  },
  {
    name: 'Promote (strong)',
    code: source(
      <Badge tone="promote" weight="strong">
        Badge
      </Badge>,
    ),
  },
  {
    name: 'Positive',
    code: source(<Badge tone="positive">Badge</Badge>),
  },
  {
    name: 'Positive (strong)',
    code: source(
      <Badge tone="positive" weight="strong">
        Badge
      </Badge>,
    ),
  },
  {
    name: 'Caution',
    code: source(<Badge tone="caution">Badge</Badge>),
  },
  {
    name: 'Caution (strong)',
    code: source(
      <Badge tone="caution" weight="strong">
        Badge
      </Badge>,
    ),
  },
  {
    name: 'Critical',
    code: source(<Badge tone="critical">Badge</Badge>),
  },
  {
    name: 'Critical (strong)',
    code: source(
      <Badge tone="critical" weight="strong">
        Badge
      </Badge>,
    ),
  },
  {
    name: 'Neutral',
    code: source(<Badge tone="neutral">Badge</Badge>),
  },
  {
    name: 'Neutral (strong)',
    code: source(
      <Badge tone="neutral" weight="strong">
        Badge
      </Badge>,
    ),
  },
  {
    name: 'Multiple',
    code: source(
      <Inline space="small">
        <Badge tone="info">Badge</Badge>
        <Badge tone="positive">Badge</Badge>
        <Badge tone="promote">Badge</Badge>
      </Inline>,
    ),
  },
];
