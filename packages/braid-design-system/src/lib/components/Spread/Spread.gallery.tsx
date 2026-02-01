import source from '@braid-design-system/source.macro';
import type { GalleryComponent } from 'site/types';

import { Divider, Spread, Stack, Tiles } from '../';
import { Placeholder } from '../../playroom/components';

export const galleryItems: GalleryComponent = {
  examples: [
    {
      label: 'Horizontal direction',
      Example: () =>
        source(
          <Spread space="large">
            <Placeholder height={60} width={50} />
            <Placeholder height={60} width={80} />
          </Spread>,
        ),
    },
    {
      label: 'Vertical direction',
      Example: () =>
        source(
          <Tiles space="large" columns={3}>
            <Spread space="small" direction="vertical">
              <Placeholder height={60} />
              <Placeholder height={30} />
            </Spread>
            <Spread space="small" direction="vertical">
              <Placeholder height={30} />
              <Placeholder height={30} />
            </Spread>
            <Spread space="small" direction="vertical">
              <Placeholder height={90} />
              <Placeholder height={30} />
            </Spread>
          </Tiles>,
        ),
    },
    {
      label: 'Vertical alignment',
      Example: () =>
        source(
          <Stack space="large">
            <Spread space="small" alignY="top">
              <Placeholder height={30} width={80} label="top" />
              <Placeholder height={100} width={50} />
            </Spread>
            <Divider />
            <Spread space="small" alignY="center">
              <Placeholder height={30} width={80} label="center" />
              <Placeholder height={100} width={50} />
            </Spread>
            <Divider />
            <Spread space="small" alignY="bottom">
              <Placeholder height={30} width={80} label="bottom" />
              <Placeholder height={100} width={50} />
            </Spread>
          </Stack>,
        ),
    },
    {
      label: 'Horizontal alignment',
      Example: () =>
        source(
          <Stack space="large">
            <Spread space="small" direction="vertical" align="left">
              <Placeholder height={60} width={80} label="left" />
              <Placeholder height={30} width={50} />
            </Spread>
            <Divider />
            <Spread space="small" direction="vertical" align="center">
              <Placeholder height={30} width={80} label="center" />
              <Placeholder height={30} width={100} />
            </Spread>
            <Divider />
            <Spread space="small" direction="vertical" align="right">
              <Placeholder height={90} width={80} label="right" />
              <Placeholder height={30} width={50} />
            </Spread>
          </Stack>,
        ),
    },
  ],
};
