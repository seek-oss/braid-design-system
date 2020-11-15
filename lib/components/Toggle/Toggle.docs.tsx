import React from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { Toggle, Box } from '../';

const handler = () => {
  /* no op for docs examples */
};

const docs: ComponentDocs = {
  category: 'Content',
  migrationGuide: true,
  screenshotWidths: [320],
  examples: [
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
    {
      label:
        'Test: Should have space between the label and the toggle when justified in a flex container',
      docsSite: false,
      gallery: false,
      Container: ({ children }) => (
        <div style={{ maxWidth: '300px' }}>{children}</div>
      ),
      Example: ({ id }) => (
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
  ],
};

export default docs;
