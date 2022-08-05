import React from 'react';
import { ComponentExample } from '../../../../../site/src/types';
import { Tiles } from '../';
import { Placeholder } from '../private/Placeholder/Placeholder';
import source from '../../utils/source.macro';

export const galleryItems: ComponentExample[] = [
  {
    label: '3 columns',
    Example: () =>
      source(
        <Tiles columns={3} space="small">
          <Placeholder height={40} />
          <Placeholder height={40} />
          <Placeholder height={40} />
          <Placeholder height={40} />
          <Placeholder height={40} />
          <Placeholder height={40} />
          <Placeholder height={40} />
          <Placeholder height={40} />
          <Placeholder height={40} />
        </Tiles>,
      ),
  },
  {
    label: 'Responsive columns (e.g. 2 on mobile, 4 from tablet upwards)',
    Example: () =>
      source(
        <Tiles space="small" columns={{ mobile: 2, tablet: 4 }}>
          <Placeholder height={40} />
          <Placeholder height={40} />
          <Placeholder height={40} />
          <Placeholder height={40} />
          <Placeholder height={40} />
          <Placeholder height={40} />
          <Placeholder height={40} />
          <Placeholder height={40} />
          <Placeholder height={40} />
          <Placeholder height={40} />
        </Tiles>,
      ),
  },
  {
    label: 'Space between tiles',
    Example: () =>
      source(
        <Tiles space="large" columns={3}>
          <Placeholder height={40} />
          <Placeholder height={40} />
          <Placeholder height={40} />
          <Placeholder height={40} />
          <Placeholder height={40} />
          <Placeholder height={40} />
          <Placeholder height={40} />
          <Placeholder height={40} />
          <Placeholder height={40} />
        </Tiles>,
      ),
  },
  {
    label: 'Dividers (when in single column)',
    Example: () =>
      source(
        <Tiles space="medium" columns={1} dividers>
          <Placeholder height={80} />
          <Placeholder height={80} />
          <Placeholder height={80} />
        </Tiles>,
      ),
  },
];
