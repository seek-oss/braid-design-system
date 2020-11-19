import React from 'react';
import { ComponentExample } from '../../../site/src/types';
import { Loader } from '../';

export const galleryItems: ComponentExample[] = [
  {
    label: 'Default',
    Example: () => <Loader />,
  },
];
