import _jsx from "@babel/runtime/helpers/jsx";
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, getAllByRole } from '@testing-library/react';
import { BraidTestProvider, MonthPicker } from '..';
describe('MonthPicker (Double dropdown)', function () {
  it('should render years descending by default', function () {
    var onChange = jest.fn();

    var _render = render( /*#__PURE__*/_jsx(BraidTestProvider, {}, void 0, /*#__PURE__*/_jsx(MonthPicker, {
      id: "month-picker",
      value: {},
      onChange: onChange,
      minYear: 1999,
      maxYear: 2025
    }))),
        getByPlaceholderText = _render.getByPlaceholderText;

    var yearDropdown = getByPlaceholderText('Year');
    var options = getAllByRole(yearDropdown, 'option');
    expect(options).toHaveLength(28); // All unique values plus placeholder option

    expect(options[1].value).toBe('2025');
    expect(options[27].value).toBe('1999');
  });
  it('should render years ascending when requested', function () {
    var onChange = jest.fn();

    var _render2 = render( /*#__PURE__*/_jsx(BraidTestProvider, {}, void 0, /*#__PURE__*/_jsx(MonthPicker, {
      id: "month-picker",
      value: {},
      onChange: onChange,
      minYear: 1999,
      maxYear: 2025,
      ascendingYears: true
    }))),
        getByPlaceholderText = _render2.getByPlaceholderText;

    var yearDropdown = getByPlaceholderText('Year');
    var options = getAllByRole(yearDropdown, 'option');
    expect(options).toHaveLength(28); // All unique values plus placeholder option

    expect(options[1].value).toBe('1999');
    expect(options[27].value).toBe('2025');
  });
  it('associates fieldset with label correctly', function () {
    var _render3 = render( /*#__PURE__*/_jsx(BraidTestProvider, {}, void 0, /*#__PURE__*/_jsx(MonthPicker, {
      id: "month-picker",
      label: "Start",
      value: {},
      onChange: function onChange() {}
    }))),
        getByLabelText = _render3.getByLabelText;

    expect(getByLabelText('Start').tagName).toBe('FIELDSET');
  });
  it('associates month field with label correctly', function () {
    var _render4 = render( /*#__PURE__*/_jsx(BraidTestProvider, {}, void 0, /*#__PURE__*/_jsx(MonthPicker, {
      id: "month-picker",
      label: "Start",
      monthLabel: "Month",
      value: {},
      onChange: function onChange() {}
    }))),
        getByLabelText = _render4.getByLabelText;

    expect(getByLabelText('Month').tagName).toBe('SELECT');
  });
  it('associates year field with label correctly', function () {
    var _render5 = render( /*#__PURE__*/_jsx(BraidTestProvider, {}, void 0, /*#__PURE__*/_jsx(MonthPicker, {
      id: "month-picker",
      label: "Start",
      yearLabel: "Year",
      value: {},
      onChange: function onChange() {}
    }))),
        getByLabelText = _render5.getByLabelText;

    expect(getByLabelText('Year').tagName).toBe('SELECT');
  });
  it('associates month field with message correctly', function () {
    var _render6 = render( /*#__PURE__*/_jsx(BraidTestProvider, {}, void 0, /*#__PURE__*/_jsx(MonthPicker, {
      id: "month-picker",
      label: "Start",
      monthLabel: "Month",
      message: "Required",
      value: {},
      onChange: function onChange() {}
    }))),
        getByLabelText = _render6.getByLabelText;

    expect(getByLabelText('Month')).toHaveDescription('Required');
  });
  it('associates year field with message correctly', function () {
    var _render7 = render( /*#__PURE__*/_jsx(BraidTestProvider, {}, void 0, /*#__PURE__*/_jsx(MonthPicker, {
      id: "month-picker",
      label: "Start",
      yearLabel: "Year",
      message: "Required",
      value: {},
      onChange: function onChange() {}
    }))),
        getByLabelText = _render7.getByLabelText;

    expect(getByLabelText('Year')).toHaveDescription('Required');
  });
  it('associates month field with description correctly', function () {
    var _render8 = render( /*#__PURE__*/_jsx(BraidTestProvider, {}, void 0, /*#__PURE__*/_jsx(MonthPicker, {
      id: "month-picker",
      label: "Start",
      monthLabel: "Month",
      description: "More detail about field",
      value: {},
      onChange: function onChange() {}
    }))),
        getByLabelText = _render8.getByLabelText;

    expect(getByLabelText('Month')).toHaveDescription('More detail about field');
  });
  it('associates year field with description correctly', function () {
    var _render9 = render( /*#__PURE__*/_jsx(BraidTestProvider, {}, void 0, /*#__PURE__*/_jsx(MonthPicker, {
      id: "month-picker",
      label: "Start",
      yearLabel: "Year",
      description: "More detail about field",
      value: {},
      onChange: function onChange() {}
    }))),
        getByLabelText = _render9.getByLabelText;

    expect(getByLabelText('Year')).toHaveDescription('More detail about field');
  });
  it('associates month field with multiple description elements correctly', function () {
    var _render10 = render( /*#__PURE__*/_jsx(BraidTestProvider, {}, void 0, /*#__PURE__*/_jsx(MonthPicker, {
      id: "month-picker",
      label: "Start",
      monthLabel: "Month",
      message: "Required",
      description: "More detail about field",
      value: {},
      onChange: function onChange() {}
    }))),
        getByLabelText = _render10.getByLabelText;

    expect(getByLabelText('Month')).toHaveDescription('Required More detail about field');
  });
  it('associates year field with multiple description elements correctly', function () {
    var _render11 = render( /*#__PURE__*/_jsx(BraidTestProvider, {}, void 0, /*#__PURE__*/_jsx(MonthPicker, {
      id: "month-picker",
      label: "Start",
      yearLabel: "Year",
      message: "Required",
      description: "More detail about field",
      value: {},
      onChange: function onChange() {}
    }))),
        getByLabelText = _render11.getByLabelText;

    expect(getByLabelText('Year')).toHaveDescription('Required More detail about field');
  });
  it('month field is not marked as having a description without a message or description', function () {
    var _render12 = render( /*#__PURE__*/_jsx(BraidTestProvider, {}, void 0, /*#__PURE__*/_jsx(MonthPicker, {
      id: "month-picker",
      label: "Start",
      monthLabel: "Month",
      value: {},
      onChange: function onChange() {}
    }))),
        getByLabelText = _render12.getByLabelText;

    expect(getByLabelText('Month').getAttribute('aria-describedby')).toBeNull();
  });
  it('year field is not marked as having a description without a message or description', function () {
    var _render13 = render( /*#__PURE__*/_jsx(BraidTestProvider, {}, void 0, /*#__PURE__*/_jsx(MonthPicker, {
      id: "month-picker",
      label: "Start",
      yearLabel: "Year",
      value: {},
      onChange: function onChange() {}
    }))),
        getByLabelText = _render13.getByLabelText;

    expect(getByLabelText('Year').getAttribute('aria-describedby')).toBeNull();
  });
});