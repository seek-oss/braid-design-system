import React, { ReactNode } from 'react';
import { ComponentExample } from '../../../site/src/types';
import source from '../../utils/source.macro';
import { Button } from '../';

const Container = ({ children }: { children: ReactNode }) => (
  <div style={{ maxWidth: '300px' }}>{children}</div>
);

export const galleryItems: ComponentExample[] = [
  {
    label: 'Default Button',
    Container,
    Example: () => source(<Button>Submit</Button>),
  },
  {
    label: 'Strong Button',
    Container,
    Example: () => source(<Button weight="strong">Submit</Button>),
  },
  {
    label: 'Weak Button',
    Container,
    Example: () => source(<Button weight="weak">Submit</Button>),
  },
  {
    label: 'Weak Button on Brand Background',
    background: 'brand',
    Container,
    Example: () => source(<Button weight="weak">Submit</Button>),
  },
  {
    label: 'Loading Button',
    Container,
    Example: () => source(<Button loading>Loading</Button>),
  },
];
