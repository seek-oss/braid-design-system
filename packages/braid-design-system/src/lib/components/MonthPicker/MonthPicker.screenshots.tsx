import type { ReactNode } from 'react';
import type { ComponentScreenshot } from 'site/types';

import { MonthPicker, Stack } from '../';
import { BackgroundContrastTest } from '../../utils/BackgroundContrastTest';

const Container = ({ children }: { children: ReactNode }) => (
  <div style={{ maxWidth: '300px' }}>{children}</div>
);

export const screenshots: ComponentScreenshot = {
  screenshotWidths: [320],
  examples: [
    {
      label: 'Default',
      Container,
      Example: ({ handler }) => (
        <MonthPicker
          label="Started"
          value={{ month: undefined, year: undefined }}
          onChange={handler}
        />
      ),
    },
    {
      label: 'Selected values',
      Container,
      Example: ({ handler }) => (
        <MonthPicker
          label="Started"
          value={{ month: 12, year: 2018 }}
          onChange={handler}
        />
      ),
    },
    {
      label: 'Critical message',
      Container,
      Example: ({ handler }) => (
        <MonthPicker
          label="Started"
          tone="critical"
          message="This is a critical message."
          value={{ month: 1, year: 2019 }}
          onChange={handler}
        />
      ),
    },
    {
      label: 'Caution message',
      Container,
      Example: ({ handler }) => (
        <MonthPicker
          label="Started"
          tone="caution"
          message="This is a caution message."
          value={{ month: 1, year: 2019 }}
          onChange={handler}
        />
      ),
    },
    {
      label: 'Disabled',
      Container,
      Example: ({ handler }) => (
        <Stack space="gutter">
          <MonthPicker
            label="With value"
            disabled={true}
            value={{ month: 1, year: 2019 }}
            onChange={handler}
          />
          <MonthPicker
            label="No value"
            disabled={true}
            value={{}}
            onChange={handler}
          />
          <MonthPicker
            label="With critical tone"
            disabled={true}
            tone="critical"
            value={{}}
            onChange={handler}
          />
          <MonthPicker
            label="With critical tone and message"
            disabled={true}
            tone="critical"
            message="Message"
            value={{}}
            onChange={handler}
          />
        </Stack>
      ),
    },
    {
      label: 'with a description',
      Container,
      Example: ({ handler }) => (
        <MonthPicker
          label="Started"
          description="Longer description of this field"
          value={{ month: 1, year: 2019 }}
          onChange={handler}
        />
      ),
    },
    {
      label: 'No visual label',
      Container,
      Example: ({ handler }) => (
        <MonthPicker
          aria-label="Started"
          value={{ month: 1, year: 2019 }}
          onChange={handler}
        />
      ),
    },
    {
      label: 'No visual label with a description',
      Container,
      Example: ({ handler }) => (
        <MonthPicker
          aria-label="Started"
          description="Longer description of this field"
          value={{ month: 1, year: 2019 }}
          onChange={handler}
        />
      ),
    },
    {
      label: 'Custom month and year labels',
      Container,
      Example: ({ handler }) => (
        <MonthPicker
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
    {
      label: 'Contrast',
      Container,
      Example: ({ handler }) => (
        <BackgroundContrastTest>
          <MonthPicker
            label="Started"
            value={{ month: undefined, year: undefined }}
            onChange={handler}
          />
        </BackgroundContrastTest>
      ),
    },
  ],
};
