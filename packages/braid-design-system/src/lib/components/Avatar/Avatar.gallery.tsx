import source from '@braid-design-system/source.macro';
import type { GalleryComponent } from 'site/types';

import { Avatar, IconPeople, Inline } from '../';

import { photoPlaceholderUrl as photoUrl } from './photoPlaceholder.css';

export const galleryItems: GalleryComponent = {
  examples: [
    {
      label: 'Initials',
      Example: () => source(<Avatar variant="initials" name="Leia Elise" />),
    },
    {
      label: 'Icon',
      Example: () => source(<Avatar variant="icon" name="Leia Elise" />),
    },
    {
      label: 'Photo',
      Example: () => {
        const { value } = source(
          <Avatar variant="initials" name="Leia Elise" photoUrl={photoUrl} />,
        );

        const { code } = source(
          <Avatar
            variant="initials"
            name="Leia Elise"
            photoUrl="https://example.com/photo.jpg"
          />,
        );

        return { code, value };
      },
    },
    {
      label: 'Sizes',
      Example: () =>
        source(
          <Inline space="small" alignY="center">
            <Avatar variant="initials" name="Leia Elise" size="small" />
            <Avatar variant="initials" name="Leia Elise" size="standard" />
            <Avatar variant="initials" name="Leia Elise" size="large" />
            <Avatar variant="initials" name="Leia Elise" size="xlarge" />
          </Inline>,
        ),
    },
    {
      label: 'Custom icon',
      Example: () => source(<Avatar variant="icon" icon={<IconPeople />} />),
    },
    {
      label: 'Loading',
      Example: () =>
        source(<Avatar variant="initials" name="Leia Elise" loading />),
    },
    {
      label: 'Border',
      Example: () =>
        source(<Avatar variant="initials" name="Leia Elise" border />),
    },
  ],
};
