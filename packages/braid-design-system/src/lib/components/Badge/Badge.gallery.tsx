import source from '@braid-design-system/source.macro';
import type { GalleryComponent } from 'site/types';

import { Badge } from '../';

export const galleryItems: GalleryComponent = {
  examples: [
    {
      label: 'Positive',
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
  ],
};
