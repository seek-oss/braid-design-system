import { render, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';

import { Text, TextDropdown } from '..';
import { BraidTestProvider } from '../../../test';

describe('TextDropdown', () => {
  it('should support controlled state', () => {
    const TestCase = () => {
      const [value, setValue] = useState('Two');

      return (
        <BraidTestProvider>
          <Text>
            <TextDropdown
              label="Label"
              value={value}
              onChange={setValue}
              options={['One', 'Two', 'Third']}
            />
          </Text>
        </BraidTestProvider>
      );
    };

    const { getByRole } = render(<TestCase />);
    const dropdown = getByRole('combobox') as HTMLSelectElement;

    expect(dropdown.options[dropdown.selectedIndex].value).toEqual('Two');
    fireEvent.change(dropdown, { target: { selectedIndex: 2 } });
    expect(dropdown.options[dropdown.selectedIndex].value).toEqual('Third');
  });

  it('should not be accessible with tabindex of -1', async () => {
    render(
      <BraidTestProvider>
        <Text>
          <TextDropdown
            label="Label"
            value="One"
            onChange={() => {}}
            options={['One', 'Two', 'Third']}
            tabIndex={-1}
          />
        </Text>
      </BraidTestProvider>,
    );

    expect(document.body).toHaveFocus();

    await userEvent.tab();

    expect(document.body).toHaveFocus();
  });

  it('should be accessible with tabindex of 0', async () => {
    const { getByRole } = render(
      <BraidTestProvider>
        <Text>
          <TextDropdown
            label="Label"
            value="One"
            onChange={() => {}}
            options={['One', 'Two', 'Third']}
            tabIndex={0}
          />
        </Text>
      </BraidTestProvider>,
    );

    expect(document.body).toHaveFocus();

    await userEvent.tab();

    expect(getByRole('combobox')).toHaveFocus();
  });

  it('should be accessible with a tabindex of undefined', async () => {
    const { getByRole } = render(
      <BraidTestProvider>
        <Text>
          <TextDropdown
            label="Label"
            value="One"
            onChange={() => {}}
            options={['One', 'Two', 'Third']}
            tabIndex={undefined}
          />
        </Text>
      </BraidTestProvider>,
    );

    expect(document.body).toHaveFocus();

    await userEvent.tab();

    expect(getByRole('combobox')).toHaveFocus();
  });
});
