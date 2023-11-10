import React, { type ReactNode } from 'react';
import type { ComponentExample } from 'site/types';
import { Bleed, Box } from '../';
import source from '@braid-design-system/source.macro';
import { Placeholder } from '../../playroom/components';

const Container = ({ children }: { children: ReactNode }) => (
  <Box padding="gutter" boxShadow="borderNeutralLight" background="surface">
    {children}
  </Box>
);

export const galleryItems: ComponentExample[] = [
  {
    label: 'Horizontally',
    Container,
    Example: () =>
      source(
        <Bleed horizontal="gutter">
          <Placeholder height={80} />
        </Bleed>,
      ),
  },
  {
    label: 'Vertically',
    Container,
    Example: () =>
      source(
        <Bleed vertical="gutter">
          <Placeholder height={80} />
        </Bleed>,
      ),
  },
  {
    label: 'To the top',
    Container,
    Example: () =>
      source(
        <Bleed top="gutter">
          <Placeholder height={80} />
        </Bleed>,
      ),
  },
  {
    label: 'To the bottom',
    Container,
    Example: () =>
      source(
        <Bleed bottom="gutter">
          <Placeholder height={80} />
        </Bleed>,
      ),
  },
  {
    label: 'To the left',
    Container,
    Example: () =>
      source(
        <Bleed left="gutter">
          <Placeholder height={80} />
        </Bleed>,
      ),
  },
  {
    label: 'To the right',
    Container,
    Example: () =>
      source(
        <Bleed right="gutter">
          <Placeholder height={80} />
        </Bleed>,
      ),
  },
  {
    label: 'On all sides',
    Container,
    Example: () =>
      source(
        <Bleed space="gutter">
          <Placeholder height={80} />
        </Bleed>,
      ),
  },
];
