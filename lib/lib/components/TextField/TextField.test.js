import _jsx from "@babel/runtime/helpers/jsx";

var _span, _span2;

import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render } from '@testing-library/react';
import { BraidTestProvider, TextField } from '..';
describe('TextField', function () {
  it('associates field with label correctly', function () {
    var _render = render( /*#__PURE__*/_jsx(BraidTestProvider, {}, void 0, /*#__PURE__*/_jsx(TextField, {
      id: "field",
      label: "My field",
      value: "",
      onChange: function onChange() {}
    }))),
        getByLabelText = _render.getByLabelText;

    expect(getByLabelText('My field').tagName).toBe('INPUT');
  });
  it('associates field with message correctly', function () {
    var _render2 = render( /*#__PURE__*/_jsx(BraidTestProvider, {}, void 0, /*#__PURE__*/_jsx(TextField, {
      id: "field",
      label: "My field",
      message: "Required",
      value: "",
      onChange: function onChange() {}
    }))),
        getByLabelText = _render2.getByLabelText;

    expect(getByLabelText('My field')).toHaveDescription('Required');
  });
  it('associates field with description correctly', function () {
    var _render3 = render( /*#__PURE__*/_jsx(BraidTestProvider, {}, void 0, /*#__PURE__*/_jsx(TextField, {
      id: "field",
      label: "My field",
      description: "More detail about field",
      value: "",
      onChange: function onChange() {}
    }))),
        getByLabelText = _render3.getByLabelText;

    expect(getByLabelText('My field')).toHaveDescription('More detail about field');
  });
  it('associates field with custom description correctly', function () {
    var _render4 = render( /*#__PURE__*/_jsx(BraidTestProvider, {}, void 0, _span || (_span = /*#__PURE__*/_jsx("span", {
      id: "detail"
    }, void 0, "Custom description")), /*#__PURE__*/_jsx(TextField, {
      id: "field",
      label: "My field",
      "aria-describedby": "detail",
      value: "",
      onChange: function onChange() {}
    }))),
        getByLabelText = _render4.getByLabelText;

    expect(getByLabelText('My field')).toHaveDescription('Custom description');
  });
  it('associates field with multiple description elements correctly', function () {
    var _render5 = render( /*#__PURE__*/_jsx(BraidTestProvider, {}, void 0, _span2 || (_span2 = /*#__PURE__*/_jsx("span", {
      id: "detail"
    }, void 0, "Custom description")), /*#__PURE__*/_jsx(TextField, {
      id: "field",
      label: "My field",
      message: "Required",
      description: "More detail about field",
      "aria-describedby": "detail",
      value: "",
      onChange: function onChange() {}
    }))),
        getByLabelText = _render5.getByLabelText;

    expect(getByLabelText('My field')).toHaveDescription('Custom description Required More detail about field');
  });
  it('field is not marked as having a description without a message or description', function () {
    var _render6 = render( /*#__PURE__*/_jsx(BraidTestProvider, {}, void 0, /*#__PURE__*/_jsx(TextField, {
      id: "field",
      label: "My field",
      value: "",
      onChange: function onChange() {}
    }))),
        getByLabelText = _render6.getByLabelText;

    expect(getByLabelText('My field').getAttribute('aria-describedby')).toBeNull();
  });
});