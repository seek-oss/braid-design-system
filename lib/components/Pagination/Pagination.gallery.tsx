import React from 'react';
import { ComponentExample } from '../../../site/src/types';
import { Pagination } from '../../playroom/components';
import source from '../../utils/source.macro';

export const galleryItems: ComponentExample[] = [
  {
    label: 'Standard',
    background: 'card',
    Example: () => source(<Pagination />),
  },
];
