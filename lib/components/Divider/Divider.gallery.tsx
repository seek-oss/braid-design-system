import React from 'react';
import { ComponentExample } from '../../../site/src/types';
import { Divider } from '../';

export const galleryItems: ComponentExample[] = [
  {
    label: 'Divider',
    Example: () => <Divider />,
  },
  {
    label: 'Strong Divider',
    Example: () => <Divider weight="strong" />,
  },
];
