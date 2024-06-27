import React from 'react';
import type { GalleryComponent } from 'site/types';
import { Tag, Inline, IconTag } from '../';
import source from '@braid-design-system/source.macro';

export const galleryItems: GalleryComponent = {
  examples: [
    {
      label: 'Standard',
      Example: () => source(<Tag>Tag</Tag>),
    },
    {
      label: 'Small',
      Example: () => source(<Tag size="small">Tag</Tag>),
    },
    {
      label: 'With an icon',
      Example: () => source(<Tag icon={<IconTag />}>Tag</Tag>),
    },
    {
      label: 'Actionable',
      Example: () =>
        source(
          <Inline space="small" alignY="center">
            <Tag addLabel="Add" onAdd={() => {}}>
              Addable
            </Tag>
            <Tag clearLabel="Clear" onClear={() => {}}>
              Clearable
            </Tag>
          </Inline>,
        ),
    },
  ],
};
