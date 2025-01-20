import source from '@braid-design-system/source.macro';
import React from 'react';
import type { GalleryComponent } from 'site/types';

import { PasswordField, TextLink } from '../';

export const galleryItems: GalleryComponent = {
  examples: [
    {
      label: 'Standard',
      Example: ({ id, getState, setState }) =>
        source(
          <PasswordField
            label="Label"
            id={id}
            onChange={setState('passwordfield')}
            value={getState('passwordfield')}
          />,
        ),
    },
    {
      label: 'With additional labels',
      Example: ({ id, getState, setState }) =>
        source(
          <PasswordField
            label="Label"
            id={id}
            onChange={setState('passwordfield')}
            value={getState('passwordfield')}
            secondaryLabel="optional"
            tertiaryLabel={<TextLink href="#">Forgot password?</TextLink>}
          />,
        ),
    },
    {
      label: 'With a description',
      Example: ({ id, getState, setState }) =>
        source(
          <PasswordField
            label="Label"
            id={id}
            onChange={setState('passwordfield')}
            value={getState('passwordfield')}
            description="Longer description of this field"
          />,
        ),
    },
    {
      label: 'With a critical message',
      Example: ({ id, getState, setState }) =>
        source(
          <PasswordField
            label="Label"
            id={id}
            onChange={setState('passwordfield')}
            value={getState('passwordfield')}
            tone="critical"
            message="Critical message"
          />,
        ),
    },
    {
      label: 'With a positive message',
      Example: ({ id, getState, setState }) =>
        source(
          <PasswordField
            label="Label"
            id={id}
            onChange={setState('passwordfield')}
            value={getState('passwordfield')}
            tone="positive"
            message="Positive message"
          />,
        ),
    },
    {
      label: 'With a caution message',
      Example: ({ id, getState, setState }) =>
        source(
          <PasswordField
            label="Label"
            id={id}
            onChange={setState('passwordfield')}
            value={getState('passwordfield')}
            tone="caution"
            message="Caution message"
          />,
        ),
    },
    {
      label: 'With a neutral message',
      Example: ({ id, getState, setState }) =>
        source(
          <PasswordField
            label="Label"
            id={id}
            onChange={setState('passwordfield')}
            value={getState('passwordfield')}
            tone="neutral"
            message="Neutral message"
          />,
        ),
    },
    {
      label: 'Disabled field',
      Example: ({ id, getState, setState }) =>
        source(
          <PasswordField
            label="Label"
            id={id}
            onChange={setState('passwordfield')}
            value={getState('passwordfield')}
            disabled={true}
          />,
        ),
    },
  ],
};
