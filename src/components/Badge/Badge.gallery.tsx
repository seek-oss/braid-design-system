import React from 'react';
import { ComponentExample } from '../../../site/src/types';
import source from '../../utils/source.macro';
import { Badge } from '../';

export const galleryItems: ComponentExample[] = [
  {
    label: 'Positive',
    background: 'card',
    Example: () => source(<Badge tone="positive">Positive</Badge>),
  },
  {
    label: 'Strong Positive',
    Example: () =>
      source(
        <Badge tone="positive" weight="strong">
          Positive
        </Badge>,
      ),
  },
  {
    label: 'Critical',
    background: 'card',
    Example: () => source(<Badge tone="critical">Critical</Badge>),
  },
  {
    label: 'Strong Critical',
    Example: () =>
      source(
        <Badge tone="critical" weight="strong">
          Critical
        </Badge>,
      ),
  },
  {
    label: 'Caution',
    background: 'card',
    Example: () => source(<Badge tone="caution">Caution</Badge>),
  },
  {
    label: 'Strong Caution',
    Example: () =>
      source(
        <Badge tone="caution" weight="strong">
          Caution
        </Badge>,
      ),
  },
  {
    label: 'Info',
    background: 'card',
    Example: () => source(<Badge tone="info">Info</Badge>),
  },
  {
    label: 'Strong Info',
    Example: () =>
      source(
        <Badge tone="info" weight="strong">
          Info
        </Badge>,
      ),
  },
  {
    label: 'Promote',
    background: 'card',
    Example: () => source(<Badge tone="promote">Promote</Badge>),
  },
  {
    label: 'Strong Promote',
    Example: () =>
      source(
        <Badge tone="promote" weight="strong">
          Promote
        </Badge>,
      ),
  },
  {
    label: 'Neutral',
    background: 'card',
    Example: () => source(<Badge tone="neutral">Neutral</Badge>),
  },
  {
    label: 'Strong Neutral',
    Example: () =>
      source(
        <Badge tone="neutral" weight="strong">
          Neutral
        </Badge>,
      ),
  },
];
