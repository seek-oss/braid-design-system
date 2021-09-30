import React from 'react';
import { ComponentScreenshot } from '../../../site/src/types';
import { Badge, Inline, Heading } from '../';

export const screenshots: ComponentScreenshot = {
  screenshotWidths: [320],
  examples: [
    {
      label: 'Regular Badge',
      background: 'surface',
      Example: () => <Badge tone="positive">Regular</Badge>,
    },
    {
      label: 'Strong Badge',
      Example: () => (
        <Badge tone="positive" weight="strong">
          Strong
        </Badge>
      ),
    },
    {
      label: 'Badge with Vertical Bleed',
      background: 'surface',
      Example: () => (
        <Inline space="xsmall" alignY="center">
          <Heading level="4">Heading</Heading>
          <Badge tone="positive" bleedY>
            New
          </Badge>
        </Inline>
      ),
    },
    {
      label: 'Positive Badge',
      background: 'surface',
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
      label: 'Critical Badge',
      background: 'surface',
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
      label: 'Caution Badge',
      background: 'surface',
      Example: () => <Badge tone="caution">Caution</Badge>,
    },
    {
      label: 'Strong Caution Badge',
      Example: () => (
        <Badge tone="caution" weight="strong">
          Caution
        </Badge>
      ),
    },
    {
      label: 'Info Badge',
      background: 'surface',
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
      label: 'Promote Badge',
      background: 'surface',
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
      background: 'surface',
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
