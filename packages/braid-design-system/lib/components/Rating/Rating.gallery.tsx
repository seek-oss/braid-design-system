import React from 'react';
import { ComponentExample } from '../../../../../site/src/types';
import { Rating } from '../';
import source from '../../utils/source.macro';

export const galleryItems: ComponentExample[] = [
  {
    label: 'Default',
    Example: () => source(<Rating rating={3} />),
  },
  {
    label: 'Variant: starsOnly',
    Example: () => source(<Rating rating={4.2} variant="starsOnly" />),
  },
  {
    label: 'Variant: minimal',
    Example: () => source(<Rating rating={4.2} variant="minimal" />),
  },
  {
    label: 'large',
    Example: () => source(<Rating rating={3} size="large" />),
  },
  {
    label: 'small',
    Example: () => source(<Rating rating={2} size="small" />),
  },
  {
    label: 'xsmall',
    Example: () => source(<Rating rating={1.5} size="xsmall" />),
  },
];
