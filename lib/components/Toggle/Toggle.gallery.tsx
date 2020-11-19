import React from 'react';
import { ComponentExample } from '../../../site/src/types';
import { Toggle } from '../';

const handler = () => {
  /* no op for docs examples */
};

export const galleryItems: ComponentExample[] = [
  {
    label: 'Toggle off',
    Example: ({ id }) => (
      <Toggle on={false} label="Toggled off" id={id} onChange={handler} />
    ),
  },
  {
    label: 'Toggle on',
    Example: ({ id }) => (
      <Toggle on={true} label="Toggled on" id={id} onChange={handler} />
    ),
  },
  {
    label: 'Right aligned',
    Container: ({ children }) => (
      <div style={{ maxWidth: '300px' }}>{children}</div>
    ),
    Example: ({ id }) => (
      <Toggle
        on={true}
        align="right"
        label="Aligned right"
        id={id}
        onChange={handler}
      />
    ),
  },
  {
    label: 'Justified',
    Container: ({ children }) => (
      <div style={{ maxWidth: '300px' }}>{children}</div>
    ),
    Example: ({ id }) => (
      <Toggle
        on={true}
        align="justify"
        label="Justified"
        id={id}
        onChange={handler}
      />
    ),
  },
];
