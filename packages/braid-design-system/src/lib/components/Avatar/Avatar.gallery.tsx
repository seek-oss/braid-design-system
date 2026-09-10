import source from '@braid-design-system/source.macro';
import type { GalleryComponent } from 'site/types';

import { Avatar, Inline } from '../';

import { photoExampleUrl } from './photoPlaceholder.css';

export const galleryItems: GalleryComponent = {
  examples: [
    {
      label: 'Initials',
      Example: () => source(<Avatar name="Leia Organa" />),
    },
    {
      label: 'Empty',
      Example: () => source(<Avatar />),
    },
    {
      label: 'Image',
      Example: () => {
        const { value } = source(
          <Avatar name="Leia Organa" imageUrl={photoExampleUrl} />,
        );

        const { code } = source(
          <Avatar
            name="Leia Organa"
            imageUrl="https://example.com/photo.jpg"
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
            <Avatar name="Leia Organa" size="small" />
            <Avatar name="Leia Organa" size="standard" />
            <Avatar name="Leia Organa" size="large" />
            <Avatar name="Leia Organa" size="xlarge" />
          </Inline>,
        ),
    },
    {
      label: 'Loading',
      Example: () => source(<Avatar name="Leia Organa" loading />),
    },
  ],
};
