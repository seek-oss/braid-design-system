import source from '@braid-design-system/source.macro';
import type { GalleryComponent } from 'site/types';

import { Avatar, IconPeople, Inline } from '../';

import { photoPlaceholderUrl as photoUrl } from './photoPlaceholder.css';

export const galleryItems: GalleryComponent = {
  examples: [
    {
      label: 'Initials',
      Example: () => source(<Avatar name="Leia Organa" />),
    },
    {
      label: 'Icon',
      Example: () => source(<Avatar variant="icon" name="Leia Organa" />),
    },
    {
      label: 'Photo',
      Example: () => {
        const { value } = source(
          <Avatar name="Leia Organa" photoUrl={photoUrl} />,
        );

        const { code } = source(
          <Avatar
            name="Leia Organa"
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
            <Avatar name="Leia Organa" size="xsmall" />
            <Avatar name="Leia Organa" size="small" />
            <Avatar name="Leia Organa" size="standard" />
            <Avatar name="Leia Organa" size="large" />
            <Avatar name="Leia Organa" size="xlarge" />
          </Inline>,
        ),
    },
    {
      label: 'Custom icon',
      Example: () => source(<Avatar variant="icon" icon={<IconPeople />} />),
    },
    {
      label: 'Loading',
      Example: () => source(<Avatar name="Leia Organa" loading />),
    },
    {
      label: 'Border',
      Example: () => source(<Avatar name="Leia Organa" border />),
    },
  ],
};
