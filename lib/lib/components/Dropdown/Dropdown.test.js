import _jsx from "@babel/runtime/helpers/jsx";

var _option, _option2, _option3, _span, _option4, _span2, _option5, _option6, _option7, _option8, _option9, _option10;

import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render } from '@testing-library/react';
import { BraidTestProvider, Dropdown } from '..';
describe('Dropdown', function () {
  it('associates field with label correctly', function () {
    var _render = render( /*#__PURE__*/_jsx(BraidTestProvider, {}, void 0, /*#__PURE__*/_jsx(Dropdown, {
      id: "field",
      label: "My dropdown",
      value: "",
      onChange: function onChange() {}
    }, void 0, _option || (_option = /*#__PURE__*/_jsx("option", {}, void 0, "1"))))),
        getByLabelText = _render.getByLabelText;

    expect(getByLabelText('My dropdown').tagName).toBe('SELECT');
  });
  it('associates field with message correctly', function () {
    var _render2 = render( /*#__PURE__*/_jsx(BraidTestProvider, {}, void 0, /*#__PURE__*/_jsx(Dropdown, {
      id: "field",
      label: "My dropdown",
      message: "Required",
      value: "",
      onChange: function onChange() {}
    }, void 0, _option2 || (_option2 = /*#__PURE__*/_jsx("option", {}, void 0, "1"))))),
        getByLabelText = _render2.getByLabelText;

    expect(getByLabelText('My dropdown')).toHaveDescription('Required');
  });
  it('associates field with description correctly', function () {
    var _render3 = render( /*#__PURE__*/_jsx(BraidTestProvider, {}, void 0, /*#__PURE__*/_jsx(Dropdown, {
      id: "field",
      label: "My dropdown",
      description: "More detail about field",
      value: "",
      onChange: function onChange() {}
    }, void 0, _option3 || (_option3 = /*#__PURE__*/_jsx("option", {}, void 0, "1"))))),
        getByLabelText = _render3.getByLabelText;

    expect(getByLabelText('My dropdown')).toHaveDescription('More detail about field');
  });
  it('associates field with custom description correctly', function () {
    var _render4 = render( /*#__PURE__*/_jsx(BraidTestProvider, {}, void 0, _span || (_span = /*#__PURE__*/_jsx("span", {
      id: "detail"
    }, void 0, "Custom description")), /*#__PURE__*/_jsx(Dropdown, {
      id: "field",
      label: "My dropdown",
      "aria-describedby": "detail",
      value: "",
      onChange: function onChange() {}
    }, void 0, _option4 || (_option4 = /*#__PURE__*/_jsx("option", {}, void 0, "1"))))),
        getByLabelText = _render4.getByLabelText;

    expect(getByLabelText('My dropdown')).toHaveDescription('Custom description');
  });
  it('associates field with multiple description elements correctly', function () {
    var _render5 = render( /*#__PURE__*/_jsx(BraidTestProvider, {}, void 0, _span2 || (_span2 = /*#__PURE__*/_jsx("span", {
      id: "detail"
    }, void 0, "Custom description")), /*#__PURE__*/_jsx(Dropdown, {
      id: "field",
      label: "My dropdown",
      message: "Required",
      description: "More detail about field",
      "aria-describedby": "detail",
      value: "",
      onChange: function onChange() {}
    }, void 0, _option5 || (_option5 = /*#__PURE__*/_jsx("option", {}, void 0, "1"))))),
        getByLabelText = _render5.getByLabelText;

    expect(getByLabelText('My dropdown')).toHaveDescription('Custom description Required More detail about field');
  });
  it('field is not marked as having a description without a message or description', function () {
    var _render6 = render( /*#__PURE__*/_jsx(BraidTestProvider, {}, void 0, /*#__PURE__*/_jsx(Dropdown, {
      id: "field",
      label: "My dropdown",
      value: "",
      onChange: function onChange() {}
    }, void 0, _option6 || (_option6 = /*#__PURE__*/_jsx("option", {}, void 0, "1"))))),
        getByLabelText = _render6.getByLabelText;

    expect(getByLabelText('My dropdown').getAttribute('aria-describedby')).toBeNull();
  });
  it("field has placeholder option selected when option isn't selected", function () {
    var _render7 = render( /*#__PURE__*/_jsx(BraidTestProvider, {}, void 0, /*#__PURE__*/_jsx(Dropdown, {
      id: "field",
      label: "My dropdown",
      value: "",
      onChange: function onChange() {},
      placeholder: "Placeholder"
    }, void 0, _option7 || (_option7 = /*#__PURE__*/_jsx("option", {}, void 0, "1"))))),
        getByLabelText = _render7.getByLabelText;

    var select = getByLabelText('My dropdown');
    expect(select.selectedIndex).toBe(0);
    expect(select.options.length).toEqual(2);
    expect(select.options[0].text).toEqual('Placeholder');
    expect(select.options[0].value).toEqual('');
    expect(select.options[0].disabled).toEqual(true);
    expect(select.options[1].text).toEqual('1');
  });
  it('field still shows disabled placeholder option when another option is selected', function () {
    var _render8 = render( /*#__PURE__*/_jsx(BraidTestProvider, {}, void 0, /*#__PURE__*/_jsx(Dropdown, {
      id: "field",
      label: "My dropdown",
      value: "1",
      onChange: function onChange() {},
      placeholder: "Placeholder"
    }, void 0, _option8 || (_option8 = /*#__PURE__*/_jsx("option", {}, void 0, "1"))))),
        getByLabelText = _render8.getByLabelText;

    var select = getByLabelText('My dropdown');
    expect(select.selectedIndex).toBe(1);
    expect(select.options.length).toEqual(2);
    expect(select.options[0].text).toEqual('Placeholder');
    expect(select.options[0].value).toEqual('');
    expect(select.options[0].disabled).toEqual(true);
    expect(select.options[1].text).toEqual('1');
  });
  it('field has blank option selected when value is blank', function () {
    var _render9 = render( /*#__PURE__*/_jsx(BraidTestProvider, {}, void 0, /*#__PURE__*/_jsx(Dropdown, {
      id: "field",
      label: "My dropdown",
      value: "",
      onChange: function onChange() {}
    }, void 0, _option9 || (_option9 = /*#__PURE__*/_jsx("option", {}, void 0, "1"))))),
        getByLabelText = _render9.getByLabelText;

    var select = getByLabelText('My dropdown');
    expect(select.selectedIndex).toBe(0);
    expect(select.options.length).toEqual(2);
    expect(select.options[0].text).toEqual('');
    expect(select.options[0].value).toEqual('');
    expect(select.options[0].disabled).toEqual(true);
    expect(select.options[1].text).toEqual('1');
  });
  it('field should be missing blank option when an option is selected', function () {
    var _render10 = render( /*#__PURE__*/_jsx(BraidTestProvider, {}, void 0, /*#__PURE__*/_jsx(Dropdown, {
      id: "field",
      label: "My dropdown",
      value: "1",
      onChange: function onChange() {}
    }, void 0, _option10 || (_option10 = /*#__PURE__*/_jsx("option", {}, void 0, "1"))))),
        getByLabelText = _render10.getByLabelText;

    var select = getByLabelText('My dropdown');
    expect(select.selectedIndex).toBe(0);
    expect(select.options.length).toEqual(1);
    expect(select.options[0].text).toEqual('1');
  });
});