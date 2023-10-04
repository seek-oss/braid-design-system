import React from 'react';
import type { ComponentExample } from 'site/types';
import { Disclosure } from '..';
import source from '@braid-design-system/source.macro';
import { Placeholder } from '../../playroom/components';

export const galleryItems: ComponentExample[] = [
  {
    Example: ({ id }) =>
      source(
        <Disclosure
          id={id}
          expandLabel="Show content"
          collapseLabel="Hide content"
        >
          <Placeholder height={100} />
        </Disclosure>,
      ),
  },
];
