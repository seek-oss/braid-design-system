import { render, getAllByRole } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { MonthPicker } from '..';
import { BraidTestProvider } from '../../../test';

describe('MonthPicker (Double dropdown)', () => {
  it('should render years descending by default', () => {
    const onChange = vi.fn();
    const { getByPlaceholderText } = render(
      <BraidTestProvider>
        <MonthPicker
          label="Start"
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
    const onChange = vi.fn();
    const { getByPlaceholderText } = render(
      <BraidTestProvider>
        <MonthPicker
          label="Start"
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
        <MonthPicker label="Start" value={{}} onChange={() => {}} />
      </BraidTestProvider>,
    );

    expect(getByLabelText('Start').tagName).toBe('FIELDSET');
  });
  it('associates fieldset with aria-label correctly', () => {
    const { getByLabelText } = render(
      <BraidTestProvider>
        <MonthPicker aria-label="Start" value={{}} onChange={() => {}} />
      </BraidTestProvider>,
    );

    expect(getByLabelText('Start').tagName).toBe('FIELDSET');
  });
  it('associates fieldset with aria-labelledby correctly', () => {
    const { getByLabelText } = render(
      <BraidTestProvider>
        <div id="fieldLabel">Start</div>
        <MonthPicker
          aria-labelledby="fieldLabel"
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
          label="Start"
          monthLabel="Month"
          value={{}}
          onChange={() => {}}
        />
      </BraidTestProvider>,
    );

    expect(getByLabelText('Month').tagName).toBe('SELECT');
  });

  it('associates year field with label correctly', () => {
    const { getByLabelText } = render(
      <BraidTestProvider>
        <MonthPicker
          label="Start"
          yearLabel="Year"
          value={{}}
          onChange={() => {}}
        />
      </BraidTestProvider>,
    );

    expect(getByLabelText('Year').tagName).toBe('SELECT');
  });

  it('associates month field with message correctly', () => {
    const { getByLabelText } = render(
      <BraidTestProvider>
        <MonthPicker
          label="Start"
          monthLabel="Month"
          message="Required"
          value={{}}
          onChange={() => {}}
        />
      </BraidTestProvider>,
    );

    expect(getByLabelText('Month')).toHaveAccessibleDescription('Required');
  });

  it('associates year field with message correctly', () => {
    const { getByLabelText } = render(
      <BraidTestProvider>
        <MonthPicker
          label="Start"
          yearLabel="Year"
          message="Required"
          value={{}}
          onChange={() => {}}
        />
      </BraidTestProvider>,
    );

    expect(getByLabelText('Year')).toHaveAccessibleDescription('Required');
  });

  it('associates month field with description correctly', () => {
    const { getByLabelText } = render(
      <BraidTestProvider>
        <MonthPicker
          label="Start"
          monthLabel="Month"
          description="More detail about field"
          value={{}}
          onChange={() => {}}
        />
      </BraidTestProvider>,
    );

    expect(getByLabelText('Month')).toHaveAccessibleDescription(
      'More detail about field',
    );
  });

  it('associates year field with description correctly', () => {
    const { getByLabelText } = render(
      <BraidTestProvider>
        <MonthPicker
          label="Start"
          yearLabel="Year"
          description="More detail about field"
          value={{}}
          onChange={() => {}}
        />
      </BraidTestProvider>,
    );

    expect(getByLabelText('Year')).toHaveAccessibleDescription(
      'More detail about field',
    );
  });

  it('associates month field with multiple description elements correctly', () => {
    const { getByLabelText } = render(
      <BraidTestProvider>
        <MonthPicker
          label="Start"
          monthLabel="Month"
          message="Required"
          description="More detail about field"
          value={{}}
          onChange={() => {}}
        />
      </BraidTestProvider>,
    );

    expect(getByLabelText('Month')).toHaveAccessibleDescription(
      'Required More detail about field',
    );
  });

  it('associates year field with multiple description elements correctly', () => {
    const { getByLabelText } = render(
      <BraidTestProvider>
        <MonthPicker
          label="Start"
          yearLabel="Year"
          message="Required"
          description="More detail about field"
          value={{}}
          onChange={() => {}}
        />
      </BraidTestProvider>,
    );

    expect(getByLabelText('Year')).toHaveAccessibleDescription(
      'Required More detail about field',
    );
  });

  it('month field is not marked as having a description without a message or description', () => {
    const { getByLabelText } = render(
      <BraidTestProvider>
        <MonthPicker
          label="Start"
          monthLabel="Month"
          value={{}}
          onChange={() => {}}
        />
      </BraidTestProvider>,
    );

    expect(getByLabelText('Month').getAttribute('aria-describedby')).toBeNull();
  });

  it('year field is not marked as having a description without a message or description', () => {
    const { getByLabelText } = render(
      <BraidTestProvider>
        <MonthPicker
          label="Start"
          yearLabel="Year"
          value={{}}
          onChange={() => {}}
        />
      </BraidTestProvider>,
    );

    expect(getByLabelText('Year').getAttribute('aria-describedby')).toBeNull();
  });

  it('fields should not be accessible with tabindex of -1', async () => {
    render(
      <BraidTestProvider>
        <MonthPicker
          label="Start"
          monthLabel="Month"
          yearLabel="Year"
          value={{}}
          onChange={() => {}}
          tabIndex={-1}
        />
      </BraidTestProvider>,
    );

    expect(document.body).toHaveFocus();

    await userEvent.tab();

    expect(document.body).toHaveFocus();

    await userEvent.tab();

    expect(document.body).toHaveFocus();
  });

  it('fields should be accessible with tabindex of 0', async () => {
    const { getByLabelText } = render(
      <BraidTestProvider>
        <MonthPicker
          label="Start"
          monthLabel="Month"
          yearLabel="Year"
          value={{}}
          onChange={() => {}}
          tabIndex={0}
        />
      </BraidTestProvider>,
    );

    expect(document.body).toHaveFocus();

    await userEvent.tab();

    expect(getByLabelText('Month')).toHaveFocus();

    await userEvent.tab();

    expect(getByLabelText('Year')).toHaveFocus();

    await userEvent.tab();

    expect(document.body).toHaveFocus();
  });

  it('field should be accessible with a tabindex of undefined', async () => {
    const { getByLabelText } = render(
      <BraidTestProvider>
        <MonthPicker
          label="Start"
          monthLabel="Month"
          yearLabel="Year"
          value={{}}
          onChange={() => {}}
          tabIndex={undefined}
        />
      </BraidTestProvider>,
    );

    expect(document.body).toHaveFocus();

    await userEvent.tab();

    expect(getByLabelText('Month')).toHaveFocus();

    await userEvent.tab();

    expect(getByLabelText('Year')).toHaveFocus();

    await userEvent.tab();

    expect(document.body).toHaveFocus();
  });
});
