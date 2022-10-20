import React from 'react';
import { ComponentExample } from 'braid-site/types';
import { Toggle } from '../';
import source from '@braid-design-system/source.macro';

export const galleryItems: ComponentExample[] = [
  {
    label: 'Standard',
    Example: ({ id, getState, toggleState }) =>
      source(
        <Toggle
          label="Label"
          id={id}
          on={getState('toggle')}
          onChange={() => toggleState('toggle')}
        />,
      ),
  },
  {
    label: 'Small',
    Example: ({ id, getState, toggleState }) =>
      source(
        <Toggle
          label="Label"
          id={id}
          on={getState('toggle')}
          onChange={() => toggleState('toggle')}
          size="small"
        />,
      ),
  },
  {
    label: 'Toggle Alignment: "left" | "justify" | "right"',
    Example: ({ id, getState, toggleState }) =>
      source(
        <Toggle
          align="right"
          label="Right aligned"
          id={id}
          on={getState('toggle')}
          onChange={() => toggleState('toggle')}
        />,
      ),
  },
];
