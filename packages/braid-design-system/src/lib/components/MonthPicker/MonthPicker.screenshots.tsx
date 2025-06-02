import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { MonthPicker, Stack } from '../';
import { BackgroundContrastTest } from '../../utils/BackgroundContrastTest';

const meta = {
  title: 'Components/MonthPicker',
  component: MonthPicker,
  parameters: {
    screenshotOnlyInWireframe: false,
    chromatic: {
      viewports: [320],
    },
    layout: 'fullscreen',
  },
  argTypes: {
    value: {
      control: 'object',
      description: 'Current month/year value',
    },
    onChange: {
      action: 'changed',
      description: 'Handler called when the value changes',
    },
    minYear: {
      control: 'number',
      description: 'Minimum selectable year',
    },
    maxYear: {
      control: 'number',
      description: 'Maximum selectable year',
    },
    ascendingYears: {
      control: 'boolean',
      description: 'Whether to display years in ascending order',
    },
    monthLabel: {
      control: 'text',
      description: 'Label for the month dropdown',
    },
    yearLabel: {
      control: 'text',
      description: 'Label for the year dropdown',
    },
    tone: {
      control: 'select',
      options: ['neutral', 'critical', 'positive', 'caution'],
      description: 'Visual tone of the field',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the field is disabled',
    },
    label: {
      control: 'text',
      description: 'Text label for the field',
    },
    description: {
      control: 'text',
      description: 'Additional description text',
    },
  },
  args: {
    value: {
      month: undefined,
      year: undefined,
    },
    onChange: (value) => console.log('Changed:', value),
    minYear: new Date().getFullYear() - 100,
    maxYear: new Date().getFullYear(),
    ascendingYears: false,
    monthLabel: 'Month',
    yearLabel: 'Year',
    monthNames: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    disabled: false,
    label: 'Select a date',
  },
} satisfies Meta<typeof MonthPicker>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Default',
  args: {
    label: 'Started',
    value: {
      month: undefined,
      year: undefined,
    },
  },
};

export const Selectedvalues: Story = {
  name: 'Selected values',
  args: {
    label: 'Started',
    value: {
      month: 12,
      year: 2018,
    },
  },
};

export const Criticalmessage: Story = {
  name: 'Critical message',
  args: {
    label: 'Started',
    tone: 'critical',
    message: 'This is a critical message.',
    value: {
      month: 1,
      year: 2019,
    },
  },
};

export const Cautionmessage: Story = {
  name: 'Caution message',
  args: {
    label: 'Started',
    tone: 'caution',
    message: 'This is a caution message.',
    value: {
      month: 1,
      year: 2019,
    },
  },
};

export const Disabled: Story = {
  name: 'Disabled',
  args: {
    label: 'Disabled MonthPicker',
    onChange: () => {},
  },
  render: (args) => (
    <Stack space="gutter">
      <MonthPicker
        label="With value"
        disabled={true}
        value={{
          month: 1,
          year: 2019,
        }}
        onChange={args.onChange}
      />
      <MonthPicker
        label="No value"
        disabled={true}
        value={{}}
        onChange={args.onChange}
      />
      <MonthPicker
        label="With critical tone"
        disabled={true}
        tone="critical"
        value={{}}
        onChange={args.onChange}
      />
      <MonthPicker
        label="With critical tone and message"
        disabled={true}
        tone="critical"
        message="Message"
        value={{}}
        onChange={args.onChange}
      />
    </Stack>
  ),
};

export const withadescription: Story = {
  name: 'with a description',
  args: {
    label: 'Started',
    description: 'Longer description of this field',
    value: {
      month: 1,
      year: 2019,
    },
  },
};

export const Novisuallabel: Story = {
  name: 'No visual label',
  args: {
    label: undefined,
    'aria-label': 'Started',
    value: {
      month: 1,
      year: 2019,
    },
  },
};

export const Novisuallabelwithadescription: Story = {
  name: 'No visual label with a description',
  args: {
    label: undefined,
    'aria-label': 'Started',
    description: 'Longer description of this field',
    value: {
      month: 1,
      year: 2019,
    },
  },
};

export const Custommonthandyearlabels: Story = {
  name: 'Custom month and year labels',
  args: {
    label: 'Started',
    value: {
      month: 7,
      year: 2020,
    },
    monthLabel: 'MM',
    yearLabel: 'YYYY',
    monthNames: [
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
    ],
  },
};

export const Contrast: Story = {
  name: 'Contrast',
  args: {
    label: 'Contrast Example',
    value: {
      month: undefined,
      year: undefined,
    },
    onChange: () => {},
  },
  render: (args) => (
    <BackgroundContrastTest>
      <MonthPicker
        label="Started"
        value={{
          month: undefined,
          year: undefined,
        }}
        onChange={args.onChange}
      />
    </BackgroundContrastTest>
  ),
};
