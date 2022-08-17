import '@testing-library/jest-dom';
import React, { ComponentProps, useState } from 'react';
import { render } from '@testing-library/react';
import { BraidTestProvider } from '../../../test';
import { CheckboxStandalone } from '..';
import userEvent from '@testing-library/user-event';

describe('CheckboxStandalone', () => {
  it('associates field with label correctly', () => {
    const { getByLabelText } = render(
      <BraidTestProvider>
        <CheckboxStandalone
          id="field"
          aria-label="My field"
          onChange={() => {}}
          checked={false}
        />
      </BraidTestProvider>,
    );

    expect(getByLabelText('My field').tagName).toBe('INPUT');
  });

  it('associates field with external label correctly', () => {
    const { getByLabelText } = render(
      <BraidTestProvider>
        <h3 id="other">Other field</h3>
        <CheckboxStandalone
          id="field"
          aria-labelledby="other"
          onChange={() => {}}
          checked={false}
        />
      </BraidTestProvider>,
    );

    expect(getByLabelText('Other field').tagName).toBe('INPUT');
  });

  it('should communicate the checked state to a screen reader', () => {
    const { getByRole } = render(
      <BraidTestProvider>
        <CheckboxStandalone
          id="field"
          aria-label="My field"
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
        <CheckboxStandalone
          id="field"
          aria-label="My field"
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
        <CheckboxStandalone
          id="field"
          aria-label="My field"
          onChange={() => {}}
          checked="mixed"
        />
      </BraidTestProvider>,
    );

    expect(getByRole('checkbox').getAttribute('aria-checked')).toBe('mixed');
  });

  it('should toggle state correctly when controlled field is initialised to `mixed`', async () => {
    const TestCase = () => {
      const [checked, setChecked] =
        useState<ComponentProps<typeof CheckboxStandalone>['checked']>('mixed');
      return (
        <BraidTestProvider>
          <CheckboxStandalone
            id="field"
            aria-label="My field"
            onChange={(ev) => setChecked(ev.currentTarget.checked)}
            checked={checked}
          />
        </BraidTestProvider>
      );
    };
    const { getByRole } = render(<TestCase />);
    const checkboxStandalone = getByRole('checkbox') as HTMLInputElement;

    expect(checkboxStandalone.getAttribute('aria-checked')).toBe('mixed');
    expect(checkboxStandalone.indeterminate).toBe(true);
    expect(checkboxStandalone.checked).toBe(false);

    await userEvent.click(checkboxStandalone);

    expect(checkboxStandalone.getAttribute('aria-checked')).toBe('true');
    expect(checkboxStandalone.indeterminate).toBe(false);
    expect(checkboxStandalone.checked).toBe(true);

    await userEvent.click(checkboxStandalone);

    expect(checkboxStandalone.getAttribute('aria-checked')).toBe('false');
    expect(checkboxStandalone.indeterminate).toBe(false);
    expect(checkboxStandalone.checked).toBe(false);
  });

  it('should not toggle state when forced to `mixed`', async () => {
    const { getByRole } = render(
      <BraidTestProvider>
        <CheckboxStandalone
          id="field"
          aria-label="My field"
          onChange={() => {}}
          checked="mixed"
        />
      </BraidTestProvider>,
    );
    const checkboxStandalone = getByRole('checkbox') as HTMLInputElement;

    expect(checkboxStandalone.getAttribute('aria-checked')).toBe('mixed');
    expect(checkboxStandalone.indeterminate).toBe(true);
    expect(checkboxStandalone.checked).toBe(false);

    await userEvent.click(checkboxStandalone);

    expect(checkboxStandalone.getAttribute('aria-checked')).toBe('mixed');
    expect(checkboxStandalone.indeterminate).toBe(true);
    expect(checkboxStandalone.checked).toBe(false);
  });

  it('should resolve to `mixed` when mixed checked values are provided and the last is `false`', () => {
    const { getByRole } = render(
      <BraidTestProvider>
        <CheckboxStandalone
          id="field"
          aria-label="My field"
          onChange={() => {}}
          checked={[false, true, false]}
        />
      </BraidTestProvider>,
    );
    const checkboxStandalone = getByRole('checkbox') as HTMLInputElement;

    expect(checkboxStandalone.getAttribute('aria-checked')).toBe('mixed');
    expect(checkboxStandalone.indeterminate).toBe(true);
    expect(checkboxStandalone.checked).toBe(false);
  });

  it('should resolve to `mixed` when mixed checked values are provided and the last is `true`', () => {
    const { getByRole } = render(
      <BraidTestProvider>
        <CheckboxStandalone
          id="field"
          aria-label="My field"
          onChange={() => {}}
          checked={[false, true, true]}
        />
      </BraidTestProvider>,
    );
    const checkboxStandalone = getByRole('checkbox') as HTMLInputElement;

    expect(checkboxStandalone.getAttribute('aria-checked')).toBe('mixed');
    expect(checkboxStandalone.indeterminate).toBe(true);
    expect(checkboxStandalone.checked).toBe(false);
  });

  it('should resolve to checked when all values provided are `true`', () => {
    const { getByRole } = render(
      <BraidTestProvider>
        <CheckboxStandalone
          id="field"
          aria-label="My field"
          onChange={() => {}}
          checked={[true, true, true]}
        />
      </BraidTestProvider>,
    );
    const checkboxStandalone = getByRole('checkbox') as HTMLInputElement;

    expect(checkboxStandalone.getAttribute('aria-checked')).toBe('true');
    expect(checkboxStandalone.indeterminate).toBe(false);
    expect(checkboxStandalone.checked).toBe(true);
  });

  it('should resolve to unchecked when all values provided are `false`', () => {
    const { getByRole } = render(
      <BraidTestProvider>
        <CheckboxStandalone
          id="field"
          aria-label="My field"
          onChange={() => {}}
          checked={[false, false, false]}
        />
      </BraidTestProvider>,
    );
    const checkboxStandalone = getByRole('checkbox') as HTMLInputElement;

    expect(checkboxStandalone.getAttribute('aria-checked')).toBe('false');
    expect(checkboxStandalone.indeterminate).toBe(false);
    expect(checkboxStandalone.checked).toBe(false);
  });

  it('should resolve to unchecked when an empty array is provided', () => {
    const { getByRole } = render(
      <BraidTestProvider>
        <CheckboxStandalone
          id="field"
          aria-label="My field"
          onChange={() => {}}
          checked={[]}
        />
      </BraidTestProvider>,
    );
    const checkboxStandalone = getByRole('checkbox') as HTMLInputElement;

    expect(checkboxStandalone.getAttribute('aria-checked')).toBe('false');
    expect(checkboxStandalone.indeterminate).toBe(false);
    expect(checkboxStandalone.checked).toBe(false);
  });
});
