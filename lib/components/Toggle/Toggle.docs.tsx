import React from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { Toggle } from './Toggle';

const handler = () => {
  /* no op for docs examples */
};

const docs: ComponentDocs = {
  migrationGuide: true,
  examples: [
    {
      label: 'Toggle off',
      render: ({ id }) => (
        <Toggle on={false} label="Toggled off" id={id} onChange={handler} />
      ),
    },
    {
      label: 'Toggle on',
      render: ({ id }) => (
        <Toggle on={true} label="Toggled on" id={id} onChange={handler} />
      ),
    },
    {
      label: 'Right aligned',
      render: ({ id }) => (
        <div style={{ maxWidth: '300px' }}>
          <Toggle
            on={true}
            align="right"
            label="Aligned right"
            id={id}
            onChange={handler}
          />
        </div>
      ),
    },
  ],
};

export default docs;
