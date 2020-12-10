import React, { ReactNode } from 'react';
import { ComponentExample } from '../../../site/src/types';
import source from '../../utils/source.macro';
import { Button } from '../';

const Container = ({ children }: { children: ReactNode }) => (
  <div style={{ maxWidth: '300px' }}>{children}</div>
);

export const galleryItems: ComponentExample[] = [
  {
    label: 'Regular weight',
    Container,
    Example: () => source(<Button>Submit</Button>),
  },
  {
    label: 'Strong weight',
    Container,
    Example: () => source(<Button weight="strong">Submit</Button>),
  },
  {
    label: 'Weak weight',
    Container,
    Example: () => source(<Button weight="weak">Submit</Button>),
  },
  {
    label: 'Weak weight on &ldquo;brand&rdquo; background',
    background: 'brand',
    Container,
    Example: () => source(<Button weight="weak">Submit</Button>),
  },
  {
    label: 'Loading state',
    Container,
    Example: () => source(<Button loading>Loading</Button>),
  },
];
