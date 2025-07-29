import source from '@braid-design-system/source.macro';
import type { GalleryComponent } from 'site/types';

import { Toggle } from '../';

export const galleryItems: GalleryComponent = {
  examples: [
    {
      label: 'Standard',
      Example: ({ getState, toggleState }) =>
        source(
          <Toggle
            label="Label"
            on={getState('toggle')}
            onChange={() => toggleState('toggle')}
          />,
        ),
    },
    {
      label: 'Small',
      Example: ({ getState, toggleState }) =>
        source(
          <Toggle
            label="Label"
            on={getState('toggle')}
            onChange={() => toggleState('toggle')}
            size="small"
          />,
        ),
    },
    {
      label: 'Toggle Position: "leading" | "trailing"',
      Example: ({ getState, toggleState }) =>
        source(
          <Toggle
            togglePosition="trailing"
            label="Trailing toggle"
            on={getState('toggle')}
            onChange={() => toggleState('toggle')}
          />,
        ),
    },
    {
      label: 'Toggle Alignment: "left" | "justify" | "right"',
      Example: ({ getState, toggleState }) =>
        source(
          <Toggle
            align="right"
            label="Right aligned"
            on={getState('toggle')}
            onChange={() => toggleState('toggle')}
          />,
        ),
    },
  ],
};
