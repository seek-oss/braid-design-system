import React from 'react';
import type { GalleryComponent } from 'site/types';
import { Tag, Inline, IconTag } from '../';
import source from '@braid-design-system/source.macro';

export const galleryItems: GalleryComponent = {
  examples: [
    {
      label: 'Standard',
      background: 'surface',
      Example: () => source(<Tag>Tag</Tag>),
    },
    {
      label: 'Small',
      background: 'surface',
      Example: () => source(<Tag size="small">Tag</Tag>),
    },
    {
      label: 'With an icon',
      background: 'surface',
      Example: () => source(<Tag icon={<IconTag />}>Tag</Tag>),
    },
    {
      label: 'Actionable',
      background: 'surface',
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
