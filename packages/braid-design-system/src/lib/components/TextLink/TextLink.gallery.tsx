import source from '@braid-design-system/source.macro';
import type { GalleryComponent } from 'site/types';

import { Text, TextLink } from '../';

export const galleryItems: GalleryComponent = {
  examples: [
    {
      label: 'Standard',
      Example: () =>
        source(
          <Text>
            <TextLink href="#" hitArea="large">
              TextLink
            </TextLink>
          </Text>,
        ),
    },
    {
      label: 'Weak weight',
      Example: () =>
        source(
          <Text>
            This sentence contains a{' '}
            <TextLink href="#" weight="weak">
              weak TextLink
            </TextLink>
            .
          </Text>,
        ),
    },
    {
      label: 'Visited links',
      Example: () =>
        source(
          <Text>
            This sentence contains a{' '}
            <TextLink href="" showVisited>
              visited TextLink.
            </TextLink>
          </Text>,
        ),
    },
  ],
};
