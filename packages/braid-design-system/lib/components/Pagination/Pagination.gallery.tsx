import React from 'react';
import { ComponentExample } from 'braid-site/types';
import { Pagination } from '../../playroom/components';
import source from '@braid-design-system/source.macro';

export const galleryItems: ComponentExample[] = [
  {
    label: 'Standard',
    background: 'surface',
    Example: () => source(<Pagination />),
  },
];
