import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, cleanup, getAllByRole } from '@testing-library/react';
import { BraidTestProvider, MonthPicker } from '..';

afterEach(cleanup);

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
});
