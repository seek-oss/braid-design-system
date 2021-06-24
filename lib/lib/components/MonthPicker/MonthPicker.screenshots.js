import _jsx from "@babel/runtime/helpers/jsx";
import React from 'react';
import { MonthPicker } from '../';

var Container = function Container(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/_jsx("div", {
    style: {
      maxWidth: '300px'
    }
  }, void 0, children);
};

Container.displayName = "Container";
export var screenshots = {
  screenshotWidths: [320],
  examples: [{
    label: 'Default',
    Container: Container,
    Example: function Example(_ref2) {
      var id = _ref2.id,
          handler = _ref2.handler;
      return /*#__PURE__*/_jsx(MonthPicker, {
        id: id,
        label: "Started",
        value: {
          month: undefined,
          year: undefined
        },
        onChange: handler
      });
    }
  }, {
    label: 'Selected values',
    Container: Container,
    Example: function Example(_ref3) {
      var id = _ref3.id,
          handler = _ref3.handler;
      return /*#__PURE__*/_jsx(MonthPicker, {
        id: id,
        label: "Started",
        value: {
          month: 12,
          year: 2018
        },
        onChange: handler
      });
    }
  }, {
    label: 'Critical message',
    Container: Container,
    Example: function Example(_ref4) {
      var id = _ref4.id,
          handler = _ref4.handler;
      return /*#__PURE__*/_jsx(MonthPicker, {
        id: id,
        label: "Started",
        tone: "critical",
        message: "This is a critical message.",
        value: {
          month: 1,
          year: 2019
        },
        onChange: handler
      });
    }
  }, {
    label: 'Custom month and year labels',
    Container: Container,
    Example: function Example(_ref5) {
      var id = _ref5.id,
          handler = _ref5.handler;
      return /*#__PURE__*/_jsx(MonthPicker, {
        id: id,
        label: "Started",
        value: {
          month: 7,
          year: 2020
        },
        onChange: handler,
        monthLabel: "MM",
        yearLabel: "YYYY",
        monthNames: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']
      });
    }
  }]
};