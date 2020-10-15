import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, getAllByRole } from '@testing-library/react';
import { BraidTestProvider, MonthPicker } from '..';

describe('MonthPicker (Double dropdown)', () => {
  it('should render years descending by default', () => {
    const onChange = jest.fn();
    const { getByPlaceholderText } = render(
      <BraidTestProvider>
        <MonthPicker
          id="month-picker"
          value={{}}
          onChange={onChange}
          minYear={1999}
          maxYear={2025}
        />
      </BraidTestProvider>,
    );

    const yearDropdown = getByPlaceholderText('Year');
    const options = getAllByRole(yearDropdown, 'option') as HTMLOptionElement[];

    expect(options).toHaveLength(28); // All unique values plus placeholder option
    expect(options[1].value).toBe('2025');
    expect(options[27].value).toBe('1999');
  });

  it('should render years ascending when requested', () => {
    const onChange = jest.fn();
    const { getByPlaceholderText } = render(
      <BraidTestProvider>
        <MonthPicker
          id="month-picker"
          value={{}}
          onChange={onChange}
          minYear={1999}
          maxYear={2025}
          ascendingYears={true}
        />
      </BraidTestProvider>,
    );

    const yearDropdown = getByPlaceholderText('Year');
    const options = getAllByRole(yearDropdown, 'option') as HTMLOptionElement[];

    expect(options).toHaveLength(28); // All unique values plus placeholder option
    expect(options[1].value).toBe('1999');
    expect(options[27].value).toBe('2025');
  });

  it('associates fieldset with label correctly', () => {
    const { getByLabelText } = render(
      <BraidTestProvider>
        <MonthPicker
          id="month-picker"
          label="Start"
          value={{}}
          onChange={() => {}}
        />
      </BraidTestProvider>,
    );

    expect(getByLabelText('Start').tagName).toBe('FIELDSET');
  });

  it('associates month field with label correctly', () => {
    const { getByLabelText } = render(
      <BraidTestProvider>
        <MonthPicker
          id="month-picker"
          label="Start"
          monthLabel="Month"
          value={{}}
          onChange={() => {}}
        />
      </BraidTestProvider>,
    );

    expect(getByLabelText('Start Month').tagName).toBe('SELECT');
  });

  it('associates year field with label correctly', () => {
    const { getByLabelText } = render(
      <BraidTestProvider>
        <MonthPicker
          id="month-picker"
          label="Start"
          yearLabel="Year"
          value={{}}
          onChange={() => {}}
        />
      </BraidTestProvider>,
    );

    expect(getByLabelText('Start Year').tagName).toBe('SELECT');
  });

  it('associates month field with message correctly', () => {
    const { getByLabelText } = render(
      <BraidTestProvider>
        <MonthPicker
          id="month-picker"
          label="Start"
          monthLabel="Month"
          message="Required"
          value={{}}
          onChange={() => {}}
        />
      </BraidTestProvider>,
    );

    expect(getByLabelText('Start Month')).toHaveDescription('Required');
  });

  it('associates year field with message correctly', () => {
    const { getByLabelText } = render(
      <BraidTestProvider>
        <MonthPicker
          id="month-picker"
          label="Start"
          yearLabel="Year"
          message="Required"
          value={{}}
          onChange={() => {}}
        />
      </BraidTestProvider>,
    );

    expect(getByLabelText('Start Year')).toHaveDescription('Required');
  });

  it('associates month field with description correctly', () => {
    const { getByLabelText } = render(
      <BraidTestProvider>
        <MonthPicker
          id="month-picker"
          label="Start"
          monthLabel="Month"
          description="More detail about field"
          value={{}}
          onChange={() => {}}
        />
      </BraidTestProvider>,
    );

    expect(getByLabelText('Start Month')).toHaveDescription(
      'More detail about field',
    );
  });

  it('associates year field with description correctly', () => {
    const { getByLabelText } = render(
      <BraidTestProvider>
        <MonthPicker
          id="month-picker"
          label="Start"
          yearLabel="Year"
          description="More detail about field"
          value={{}}
          onChange={() => {}}
        />
      </BraidTestProvider>,
    );

    expect(getByLabelText('Start Year')).toHaveDescription(
      'More detail about field',
    );
  });

  it('associates month field with multiple description elements correctly', () => {
    const { getByLabelText } = render(
      <BraidTestProvider>
        <MonthPicker
          id="month-picker"
          label="Start"
          monthLabel="Month"
          message="Required"
          description="More detail about field"
          value={{}}
          onChange={() => {}}
        />
      </BraidTestProvider>,
    );

    expect(getByLabelText('Start Month')).toHaveDescription(
      'Required More detail about field',
    );
  });

  it('associates year field with multiple description elements correctly', () => {
    const { getByLabelText } = render(
      <BraidTestProvider>
        <MonthPicker
          id="month-picker"
          label="Start"
          yearLabel="Year"
          message="Required"
          description="More detail about field"
          value={{}}
          onChange={() => {}}
        />
      </BraidTestProvider>,
    );

    expect(getByLabelText('Start Year')).toHaveDescription(
      'Required More detail about field',
    );
  });

  it('month field is not marked as having a description without a message or description', () => {
    const { getByLabelText } = render(
      <BraidTestProvider>
        <MonthPicker
          id="month-picker"
          label="Start"
          monthLabel="Month"
          value={{}}
          onChange={() => {}}
        />
      </BraidTestProvider>,
    );

    expect(
      getByLabelText('Start Month').getAttribute('aria-describedby'),
    ).toBeNull();
  });

  it('year field is not marked as having a description without a message or description', () => {
    const { getByLabelText } = render(
      <BraidTestProvider>
        <MonthPicker
          id="month-picker"
          label="Start"
          yearLabel="Year"
          value={{}}
          onChange={() => {}}
        />
      </BraidTestProvider>,
    );

    expect(
      getByLabelText('Start Year').getAttribute('aria-describedby'),
    ).toBeNull();
  });
});
