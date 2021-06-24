import _jsx from "@babel/runtime/helpers/jsx";

var _option, _option2, _optgroup, _optgroup2, _TextLink, _option3, _option4, _option5, _option6, _IconLocation, _option7, _option8, _option9, _option10, _option11, _option12, _option13, _option14;

import React from 'react';
import { Dropdown, IconLocation, IconHelp, TextLink } from '../';
import source from '../../utils/source.macro';
export var galleryItems = [{
  label: 'Standard',
  Example: function Example(_ref) {
    var id = _ref.id,
        getState = _ref.getState,
        setState = _ref.setState;
    return source( /*#__PURE__*/_jsx(Dropdown, {
      label: "Label",
      id: id,
      onChange: setState('dropdown'),
      value: getState('dropdown'),
      placeholder: "Please select"
    }, void 0, _option || (_option = /*#__PURE__*/_jsx("option", {}, void 0, "Option 1")), _option2 || (_option2 = /*#__PURE__*/_jsx("option", {}, void 0, "Option 2"))));
  }
}, {
  label: 'With option groups',
  Example: function Example(_ref2) {
    var id = _ref2.id,
        getState = _ref2.getState,
        setState = _ref2.setState;
    return source( /*#__PURE__*/_jsx(Dropdown, {
      label: "Label",
      id: id,
      onChange: setState('dropdown'),
      value: getState('dropdown'),
      placeholder: "Please select"
    }, void 0, _optgroup || (_optgroup = /*#__PURE__*/_jsx("optgroup", {
      label: "Group 1"
    }, void 0, /*#__PURE__*/_jsx("option", {}, void 0, "Option 1"), /*#__PURE__*/_jsx("option", {}, void 0, "Option 2"), /*#__PURE__*/_jsx("option", {}, void 0, "Option 3"))), _optgroup2 || (_optgroup2 = /*#__PURE__*/_jsx("optgroup", {
      label: "Group 2"
    }, void 0, /*#__PURE__*/_jsx("option", {}, void 0, "Option A"), /*#__PURE__*/_jsx("option", {}, void 0, "Option B"), /*#__PURE__*/_jsx("option", {}, void 0, "Option C")))));
  }
}, {
  label: 'With additional labels',
  Example: function Example(_ref3) {
    var id = _ref3.id,
        getState = _ref3.getState,
        setState = _ref3.setState;
    return source( /*#__PURE__*/_jsx(Dropdown, {
      label: "Label",
      id: id,
      onChange: setState('dropdown'),
      value: getState('dropdown'),
      placeholder: "Please select",
      secondaryLabel: "optional",
      tertiaryLabel: _TextLink || (_TextLink = /*#__PURE__*/_jsx(TextLink, {
        href: "#"
      }, void 0, /*#__PURE__*/_jsx(IconHelp, {}), " Help"))
    }, void 0, _option3 || (_option3 = /*#__PURE__*/_jsx("option", {}, void 0, "Option 1")), _option4 || (_option4 = /*#__PURE__*/_jsx("option", {}, void 0, "Option 2"))));
  }
}, {
  label: 'With a description',
  Example: function Example(_ref4) {
    var id = _ref4.id,
        getState = _ref4.getState,
        setState = _ref4.setState;
    return source( /*#__PURE__*/_jsx(Dropdown, {
      label: "Label",
      id: id,
      onChange: setState('dropdown'),
      value: getState('dropdown'),
      placeholder: "Please select",
      description: "Extra information about the field"
    }, void 0, _option5 || (_option5 = /*#__PURE__*/_jsx("option", {}, void 0, "Option 1")), _option6 || (_option6 = /*#__PURE__*/_jsx("option", {}, void 0, "Option 2"))));
  }
}, {
  label: 'With an icon',
  Example: function Example(_ref5) {
    var id = _ref5.id,
        getState = _ref5.getState,
        setState = _ref5.setState;
    return source( /*#__PURE__*/_jsx(Dropdown, {
      label: "Label",
      id: id,
      onChange: setState('dropdown'),
      value: getState('dropdown'),
      placeholder: "Please select",
      icon: _IconLocation || (_IconLocation = /*#__PURE__*/_jsx(IconLocation, {}))
    }, void 0, _option7 || (_option7 = /*#__PURE__*/_jsx("option", {}, void 0, "Option 1")), _option8 || (_option8 = /*#__PURE__*/_jsx("option", {}, void 0, "Option 2"))));
  }
}, {
  label: 'With a critical message',
  Example: function Example(_ref6) {
    var id = _ref6.id,
        getState = _ref6.getState,
        setState = _ref6.setState;
    return source( /*#__PURE__*/_jsx(Dropdown, {
      label: "Label",
      id: id,
      onChange: setState('dropdown'),
      value: getState('dropdown'),
      placeholder: "Please select",
      tone: "critical",
      message: "Critical message"
    }, void 0, _option9 || (_option9 = /*#__PURE__*/_jsx("option", {}, void 0, "Option 1")), _option10 || (_option10 = /*#__PURE__*/_jsx("option", {}, void 0, "Option 2"))));
  }
}, {
  label: 'With a positive message',
  Example: function Example(_ref7) {
    var id = _ref7.id,
        getState = _ref7.getState,
        setState = _ref7.setState;
    return source( /*#__PURE__*/_jsx(Dropdown, {
      label: "Label",
      id: id,
      onChange: setState('dropdown'),
      value: getState('dropdown'),
      placeholder: "Please select",
      tone: "positive",
      message: "Positive message"
    }, void 0, _option11 || (_option11 = /*#__PURE__*/_jsx("option", {}, void 0, "Option 1")), _option12 || (_option12 = /*#__PURE__*/_jsx("option", {}, void 0, "Option 2"))));
  }
}, {
  label: 'Disabled field',
  background: 'card',
  Example: function Example(_ref8) {
    var id = _ref8.id,
        getState = _ref8.getState,
        setState = _ref8.setState;
    return source( /*#__PURE__*/_jsx(Dropdown, {
      label: "Label",
      id: id,
      onChange: setState('dropdown'),
      value: getState('dropdown'),
      disabled: true
    }, void 0, _option13 || (_option13 = /*#__PURE__*/_jsx("option", {}, void 0, "Option 1")), _option14 || (_option14 = /*#__PURE__*/_jsx("option", {}, void 0, "Option 2"))));
  }
}];