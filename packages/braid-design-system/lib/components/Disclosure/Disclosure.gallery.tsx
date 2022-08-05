import React from 'react';
import { ComponentExample } from '../../../../../site/src/types';
import { Disclosure } from '..';
import source from '../../utils/source.macro';
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
