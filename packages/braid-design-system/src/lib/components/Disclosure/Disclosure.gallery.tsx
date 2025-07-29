import source from '@braid-design-system/source.macro';
import type { GalleryComponent } from 'site/types';

import { Disclosure, Stack, Strong, Text } from '..';
import { Placeholder } from '../../playroom/components';

export const galleryItems: GalleryComponent = {
  examples: [
    {
      label: 'Standard',
      Example: () =>
        source(
          <Disclosure expandLabel="Show content" collapseLabel="Hide content">
            <Placeholder height={100} />
          </Disclosure>,
        ),
    },
    {
      label: 'Visual weight',
      Example: () =>
        source(
          <Stack space="large">
            <Disclosure expandLabel="Regular weight" weight="regular">
              <Placeholder height={100} />
            </Disclosure>
            <Disclosure expandLabel="Weak weight" size="standard" weight="weak">
              <Placeholder height={100} />
            </Disclosure>
          </Stack>,
        ),
    },
    {
      label: 'Sizing',
      Example: ({ handler }) =>
        source(
          <Stack space="large">
            <Disclosure
              expandLabel="Large size"
              size="large"
              expanded={true}
              onToggle={handler}
            >
              <Text>
                Defaults to <Strong>large</Strong> text size
              </Text>
            </Disclosure>
            <Disclosure
              expandLabel="Standard size"
              size="standard"
              expanded={true}
              onToggle={handler}
            >
              <Text>
                Defaults to <Strong>standard</Strong> text size
              </Text>
            </Disclosure>
            <Disclosure
              expandLabel="Small size"
              size="small"
              expanded={true}
              onToggle={handler}
            >
              <Text>
                Defaults to <Strong>small</Strong> text size
              </Text>
            </Disclosure>
            <Disclosure
              expandLabel="Xsmall size"
              size="xsmall"
              expanded={true}
              onToggle={handler}
            >
              <Text>
                Defaults to <Strong>xsmall</Strong> text size
              </Text>
            </Disclosure>
          </Stack>,
        ),
    },
  ],
};
