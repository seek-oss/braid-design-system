import React from 'react';
import { ComponentExample } from 'site/types';
import { Loader } from '../';
import source from '../../utils/source.macro';

export const galleryItems: ComponentExample[] = [
  {
    Example: () => source(<Loader />),
  },
];
