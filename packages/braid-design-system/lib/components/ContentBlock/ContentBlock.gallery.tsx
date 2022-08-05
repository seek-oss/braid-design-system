import React from 'react';
import { ComponentExample } from '../../../../../site/src/types';
import { Placeholder } from '../private/Placeholder/Placeholder';
import { ContentBlock } from '../';
import source from '../../utils/source.macro';

export const galleryItems: ComponentExample[] = [
  {
    label: 'Default width',
    Example: () =>
      source(
        <ContentBlock>
          <Placeholder height={100} />
        </ContentBlock>,
      ),
  },
  {
    label: 'Xsmall width',
    Example: () =>
      source(
        <ContentBlock width="xsmall">
          <Placeholder height={100} />
        </ContentBlock>,
      ),
  },
  {
    label: 'Small width',
    Example: () =>
      source(
        <ContentBlock width="small">
          <Placeholder height={100} />
        </ContentBlock>,
      ),
  },
  {
    label: 'Medium width',
    Example: () =>
      source(
        <ContentBlock width="medium">
          <Placeholder height={100} />
        </ContentBlock>,
      ),
  },
  {
    label: 'Large width',
    Example: () =>
      source(
        <ContentBlock width="large">
          <Placeholder height={100} />
        </ContentBlock>,
      ),
  },
];
