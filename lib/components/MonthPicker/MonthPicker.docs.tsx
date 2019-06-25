import React from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { MonthPicker } from './MonthPicker';

const handler = () => {
  /* No-op for docs examples */
};

const docs: ComponentDocs = {
  migrationGuide: true,
  examples: [
    {
      label: 'Default',
      render: ({ id }) => (
        <div style={{ maxWidth: '300px' }}>
          <MonthPicker
            id={id}
            label="Started"
            value={{ month: undefined, year: undefined }}
            onChange={handler}
          />
        </div>
      ),
    },
    {
      label: 'Selected values',
      render: ({ id }) => (
        <div style={{ maxWidth: '300px' }}>
          <MonthPicker
            id={id}
            label="Started"
            value={{ month: 12, year: 2018 }}
            onChange={handler}
          />
        </div>
      ),
    },
    {
      label: 'Critical message',
      render: ({ id }) => (
        <div style={{ maxWidth: '300px' }}>
          <MonthPicker
            id={id}
            label="Started"
            tone="critical"
            message="This is a critical message."
            value={{ month: 1, year: 2019 }}
            onChange={handler}
          />
        </div>
      ),
    },
  ],
};

export default docs;
