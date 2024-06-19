import React from 'react';
import type { GalleryComponent } from 'site/types';
import { Text, Toggle, Stack } from '../';
import source from '@braid-design-system/source.macro';

export const galleryItems: GalleryComponent = {
  examples: [
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
      label: 'Toggle Position: "leading" | "trailing"',
      Example: ({ id, getState, toggleState }) =>
        source(
          <Toggle
            togglePosition="trailing"
            label="Trailing toggle"
            id={id}
            on={getState('toggle')}
            onChange={() => toggleState('toggle')}
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
    {
      label: 'Vertical bleed',
      Example: ({ id, getState, toggleState }) =>
        source(
          <Stack space="medium">
            <Text>Text</Text>
            <Text>Text</Text>
            <Toggle
              label="Vertical bleed"
              id={id}
              on={getState('toggle')}
              onChange={() => toggleState('toggle')}
              togglePosition="trailing"
              bleedY
            />
          </Stack>,
        ),
    },
  ],
};
