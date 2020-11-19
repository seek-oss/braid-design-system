import React, { useState } from 'react';
import { ComponentExample } from '../../../site/src/types';
import { Disclosure, Text } from '..';

export const galleryItems: ComponentExample[] = [
  {
    label: 'Collapsed Disclosure',
    Example: ({ id }) => (
      <Disclosure
        id={id}
        expandLabel="Show content"
        collapseLabel="Hide content"
      >
        <Text>Content</Text>
      </Disclosure>
    ),
  },
  {
    label: 'Expanded Disclosure',
    Example: ({ id }) => {
      const [expanded, setExpanded] = useState(true);

      return (
        <Disclosure
          id={id}
          expandLabel="Show content"
          collapseLabel="Hide content"
          expanded={expanded}
          onToggle={setExpanded}
        >
          <Text>Content</Text>
        </Disclosure>
      );
    },
  },
];
