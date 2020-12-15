import React, { ReactNode } from 'react';
import { ComponentExample } from '../../../site/src/types';
import { Button } from '../';

const Container = ({ children }: { children: ReactNode }) => (
  <div style={{ maxWidth: '300px' }}>{children}</div>
);

export const galleryItems: ComponentExample[] = [
  {
    label: 'Default Button',
    Container,
    Example: () => <Button>Submit</Button>,
  },
  {
    label: 'Strong Button',
    Container,
    Example: () => <Button weight="strong">Submit</Button>,
  },
  {
    label: 'Weak Button',
    Container,
    Example: () => <Button weight="weak">Submit</Button>,
  },
  {
    label: 'Critical Button',
    Container,
    Example: () => <Button tone="critical">Delete</Button>,
  },
  {
    label: 'Weak Critical Button',
    Container,
    Example: () => (
      <Button weight="weak" tone="critical">
        Delete
      </Button>
    ),
  },
  {
    label: 'Weak Button on Brand Background',
    background: 'brand',
    Container,
    Example: () => <Button weight="weak">Submit</Button>,
  },
  {
    label: 'Loading Button',
    Container,
    Example: () => <Button loading>Loading</Button>,
  },
];
