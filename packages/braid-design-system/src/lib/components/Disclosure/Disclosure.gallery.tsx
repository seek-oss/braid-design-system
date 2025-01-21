import source from '@braid-design-system/source.macro';
import type { GalleryComponent } from 'site/types';

import { Disclosure, Stack, Strong, Text } from '..';
import { Placeholder } from '../../playroom/components';

export const galleryItems: GalleryComponent = {
  examples: [
    {
      label: 'Standard',
      Example: ({ id }) =>
        source(
          <Disclosure
            id={id}
            expandLabel="Show content"
            collapseLabel="Hide content"
          >
            <Placeholder height={100} />
          </Disclosure>,
        ),
    },
    {
      label: 'Visual weight',
      Example: ({ id }) =>
        source(
          <Stack space="large">
            <Disclosure
              id={`${id}_1`}
              expandLabel="Regular weight"
              weight="regular"
            >
              <Placeholder height={100} />
            </Disclosure>
            <Disclosure
              id={`${id}_2`}
              expandLabel="Weak weight"
              size="standard"
              weight="weak"
            >
              <Placeholder height={100} />
            </Disclosure>
          </Stack>,
        ),
    },
    {
      label: 'Sizing',
      Example: ({ id, handler }) =>
        source(
          <Stack space="large">
            <Disclosure
              id={`${id}_1`}
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
              id={`${id}_2`}
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
              id={`${id}_3`}
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
              id={`${id}_4`}
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
