import React from 'react';
import { ComponentExample } from '../../../site/src/types';
import { Pagination } from '../../playroom/components';
import source from '../../utils/source.macro';

export const galleryItems: ComponentExample[] = [
  {
    label: 'Standard',
    background: { lightMode: 'surface', darkMode: 'surfaceDark' },
    Example: () => source(<Pagination />),
  },
];
