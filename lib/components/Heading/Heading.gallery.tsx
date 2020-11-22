import React, { ReactNode } from 'react';
import { ComponentExample } from '../../../site/src/types';
import { Box, Heading } from '../';

const Container = ({ children }: { children: ReactNode }) => (
  <div style={{ maxWidth: '300px' }}>{children}</div>
);

export const galleryItems: ComponentExample[] = [
  {
    label: 'Level 1',
    Example: () => <Heading level="1">Heading Level 1</Heading>,
  },
  {
    label: 'Level 1 Weak',
    Example: () => (
      <Heading level="1" weight="weak">
        Heading Level 1 Weak
      </Heading>
    ),
  },
  {
    label: 'Level 2',
    Example: () => <Heading level="2">Heading Level 2</Heading>,
  },
  {
    label: 'Level 2 Weak',
    Example: () => (
      <Heading level="2" weight="weak">
        Heading Level 2 Weak
      </Heading>
    ),
  },
  {
    label: 'Level 3',
    Example: () => <Heading level="3">Heading Level 3</Heading>,
  },
  {
    label: 'Level 3 Weak',
    Example: () => (
      <Heading level="3" weight="weak">
        Heading Level 3 Weak
      </Heading>
    ),
  },
  {
    label: 'Level 4',
    Example: () => <Heading level="4">Heading Level 4</Heading>,
  },
  {
    label: 'Level 4 Weak',
    Example: () => (
      <Heading level="4" weight="weak">
        Heading Level 4 Weak
      </Heading>
    ),
  },
  {
    label: 'Truncate a long heading',
    Example: () => (
      <Box style={{ width: 160 }}>
        <Heading level="2" truncate>
          Really long heading
        </Heading>
      </Box>
    ),
  },
  {
    label: 'Heading Alignment: "left" | "center" | "right"',
    Example: () => (
      <Heading level="1" align="center">
        Centered heading
      </Heading>
    ),
  },
  {
    label: 'Heading Alignment (responsive)',
    Container,
    Example: () => (
      <Heading level="4" align={['right', 'center', 'left']}>
        Right aligned mobile, center on tablet, left on desktop
      </Heading>
    ),
  },
];
