import React from 'react';
import type { ComponentExample } from 'site/types';
import { Placeholder } from '../private/Placeholder/Placeholder';
import { PageBlock } from '../';
import source from '@braid-design-system/source.macro';

export const galleryItems: ComponentExample[] = [
  {
    label: 'Medium width',
    Example: () =>
      source(
        <PageBlock width="medium">
          <Placeholder height={100} />
        </PageBlock>,
      ),
  },
  {
    label: 'Large width',
    Example: () =>
      source(
        <PageBlock width="large">
          <Placeholder height={100} />
        </PageBlock>,
      ),
  },
];
