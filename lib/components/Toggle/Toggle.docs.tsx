import React from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { Toggle } from '../';

const docs: ComponentDocs = {
  category: 'Content',
  migrationGuide: true,
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
  ],
};

export default docs;
