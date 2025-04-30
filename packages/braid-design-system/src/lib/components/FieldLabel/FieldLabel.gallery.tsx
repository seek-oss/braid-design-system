import source from '@braid-design-system/source.macro';
import type { GalleryComponent } from 'site/types';

import { FieldLabel, TextLink } from '../';

export const galleryItems: GalleryComponent = {
  examples: [
    {
      label: 'Standard',
      Example: () => source(<FieldLabel htmlFor={false} label="Label" />),
    },
    {
      label: 'With secondary label',
      Example: () =>
        source(
          <FieldLabel
            htmlFor={false}
            label="Label"
            secondaryLabel="Secondary label"
          />,
        ),
    },
    {
      label: 'With tertiary label',
      Example: () =>
        source(
          <FieldLabel
            htmlFor={false}
            label="Label"
            tertiaryLabel={<TextLink href="#">Tertiary label</TextLink>}
          />,
        ),
    },
    {
      label: 'With all types',
      Example: () =>
        source(
          <FieldLabel
            htmlFor={false}
            label="Label"
            secondaryLabel="Secondary label"
            tertiaryLabel={<TextLink href="#">Tertiary label</TextLink>}
          />,
        ),
    },
  ],
};
