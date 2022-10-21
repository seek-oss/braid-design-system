import React from 'react';
import { ComponentExample } from 'site/types';
import { Divider } from '../';
import source from '../../utils/source.macro';

export const galleryItems: ComponentExample[] = [
  {
    label: 'Regular weight',
    Example: () => source(<Divider />),
  },
  {
    label: 'Strong weight',
    Example: () => source(<Divider weight="strong" />),
  },
];
