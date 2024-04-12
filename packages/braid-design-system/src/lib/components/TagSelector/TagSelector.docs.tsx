import React from 'react';
import source from '@braid-design-system/source.macro';
import type { ComponentDocs } from 'site/types';
import { TagSelector } from './TagSelector';

const docs: ComponentDocs = {
  category: 'Content',
  Example: () => source(<TagSelector options={['this', 'that']} />),
  alternatives: [
    {
      name: 'Tag',
      description: '...',
    },
  ],
};

export default docs;
