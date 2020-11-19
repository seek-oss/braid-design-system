import React, { ReactNode } from 'react';
import { ComponentExample } from '../../../site/src/types';
import { Placeholder } from '../private/Placeholder/Placeholder';
import { Box, Inline } from '../';

const Container = ({ children }: { children: ReactNode }) => (
  <Box style={{ maxWidth: '240px' }}>{children}</Box>
);

export const galleryItems: ComponentExample[] = [
  {
    label: 'Basic example',
    Container,
    Example: () => (
      <Inline space="small">
        <Placeholder width={48} height={48} />
        <Placeholder width={48} height={48} />
        <Placeholder width={48} height={48} />
        <Placeholder width={48} height={48} />
        <Placeholder width={48} height={48} />
        <Placeholder width={48} height={48} />
        <Placeholder width={48} height={48} />
        <Placeholder width={48} height={48} />
        <Placeholder width={48} height={48} />
        <Placeholder width={48} height={48} />
      </Inline>
    ),
  },
  {
    label: "Responsive space, e.g. ['xxsmall', 'medium']",
    Container,
    Example: () => (
      <Inline space={['xxsmall', 'medium']}>
        <Placeholder width={48} height={48} />
        <Placeholder width={48} height={48} />
        <Placeholder width={48} height={48} />
        <Placeholder width={48} height={48} />
        <Placeholder width={48} height={48} />
        <Placeholder width={48} height={48} />
        <Placeholder width={48} height={48} />
        <Placeholder width={48} height={48} />
        <Placeholder width={48} height={48} />
        <Placeholder width={48} height={48} />
      </Inline>
    ),
  },
  {
    label: 'Align horizontally to center',
    Container,
    Example: () => (
      <Inline space="small" align="center">
        <Placeholder width={48} height={48} />
        <Placeholder width={48} height={48} />
        <Placeholder width={48} height={48} />
        <Placeholder width={48} height={48} />
        <Placeholder width={48} height={48} />
        <Placeholder width={48} height={48} />
        <Placeholder width={48} height={48} />
        <Placeholder width={48} height={48} />
        <Placeholder width={48} height={48} />
        <Placeholder width={48} height={48} />
      </Inline>
    ),
  },
  {
    label: 'Align horizontally to right',
    Container,
    Example: () => (
      <Inline space="small" align="right">
        <Placeholder width={48} height={48} />
        <Placeholder width={48} height={48} />
        <Placeholder width={48} height={48} />
        <Placeholder width={48} height={48} />
        <Placeholder width={48} height={48} />
        <Placeholder width={48} height={48} />
        <Placeholder width={48} height={48} />
        <Placeholder width={48} height={48} />
        <Placeholder width={48} height={48} />
        <Placeholder width={48} height={48} />
      </Inline>
    ),
  },
  {
    label:
      'Responsive alignment (e.g. center on mobile, left from tablet upwards)',
    Container,
    Example: () => (
      <Inline space="small" align={['center', 'left']}>
        <Placeholder width={48} height={48} />
        <Placeholder width={48} height={48} />
        <Placeholder width={48} height={48} />
        <Placeholder width={48} height={48} />
        <Placeholder width={48} height={48} />
        <Placeholder width={48} height={48} />
        <Placeholder width={48} height={48} />
        <Placeholder width={48} height={48} />
        <Placeholder width={48} height={48} />
        <Placeholder width={48} height={48} />
      </Inline>
    ),
  },
  {
    label: 'Align vertically',
    Container,
    Example: () => (
      <Inline space="small" alignY="center">
        <Placeholder width={48} height={40} />
        <Placeholder width={48} height={100} />
        <Placeholder width={48} height={60} />
      </Inline>
    ),
  },
  {
    label: 'Collapse below tablet',
    Container,
    Example: () => (
      <Inline space="small" collapseBelow="tablet">
        <Placeholder width={48} height={48} />
        <Placeholder width={48} height={48} />
        <Placeholder width={48} height={48} />
        <Placeholder width={48} height={48} />
        <Placeholder width={48} height={48} />
        <Placeholder width={48} height={48} />
      </Inline>
    ),
  },
  {
    label: 'Collapse below desktop',
    Container,
    Example: () => (
      <Inline space="small" collapseBelow="desktop">
        <Placeholder width={48} height={48} />
        <Placeholder width={48} height={48} />
        <Placeholder width={48} height={48} />
        <Placeholder width={48} height={48} />
        <Placeholder width={48} height={48} />
        <Placeholder width={48} height={48} />
      </Inline>
    ),
  },
  {
    label:
      'Collapse below desktop with responsive space (e.g. "xxsmall" on mobile, "small" on tablet, "large" on desktop)',
    Container,
    Example: () => (
      <Inline space={['xxsmall', 'medium', 'large']} collapseBelow="desktop">
        <Placeholder width={48} height={48} />
        <Placeholder width={48} height={48} />
        <Placeholder width={48} height={48} />
        <Placeholder width={48} height={48} />
        <Placeholder width={48} height={48} />
        <Placeholder width={48} height={48} />
      </Inline>
    ),
  },
  {
    label: 'Collapse below desktop with alignment (e.g. "center")',
    Container,
    Example: () => (
      <Inline space="small" collapseBelow="desktop" align="center">
        <Placeholder width={48} height={48} />
        <Placeholder width={48} height={48} />
        <Placeholder width={48} height={48} />
        <Placeholder width={48} height={48} />
        <Placeholder width={48} height={48} />
        <Placeholder width={48} height={48} />
      </Inline>
    ),
  },
];
