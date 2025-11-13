import source from '@braid-design-system/source.macro';
import type { GalleryComponent } from 'site/types';

import { Card, Text, Stack, Tiles } from '../';
import { Placeholder } from '../../playroom/components';

export const galleryItems: GalleryComponent = {
  examples: [
    {
      label: 'Standard',
      Example: () =>
        source(
          <Card>
            <Placeholder height={100} />
          </Card>,
        ),
    },
    {
      label: 'Tones',
      Example: () =>
        source(
          <Tiles space="large" columns={{ mobile: 1, tablet: 2 }}>
            <Stack space="small">
              <Text size="xsmall" tone="secondary">
                PROMOTE
              </Text>
              <Card tone="promote">
                <Placeholder height={100} />
              </Card>
            </Stack>

            <Stack space="small">
              <Text size="xsmall" tone="secondary">
                FORMACCENT
              </Text>
              <Card tone="formAccent">
                <Placeholder height={100} />
              </Card>
            </Stack>
          </Tiles>,
        ),
    },
  ],
};
