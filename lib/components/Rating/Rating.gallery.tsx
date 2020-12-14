import React from 'react';
import { ComponentExample } from '../../../site/src/types';
import { Rating } from '../';

export const galleryItems: ComponentExample[] = [
  {
    label: 'Default',
    Example: () => <Rating rating={3} />,
  },
  {
    label: 'Hidden text rating',
    Example: () => <Rating rating={4.2} showTextRating={false} />,
  },
  {
    label: 'large',
    Example: () => <Rating rating={3} size="large" />,
  },
  {
    label: 'small',
    Example: () => <Rating rating={2} size="small" />,
  },
  {
    label: 'xsmall',
    Example: () => <Rating rating={1.5} size="xsmall" />,
  },
];
