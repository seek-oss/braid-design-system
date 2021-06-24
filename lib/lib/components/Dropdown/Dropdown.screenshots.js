import _jsx from "@babel/runtime/helpers/jsx";

var _option, _option2, _optgroup, _option3, _IconLocation, _option4, _option5, _option6, _option7, _option8, _option9, _option10, _option11;

import React from 'react';
import { Dropdown, IconLocation } from '../';

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
    label: 'Dropdown with placeholder',
    Container: Container,
    Example: function Example(_ref2) {
      var id = _ref2.id,
          handler = _ref2.handler;
      return /*#__PURE__*/_jsx(Dropdown, {
        label: "Job Title",
        id: id,
        onChange: handler,
        value: "",
        placeholder: "Please select a role title"
      }, void 0, _option || (_option = /*#__PURE__*/_jsx("option", {
        value: "1"
      }, void 0, "Developer")), _option2 || (_option2 = /*#__PURE__*/_jsx("option", {
        value: "2"
      }, void 0, "Designer")));
    }
  }, {
    label: 'Dropdown with options group',
    Container: Container,
    Example: function Example(_ref3) {
      var id = _ref3.id,
          handler = _ref3.handler;
      return /*#__PURE__*/_jsx(Dropdown, {
        label: "Location",
        id: id,
        value: "",
        onChange: handler,
        placeholder: "Please select a location"
      }, void 0, _optgroup || (_optgroup = /*#__PURE__*/_jsx("optgroup", {
        label: "Major Cities"
      }, void 0, /*#__PURE__*/_jsx("option", {
        value: "3004"
      }, void 0, "Melbourne"), /*#__PURE__*/_jsx("option", {
        value: "3002"
      }, void 0, "Sydney"))), _option3 || (_option3 = /*#__PURE__*/_jsx("option", {
        value: "3020"
      }, void 0, "Wonthaggi")));
    }
  }, {
    label: 'Dropdown with icon',
    Container: Container,
    Example: function Example(_ref4) {
      var id = _ref4.id,
          handler = _ref4.handler;
      return /*#__PURE__*/_jsx(Dropdown, {
        label: "Location",
        id: id,
        icon: _IconLocation || (_IconLocation = /*#__PURE__*/_jsx(IconLocation, {})),
        placeholder: "Please select a location",
        value: "",
        onChange: handler
      }, void 0, _option4 || (_option4 = /*#__PURE__*/_jsx("option", {
        value: "3004"
      }, void 0, "Melbourne")), _option5 || (_option5 = /*#__PURE__*/_jsx("option", {
        value: "3002"
      }, void 0, "Sydney")));
    }
  }, {
    label: 'Dropdown without placeholder',
    Container: Container,
    Example: function Example(_ref5) {
      var id = _ref5.id,
          handler = _ref5.handler;
      return /*#__PURE__*/_jsx(Dropdown, {
        label: "Job Title",
        id: id,
        onChange: handler,
        value: ""
      }, void 0, _option6 || (_option6 = /*#__PURE__*/_jsx("option", {
        value: "1"
      }, void 0, "Developer")), _option7 || (_option7 = /*#__PURE__*/_jsx("option", {
        value: "2"
      }, void 0, "Designer")));
    }
  }, {
    label: 'Dropdown in invalid state',
    Container: Container,
    Example: function Example(_ref6) {
      var id = _ref6.id,
          handler = _ref6.handler;
      return /*#__PURE__*/_jsx(Dropdown, {
        label: "Job Title",
        id: id,
        onChange: handler,
        value: "",
        tone: "critical",
        message: "Required field"
      }, void 0, _option8 || (_option8 = /*#__PURE__*/_jsx("option", {
        value: "1"
      }, void 0, "Developer")), _option9 || (_option9 = /*#__PURE__*/_jsx("option", {
        value: "2"
      }, void 0, "Designer")));
    }
  }, {
    label: 'Dropdown on Brand Background',
    background: 'brand',
    Container: Container,
    Example: function Example(_ref7) {
      var id = _ref7.id,
          handler = _ref7.handler;
      return /*#__PURE__*/_jsx(Dropdown, {
        label: "Job Title",
        id: id,
        onChange: handler,
        value: "",
        placeholder: "Please select a role title"
      }, void 0, _option10 || (_option10 = /*#__PURE__*/_jsx("option", {
        value: "1"
      }, void 0, "Developer")), _option11 || (_option11 = /*#__PURE__*/_jsx("option", {
        value: "2"
      }, void 0, "Designer")));
    }
  }]
};