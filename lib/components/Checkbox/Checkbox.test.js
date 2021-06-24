import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import _jsx from '@babel/runtime/helpers/jsx';
import '@testing-library/jest-dom/extend-expect';
import React, { useState } from 'react';
import { render } from '@testing-library/react';
import { BraidTestProvider, Checkbox } from '..';
import userEvent from '@testing-library/user-event';
describe('Checkbox', function () {
  it('associates field with label correctly', function () {
    const _render = render(
        /* #__PURE__*/ _jsx(
          BraidTestProvider,
          {},
          void 0,
          /* #__PURE__*/ _jsx(Checkbox, {
            id: 'field',
            label: 'My field',
            onChange: function onChange() {},
            checked: false,
          }),
        ),
      ),
      getByLabelText = _render.getByLabelText;

    expect(getByLabelText('My field').tagName).toBe('INPUT');
  });
  it('associates field with message correctly', function () {
    const _render2 = render(
        /* #__PURE__*/ _jsx(
          BraidTestProvider,
          {},
          void 0,
          /* #__PURE__*/ _jsx(Checkbox, {
            id: 'field',
            label: 'My field',
            message: 'Required',
            onChange: function onChange() {},
            checked: false,
          }),
        ),
      ),
      getByLabelText = _render2.getByLabelText;

    expect(getByLabelText('My field')).toHaveDescription('Required');
  });
  it('associates field with description correctly', function () {
    const _render3 = render(
        /* #__PURE__*/ _jsx(
          BraidTestProvider,
          {},
          void 0,
          /* #__PURE__*/ _jsx(Checkbox, {
            id: 'field',
            label: 'My field',
            description: 'More detail about field',
            onChange: function onChange() {},
            checked: false,
          }),
        ),
      ),
      getByLabelText = _render3.getByLabelText;

    expect(getByLabelText('My field')).toHaveDescription(
      'More detail about field',
    );
  });
  it('associates field with multiple description elements correctly', function () {
    const _render4 = render(
        /* #__PURE__*/ _jsx(
          BraidTestProvider,
          {},
          void 0,
          /* #__PURE__*/ _jsx(Checkbox, {
            id: 'field',
            label: 'My field',
            message: 'Required',
            description: 'More detail about field',
            onChange: function onChange() {},
            checked: false,
          }),
        ),
      ),
      getByLabelText = _render4.getByLabelText;

    expect(getByLabelText('My field')).toHaveDescription(
      'Required More detail about field',
    );
  });
  it('field is not marked as having a description without a message or description', function () {
    const _render5 = render(
        /* #__PURE__*/ _jsx(
          BraidTestProvider,
          {},
          void 0,
          /* #__PURE__*/ _jsx(Checkbox, {
            id: 'field',
            label: 'My field',
            onChange: function onChange() {},
            checked: false,
          }),
        ),
      ),
      getByLabelText = _render5.getByLabelText;

    expect(
      getByLabelText('My field').getAttribute('aria-describedby'),
    ).toBeNull();
  });
  it('should communicate the checked state to a screen reader', function () {
    const _render6 = render(
        /* #__PURE__*/ _jsx(
          BraidTestProvider,
          {},
          void 0,
          /* #__PURE__*/ _jsx(Checkbox, {
            id: 'field',
            label: 'My field',
            onChange: function onChange() {},
            checked: true,
          }),
        ),
      ),
      getByRole = _render6.getByRole;

    expect(getByRole('checkbox').getAttribute('aria-checked')).toBe('true');
  });
  it('should communicate the unchecked state to a screen reader', function () {
    const _render7 = render(
        /* #__PURE__*/ _jsx(
          BraidTestProvider,
          {},
          void 0,
          /* #__PURE__*/ _jsx(Checkbox, {
            id: 'field',
            label: 'My field',
            onChange: function onChange() {},
            checked: false,
          }),
        ),
      ),
      getByRole = _render7.getByRole;

    expect(getByRole('checkbox').getAttribute('aria-checked')).toBe('false');
  });
  it('should communicate the mixed state to a screen reader', function () {
    const _render8 = render(
        /* #__PURE__*/ _jsx(
          BraidTestProvider,
          {},
          void 0,
          /* #__PURE__*/ _jsx(Checkbox, {
            id: 'field',
            label: 'My field',
            onChange: function onChange() {},
            checked: 'mixed',
          }),
        ),
      ),
      getByRole = _render8.getByRole;

    expect(getByRole('checkbox').getAttribute('aria-checked')).toBe('mixed');
  });
  it('should toggle state correctly when controlled field is initialised to `mixed`', function () {
    const TestCase = function TestCase() {
      const _useState = useState('mixed'),
        _useState2 = _slicedToArray(_useState, 2),
        checked = _useState2[0],
        setChecked = _useState2[1];

      return /* #__PURE__*/ _jsx(
        BraidTestProvider,
        {},
        void 0,
        /* #__PURE__*/ _jsx(Checkbox, {
          id: 'field',
          label: 'My field',
          onChange: function onChange(ev) {
            return setChecked(ev.currentTarget.checked);
          },
          checked,
        }),
      );
    };

    const _render9 = render(/* #__PURE__*/ _jsx(TestCase, {})),
      getByRole = _render9.getByRole;

    const checkbox = getByRole('checkbox');
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
  it('should not toggle state when forced to `mixed`', function () {
    const _render10 = render(
        /* #__PURE__*/ _jsx(
          BraidTestProvider,
          {},
          void 0,
          /* #__PURE__*/ _jsx(Checkbox, {
            id: 'field',
            label: 'My field',
            onChange: function onChange() {},
            checked: 'mixed',
          }),
        ),
      ),
      getByRole = _render10.getByRole;

    const checkbox = getByRole('checkbox');
    expect(checkbox.getAttribute('aria-checked')).toBe('mixed');
    expect(checkbox.indeterminate).toBe(true);
    expect(checkbox.checked).toBe(false);
    userEvent.click(checkbox);
    expect(checkbox.getAttribute('aria-checked')).toBe('mixed');
    expect(checkbox.indeterminate).toBe(true);
    expect(checkbox.checked).toBe(false);
  });
  it('should resolve to `mixed` when mixed checked values are provided and the last is `false`', function () {
    const _render11 = render(
        /* #__PURE__*/ _jsx(
          BraidTestProvider,
          {},
          void 0,
          /* #__PURE__*/ _jsx(Checkbox, {
            id: 'field',
            label: 'My field',
            onChange: function onChange() {},
            checked: [false, true, false],
          }),
        ),
      ),
      getByRole = _render11.getByRole;

    const checkbox = getByRole('checkbox');
    expect(checkbox.getAttribute('aria-checked')).toBe('mixed');
    expect(checkbox.indeterminate).toBe(true);
    expect(checkbox.checked).toBe(false);
  });
  it('should resolve to `mixed` when mixed checked values are provided and the last is `true`', function () {
    const _render12 = render(
        /* #__PURE__*/ _jsx(
          BraidTestProvider,
          {},
          void 0,
          /* #__PURE__*/ _jsx(Checkbox, {
            id: 'field',
            label: 'My field',
            onChange: function onChange() {},
            checked: [false, true, true],
          }),
        ),
      ),
      getByRole = _render12.getByRole;

    const checkbox = getByRole('checkbox');
    expect(checkbox.getAttribute('aria-checked')).toBe('mixed');
    expect(checkbox.indeterminate).toBe(true);
    expect(checkbox.checked).toBe(false);
  });
  it('should resolve to checked when all values provided are `true`', function () {
    const _render13 = render(
        /* #__PURE__*/ _jsx(
          BraidTestProvider,
          {},
          void 0,
          /* #__PURE__*/ _jsx(Checkbox, {
            id: 'field',
            label: 'My field',
            onChange: function onChange() {},
            checked: [true, true, true],
          }),
        ),
      ),
      getByRole = _render13.getByRole;

    const checkbox = getByRole('checkbox');
    expect(checkbox.getAttribute('aria-checked')).toBe('true');
    expect(checkbox.indeterminate).toBe(false);
    expect(checkbox.checked).toBe(true);
  });
  it('should resolve to unchecked when all values provided are `false`', function () {
    const _render14 = render(
        /* #__PURE__*/ _jsx(
          BraidTestProvider,
          {},
          void 0,
          /* #__PURE__*/ _jsx(Checkbox, {
            id: 'field',
            label: 'My field',
            onChange: function onChange() {},
            checked: [false, false, false],
          }),
        ),
      ),
      getByRole = _render14.getByRole;

    const checkbox = getByRole('checkbox');
    expect(checkbox.getAttribute('aria-checked')).toBe('false');
    expect(checkbox.indeterminate).toBe(false);
    expect(checkbox.checked).toBe(false);
  });
  it('should resolve to unchecked when an empty array is provided', function () {
    const _render15 = render(
        /* #__PURE__*/ _jsx(
          BraidTestProvider,
          {},
          void 0,
          /* #__PURE__*/ _jsx(Checkbox, {
            id: 'field',
            label: 'My field',
            onChange: function onChange() {},
            checked: [],
          }),
        ),
      ),
      getByRole = _render15.getByRole;

    const checkbox = getByRole('checkbox');
    expect(checkbox.getAttribute('aria-checked')).toBe('false');
    expect(checkbox.indeterminate).toBe(false);
    expect(checkbox.checked).toBe(false);
  });
});
