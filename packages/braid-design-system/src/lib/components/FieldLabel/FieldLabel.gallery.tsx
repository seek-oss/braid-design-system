import source from '@braid-design-system/source.macro';
import type { GalleryComponent } from 'site/types';

import { FieldLabel, TextLink } from '../';

export const galleryItems: GalleryComponent = {
  examples: [
    {
      label: 'Standard',
      Example: () => source(<FieldLabel htmlFor="example" label="Label" />),
    },
    {
      label: 'With secondary label',
      Example: () =>
        source(
          <FieldLabel
            htmlFor="secondaryExample"
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
            htmlFor="tertiaryExample"
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
            htmlFor="allTypesExample"
            label="Label"
            secondaryLabel="Secondary label"
            tertiaryLabel={<TextLink href="#">Tertiary label</TextLink>}
          />,
        ),
    },
  ],
};
