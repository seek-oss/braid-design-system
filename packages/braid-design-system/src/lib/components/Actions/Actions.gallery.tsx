import React from 'react';
import source from '@braid-design-system/source.macro';
import type { GalleryComponent } from 'site/types';
import { Actions, Button } from '../';

export const galleryItems: GalleryComponent = {
  examples: [
    {
      label: 'Standard size',
      Example: () =>
        source(
          <Actions>
            <Button>Button 1</Button>
            <Button>Button 2</Button>
            <Button variant="transparent">Button 3</Button>
          </Actions>,
        ),
    },
    {
      label: 'Small size',
      Example: () =>
        source(
          <Actions size="small">
            <Button>Button 1</Button>
            <Button>Button 2</Button>
            <Button variant="transparent">Button 3</Button>
          </Actions>,
        ),
    },
  ],
};
