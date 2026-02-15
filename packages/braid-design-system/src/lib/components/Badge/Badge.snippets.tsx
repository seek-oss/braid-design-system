import source from '@braid-design-system/source.macro';

import { Badge, Inline } from '../../playroom/components';
import type { Snippets } from '../private/Snippets';

export const snippets: Snippets = [
  {
    description: 'Info',
    code: source(<Badge tone="info">Badge</Badge>),
  },
  {
    description: 'Info (strong)',
    code: source(
      <Badge tone="info" weight="strong">
        Badge
      </Badge>,
    ),
  },
  {
    description: 'Promote',
    code: source(<Badge tone="promote">Badge</Badge>),
  },
  {
    description: 'Promote (strong)',
    code: source(
      <Badge tone="promote" weight="strong">
        Badge
      </Badge>,
    ),
  },
  {
    description: 'Positive',
    code: source(<Badge tone="positive">Badge</Badge>),
  },
  {
    description: 'Positive (strong)',
    code: source(
      <Badge tone="positive" weight="strong">
        Badge
      </Badge>,
    ),
  },
  {
    description: 'Caution',
    code: source(<Badge tone="caution">Badge</Badge>),
  },
  {
    description: 'Caution (strong)',
    code: source(
      <Badge tone="caution" weight="strong">
        Badge
      </Badge>,
    ),
  },
  {
    description: 'Critical',
    code: source(<Badge tone="critical">Badge</Badge>),
  },
  {
    description: 'Critical (strong)',
    code: source(
      <Badge tone="critical" weight="strong">
        Badge
      </Badge>,
    ),
  },
  {
    description: 'Neutral',
    code: source(<Badge tone="neutral">Badge</Badge>),
  },
  {
    description: 'Neutral (strong)',
    code: source(
      <Badge tone="neutral" weight="strong">
        Badge
      </Badge>,
    ),
  },
  {
    description: 'Multiple',
    code: source(
      <Inline space="small">
        <Badge tone="info">Badge</Badge>
        <Badge tone="positive">Badge</Badge>
        <Badge tone="promote">Badge</Badge>
      </Inline>,
    ),
  },
];
