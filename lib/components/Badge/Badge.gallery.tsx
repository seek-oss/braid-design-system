import React from 'react';
import { ComponentExample } from '../../../site/src/types';
import source from '../../utils/source.macro';
import { Badge } from '../';

export const galleryItems: ComponentExample[] = [
  {
    label: 'Positive Badge',
    background: 'card',
    Example: () => source(<Badge tone="positive">Positive</Badge>),
  },
  {
    label: 'Strong Positive Badge',
    Example: () =>
      source(
        <Badge tone="positive" weight="strong">
          Positive
        </Badge>,
      ),
  },
  {
    label: 'Critical Badge',
    background: 'card',
    Example: () => source(<Badge tone="critical">Critical</Badge>),
  },
  {
    label: 'Strong Critical Badge',
    Example: () =>
      source(
        <Badge tone="critical" weight="strong">
          Critical
        </Badge>,
      ),
  },
  {
    label: 'Caution Badge',
    background: 'card',
    Example: () => source(<Badge tone="caution">Caution</Badge>),
  },
  {
    label: 'Strong Caution Badge',
    Example: () =>
      source(
        <Badge tone="caution" weight="strong">
          Caution
        </Badge>,
      ),
  },
  {
    label: 'Info Badge',
    background: 'card',
    Example: () => source(<Badge tone="info">Info</Badge>),
  },
  {
    label: 'Strong Info Badge',
    Example: () =>
      source(
        <Badge tone="info" weight="strong">
          Info
        </Badge>,
      ),
  },
  {
    label: 'Promote Badge',
    background: 'card',
    Example: () => source(<Badge tone="promote">Promote</Badge>),
  },
  {
    label: 'Strong Promote Badge',
    Example: () =>
      source(
        <Badge tone="promote" weight="strong">
          Promote
        </Badge>,
      ),
  },
  {
    label: 'Neutral Badge',
    background: 'card',
    Example: () => source(<Badge tone="neutral">Neutral</Badge>),
  },
  {
    label: 'Strong Neutral Badge',
    Example: () =>
      source(
        <Badge tone="neutral" weight="strong">
          Neutral
        </Badge>,
      ),
  },
];
