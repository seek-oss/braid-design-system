import React, { ReactNode } from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { MonthPicker } from '../';
import { MonthPicker as PlayroomMonthPicker } from '../../playroom/components';

const handler = () => {
  /* No-op for docs examples */
};

const Container = ({ children }: { children: ReactNode }) => (
  <div style={{ maxWidth: '300px' }}>{children}</div>
);

const docs: ComponentDocs = {
  category: 'Content',
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
    {
      label: 'Custom month and year labels',
      Container,
      Example: ({ id }) => (
        <MonthPicker
          id={id}
          label="Started"
          value={{ month: 7, year: 2020 }}
          onChange={handler}
          monthLabel="MM"
          yearLabel="YYYY"
          monthNames={[
            '01',
            '02',
            '03',
            '04',
            '05',
            '06',
            '07',
            '08',
            '09',
            '10',
            '11',
            '12',
          ]}
        />
      ),
    },
  ],
  snippets: [
    {
      name: 'Standard',
      code: <PlayroomMonthPicker label="Month" />,
    },
    {
      name: 'With error',
      code: (
        <PlayroomMonthPicker label="Month" tone="critical" message="Required" />
      ),
    },
  ],
};

export default docs;
