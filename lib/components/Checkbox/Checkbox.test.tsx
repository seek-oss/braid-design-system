import '@testing-library/jest-dom/extend-expect';
import React, { ComponentProps, useState } from 'react';
import { render } from '@testing-library/react';
import { BraidTestProvider } from '../../../test';
import { Checkbox } from '..';
import userEvent from '@testing-library/user-event';

describe('Checkbox', () => {
  it('associates field with label correctly', () => {
    const { getByLabelText } = render(
      <BraidTestProvider>
        <Checkbox
          id="field"
          label="My field"
          onChange={() => {}}
          checked={false}
        />
      </BraidTestProvider>,
    );

    expect(getByLabelText('My field').tagName).toBe('INPUT');
  });

  it('associates field with message correctly', () => {
    const { getByLabelText } = render(
      <BraidTestProvider>
        <Checkbox
          id="field"
          label="My field"
          message="Required"
          onChange={() => {}}
          checked={false}
        />
      </BraidTestProvider>,
    );

    expect(getByLabelText('My field')).toHaveAccessibleDescription('Required');
  });

  it('associates field with description correctly', () => {
    const { getByLabelText } = render(
      <BraidTestProvider>
        <Checkbox
          id="field"
          label="My field"
          description="More detail about field"
          onChange={() => {}}
          checked={false}
        />
      </BraidTestProvider>,
    );

    expect(getByLabelText('My field')).toHaveAccessibleDescription(
      'More detail about field',
    );
  });

  it('associates field with multiple description elements correctly', () => {
    const { getByLabelText } = render(
      <BraidTestProvider>
        <Checkbox
          id="field"
          label="My field"
          message="Required"
          description="More detail about field"
          onChange={() => {}}
          checked={false}
        />
      </BraidTestProvider>,
    );

    expect(getByLabelText('My field')).toHaveAccessibleDescription(
      'Required More detail about field',
    );
  });

  it('field is not marked as having a description without a message or description', () => {
    const { getByLabelText } = render(
      <BraidTestProvider>
        <Checkbox
          id="field"
          label="My field"
          onChange={() => {}}
          checked={false}
        />
      </BraidTestProvider>,
    );

    expect(
      getByLabelText('My field').getAttribute('aria-describedby'),
    ).toBeNull();
  });

  it('should communicate the checked state to a screen reader', () => {
    const { getByRole } = render(
      <BraidTestProvider>
        <Checkbox
          id="field"
          label="My field"
          onChange={() => {}}
          checked={true}
        />
      </BraidTestProvider>,
    );

    expect(getByRole('checkbox').getAttribute('aria-checked')).toBe('true');
  });

  it('should communicate the unchecked state to a screen reader', () => {
    const { getByRole } = render(
      <BraidTestProvider>
        <Checkbox
          id="field"
          label="My field"
          onChange={() => {}}
          checked={false}
        />
      </BraidTestProvider>,
    );

    expect(getByRole('checkbox').getAttribute('aria-checked')).toBe('false');
  });

  it('should communicate the mixed state to a screen reader', () => {
    const { getByRole } = render(
      <BraidTestProvider>
        <Checkbox
          id="field"
          label="My field"
          onChange={() => {}}
          checked="mixed"
        />
      </BraidTestProvider>,
    );

    expect(getByRole('checkbox').getAttribute('aria-checked')).toBe('mixed');
  });

  it('should toggle state correctly when controlled field is initialised to `mixed`', () => {
    const TestCase = () => {
      const [checked, setChecked] =
        useState<ComponentProps<typeof Checkbox>['checked']>('mixed');
      return (
        <BraidTestProvider>
          <Checkbox
            id="field"
            label="My field"
            onChange={(ev) => setChecked(ev.currentTarget.checked)}
            checked={checked}
          />
        </BraidTestProvider>
      );
    };
    const { getByRole } = render(<TestCase />);
    const checkbox = getByRole('checkbox') as HTMLInputElement;

    expect(checkbox.getAttribute('aria-checked')).toBe('mixed');
    expect(checkbox.indeterminate).toBe(true);
    expect(checkbox.checked).toBe(false);

    userEvent.click(checkbox);

    expect(checkbox.getAttribute('aria-checked')).toBe('true');
    expect(checkbox.indeterminate).toBe(false);
    expect(checkbox.checked).toBe(true);

    userEvent.click(checkbox);

    expect(checkbox.getAttribute('aria-checked')).toBe('false');
    expect(checkbox.indeterminate).toBe(false);
    expect(checkbox.checked).toBe(false);
  });

  it('should not toggle state when forced to `mixed`', () => {
    const { getByRole } = render(
      <BraidTestProvider>
        <Checkbox
          id="field"
          label="My field"
          onChange={() => {}}
          checked="mixed"
        />
      </BraidTestProvider>,
    );
    const checkbox = getByRole('checkbox') as HTMLInputElement;

    expect(checkbox.getAttribute('aria-checked')).toBe('mixed');
    expect(checkbox.indeterminate).toBe(true);
    expect(checkbox.checked).toBe(false);

    userEvent.click(checkbox);

    expect(checkbox.getAttribute('aria-checked')).toBe('mixed');
    expect(checkbox.indeterminate).toBe(true);
    expect(checkbox.checked).toBe(false);
  });

  it('should resolve to `mixed` when mixed checked values are provided and the last is `false`', () => {
    const { getByRole } = render(
      <BraidTestProvider>
        <Checkbox
          id="field"
          label="My field"
          onChange={() => {}}
          checked={[false, true, false]}
        />
      </BraidTestProvider>,
    );
    const checkbox = getByRole('checkbox') as HTMLInputElement;

    expect(checkbox.getAttribute('aria-checked')).toBe('mixed');
    expect(checkbox.indeterminate).toBe(true);
    expect(checkbox.checked).toBe(false);
  });

  it('should resolve to `mixed` when mixed checked values are provided and the last is `true`', () => {
    const { getByRole } = render(
      <BraidTestProvider>
        <Checkbox
          id="field"
          label="My field"
          onChange={() => {}}
          checked={[false, true, true]}
        />
      </BraidTestProvider>,
    );
    const checkbox = getByRole('checkbox') as HTMLInputElement;

    expect(checkbox.getAttribute('aria-checked')).toBe('mixed');
    expect(checkbox.indeterminate).toBe(true);
    expect(checkbox.checked).toBe(false);
  });

  it('should resolve to checked when all values provided are `true`', () => {
    const { getByRole } = render(
      <BraidTestProvider>
        <Checkbox
          id="field"
          label="My field"
          onChange={() => {}}
          checked={[true, true, true]}
        />
      </BraidTestProvider>,
    );
    const checkbox = getByRole('checkbox') as HTMLInputElement;

    expect(checkbox.getAttribute('aria-checked')).toBe('true');
    expect(checkbox.indeterminate).toBe(false);
    expect(checkbox.checked).toBe(true);
  });

  it('should resolve to unchecked when all values provided are `false`', () => {
    const { getByRole } = render(
      <BraidTestProvider>
        <Checkbox
          id="field"
          label="My field"
          onChange={() => {}}
          checked={[false, false, false]}
        />
      </BraidTestProvider>,
    );
    const checkbox = getByRole('checkbox') as HTMLInputElement;

    expect(checkbox.getAttribute('aria-checked')).toBe('false');
    expect(checkbox.indeterminate).toBe(false);
    expect(checkbox.checked).toBe(false);
  });

  it('should resolve to unchecked when an empty array is provided', () => {
    const { getByRole } = render(
      <BraidTestProvider>
        <Checkbox
          id="field"
          label="My field"
          onChange={() => {}}
          checked={[]}
        />
      </BraidTestProvider>,
    );
    const checkbox = getByRole('checkbox') as HTMLInputElement;

    expect(checkbox.getAttribute('aria-checked')).toBe('false');
    expect(checkbox.indeterminate).toBe(false);
    expect(checkbox.checked).toBe(false);
  });
});
