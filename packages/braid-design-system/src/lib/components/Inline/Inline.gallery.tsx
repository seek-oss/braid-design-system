import source from '@braid-design-system/source.macro';
import type { GalleryComponent } from 'site/types';

import { Divider, Inline, Stack } from '../';
import { Placeholder } from '../../playroom/components';

export const galleryItems: GalleryComponent = {
  examples: [
    {
      label: 'Spacing',
      Example: () =>
        source(
          <Inline space="small">
            <Placeholder width={48} height={48} />
            <Placeholder width={48} height={48} />
            <Placeholder width={48} height={48} />
            <Placeholder width={48} height={48} />
            <Placeholder width={48} height={48} />
          </Inline>,
        ),
    },
    {
      label: 'Vertical alignment',
      Example: () =>
        source(
          <Stack space="medium" align="center">
            <Inline space="small" alignY="top">
              <Placeholder width={60} height={20} />
              <Placeholder width={80} height={60} label="top" />
              <Placeholder width={60} height={20} />
            </Inline>
            <Divider />
            <Inline space="small" alignY="center">
              <Placeholder width={60} height={20} />
              <Placeholder width={80} height={60} label="center" />
              <Placeholder width={60} height={20} />
            </Inline>
            <Divider />
            <Inline space="small" alignY="bottom">
              <Placeholder width={60} height={20} />
              <Placeholder width={80} height={60} label="bottom" />
              <Placeholder width={60} height={20} />
            </Inline>
          </Stack>,
        ),
    },
    {
      label: 'Horizontal alignment',
      Example: () =>
        source(
          <Stack space="medium">
            <Inline space="small" align="left">
              <Placeholder width={60} height={50} label="left" />
              <Placeholder width={80} height={50} />
              <Placeholder width={60} height={50} />
            </Inline>
            <Divider />
            <Inline space="small" align="center">
              <Placeholder width={60} height={50} />
              <Placeholder width={80} height={50} label="center" />
              <Placeholder width={60} height={50} />
            </Inline>
            <Divider />
            <Inline space="small" align="right">
              <Placeholder width={60} height={50} />
              <Placeholder width={80} height={50} />
              <Placeholder width={60} height={50} label="right" />
            </Inline>
          </Stack>,
        ),
    },
  ],
};
