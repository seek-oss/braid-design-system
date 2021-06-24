import _jsx from "@babel/runtime/helpers/jsx";

var _TextLink;

import React from 'react';
import { IconHelp, MonthPicker, TextLink } from '../';
import source from '../../utils/source.macro';
export var galleryItems = [{
  label: 'Standard',
  Example: function Example(_ref) {
    var id = _ref.id,
        getState = _ref.getState,
        setState = _ref.setState;
    return source( /*#__PURE__*/_jsx(MonthPicker, {
      label: "Label",
      id: id,
      onChange: setState('monthpicker'),
      value: getState('monthpicker')
    }));
  }
}, {
  label: 'With additional labels',
  Example: function Example(_ref2) {
    var id = _ref2.id,
        getState = _ref2.getState,
        setState = _ref2.setState;
    return source( /*#__PURE__*/_jsx(MonthPicker, {
      label: "Label",
      id: id,
      onChange: setState('monthpicker'),
      value: getState('monthpicker'),
      secondaryLabel: "optional",
      tertiaryLabel: _TextLink || (_TextLink = /*#__PURE__*/_jsx(TextLink, {
        href: "#"
      }, void 0, /*#__PURE__*/_jsx(IconHelp, {}), " Help"))
    }));
  }
}, {
  label: 'With a description',
  Example: function Example(_ref3) {
    var id = _ref3.id,
        getState = _ref3.getState,
        setState = _ref3.setState;
    return source( /*#__PURE__*/_jsx(MonthPicker, {
      label: "Label",
      id: id,
      onChange: setState('monthpicker'),
      value: getState('monthpicker'),
      description: "Longer description of this field"
    }));
  }
}, {
  label: 'With a critical message',
  Example: function Example(_ref4) {
    var id = _ref4.id,
        getState = _ref4.getState,
        setState = _ref4.setState;
    return source( /*#__PURE__*/_jsx(MonthPicker, {
      label: "Label",
      id: id,
      onChange: setState('monthpicker'),
      value: getState('monthpicker'),
      tone: "critical",
      message: "Critical message"
    }));
  }
}, {
  label: 'With a positive message',
  Example: function Example(_ref5) {
    var id = _ref5.id,
        getState = _ref5.getState,
        setState = _ref5.setState;
    return source( /*#__PURE__*/_jsx(MonthPicker, {
      label: "Label",
      id: id,
      onChange: setState('monthpicker'),
      value: getState('monthpicker'),
      tone: "positive",
      message: "Positive message"
    }));
  }
}, {
  label: 'With a neutral message',
  Example: function Example(_ref6) {
    var id = _ref6.id,
        getState = _ref6.getState,
        setState = _ref6.setState;
    return source( /*#__PURE__*/_jsx(MonthPicker, {
      label: "Label",
      id: id,
      onChange: setState('monthpicker'),
      value: getState('monthpicker'),
      tone: "neutral",
      message: "Neutral message"
    }));
  }
}, {
  label: 'Disabled field',
  background: 'card',
  Example: function Example(_ref7) {
    var id = _ref7.id,
        getState = _ref7.getState,
        setState = _ref7.setState;
    return source( /*#__PURE__*/_jsx(MonthPicker, {
      label: "Label",
      id: id,
      onChange: setState('monthpicker'),
      value: getState('monthpicker'),
      disabled: true
    }));
  }
}, {
  label: 'Custom months and years',
  Example: function Example(_ref8) {
    var id = _ref8.id,
        getState = _ref8.getState,
        setState = _ref8.setState;
    return source( /*#__PURE__*/_jsx(MonthPicker, {
      id: id,
      label: "Started",
      onChange: setState('monthpicker'),
      value: getState('monthpicker'),
      monthLabel: "MM",
      yearLabel: "YYYY",
      monthNames: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']
    }));
  }
}];