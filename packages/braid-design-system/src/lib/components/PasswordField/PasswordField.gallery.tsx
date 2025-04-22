import source from '@braid-design-system/source.macro';
import type { GalleryComponent } from 'site/types';

import { PasswordField, TextLink } from '../';

export const galleryItems: GalleryComponent = {
  examples: [
    {
      label: 'Standard',
      Example: ({ getState, setState }) =>
        source(
          <PasswordField
            label="Label"
            onChange={setState('passwordfield')}
            value={getState('passwordfield')}
          />,
        ),
    },
    {
      label: 'With additional labels',
      Example: ({ getState, setState }) =>
        source(
          <PasswordField
            label="Label"
            onChange={setState('passwordfield')}
            value={getState('passwordfield')}
            secondaryLabel="optional"
            tertiaryLabel={<TextLink href="#">Forgot password?</TextLink>}
          />,
        ),
    },
    {
      label: 'With a description',
      Example: ({ getState, setState }) =>
        source(
          <PasswordField
            label="Label"
            onChange={setState('passwordfield')}
            value={getState('passwordfield')}
            description="Longer description of this field"
          />,
        ),
    },
    {
      label: 'With a critical message',
      Example: ({ getState, setState }) =>
        source(
          <PasswordField
            label="Label"
            onChange={setState('passwordfield')}
            value={getState('passwordfield')}
            tone="critical"
            message="Critical message"
          />,
        ),
    },
    {
      label: 'With a positive message',
      Example: ({ getState, setState }) =>
        source(
          <PasswordField
            label="Label"
            onChange={setState('passwordfield')}
            value={getState('passwordfield')}
            tone="positive"
            message="Positive message"
          />,
        ),
    },
    {
      label: 'With a caution message',
      Example: ({ getState, setState }) =>
        source(
          <PasswordField
            label="Label"
            onChange={setState('passwordfield')}
            value={getState('passwordfield')}
            tone="caution"
            message="Caution message"
          />,
        ),
    },
    {
      label: 'With a neutral message',
      Example: ({ getState, setState }) =>
        source(
          <PasswordField
            label="Label"
            onChange={setState('passwordfield')}
            value={getState('passwordfield')}
            tone="neutral"
            message="Neutral message"
          />,
        ),
    },
    {
      label: 'Disabled field',
      Example: ({ getState, setState }) =>
        source(
          <PasswordField
            label="Label"
            onChange={setState('passwordfield')}
            value={getState('passwordfield')}
            disabled={true}
          />,
        ),
    },
  ],
};
