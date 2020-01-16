import React, { ReactNode } from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { MonthPicker } from './MonthPicker';

const handler = () => {
  /* No-op for docs examples */
};

const Container = ({ children }: { children: ReactNode }) => (
  <div style={{ maxWidth: '300px' }}>{children}</div>
);

const docs: ComponentDocs = {
  category: 'Interaction',
  migrationGuide: true,
  screenshotWidths: [320],
  examples: [
    {
      label: 'Default',
      Container,
      Example: ({ id }) => (
        <MonthPicker
          id={id}
          label="Started"
          value={{ month: undefined, year: undefined }}
          onChange={handler}
        />
      ),
    },
    {
      label: 'Selected values',
      Container,
      Example: ({ id }) => (
        <MonthPicker
          id={id}
          label="Started"
          value={{ month: 12, year: 2018 }}
          onChange={handler}
        />
      ),
    },
    {
      label: 'Critical message',
      Container,
      Example: ({ id }) => (
        <MonthPicker
          id={id}
          label="Started"
          tone="critical"
          message="This is a critical message."
          value={{ month: 1, year: 2019 }}
          onChange={handler}
        />
      ),
    },
  ],
};

export default docs;
