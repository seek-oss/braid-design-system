import React from 'react';
import { ComponentExample } from '../../../site/src/types';
import { Tag } from '../';

export const galleryItems: ComponentExample[] = [
  {
    label: 'Standard Tag',
    background: 'card',
    Example: () => <Tag>Tag</Tag>,
  },
  {
    label: 'Clearable Tag',
    background: 'card',
    Example: ({ handler }) => (
      <Tag onClear={handler} clearLabel="Clear tag">
        Tag
      </Tag>
    ),
  },
];
