import React from 'react';
import { ComponentExample } from '../../../site/src/types';
import { Placeholder } from '../private/Placeholder/Placeholder';
import { ContentBlock } from '../';

export const galleryItems: ComponentExample[] = [
  {
    label: 'Default Content Block',
    Example: () => (
      <ContentBlock>
        <Placeholder height={100} />
      </ContentBlock>
    ),
  },
  {
    label: 'Xsmall Content Block',
    Example: () => (
      <ContentBlock width="xsmall">
        <Placeholder height={100} />
      </ContentBlock>
    ),
  },
  {
    label: 'Small Content Block',
    Example: () => (
      <ContentBlock width="small">
        <Placeholder height={100} />
      </ContentBlock>
    ),
  },
  {
    label: 'Medium Content Block',
    Example: () => (
      <ContentBlock width="medium">
        <Placeholder height={100} />
      </ContentBlock>
    ),
  },
  {
    label: 'Large Content Block',
    Example: () => (
      <ContentBlock width="large">
        <Placeholder height={100} />
      </ContentBlock>
    ),
  },
];
