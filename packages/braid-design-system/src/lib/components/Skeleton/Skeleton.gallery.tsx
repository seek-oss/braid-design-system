import source from '@braid-design-system/source.macro';
import type { GalleryComponent } from 'site/types';

import { Skeleton, Stack } from '../';

export const galleryItems: GalleryComponent = {
  examples: [
    {
      label: 'Text',
      Example: () => source(<Skeleton type="text" />),
    },
    {
      label: 'Text with icon',
      Example: () =>
        source(
          <Stack space="medium">
            <Skeleton type="text" icon />
            <Skeleton type="text" icon="circle" />
          </Stack>,
        ),
    },
    {
      label: 'Heading',
      Example: () => source(<Skeleton type="heading" level="2" />),
    },
    {
      label: 'Button',
      Example: () => source(<Skeleton type="button" width="small" />),
    },
    {
      label: 'Rectangle',
      Example: () => source(<Skeleton type="rectangle" />),
    },
    {
      label: 'Composed region',
      Example: () =>
        source(
          <Stack space="medium">
            <Skeleton type="heading" level="2" width="large" />
            <Stack space="none">
              <Skeleton type="text" width="full" />
              <Skeleton type="text" width="medium" />
            </Stack>
          </Stack>,
        ),
    },
  ],
};
