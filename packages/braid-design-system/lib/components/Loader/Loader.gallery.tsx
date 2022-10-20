import React from 'react';
import { ComponentExample } from 'braid-site/types';
import { Loader } from '../';
import source from '@braid-design-system/source.macro';

export const galleryItems: ComponentExample[] = [
  {
    Example: () => source(<Loader />),
  },
];
