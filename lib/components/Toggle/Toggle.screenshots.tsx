import React from 'react';
import { ComponentScreenshot } from '../../../site/src/types';
import { Toggle, Box } from '../';

export const screenshots: ComponentScreenshot = {
  screenshotWidths: [320],
  examples: [
    {
      label: 'Toggle off',
      Example: ({ id, handler }) => (
        <Toggle on={false} label="Toggled off" id={id} onChange={handler} />
      ),
    },
    {
      label: 'Toggle on',
      Example: ({ id, handler }) => (
        <Toggle on={true} label="Toggled on" id={id} onChange={handler} />
      ),
    },
    {
      label: 'Small size',
      Example: ({ id, handler }) => (
        <Toggle
          on={true}
          size="small"
          label="Small"
          id={id}
          onChange={handler}
        />
      ),
    },
    {
      label: 'Right aligned',
      Container: ({ children }) => (
        <div style={{ maxWidth: '300px' }}>{children}</div>
      ),
      Example: ({ id, handler }) => (
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
      Example: ({ id, handler }) => (
        <Toggle
          on={true}
          align="justify"
          label="Justified"
          id={id}
          onChange={handler}
        />
      ),
    },
    {
      label: 'Space between the label and toggle preserved',
      Container: ({ children }) => (
        <div style={{ maxWidth: '300px' }}>{children}</div>
      ),
      Example: ({ id, handler }) => (
        <Box display="flex">
          <Toggle
            on={true}
            align="justify"
            label="Justified"
            id={id}
            onChange={handler}
          />
        </Box>
      ),
    },
    {
      label: 'With a long label',
      Container: ({ children }) => (
        <div style={{ maxWidth: '300px' }}>{children}</div>
      ),
      Example: ({ id, handler }) => (
        <Toggle
          on={true}
          label="The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog."
          id={id}
          onChange={handler}
        />
      ),
    },
  ],
};
