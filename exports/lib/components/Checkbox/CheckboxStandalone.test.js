import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import _jsx from '@babel/runtime/helpers/jsx';

let _h;

import '@testing-library/jest-dom/extend-expect';
import React, { useState } from 'react';
import { render } from '@testing-library/react';
import { BraidTestProvider, CheckboxStandalone } from '..';
import userEvent from '@testing-library/user-event';
describe('CheckboxStandalone', function () {
  it('associates field with label correctly', function () {
    const _render = render(
        /* #__PURE__*/ _jsx(
          BraidTestProvider,
          {},
          void 0,
          /* #__PURE__*/ _jsx(CheckboxStandalone, {
            id: 'field',
            'aria-label': 'My field',
            onChange: function onChange() {},
            checked: false,
          }),
        ),
      ),
      getByLabelText = _render.getByLabelText;

    expect(getByLabelText('My field').tagName).toBe('INPUT');
  });
  it('associates field with external label correctly', function () {
    const _render2 = render(
        /* #__PURE__*/ _jsx(
          BraidTestProvider,
          {},
          void 0,
          _h ||
            (_h = /* #__PURE__*/ _jsx(
              'h3',
              {
                id: 'other',
              },
              void 0,
              'Other field',
            )),
          /* #__PURE__*/ _jsx(CheckboxStandalone, {
            id: 'field',
            'aria-labelledby': 'other',
            onChange: function onChange() {},
            checked: false,
          }),
        ),
      ),
      getByLabelText = _render2.getByLabelText;

    expect(getByLabelText('Other field').tagName).toBe('INPUT');
  });
  it('should communicate the checked state to a screen reader', function () {
    const _render3 = render(
        /* #__PURE__*/ _jsx(
          BraidTestProvider,
          {},
          void 0,
          /* #__PURE__*/ _jsx(CheckboxStandalone, {
            id: 'field',
            'aria-label': 'My field',
            onChange: function onChange() {},
            checked: true,
          }),
        ),
      ),
      getByRole = _render3.getByRole;

    expect(getByRole('checkbox').getAttribute('aria-checked')).toBe('true');
  });
  it('should communicate the unchecked state to a screen reader', function () {
    const _render4 = render(
        /* #__PURE__*/ _jsx(
          BraidTestProvider,
          {},
          void 0,
          /* #__PURE__*/ _jsx(CheckboxStandalone, {
            id: 'field',
            'aria-label': 'My field',
            onChange: function onChange() {},
            checked: false,
          }),
        ),
      ),
      getByRole = _render4.getByRole;

    expect(getByRole('checkbox').getAttribute('aria-checked')).toBe('false');
  });
  it('should communicate the mixed state to a screen reader', function () {
    const _render5 = render(
        /* #__PURE__*/ _jsx(
          BraidTestProvider,
          {},
          void 0,
          /* #__PURE__*/ _jsx(CheckboxStandalone, {
            id: 'field',
            'aria-label': 'My field',
            onChange: function onChange() {},
            checked: 'mixed',
          }),
        ),
      ),
      getByRole = _render5.getByRole;

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
        /* #__PURE__*/ _jsx(CheckboxStandalone, {
          id: 'field',
          'aria-label': 'My field',
          onChange: function onChange(ev) {
            return setChecked(ev.currentTarget.checked);
          },
          checked,
        }),
      );
    };

    const _render6 = render(/* #__PURE__*/ _jsx(TestCase, {})),
      getByRole = _render6.getByRole;

    const checkboxStandalone = getByRole('checkbox');
    expect(checkboxStandalone.getAttribute('aria-checked')).toBe('mixed');
    expect(checkboxStandalone.indeterminate).toBe(true);
    expect(checkboxStandalone.checked).toBe(false);
    userEvent.click(checkboxStandalone);
    expect(checkboxStandalone.getAttribute('aria-checked')).toBe('true');
    expect(checkboxStandalone.indeterminate).toBe(false);
    expect(checkboxStandalone.checked).toBe(true);
    userEvent.click(checkboxStandalone);
    expect(checkboxStandalone.getAttribute('aria-checked')).toBe('false');
    expect(checkboxStandalone.indeterminate).toBe(false);
    expect(checkboxStandalone.checked).toBe(false);
  });
  it('should not toggle state when forced to `mixed`', function () {
    const _render7 = render(
        /* #__PURE__*/ _jsx(
          BraidTestProvider,
          {},
          void 0,
          /* #__PURE__*/ _jsx(CheckboxStandalone, {
            id: 'field',
            'aria-label': 'My field',
            onChange: function onChange() {},
            checked: 'mixed',
          }),
        ),
      ),
      getByRole = _render7.getByRole;

    const checkboxStandalone = getByRole('checkbox');
    expect(checkboxStandalone.getAttribute('aria-checked')).toBe('mixed');
    expect(checkboxStandalone.indeterminate).toBe(true);
    expect(checkboxStandalone.checked).toBe(false);
    userEvent.click(checkboxStandalone);
    expect(checkboxStandalone.getAttribute('aria-checked')).toBe('mixed');
    expect(checkboxStandalone.indeterminate).toBe(true);
    expect(checkboxStandalone.checked).toBe(false);
  });
  it('should resolve to `mixed` when mixed checked values are provided and the last is `false`', function () {
    const _render8 = render(
        /* #__PURE__*/ _jsx(
          BraidTestProvider,
          {},
          void 0,
          /* #__PURE__*/ _jsx(CheckboxStandalone, {
            id: 'field',
            'aria-label': 'My field',
            onChange: function onChange() {},
            checked: [false, true, false],
          }),
        ),
      ),
      getByRole = _render8.getByRole;

    const checkboxStandalone = getByRole('checkbox');
    expect(checkboxStandalone.getAttribute('aria-checked')).toBe('mixed');
    expect(checkboxStandalone.indeterminate).toBe(true);
    expect(checkboxStandalone.checked).toBe(false);
  });
  it('should resolve to `mixed` when mixed checked values are provided and the last is `true`', function () {
    const _render9 = render(
        /* #__PURE__*/ _jsx(
          BraidTestProvider,
          {},
          void 0,
          /* #__PURE__*/ _jsx(CheckboxStandalone, {
            id: 'field',
            'aria-label': 'My field',
            onChange: function onChange() {},
            checked: [false, true, true],
          }),
        ),
      ),
      getByRole = _render9.getByRole;

    const checkboxStandalone = getByRole('checkbox');
    expect(checkboxStandalone.getAttribute('aria-checked')).toBe('mixed');
    expect(checkboxStandalone.indeterminate).toBe(true);
    expect(checkboxStandalone.checked).toBe(false);
  });
  it('should resolve to checked when all values provided are `true`', function () {
    const _render10 = render(
        /* #__PURE__*/ _jsx(
          BraidTestProvider,
          {},
          void 0,
          /* #__PURE__*/ _jsx(CheckboxStandalone, {
            id: 'field',
            'aria-label': 'My field',
            onChange: function onChange() {},
            checked: [true, true, true],
          }),
        ),
      ),
      getByRole = _render10.getByRole;

    const checkboxStandalone = getByRole('checkbox');
    expect(checkboxStandalone.getAttribute('aria-checked')).toBe('true');
    expect(checkboxStandalone.indeterminate).toBe(false);
    expect(checkboxStandalone.checked).toBe(true);
  });
  it('should resolve to unchecked when all values provided are `false`', function () {
    const _render11 = render(
        /* #__PURE__*/ _jsx(
          BraidTestProvider,
          {},
          void 0,
          /* #__PURE__*/ _jsx(CheckboxStandalone, {
            id: 'field',
            'aria-label': 'My field',
            onChange: function onChange() {},
            checked: [false, false, false],
          }),
        ),
      ),
      getByRole = _render11.getByRole;

    const checkboxStandalone = getByRole('checkbox');
    expect(checkboxStandalone.getAttribute('aria-checked')).toBe('false');
    expect(checkboxStandalone.indeterminate).toBe(false);
    expect(checkboxStandalone.checked).toBe(false);
  });
  it('should resolve to unchecked when an empty array is provided', function () {
    const _render12 = render(
        /* #__PURE__*/ _jsx(
          BraidTestProvider,
          {},
          void 0,
          /* #__PURE__*/ _jsx(CheckboxStandalone, {
            id: 'field',
            'aria-label': 'My field',
            onChange: function onChange() {},
            checked: [],
          }),
        ),
      ),
      getByRole = _render12.getByRole;

    const checkboxStandalone = getByRole('checkbox');
    expect(checkboxStandalone.getAttribute('aria-checked')).toBe('false');
    expect(checkboxStandalone.indeterminate).toBe(false);
    expect(checkboxStandalone.checked).toBe(false);
  });
});
